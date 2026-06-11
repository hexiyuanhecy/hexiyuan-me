import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const profile = {
      name: '西瓜',
      title: '高级前端工程师',
      bio: '专注于 React/Next.js 技术栈，热爱探索新技术，追求优雅的代码和卓越的用户体验。',
      avatar: null,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        '微前端'
      ],
      socialLinks: {
        github: 'https://github.com/hexiyuan',
        linkedin: 'https://linkedin.com/in/hexiyuan'
      }
    }

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}
