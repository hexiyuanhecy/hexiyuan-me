import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const counts = {
      resume: 0,
      projects: 0,
      timeline: 0,
      knowledge: 0,
    };

    await prisma.$transaction(async (tx) => {
      const workExperiences: Map<string, string> = new Map();
      
      for (const item of items) {
        const detailedContent = item.detailedMarkdown || item.detailed_markdown || '';

        const entryData: any = {
          userId: 'user-1',
          type: item.type || 'other',
          status: item.status || 'published',
          title: item.title || '未命名',
          slug: generateSlug(item.title || 'untitled') + '-' + Date.now().toString(36),
          summary: item.summary || '',
          contentType: 'markdown',
          occurredAt: item.date ? new Date(item.date) : undefined,
          aiAnalysis: JSON.stringify({
            original: detailedContent || item.summary || '',
            cleaned: detailedContent || item.summary || '',
          }),
        };

        if (item.type === 'project' && item.parentCompany) {
          const parentId = workExperiences.get(item.parentCompany);
          if (parentId) {
            entryData.parentId = parentId;
          }
        }

        const moduleNames = item.selectedModules || item.suggestedModules || ['timeline'];
        
        const modulesData = moduleNames.map((name: string) => ({
          moduleName: name as any,
        }));

        if (detailedContent) {
          entryData.textContent = {
            create: {
              content: detailedContent,
              excerpt: item.summary || detailedContent.slice(0, 100),
            },
          };
        }

        switch (item.type) {
          case 'work_experience':
            entryData.workExp = {
              create: {
                company: item.company || item.title || '',
                role: item.role || item.title || '',
                startDate: item.date ? new Date(item.date) : new Date(),
                techStack: JSON.stringify(item.techStack || []),
                endDate: item.endDate ? new Date(item.endDate) : undefined,
              },
            };
            break;

          case 'project':
            entryData.project = {
              create: {
                name: item.title || '',
                description: item.summary || '',
                techStack: JSON.stringify(item.techStack || []),
                highlights: JSON.stringify(item.highlights || []),
                link: item.link || undefined,
              },
            };
            break;

          case 'knowledge_link':
            entryData.knowledge = {
              create: {
                url: item.url || '#',
                category: item.category || '技术',
                tags: JSON.stringify(item.techStack || []),
                description: item.summary || '',
              },
            };
            break;

          case 'travel':
            entryData.travel = {
              create: {
                destination: item.title || '',
                travelDate: item.date ? new Date(item.date) : undefined,
                tags: JSON.stringify(item.highlights || []),
              },
            };
            break;

          case 'daily':
          case 'food':
            entryData.lifestyle = {
              create: {
                subType: item.type === 'food' ? 'food' : 'daily',
                tags: JSON.stringify(item.highlights || []),
                date: item.date ? new Date(item.date) : undefined,
              },
            };
            break;
        }

        entryData.modules = {
          create: modulesData,
        };

        const entry = await tx.entry.create({ data: entryData });

        if (item.type === 'work_experience') {
          const companyName = item.company || item.title || '';
          workExperiences.set(companyName, entry.id);
          
          const projectItems = items.filter(i => i.type === 'project' && 
            (i.parentCompany === companyName || 
             i.summary?.includes(companyName) || 
             i.title?.includes(companyName.split('-')[0]))
          );
          
          for (const projItem of projectItems) {
            projItem.parentCompany = companyName;
          }
        }

        moduleNames.forEach((name: string) => {
          if (counts[name as keyof typeof counts] !== undefined) {
            counts[name as keyof typeof counts]++;
          }
        });
      }
    });

    return NextResponse.json({
      success: true,
      message: `成功导入 ${items.length} 条内容`,
      counts,
    });
  } catch (error) {
    console.error('Import confirm error:', error);
    return NextResponse.json({ error: 'Failed to confirm import' }, { status: 500 });
  }
}