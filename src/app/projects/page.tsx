'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, GitBranch, Star, ArrowRight } from 'lucide-react';

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
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
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">我的项目</h1>
            </div>
            <p className="text-muted-foreground">参与或主导的一些代表性项目</p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="glass card-hover group overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-secondary/30 border-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Star className="w-3 h-3 text-accent fill-accent" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <GitBranch className="w-4 h-4" />
                        查看源码
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass text-center p-12">
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
