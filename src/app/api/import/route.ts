import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export type AIServiceType = 'agnes' | 'deepseek' | 'fallback';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

async function callAgnesAI(systemPrompt: string, userContent: string): Promise<any> {
  const apiKey = process.env.AGNES_API_KEY;
  const apiUrl = process.env.AGNES_API_URL || 'https://api.agnes.chat/v1/chat/completions';

  if (!apiKey || apiKey === 'your-agnes-api-key' || apiKey.length < 20) {
    console.warn('Agnes API key not configured properly');
    throw new Error('Agnes API key not configured');
  }

  console.log('Calling Agnes AI:', apiUrl);
  console.log('Prompt length:', systemPrompt.length, 'Content length:', userContent.length);
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'agnes-2.0-flash',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent },
      ],
      temperature: 0.5,
      max_tokens: 8000,
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Agnes API error:', response.status, errorText);
    throw new Error(`Agnes API request failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '';
  console.log('Agnes AI response received, length:', content.length);
  console.log('Agnes AI response (first 500 chars):', content.slice(0, 500));
  return content;
}

async function callDeepSeekAI(systemPrompt: string, userContent: string): Promise<any> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const apiUrl = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/v1/chat/completions';

  if (!apiKey || apiKey === 'your-deepseek-api-key') {
    throw new Error('DeepSeek API key not configured');
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('DeepSeek API error:', response.status, errorText);
    throw new Error(`DeepSeek API request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

async function analyzeWithAI(content: string, mode: string, aiService: AIServiceType): Promise<any[]> {
  const systemPrompt = `你是一个专业的简历和项目分析助手。严格按照以下JSON格式输出，不要添加任何额外解释或文字。

JSON格式：
{
  "items": [
    {
      "type": "work_experience",
      "title": "公司名称-职位",
      "summary": "工作经历摘要",
      "techStack": ["技术1", "技术2"],
      "highlights": ["职责描述"],
      "date": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "detailed_markdown": "详细工作内容",
      "suggested_modules": ["resume", "timeline"],
      "company": "公司名称"
    },
    {
      "type": "project",
      "title": "项目名称",
      "summary": "项目简介",
      "techStack": ["技术1", "技术2"],
      "highlights": ["亮点1", "成果2"],
      "date": "YYYY-MM-DD",
      "detailed_markdown": "项目详细描述",
      "suggested_modules": ["projects", "timeline"],
      "parentCompany": "所属公司名称"
    }
  ]
}

类型说明：
- work_experience: 工作经历，每个公司一段经历作为一条
- project: 项目，每个独立项目作为一条，必须包含parentCompany字段
- knowledge_link: 技术文章链接
- travel: 旅行记录
- food: 美食体验
- daily: 日常记录
- other: 其他

分析规则：
1. **工作经历拆分**：每个公司/职位作为独立的work_experience条目
2. **项目拆分**：每个独立项目作为独立的project条目，一个工作经历下可以有多个项目
3. **时间识别**：YYYY年MM月、YYYY-MM、YYYY年，提取开始日期和结束日期
4. **技术栈提取**：React, Vue, TypeScript, JavaScript, Node.js, Next.js, Taro, Tailwind CSS, UD Design等
5. **亮点提取**：量化成果、性能提升、用户增长、效率优化等作为highlights
6. **公司关联**：项目的parentCompany字段必须填写所属公司名称，用于建立与工作经历的关联
7. **标题格式**：工作经历标题格式为"公司-职位"，项目标题为项目名称

重要提示：
- 一个工作经历可以对应多个项目
- 项目必须有parentCompany字段指向所属公司
- 不要把多个项目合并成一个条目
- 每个项目必须是独立的条目

只输出JSON！`;

  let resultText = '';
  let usedService = aiService;

  try {
    if (aiService === 'agnes') {
      resultText = await callAgnesAI(systemPrompt, content);
    } else if (aiService === 'deepseek') {
      resultText = await callDeepSeekAI(systemPrompt, content);
    }

    try {
      const parsed = JSON.parse(resultText);
      return parsed.items || [];
    } catch {
      console.error('Failed to parse AI response as JSON');
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error(`${aiService} AI analysis failed, falling back to rule-based:`, error);
    return analyzeContentFallback(content, mode);
  }
}

function extractDates(content: string): {date: string; text: string}[] {
  const datePatterns = [
    /(\d{4})年(\d{1,2})月\s*[-~至到]\s*(\d{4})年(\d{1,2})月/g,
    /(\d{4})年(\d{1,2})月\s*[-~至到]\s*至今/g,
    /(\d{4})年\s*[-~至到]\s*(\d{4})年/g,
    /(\d{4})年(\d{1,2})月/g,
    /(\d{4})年/g,
  ];

  const results: {date: string; text: string}[] = [];
  
  for (const pattern of datePatterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const year = parseInt(match[1]);
      const month = match[2] ? parseInt(match[2]) : 1;
      results.push({
        date: `${year}-${month.toString().padStart(2, '0')}-01`,
        text: match[0],
      });
    }
  }

  return results.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function extractWorkExperiences(content: string): {company: string; role: string; startDate: string; endDate: string; text: string}[] {
  const experiences: {company: string; role: string; startDate: string; endDate: string; text: string}[] = [];
  
  const patterns = [
    /([\u4e00-\u9fa5a-zA-Z\-]+)\s*(\d+年)?\s*(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*/g,
    /(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*\|\s*([^\n]+)/g,
    /(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*([^\n，。；]+)/g,
  ];

  const usedIndices: Set<number> = new Set();

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      if (usedIndices.has(match.index)) continue;
      
      let company = '';
      let role = '';
      let startYear: number;
      let startMonth = 1;
      let endDate = '至今';

      if (match[1] && isNaN(parseInt(match[1]))) {
        company = match[1].trim();
        startYear = parseInt(match[3]);
        startMonth = match[4] ? parseInt(match[4]) : 1;
        if (match[5] !== '至今' && match[5]) {
          const endYear = parseInt(match[5]);
          const endMonth = match[6] ? parseInt(match[6]) : 12;
          endDate = `${endYear}-${endMonth.toString().padStart(2, '0')}-01`;
        }
      } else {
        startYear = parseInt(match[1]);
        startMonth = match[2] ? parseInt(match[2]) : 1;
        if (match[3] !== '至今' && match[3]) {
          const endYear = parseInt(match[3]);
          const endMonth = match[4] ? parseInt(match[4]) : 12;
          endDate = `${endYear}-${endMonth.toString().padStart(2, '0')}-01`;
        }
        const rest = match[match.length - 1]?.trim() || '';
        const parts = rest.split(/[\-\—–]/);
        company = parts[0]?.trim() || '';
        role = parts.slice(1).join('-').trim() || '';
      }

      if (company && company.length >= 2) {
        usedIndices.add(match.index);
        experiences.push({
          company,
          role: role || '前端开发工程师',
          startDate: `${startYear}-${startMonth.toString().padStart(2, '0')}-01`,
          endDate,
          text: match[0],
        });
      }
    }
  }

  experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  
  return experiences;
}

function extractProjects(content: string): {title: string; date: string; text: string}[] {
  const projects: {title: string; date: string; text: string}[] = [];
  
  const allDates = extractDates(content);
  
  const projectPattern = /【([^】]+)】\s*([\s\S]*?)(?=\n【|$)/g;
  let match;
  
  while ((match = projectPattern.exec(content)) !== null) {
    const title = match[1]?.trim() || '';
    const projectContent = match[2]?.trim() || '';
    
    if (title && title.length > 2 && !title.includes('】') && !title.includes('【')) {
      const projectDates = extractDates(projectContent);
      const projectDate = projectDates.length > 0 
        ? projectDates[0].date 
        : (allDates.length > 0 ? allDates[allDates.length - 1].date : new Date().toISOString().split('T')[0]);
      
      projects.push({
        title,
        date: projectDate,
        text: match[0],
      });
    }
  }

  if (projects.length === 0) {
    const numberedPattern = /(\d+)\.\s*([^\n]+)/g;
    while ((match = numberedPattern.exec(content)) !== null) {
      const title = match[2]?.trim() || '';
      if (title && title.length > 3) {
        projects.push({
          title,
          date: allDates.length > 0 ? allDates[allDates.length - 1].date : new Date().toISOString().split('T')[0],
          text: match[0],
        });
      }
    }
  }

  return projects;
}

function extractTechStack(content: string): string[] {
  const techKeywords = [
    'React', 'React Native', 'Next.js', 'TypeScript', 'Vue', 'Vue3', 
    'Node.js', 'Tailwind', 'Tailwind CSS', 'CSS', 'JavaScript', 'Redux', 
    'GraphQL', '前端', '后端', '全栈', 'Python', 'Java', 'Go', 
    'Docker', 'Kubernetes', 'Webpack', 'Vite', 'Taro', 'UD Design',
    'BFF', 'H5', '小程序', 'Web', '性能优化', '工程化', '稳定性'
  ];
  
  const foundTech: string[] = [];
  techKeywords.forEach(kw => {
    if (content.includes(kw)) {
      foundTech.push(kw);
    }
  });
  
  return foundTech.length > 0 ? foundTech : ['React', 'TypeScript'];
}

function extractHighlights(content: string): string[] {
  const patterns = [
    /[-*•●]\s*([^\n]{10,100})/g,
    /完成\s*([^\n，。]{10,80})/g,
    /实现\s*([^\n，。]{10,80})/g,
    /提升\s*([^\n，。]{5,50})/g,
    /优化\s*([^\n，。]{5,50})/g,
  ];
  
  const highlights: string[] = [];
  
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const highlight = match[1]?.trim() || '';
      if (highlight && !highlights.includes(highlight)) {
        highlights.push(highlight);
      }
    }
  }
  
  return highlights.length > 0 ? highlights.slice(0, 6) : ['完成'];
}

function extractWorkExperiencesFromText(content: string): {company: string; role: string; startDate: string; endDate: string; description: string}[] {
  const experiences: {company: string; role: string; startDate: string; endDate: string; description: string}[] = [];
  const seenCompanies = new Set<string>();
  
  const companyPatterns = [
    { company: '自由前端开发者', pattern: /自由前端开发者(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*(.*?)(?=字节跳动|滴滴|叙简|项目经历|教育经历|$)/gs },
    { company: '字节跳动-飞书', pattern: /字节跳动[\-\—–]?飞书[\s\S]*?(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*(.*?)(?=滴滴|叙简|项目经历|教育经历|$)/gs },
    { company: '滴滴出行-橙心优选', pattern: /滴滴出行?[\-\—–]?橙心优选?[\s\S]*?(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*(.*?)(?=字节跳动|叙简|项目经历|教育经历|$)/gs },
    { company: '叙简科技', pattern: /叙简科技[\s\S]*?(\d{4})[\s年\-\/]*(\d{1,2})?[\s月\-\/]*\s*[-~至到]\s*(\d{4}|\s*至今)[\s年\-\/]*(\d{1,2})?[\s月\-\/]*(.*?)(?=字节跳动|滴滴|项目经历|教育经历|$)/gs },
  ];
  
  for (const { company, pattern } of companyPatterns) {
    if (seenCompanies.has(company)) continue;
    
    const match = pattern.exec(content);
    if (!match) continue;
    
    const startYear = parseInt(match[1]);
    const startMonth = match[2] ? parseInt(match[2]) : 1;
    
    let endDate = '至今';
    if (match[3] !== '至今' && match[3]) {
      const endYear = parseInt(match[3]);
      const endMonth = match[4] ? parseInt(match[4]) : 12;
      endDate = `${endYear}-${endMonth.toString().padStart(2, '0')}-01`;
    }
    
    const description = match[5]?.trim() || '';
    
    let role = '前端开发工程师';
    const roleMatch = description.match(/(高级|资深|主程|架构师|工程师|Owner|负责人)/);
    if (roleMatch) {
      role = roleMatch[0];
    }
    
    seenCompanies.add(company);
    experiences.push({
      company,
      role,
      startDate: `${startYear}-${startMonth.toString().padStart(2, '0')}-01`,
      endDate,
      description,
    });
  }
  
  return experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

function extractProjectsFromText(content: string): {title: string; date: string; description: string}[] {
  const projects: {title: string; date: string; description: string}[] = [];
  
  const projectTitles = [
    '飞书汇报2.0重构', '假勤双系统融合', 'NPS用户体验治理', 'JSError稳定性治理',
    '橙心优选订单重构', 'GIS模块重构', '假勤业务系统开发', '业务专项治理',
    '审批-请假控件组', '审批-加班控件组', '字节年度结算', 'mobility专项',
    '性能优化专项', '工程化建设', '控件组迁移', '报表运营平台'
  ];
  
  for (const title of projectTitles) {
    const pattern = new RegExp(`(${title}[^\\d]*?)(\\d{4})?[\\s年\\-\\/]*(.*?)(?=${projectTitles.filter(t => t !== title).join('|')}|$)`, 'gs');
    let match;
    
    while ((match = pattern.exec(content)) !== null) {
      const dateMatch = match[2] ? match[2] : '2023';
      projects.push({
        title: title,
        date: `${dateMatch}-06-01`,
        description: match[3]?.trim() || '',
      });
    }
  }
  
  const numberedPattern = /(\d+)\.\s*([^\n]+)/g;
  let match;
  const seenProjects = new Set(projects.map(p => p.title));
  
  while ((match = numberedPattern.exec(content)) !== null) {
    const title = match[2]?.trim() || '';
    if (title.length > 10 && !seenProjects.has(title)) {
      projects.push({
        title: title,
        date: new Date().toISOString().split('T')[0],
        description: '',
      });
      seenProjects.add(title);
    }
  }
  
  return projects;
}

function analyzeContentFallback(content: string, mode: string) {
  const lowerContent = content.toLowerCase();
  const results: any[] = [];

  const workExperiences = extractWorkExperiencesFromText(content);
  const projects = extractProjectsFromText(content);
  const dates = extractDates(content);
  const techStack = extractTechStack(content);
  const highlights = extractHighlights(content);

  if (workExperiences.length > 0) {
    workExperiences.forEach(exp => {
      const expTechStack = extractTechStack(exp.description || content);
      const expHighlights = extractHighlights(exp.description || content);
      
      results.push({
        type: 'work_experience',
        title: exp.role ? `${exp.company} - ${exp.role}` : exp.company,
        summary: `${exp.company} - ${exp.role || '前端开发工程师'} (${exp.startDate} - ${exp.endDate})`,
        techStack: expTechStack.length > 0 ? expTechStack : techStack,
        highlights: expHighlights.length > 0 ? expHighlights.slice(0, 5) : highlights.slice(0, 5),
        date: exp.startDate,
        detailed_markdown: `## ${exp.company}\n\n**职位**：${exp.role}\n\n**时间**：${exp.startDate} - ${exp.endDate}\n\n**职责描述**：\n${exp.description || '负责前端开发工作'}\n`,
        suggested_modules: ['resume', 'timeline'],
      });
    });
  }

  if (projects.length > 0) {
    projects.forEach((proj) => {
      const projTechStack = extractTechStack(proj.description || content);
      const projHighlights = extractHighlights(proj.description || content);
      
      results.push({
        type: 'project',
        title: proj.title,
        summary: `${proj.title} - 项目描述`,
        techStack: projTechStack.length > 0 ? projTechStack : techStack,
        highlights: projHighlights.length > 0 ? projHighlights.slice(0, 5) : highlights.slice(0, 5),
        date: proj.date,
        detailed_markdown: `## ${proj.title}\n\n**时间**：${proj.date}\n\n**项目描述**：\n${proj.description || content}\n`,
        suggested_modules: ['projects', 'timeline'],
      });
    });
  }

  if (results.length === 0 && dates.length > 0) {
    dates.forEach((dateItem, index) => {
      if (index < 5) {
        results.push({
          type: 'project',
          title: `时间节点 ${index + 1}`,
          summary: dateItem.text,
          techStack: techStack,
          highlights: highlights,
          date: dateItem.date,
          detailed_markdown: `## ${dateItem.text}\n\n${content}\n`,
          suggested_modules: ['timeline'],
        });
      }
    });
  }

  if (results.length === 0) {
    let itemType = 'other';
    if (lowerContent.includes('学习') || lowerContent.includes('文章') || lowerContent.includes('笔记') || lowerContent.includes('知识')) {
      itemType = 'knowledge_link';
    } else if (lowerContent.includes('旅行') || lowerContent.includes('目的地') || lowerContent.includes('游记')) {
      itemType = 'travel';
    } else if (lowerContent.includes('美食') || lowerContent.includes('餐厅') || lowerContent.includes('吃')) {
      itemType = 'food';
    } else if (lowerContent.includes('项目') || lowerContent.includes('开发') || lowerContent.includes('系统')) {
      itemType = 'project';
    } else if (lowerContent.includes('日常') || lowerContent.includes('生活')) {
      itemType = 'daily';
    } else if (lowerContent.includes('公司') || lowerContent.includes('工作') || lowerContent.includes('职位')) {
      itemType = 'work_experience';
    }

    const defaultDate = dates.length > 0 ? dates[0].date : new Date().toISOString().split('T')[0];

    results.push({
      type: itemType,
      title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
      summary: content.slice(0, 100) + (content.length > 100 ? '...' : ''),
      techStack: techStack,
      highlights: highlights,
      date: defaultDate,
      detailed_markdown: `## ${content.slice(0, 30)}\n\n${content}\n`,
      suggested_modules: itemType === 'work_experience' ? ['resume', 'timeline'] : 
                        itemType === 'project' ? ['projects', 'timeline'] : 
                        itemType === 'knowledge_link' ? ['knowledge', 'timeline'] : ['timeline'],
    });
  }

  results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return results;
}

export async function POST(request: Request) {
  try {
    const { content, mode = 'quick', analyzeOnly = false, aiService = 'agnes' } = await request.json();

    console.log('Import request received:', { mode, aiService, contentLength: content?.length });

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const items = await analyzeWithAI(content, mode, aiService as AIServiceType);
    console.log('Analysis completed, items found:', items.length);

    if (analyzeOnly) {
      return NextResponse.json({ success: true, items, usedService: 'agnes' });
    }

    const created: any = {
      experiences: [],
      projects: [],
      timelineItems: [],
      knowledgeArticles: [],
    };

    for (const item of items) {
      if (item.type === 'work_experience') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'work_experience',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            workExp: {
              create: {
                company: item.title.includes('公司') ? item.title : item.summary.split(' - ')[0] || '',
                role: item.title.includes('工程师') || item.title.includes('经理') ? item.title : item.summary.split(' - ')[1]?.split(' (')[0] || '',
                startDate: item.date ? new Date(item.date) : new Date(),
                techStack: JSON.stringify(item.techStack),
              },
            },
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            modules: {
              create: [
                { moduleName: 'resume' },
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.experiences.push(entry);
      }

      if (item.type === 'project') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'project',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            project: {
              create: {
                name: item.title,
                description: item.summary,
                techStack: JSON.stringify(item.techStack),
                highlights: JSON.stringify(item.highlights),
              },
            },
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            modules: {
              create: [
                { moduleName: 'projects' },
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.projects.push(entry);
      }

      if (item.type === 'knowledge_link') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'knowledge_link',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            knowledge: {
              create: {
                url: '#',
                category: '技术',
                tags: JSON.stringify(item.techStack),
                description: item.summary,
              },
            },
            modules: {
              create: [
                { moduleName: 'knowledge' },
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.knowledgeArticles.push(entry);
      }

      if (item.type === 'travel') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'travel',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            travel: {
              create: {
                destination: item.title,
                travelDate: item.date ? new Date(item.date) : undefined,
                tags: JSON.stringify(item.highlights),
              },
            },
            modules: {
              create: [
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.timelineItems.push(entry);
      }

      if (item.type === 'food') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'food',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            lifestyle: {
              create: {
                subType: 'food',
                tags: JSON.stringify([]),
                date: item.date ? new Date(item.date) : undefined,
              },
            },
            modules: {
              create: [
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.timelineItems.push(entry);
      }

      if (item.type === 'daily') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'daily',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            lifestyle: {
              create: {
                subType: 'daily',
                tags: JSON.stringify([]),
                date: item.date ? new Date(item.date) : undefined,
              },
            },
            modules: {
              create: [
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.timelineItems.push(entry);
      }

      if (item.type === 'other') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'other',
            status: 'published',
            title: item.title,
            slug: generateSlug(item.title) + '-' + Date.now().toString(36),
            summary: item.summary,
            contentType: 'markdown',
            occurredAt: item.date ? new Date(item.date) : undefined,
            aiAnalysis: JSON.stringify({ original: content, cleaned: item.detailed_markdown, aiService }),
            textContent: {
              create: {
                content: item.detailed_markdown,
                excerpt: item.summary,
              },
            },
            modules: {
              create: [
                { moduleName: 'timeline' },
              ],
            },
          },
        });
        created.timelineItems.push(entry);
      }
    }

    return NextResponse.json({ success: true, items, created, usedService: 'agnes' });
  } catch (error) {
    console.error('Import error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Failed to import content', 
      details: errorMessage,
      fallbackUsed: false 
    }, { status: 500 });
  }
}