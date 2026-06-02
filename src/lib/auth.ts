import { NextRequest, NextResponse } from 'next/server';

const SECRET_PASSWORD = process.env.IMPORT_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

export function generateToken(): string {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    iat: Math.floor(Date.now() / 1000),
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export function verifyToken(token: string): boolean {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    return payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  
  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }
  
  return NextResponse.next();
}

export function validatePassword(password: string): boolean {
  return password === SECRET_PASSWORD;
}
