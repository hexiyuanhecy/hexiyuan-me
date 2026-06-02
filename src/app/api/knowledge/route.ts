import { NextResponse } from 'next/server';
import { loadData, saveData } from '@/lib/store';

export async function GET() {
  try {
    const data = loadData();
    return NextResponse.json(data.knowledge);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get knowledge' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const articleData = await request.json();
    const data = loadData();
    const newArticle = {
      id: Date.now().toString(),
      ...articleData,
    };
    data.knowledge.push(newArticle);
    saveData(data);
    return NextResponse.json(newArticle);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
