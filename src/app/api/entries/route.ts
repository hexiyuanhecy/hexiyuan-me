import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const entries = await prisma.entry.findMany({
      select: {
        id: true,
        title: true,
        type: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Failed to fetch entries:', error);
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const entry = await prisma.entry.create({
      data: {
        userId: 'user-1',
        type: data.type,
        status: data.status || 'draft',
        title: data.title,
        slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        summary: data.summary,
        contentType: data.contentType || 'markdown',
        occurredAt: data.occurredAt ? new Date(data.occurredAt) : undefined,
        ...(data.textContent && {
          textContent: {
            create: {
              content: data.textContent,
              excerpt: data.excerpt,
            },
          },
        }),
      },
    });
    
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Failed to create entry:', error);
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 });
  }
}
