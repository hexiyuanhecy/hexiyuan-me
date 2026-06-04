'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Star } from 'lucide-react';
import Link from 'next/link';

interface ProjectData {
  name: string;
  description: string;
  techStack: string;
  link?: string;
  highlights: string;
}

interface Entry {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: string;
  occurredAt: string;
  project?: ProjectData;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
        console.log('==============================>hxydata == ', data)
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

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">我的项目</h1>
            </div>
            <p className="text-muted-foreground">参与或主导的一些代表性项目</p>
          </div>

          {projects.length > 0 ? (
            <div className="columns-1 md:columns-2 gap-x-6 gap-y-6">
              {projects.map((entry) => {
                const project = entry.project;
                const techStack = project?.techStack ? JSON.parse(project.techStack) : [];
                const highlights = project?.highlights ? JSON.parse(project.highlights) : [];
                
                return (
                  <div key={entry.id} className="break-inside-avoid mb-6">
                    <Link href={`/projects/${entry.slug}`} className="group block cursor-pointer">
                      <Card className="bg-secondary/40 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {project?.name || entry.title}
                            </h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
                              {formatDate(entry.occurredAt)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {project?.description || entry.summary || '项目描述'}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {techStack.map((tech: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs bg-background/50 border-border/50">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground/60 mb-2">项目亮点</div>
                            <div className="flex items-center gap-2 overflow-hidden">
                              {highlights.slice(0, 3).map((highlight: string, i: number) => (
                                <span key={i} className="text-xs text-muted-foreground flex items-center gap-1 truncate">
                                  <Star className="w-3 h-3 text-accent fill-accent flex-shrink-0" />
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <Card className="bg-secondary/40 border-border/50 text-center p-12">
              <CardContent>
                <Code className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
                <p className="text-muted-foreground mb-2">暂无项目数据</p>
                <p className="text-sm text-muted-foreground">去智能导入页面添加项目内容吧！</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
