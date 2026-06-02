import { NextResponse } from 'next/server';
import { loadData, saveData } from '@/lib/store';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

function analyzeContent(content: string) {
  const lowerContent = content.toLowerCase();
  const results: any[] = [];

  if (lowerContent.includes('公司') || lowerContent.includes('工作') || lowerContent.includes('担任')) {
    const companyMatch = content.match(/(?:在|任职于|加入)\s*([^，。\s]+)/) || content.match(/([^，。\s]+公司)/);
    const roleMatch = content.match(/(?:担任|作为|是)\s*([^，。]+)/);
    const periodMatch = content.match(/(\d{4})\s*[-至到]\s*(\d{4}|\s*至今)/);
    const yearMatch = content.match(/(\d{4})/);

    const company = companyMatch ? companyMatch[1] : '';
    const role = roleMatch ? roleMatch[1] : '';
    const period = periodMatch ? periodMatch[0] : yearMatch ? `${yearMatch[0]}-至今` : '';

    results.push({
      type: 'experience',
      data: {
        period: period,
        company: company,
        role: role,
        description: content,
        techStack: ['React', 'Next.js', 'TypeScript'],
        profileId: '1',
      },
    });

    results.push({
      type: 'timeline',
      data: {
        year: yearMatch ? yearMatch[1] : new Date().getFullYear().toString(),
        title: `加入${company}`,
        description: content,
        type: 'work',
      },
    });
  }

  if (lowerContent.includes('项目') || lowerContent.includes('开发') || lowerContent.includes('实现')) {
    const techStack: string[] = [];
    const keywords = ['React', 'Next.js', 'TypeScript', 'Vue', 'Node.js', 'Tailwind', 'PostgreSQL', 'Redis'];
    keywords.forEach(kw => {
      if (content.includes(kw)) techStack.push(kw);
    });

    const periodMatch = content.match(/(\d{4})/);

    results.push({
      type: 'project',
      data: {
        slug: generateSlug(content.slice(0, 30)),
        title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
        description: content,
        techStack: techStack.length > 0 ? techStack : ['React', 'TypeScript'],
        highlights: ['项目实现', '功能完成'],
        period: periodMatch ? periodMatch[0] : new Date().getFullYear().toString(),
      },
    });

    const yearMatch = content.match(/(\d{4})/);
    results.push({
      type: 'timeline',
      data: {
        year: yearMatch ? yearMatch[1] : new Date().getFullYear().toString(),
        title: '完成项目',
        description: content.slice(0, 50),
        type: 'project',
      },
    });
  }

  if (lowerContent.includes('学习') || lowerContent.includes('分享') || lowerContent.includes('文章') || lowerContent.includes('笔记')) {
    const tags: string[] = [];
    const keywords = ['前端', 'React', 'Next.js', 'TypeScript', 'Vue', 'JavaScript'];
    keywords.forEach(kw => {
      if (content.includes(kw)) tags.push(kw);
    });

    results.push({
      type: 'knowledge',
      data: {
        slug: generateSlug(content.slice(0, 30)),
        title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
        description: content,
        content: content,
        date: new Date().toISOString().slice(0, 10),
        tags: tags.length > 0 ? tags : ['前端'],
      },
    });
  }

  if (lowerContent.includes('成就') || lowerContent.includes('获奖') || lowerContent.includes('荣誉')) {
    const yearMatch = content.match(/(\d{4})/);
    results.push({
      type: 'timeline',
      data: {
        year: yearMatch ? yearMatch[1] : new Date().getFullYear().toString(),
        title: '获得成就',
        description: content,
        type: 'achievement',
      },
    });
  }

  return results;
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const analyzed = analyzeContent(content);
    const data = loadData();
    const created: any = {
      experiences: [],
      projects: [],
      timelineItems: [],
      knowledgeArticles: [],
    };

    for (const item of analyzed) {
      if (item.type === 'experience') {
        const experience = {
          id: Date.now().toString(),
          ...item.data,
        };
        data.profile.experiences.push(experience);
        created.experiences.push(experience);
      }

      if (item.type === 'project') {
        const project = {
          id: Date.now().toString(),
          ...item.data,
          slug: item.data.slug + '-' + Date.now().toString(36),
        };
        data.projects.push(project);
        created.projects.push(project);
      }

      if (item.type === 'timeline') {
        const timelineItem = {
          id: Date.now().toString(),
          ...item.data,
        };
        data.timeline.push(timelineItem);
        data.timeline.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        created.timelineItems.push(timelineItem);
      }

      if (item.type === 'knowledge') {
        const article = {
          id: Date.now().toString(),
          ...item.data,
          slug: item.data.slug + '-' + Date.now().toString(36),
        };
        data.knowledge.push(article);
        created.knowledgeArticles.push(article);
      }
    }

    saveData(data);

    return NextResponse.json({ success: true, analyzed, created });
  } catch (error) {
    console.error('Import error:', error);
    return NextResponse.json({ error: 'Failed to import content' }, { status: 500 });
  }
}
