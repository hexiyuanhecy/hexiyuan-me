import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const entries = await prisma.entry.findMany({
      where: {
        type: 'project',
        status: 'published',
      },
      include: {
        project: true,
        textContent: true,
      },
      orderBy: { occurredAt: 'desc' },
    });
    
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
