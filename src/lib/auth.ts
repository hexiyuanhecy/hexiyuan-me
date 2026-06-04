import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_PASSWORD = process.env.IMPORT_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'hexiyuan-secret-key';

export function generateToken(): string {
  return jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
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
