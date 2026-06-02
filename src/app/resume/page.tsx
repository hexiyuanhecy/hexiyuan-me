'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, GraduationCap, MapPin, Mail, GitBranch, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  techStack: string[];
}

interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
  experiences: Experience[];
}

export default function ResumePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        setProfile(data);
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
      <div className="flex items-center justify-center min-h-[60vh] pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent animate-pulse" />
          <span className="text-muted-foreground">加载中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">我的简历</h1>
            </div>
            <p className="text-muted-foreground">专业技能与工作经历</p>
          </div>

          <Card className="glass mb-8 overflow-hidden border-primary/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px] shadow-lg shadow-primary/30">
                    <Avatar className="w-full h-full rounded-2xl bg-card">
                      <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {profile?.name?.charAt(0) || 'H'}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-1">{profile?.name || '何西元'}</h2>
                  <p className="text-primary font-medium mb-2">{profile?.title || '高级前端工程师'}</p>
                  <p className="text-muted-foreground text-sm mb-4">{profile?.bio || '专注于 Web 前端开发，热爱技术创新与知识分享'}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{profile?.location || '杭州'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{profile?.email || 'contact@hexiyuan.me'}</span>
                    </div>
                    <a href={profile?.githubUrl || 'https://github.com/hexiyuan'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                      <GitBranch className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass mb-8 overflow-hidden border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                工作经历
              </h2>
              <div className="space-y-6">
                {profile?.experiences?.length ? profile.experiences.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {index < (profile.experiences?.length || 0) - 1 && (
                      <div className="absolute left-[14px] top-12 bottom-0 w-0.5 bg-border" />
                    )}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <span className="text-primary-foreground font-medium text-sm">{exp.period.split('-')[0]?.slice(-2)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {exp.company}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-secondary/30 border-secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-2">暂无工作经历</p>
                    <Link href="/import" className="text-primary text-sm flex items-center justify-center gap-1 hover:underline">
                      去智能导入添加
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="glass overflow-hidden border-accent/10">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-accent" />
                教育背景
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-medium text-sm">15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">本科 - 计算机科学与技术</h3>
                    <p className="text-sm text-muted-foreground">某重点大学</p>
                    <p className="text-xs text-muted-foreground">2015-2019</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
