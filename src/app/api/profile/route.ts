import { NextResponse } from 'next/server';
import { loadData, saveData, store } from '@/lib/store';

export async function GET() {
  try {
    const data = loadData();
    return NextResponse.json(data.profile);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get profile' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updates = await request.json();
    const data = loadData();
    data.profile = { ...data.profile, ...updates };
    saveData(data);
    return NextResponse.json(data.profile);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
