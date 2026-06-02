import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    await prisma.entryModule.deleteMany({ where: { entryId: id } });
    await prisma.entryTag.deleteMany({ where: { entryId: id } });
    await prisma.textContent.deleteMany({ where: { entryId: id } });
    await prisma.workExperience.deleteMany({ where: { entryId: id } });
    await prisma.project.deleteMany({ where: { entryId: id } });
    await prisma.knowledge.deleteMany({ where: { entryId: id } });
    await prisma.travel.deleteMany({ where: { entryId: id } });
    await prisma.food.deleteMany({ where: { entryId: id } });
    await prisma.daily.deleteMany({ where: { entryId: id } });
    
    await prisma.entry.delete({ where: { id } });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete entry:', error);
    return NextResponse.json({ error: 'Failed to delete entry' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const entry = await prisma.entry.findUnique({
      where: { id },
      include: {
        textContent: true,
        workExp: true,
        project: true,
        knowledge: true,
        travel: true,
        food: true,
        daily: true,
        modules: true,
      },
    });
    
    if (!entry) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }
    
    return NextResponse.json(entry);
  } catch (error) {
    console.error('Failed to fetch entry:', error);
    return NextResponse.json({ error: 'Failed to fetch entry' }, { status: 500 });
  }
}
