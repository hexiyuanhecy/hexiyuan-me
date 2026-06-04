import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface FAQItem {
  keywords: string[];
  answer: string;
}

const FAQ_RESPONSES: FAQItem[] = [
  { keywords: ['技术栈', '会什么', '技术', '前端', 'React'], answer: '何茜媛精通 React、TypeScript、Taro、Next.js、UD Design 等技术栈，有丰富的企业级前端开发经验。' },
  { keywords: ['工作', '经历', '在哪', '公司', '字节', '滴滴', '飞书'], answer: '何茜媛拥有6年前端开发经验，先后在叙简科技、滴滴出行-橙心优选、字节跳动-飞书工作，现自由职业中。你可以访问 [简历时间轴](/resume) 查看详细经历。' },
  { keywords: ['项目', '做过什么', '作品', '重构'], answer: '主要项目包括：飞书汇报2.0重构、假勤双系统融合、NPS用户体验治理、JSError稳定性治理、橙心优选订单重构、GIS模块重构等。详见 [项目作品集](/projects)。' },
  { keywords: ['简历', 'resume', '工作经历'], answer: '你可以访问 [简历时间轴](/resume) 查看详细的工作经历和技能。' },
  { keywords: ['你好', 'hi', 'hello'], answer: '你好！我是何茜媛的 AI 助手，很高兴为你服务！我可以介绍她的工作经历和项目，也可以回答一些简单的常识问题。' },
  { keywords: ['你是谁', '身份', '名字'], answer: '我是何茜媛的 AI 助手，一个专业的智能对话助手。我可以帮你了解何茜媛的工作经历、项目成果，也能回答一些简单的常识问题。' },
  { keywords: ['学历', '教育', '毕业'], answer: '何茜媛毕业于浙江理工大学数字媒体技术专业，2019年进入互联网行业。' },
  { keywords: ['爱好', '兴趣'], answer: '除了技术，她喜欢旅行、阅读和探索新技术，持续保持技术手感。' },
  { keywords: ['联系方式', '联系'], answer: '你可以通过网站上的联系方式联系她，电话：18177310581，邮箱：hexiyuan123@foxmail.com。' },
  { keywords: ['react hooks', 'hooks'], answer: '何茜媛熟练使用 React Hooks，包括 useState、useEffect、useContext、useReducer 等，擅长自定义 hooks 来复用状态逻辑。' },
  { keywords: ['typescript', 'ts'], answer: 'TypeScript 是她的主力语言，擅长类型安全、泛型、装饰器等高级特性，能有效提升代码质量和开发效率。' },
  { keywords: ['性能优化', '优化', 'TTI', '包体积'], answer: '她有丰富的性能优化经验，实现过IOS端TTI提升43%，包体积缩减1.1MB，Web端热启动TTI优化至1s内。' },
  { keywords: ['NPS', '用户体验', '满意度'], answer: '作为NPS治理专项Owner，她搭建了三级问题打标体系和用户反馈闭环，将系统满意度从87%提升至93%。' },
  { keywords: ['JSError', '稳定性', '治理'], answer: '牵头假勤全链路JS错误治理，建立周巡检制度，整体JS错误量下降80%，方案被兄弟团队复用。' },
  { keywords: ['多端', '小程序', 'H5', 'Web'], answer: '有丰富的多端开发经验，完成过休假、加班控件组从原生小程序到Web、H5的全量迁移重构。' },
  { keywords: ['工程化', 'CI/CD', '发布流程'], answer: '负责假勤前端火车流水线建设，新增灰度看板、包体积检测、自动化测试等卡点，实现自动化平稳发布。' },
];

async function callAgnesAI(prompt: string): Promise<string> {
  const apiKey = process.env.AGNES_API_KEY;
  const apiUrl = process.env.AGNES_API_URL || 'https://apihub.agnes-ai.com/v1/chat/completions';

  if (!apiKey || apiKey === 'your-agnes-api-key') {
    throw new Error('Agnes API key not configured');
  }

  const systemPrompt = `你是何茜媛的AI助手，一个专业的智能对话助手。

【角色定位】
- 主要职责：介绍何茜媛的个人信息、工作经历、项目成果
- 辅助能力：回答简单的常识问题、提供技术咨询建议

【何茜媛核心背景】
- 6年前端开发经验（2019.07-2025.05）
- 工作经历：叙简科技 → 滴滴出行-橙心优选 → 字节跳动-飞书 → 自由职业
- 核心技能：React、TypeScript、Taro、Next.js、性能优化、工程化、线上稳定性治理

【主要工作成就】
1. 飞书汇报2.0重构：小程序转Web，IOS端TTI提升43%，包体积缩减1.1MB
2. 假勤双系统融合：标准版与企业版统一，控件组多端迁移，页面渲染性能提升70%
3. NPS用户体验治理：满意度从87%提升至93%，搭建三级问题打标体系
4. JSError线上稳定性治理：错误量下降80%，方案被兄弟团队复用
5. 橙心优选订单重构：核心页面TTI从1909ms降至855ms，人效提升50%
6. GIS模块重构：基于React+PostMessage重构，覆盖6+应急项目

【网站页面链接】
- [简历时间轴](/resume) - 工作经历、技能、教育背景
- [项目作品集](/projects) - 个人项目详情
- [知识库](/knowledge) - 技术文章和笔记
- [时间轴](/timeline) - 成长历程

【回答规则】
1. 如果问题涉及何茜媛的个人信息、工作经历、项目等，优先使用提供的背景信息回答，并提供相关页面链接
2. 如果问题是简单常识（如天气、日期、科普知识、生活常识等），可以直接回答
3. 如果问题是技术问题（前端技术、编程问题等），可以提供专业解答
4. 回答要友好、专业，使用markdown格式
5. 链接使用格式：[页面名称](/路径)
6. 保持回答简洁清晰，不要太冗长
7. 如果不确定答案，诚实地说明，并引导用户访问相关页面

【示例回答】
问：何茜媛做过什么项目？
答：主要项目包括：飞书汇报2.0重构、假勤双系统融合、NPS用户体验治理等。详见 [项目作品集](/projects)。

问：今天天气怎么样？
答：抱歉，我无法实时获取天气信息，但你可以通过天气APP查询。

问：什么是React？
答：React是Facebook开发的用于构建用户界面的JavaScript库，采用组件化和虚拟DOM技术。`;

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
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1500,
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Agnes API error:', response.status, errorText);
    throw new Error(`Agnes API request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

async function searchEntries(query: string): Promise<any[]> {
  const entries = await prisma.entry.findMany({
    where: {
      status: 'published',
      OR: [
        { title: { contains: query } },
        { summary: { contains: query } },
      ],
    },
    include: {
      project: true,
      workExp: true,
      knowledge: true,
    },
    take: 5,
  });
  return entries;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const lowerMessage = message.toLowerCase();
    
    for (const faq of FAQ_RESPONSES) {
      for (const keyword of faq.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          return NextResponse.json({ reply: faq.answer });
        }
      }
    }

    const personalKeywords = ['经历', '项目', '工作', '技术', '学习', '能力', '简历', '作品', '知识', '文章', '时间轴', '何茜媛', 'hexiyuan'];
    const isPersonalQuestion = personalKeywords.some(k => lowerMessage.includes(k));

    if (isPersonalQuestion) {
      const entries = await searchEntries(message);
      
      let reply = '';
      if (entries.length > 0) {
        reply = '我在网站中找到了一些相关内容：\n\n';
        entries.forEach((entry) => {
          const typeMap: Record<string, string> = {
            work_experience: '工作经历',
            project: '项目',
            knowledge_link: '知识库',
            travel: '旅行',
            daily: '日常',
          };
          const typeLabel = typeMap[entry.type as string] || entry.type;
          
          let url = '';
          if (entry.type === 'project') {
            url = `/projects/${entry.id}`;
          } else if (entry.type === 'work_experience') {
            url = `/experience/${entry.id}`;
          } else if (entry.type === 'knowledge_link') {
            url = `/knowledge/${entry.id}`;
          }
          
          if (url) {
            reply += `**[${entry.title}](${url})**\n`;
          } else {
            reply += `**${entry.title}**\n`;
          }
          reply += `类型：${typeLabel}\n`;
          if (entry.summary) {
            reply += `${entry.summary.slice(0, 50)}...\n\n`;
          }
        });
      }
      
      reply += `更多内容请访问：
- [简历时间轴](/resume)
- [项目作品集](/projects)
- [知识库](/knowledge)
- [成长时间轴](/timeline)`;
      
      return NextResponse.json({ reply });
    }

    try {
      const aiReply = await callAgnesAI(message);
      return NextResponse.json({ reply: aiReply });
    } catch (aiError) {
      console.error('AI fallback:', aiError);
      return NextResponse.json({ 
        reply: '哎呀，我遇到了一些技术问题。你可以直接浏览网站了解何茜媛的信息：\n\n- [简历时间轴](/resume)\n- [项目作品集](/projects)\n- [知识库](/knowledge)' 
      });
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ reply: '抱歉，我遇到了一些问题，请稍后再试。' }, { status: 500 });
  }
}
