import { NextResponse } from 'next/server';
import { validatePassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (validatePassword(password)) {
      const token = generateToken();
      
      const response = NextResponse.json({ success: true });
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60,
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, message: '密码错误' });
  } catch {
    return NextResponse.json({ success: false, message: '请求错误' });
  }
}
