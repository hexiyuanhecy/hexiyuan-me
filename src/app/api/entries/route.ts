import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const entries = await prisma.entry.findMany({
      include: {
        modules: true,
        workExp: true,
        project: true,
        knowledge: true,
        travel: true,
        lifestyle: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, title, slug, summary, modules = [] } = body;
    
    const entry = await prisma.entry.create({
      data: {
        type,
        title,
        slug,
        summary,
        modules: {
          create: modules.map((moduleName: string) => ({ moduleName })),
        },
      },
    });
    
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, summary, status } = body;
    
    const entry = await prisma.entry.update({
      where: { id },
      data: {
        title,
        summary,
        status,
      },
    });
    
    return NextResponse.json(entry);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update entry' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    await prisma.entry.delete({
      where: { id },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete entry' }, { status: 500 });
  }
}
