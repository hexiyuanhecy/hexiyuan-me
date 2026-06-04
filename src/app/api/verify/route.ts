import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'hexiyuan-secret-key';
const IMPORT_PASSWORD = process.env.IMPORT_PASSWORD || 'admin123';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    if (password === IMPORT_PASSWORD) {
      const token = jwt.sign({ role: 'admin' }, SECRET_KEY, { expiresIn: '24h' });
      return NextResponse.json({ success: true, token });
    }
    
    return NextResponse.json({ success: false, message: '密码错误' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: '服务器错误' }, { status: 500 });
  }
}
