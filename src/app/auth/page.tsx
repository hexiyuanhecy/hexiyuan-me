import { redirect } from 'next/navigation';

// 将 /auth 路径重定向到新的 /login 路径
export default function AuthPage() {
  redirect('/login');
}