import { NextResponse } from 'next/server';
import { loadData, saveData } from '@/lib/store';

export async function GET() {
  try {
    const data = loadData();
    return NextResponse.json(data.projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const projectData = await request.json();
    const data = loadData();
    const newProject = {
      id: Date.now().toString(),
      ...projectData,
    };
    data.projects.push(newProject);
    saveData(data);
    return NextResponse.json(newProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
