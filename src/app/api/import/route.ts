import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
      type: 'work_experience',
      data: {
        period,
        company,
        role,
        description: content,
        techStack: ['React', 'Next.js', 'TypeScript'],
        startDate: yearMatch ? `${yearMatch[1]}-01-01` : undefined,
      },
      suggested_modules: ['resume', 'timeline'],
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
        title: content.slice(0, 50) + (content.length > 50 ? '...' : ''),
        description: content,
        techStack: techStack.length > 0 ? techStack : ['React', 'TypeScript'],
        highlights: ['项目实现', '功能完成'],
        period: periodMatch ? periodMatch[0] : new Date().getFullYear().toString(),
      },
      suggested_modules: ['projects', 'timeline'],
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
        title: content.slice(0, 50) + (content.length > 50 ? '...' : ''),
        description: content,
        content: content,
        tags: tags.length > 0 ? tags : ['前端'],
      },
      suggested_modules: ['knowledge'],
    });
  }

  if (lowerContent.includes('成就') || lowerContent.includes('获奖') || lowerContent.includes('荣誉') || lowerContent.includes('证书')) {
    const yearMatch = content.match(/(\d{4})/);
    results.push({
      type: 'achievement',
      data: {
        title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
        description: content,
        year: yearMatch ? yearMatch[1] : new Date().getFullYear().toString(),
      },
      suggested_modules: ['timeline'],
    });
  }

  return results.length > 0 ? results : [{
    type: 'other',
    data: {
      title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
      description: content,
    },
    suggested_modules: ['timeline'],
  }];
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const analyzed = analyzeContent(content);
    const created: any = {
      experiences: [],
      projects: [],
      timelineItems: [],
      knowledgeArticles: [],
    };

    for (const item of analyzed) {
      if (item.type === 'work_experience') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'work_experience',
            status: 'published',
            title: item.data.role || item.data.company || '工作经历',
            slug: generateSlug(item.data.role || item.data.company || 'experience') + '-' + Date.now().toString(36),
            summary: item.data.description,
            contentType: 'markdown',
            occurredAt: item.data.startDate ? new Date(item.data.startDate) : undefined,
            workExp: {
              create: {
                company: item.data.company,
                role: item.data.role,
                startDate: item.data.startDate ? new Date(item.data.startDate) : new Date(),
                techStack: JSON.stringify(item.data.techStack),
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
            title: item.data.title,
            slug: generateSlug(item.data.title) + '-' + Date.now().toString(36),
            summary: item.data.description,
            contentType: 'markdown',
            project: {
              create: {
                name: item.data.title,
                description: item.data.description,
                techStack: JSON.stringify(item.data.techStack),
                highlights: JSON.stringify(item.data.highlights),
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

      if (item.type === 'knowledge') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'knowledge',
            status: 'published',
            title: item.data.title,
            slug: generateSlug(item.data.title) + '-' + Date.now().toString(36),
            summary: item.data.description,
            contentType: 'markdown',
            textContent: {
              create: {
                content: item.data.content,
                excerpt: item.data.description,
              },
            },
            knowledge: {
              create: {
                tags: JSON.stringify(item.data.tags),
              },
            },
            modules: {
              create: [
                { moduleName: 'knowledge' },
              ],
            },
          },
        });
        created.knowledgeArticles.push(entry);
      }

      if (item.type === 'achievement') {
        const entry = await prisma.entry.create({
          data: {
            userId: 'user-1',
            type: 'other',
            status: 'published',
            title: item.data.title,
            slug: generateSlug(item.data.title) + '-' + Date.now().toString(36),
            summary: item.data.description,
            contentType: 'markdown',
            occurredAt: new Date(`${item.data.year}-01-01`),
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
            title: item.data.title,
            slug: generateSlug(item.data.title) + '-' + Date.now().toString(36),
            summary: item.data.description,
            contentType: 'markdown',
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

    return NextResponse.json({ success: true, analyzed, created });
  } catch (error) {
    console.error('Import error:', error);
    return NextResponse.json({ error: 'Failed to import content' }, { status: 500 });
  }
}
