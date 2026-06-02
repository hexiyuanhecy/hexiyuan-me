import { NextResponse } from 'next/server';
import { loadData, saveData } from '@/lib/store';

export async function GET() {
  try {
    const data = loadData();
    return NextResponse.json(data.timeline);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get timeline' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const itemData = await request.json();
    const data = loadData();
    const newItem = {
      id: Date.now().toString(),
      ...itemData,
    };
    data.timeline.push(newItem);
    data.timeline.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    saveData(data);
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create timeline item' }, { status: 500 });
  }
}
