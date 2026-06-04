import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    const where: any = {
      status: 'published',
      modules: {
        some: { moduleName: 'timeline' },
      },
    };

    if (type && type !== 'all') {
      where.type = type;
    }

    const entries = await prisma.entry.findMany({
      where,
      include: {
        textContent: true,
        workExp: true,
        project: true,
        knowledge: true,
        travel: true,
        lifestyle: true,
      },
      orderBy: [
        { occurredAt: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch timeline' }, { status: 500 });
  }
}
