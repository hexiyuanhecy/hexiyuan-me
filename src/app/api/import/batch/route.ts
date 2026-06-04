import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

interface SeedItem {
  type: string;
  title: string;
  eventDate?: string;
  modules?: string[];
  fields: {
    company?: string;
    role?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    tech_stack?: string[];
    name?: string;
    url?: string;
    category?: string;
    tags?: string[];
    highlights?: string[];
    link?: string;
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, clearExisting = false } = body as { items: SeedItem[]; clearExisting?: boolean };

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Invalid items format' }, { status: 400 });
    }

    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[],
      created: {
        experiences: [] as string[],
        projects: [] as string[],
        knowledge: [] as string[],
        other: [] as string[],
      },
    };

    if (clearExisting) {
      await prisma.entry.deleteMany({
        where: { userId: 'user-1' },
      });
      results.success++;
    }

    for (const item of items) {
      try {
        const slug = generateSlug(item.title) + '-' + Date.now().toString(36);
        const occurredAt = item.eventDate ? new Date(item.eventDate) : new Date();

        if (item.type === 'work_experience') {
          const entry = await prisma.entry.create({
            data: {
              userId: 'user-1',
              type: 'work_experience',
              status: 'published',
              title: item.title,
              slug,
              summary: item.fields.description,
              contentType: 'markdown',
              occurredAt,
              workExp: {
                create: {
                  company: item.fields.company || '',
                  role: item.fields.role || '',
                  startDate: item.fields.start_date ? new Date(item.fields.start_date + '-01') : new Date(),
                  endDate: item.fields.end_date ? new Date(item.fields.end_date + '-01') : null,
                  techStack: JSON.stringify(item.fields.tech_stack || []),
                },
              },
              modules: {
                create: item.modules?.map((m: string) => ({ moduleName: m as any })) || [],
              },
            },
          });
          results.created.experiences.push(entry.title);
        } else if (item.type === 'project') {
          const entry = await prisma.entry.create({
            data: {
              userId: 'user-1',
              type: 'project',
              status: 'published',
              title: item.title,
              slug,
              summary: item.fields.description,
              contentType: 'markdown',
              occurredAt,
              project: {
                create: {
                  name: item.fields.name || item.title,
                  description: item.fields.description || '',
                  techStack: JSON.stringify(item.fields.tech_stack || []),
                  highlights: JSON.stringify(item.fields.highlights || []),
                  link: item.fields.link || '',
                },
              },
              modules: {
                create: item.modules?.map((m: string) => ({ moduleName: m as any })) || [],
              },
            },
          });
          results.created.projects.push(entry.title);
        } else if (item.type === 'knowledge_link') {
          const entry = await prisma.entry.create({
            data: {
              userId: 'user-1',
              type: 'knowledge_link',
              status: 'published',
              title: item.title,
              slug,
              summary: item.fields.description,
              contentType: 'markdown',
              occurredAt,
              knowledge: {
                create: {
                  url: item.fields.url || '#',
                  category: item.fields.category || '技术',
                  tags: JSON.stringify(item.fields.tags || []),
                  description: item.fields.description || '',
                },
              },
              modules: {
                create: item.modules?.map((m: string) => ({ moduleName: m as any })) || [],
              },
            },
          });
          results.created.knowledge.push(entry.title);
        } else {
          const entry = await prisma.entry.create({
            data: {
              userId: 'user-1',
              type: 'other',
              status: 'published',
              title: item.title,
              slug,
              summary: item.fields.description,
              contentType: 'markdown',
              occurredAt,
              modules: {
                create: item.modules?.map((m: string) => ({ moduleName: m as any })) || [],
              },
            },
          });
          results.created.other.push(entry.title);
        }
        results.success++;
      } catch (err: any) {
        results.failed++;
        results.errors.push(`${item.title}: ${err.message}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: `成功导入 ${results.success} 条，失败 ${results.failed} 条`,
      results,
    });
  } catch (error: any) {
    console.error('Batch import error:', error);
    return NextResponse.json({ error: error.message || 'Batch import failed' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = await prisma.entry.count({
      where: { userId: 'user-1' },
    });

    return NextResponse.json({
      message: '使用 POST 方法导入数据',
      currentCount: count,
      example: {
        method: 'POST',
        body: {
          items: [
            {
              type: 'work_experience',
              title: '公司名称',
              eventDate: '2024-01-01',
              modules: ['resume', 'timeline'],
              fields: {
                company: '公司名',
                role: '职位',
                start_date: '2024-01',
                end_date: '2024-12',
                description: '工作描述',
                tech_stack: ['React', 'TypeScript'],
              },
            },
          ],
          clearExisting: false,
        },
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
