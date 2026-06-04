'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, MapPin, ArrowRight, ExternalLink, Code, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getExperienceById } from '@/lib/queries';
import { parseJsonOrSplit } from '@/lib/utils';

interface WorkExperience {
  createdAt: Date;
  updatedAt: Date;
  company: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  techStack: string;
  entryId: string;
}

interface Project {
  id: string;
  title: string;
  summary: string | null;
  occurredAt: Date | string | null;
  project: {
    description?: string;
    techStack: string;
    link?: string;
    highlights: string;
  } | null;
}

interface Entry {
  id: string;
  title: string;
  summary: string | null;
  occurredAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  status: string;
  slug: string;
  contentType: string;
  location: string | null;
  aiAnalysis: string | null;
  workExp: WorkExperience | null;
  project: any | null;
  knowledge: any | null;
  travel: any | null;
  lifestyle: any | null;
  textContent: any | null;
  modules: any[];
  userId: string;
}

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const [experience, setExperience] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const expData = await getExperienceById(params.id);
        setExperience(expData);
      } catch (error) {
        console.error('Failed to load experience:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [params.id]);

  const formatDate = (dateStr: Date | string | null | undefined) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  const getPeriod = (startDate: Date | string, endDate: Date | string | null) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : '至今';
    return `${start} - ${end}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary animate-pulse" />
          <span className="text-muted-foreground">加载中...</span>
        </div>
      </div>
    );
  }

  if (!experience || !experience.workExp) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Card className="glass text-center p-12">
          <CardContent>
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
            <p className="text-muted-foreground">未找到该工作经历</p>
            <Link href="/resume" className="text-primary text-sm flex items-center justify-center gap-1 mt-4 hover:underline">
              返回简历页
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const exp = experience.workExp;
  const techStack = parseJsonOrSplit(exp.techStack);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6 bg-secondary/30 border-secondary hover:bg-secondary/50"
            onClick={() => window.history.back()}
          >
            ← 返回
          </Button>

          <Card className="glass border-primary/10 overflow-hidden mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{exp.company}</h1>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {getPeriod(exp.startDate, exp.endDate)}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {experience.summary || '暂无详细描述'}
                  </p>

                  <div>
                    <h3 className="text-sm font-medium mb-3">技术栈</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech: string, i: number) => (
                        <Badge key={i} variant="outline" className="bg-secondary/30 border-secondary text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {experience?.children?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Code className="w-5 h-5 text-accent" />
                关联项目 ({experience.children.length})
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.children.map((project: any) => {
                  const highlights = parseJsonOrSplit(project.project?.highlights);
                  const projectTechStack = parseJsonOrSplit(project.project?.techStack);
                  
                  return (
                    <Link key={project.id} href={`/projects/${project.id}`} className="group">
                      <Card className="overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                              {project.title}
                            </h3>
                            {project.project?.link && (
                              <a 
                                href={project.project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {project.project?.description || project.summary || '暂无描述'}
                          </p>
                          
                          {highlights.length > 0 && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-muted-foreground mb-2">项目亮点</p>
                              <div className="space-y-1">
                                {highlights.slice(0, 3).map((highlight: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                                    {highlight}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {formatDate(project.occurredAt || project.createdAt)}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {projectTechStack.slice(0, 3).map((tech: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs bg-secondary/50 border-border/50">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          {projects.length === 0 && (
            <Card className="glass text-center p-8 border-border/50">
              <CardContent>
                <Code className="w-10 h-10 mx-auto mb-3 text-accent opacity-50" />
                <p className="text-muted-foreground">该工作经历暂无关联项目</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}