import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const workExperiences = await prisma.entry.findMany({
      where: {
        type: 'work_experience',
        status: 'published',
      },
      include: {
        workExp: true,
        textContent: true,
      },
      orderBy: { occurredAt: 'desc' },
    });

    const projects = await prisma.entry.findMany({
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

    return NextResponse.json({ workExperiences, projects });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resume data' }, { status: 500 });
  }
}
