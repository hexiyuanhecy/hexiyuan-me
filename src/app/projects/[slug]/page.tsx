'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, GitBranch, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  period: string;
  content?: string;
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch('/api/projects');
        const projects = await res.json();
        const found = projects.find((p: Project) => p.slug === params.slug);
        setProject(found || null);
      } catch (error) {
        console.error('Failed to load project:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <p className="text-muted-foreground mb-4">项目不存在</p>
        <Link href="/projects" className="text-primary hover:underline">
          返回项目列表
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              返回项目列表
            </Link>
          </div>

          <Card className="glass border-primary/10 mb-6">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {project.period}
                  </Badge>
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <GitBranch className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </a>
                )}
              </div>

              <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} className="bg-secondary/50 text-foreground border-secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
              </div>

              {project.highlights.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">项目亮点</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Star className="w-4 h-4 text-accent fill-accent flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {project.content && (
            <Card className="glass border-primary/10">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-6">项目详情</h2>
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: marked(project.content) }}
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
