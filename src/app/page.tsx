'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Code, BookOpen, MessageCircle, ArrowRight, Mail, MapPin, Sparkles, Zap, Target, Users } from 'lucide-react';
import Link from 'next/link';

interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
}

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  period: string;
}

const stats = [
  { icon: Zap, value: '8+', label: '年开发经验' },
  { icon: Target, value: '50+', label: '完成项目' },
  { icon: Users, value: '100K+', label: '用户服务' },
];

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const [profileRes, projectsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/projects'),
        ]);
        const profileData = await profileRes.json();
        const projectsData = await projectsRes.json();
        setProfile(profileData);
        setProjects(projectsData.slice(0, 4));
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent animate-pulse" />
          <span className="text-muted-foreground">加载中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.08) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px] shadow-2xl shadow-primary/30 animate-float">
                <Avatar className="w-full h-full rounded-2xl bg-card">
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {profile?.name?.charAt(0) || 'H'}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="gradient-text">{profile?.name || '何西元'}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              {profile?.title || '高级前端工程师'}
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              {profile?.bio || '专注于 Web 前端开发，热爱技术创新与知识分享'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" size="lg" className="gap-2 glass border-primary/30 hover:bg-primary/10">
                <Briefcase className="w-5 h-5" />
                查看简历
              </Button>
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                <Code className="w-5 h-5" />
                浏览项目
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 glass border-accent/30 hover:bg-accent/10">
                <BookOpen className="w-5 h-5" />
                知识分享
              </Button>
              <Button variant="outline" size="lg" className="gap-2 glass border-primary/30 hover:bg-primary/10" asChild>
                <Link href="/avatar">
                  <MessageCircle className="w-5 h-5" />
                  AI 对话
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile?.location || '杭州'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{profile?.email || 'contact@hexiyuan.me'}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass rounded-xl p-4 text-center group hover:bg-secondary/50 transition-colors">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                精选项目
              </h2>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                查看全部
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="glass card-hover group overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {project.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-secondary/30 border-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {projects.length === 0 && (
              <Card className="glass text-center p-12">
                <CardContent>
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
                  <p className="text-muted-foreground mb-2">暂无项目数据</p>
                  <p className="text-sm text-muted-foreground">去智能导入页面添加项目吧！</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-accent" />
              最新文章
            </h2>
            <Card className="glass overflow-hidden border-accent/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">React 18 新特性深度解析</h3>
                    <p className="text-sm text-muted-foreground mb-3">探讨 React 18 的并发特性、Suspense 和新的 Hooks API</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>2024-01-15</span>
                      <Badge variant="outline" className="bg-secondary/30">React</Badge>
                      <Badge variant="outline" className="bg-secondary/30">JavaScript</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
