import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const entries = await prisma.entry.findMany({
      where: {
        type: 'knowledge_link',
        status: 'published',
      },
      include: {
        knowledge: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch knowledge' }, { status: 500 });
  }
}
