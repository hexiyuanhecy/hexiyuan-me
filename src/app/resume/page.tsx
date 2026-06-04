'use client';

import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, MapPin, Mail, GitBranch, ArrowRight, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { getResume } from '@/lib/queries';
import { parseJsonOrSplit } from '@/lib/utils';

interface WorkExp {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  techStack: string;
}

interface Entry {
  id: string;
  title: string;
  summary: string | null;
  type: string;
  occurredAt: Date | null;
  workExp: WorkExp | null;
}

interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
}

const skillData = [
  { name: 'React', value: 95 },
  { name: 'Next.js', value: 90 },
  { name: 'TypeScript', value: 88 },
  { name: 'Vue', value: 80 },
  { name: 'Node.js', value: 78 },
  { name: 'Prisma', value: 85 },
];

export default function ResumePage() {
  const [workExperiences, setWorkExperiences] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('all');

  useEffect(() => {
    async function loadData() {
      try {
        const resumeData = await getResume();
        setWorkExperiences(resumeData.workExperiences || []);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const years = useMemo(() => {
    const yearSet = new Set<string>();
    yearSet.add('all');
    workExperiences.forEach(exp => {
      if (exp.workExp?.startDate) {
        const year = new Date(exp.workExp.startDate).getFullYear().toString();
        yearSet.add(year);
      }
    });
    return Array.from(yearSet).sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      return parseInt(b) - parseInt(a);
    });
  }, [workExperiences]);

  const filteredExperiences = useMemo(() => {
    if (selectedYear === 'all') return workExperiences;
    return workExperiences.filter(exp => {
      if (!exp.workExp?.startDate) return false;
      return new Date(exp.workExp.startDate).getFullYear().toString() === selectedYear;
    });
  }, [workExperiences, selectedYear]);

  const radarPoints = useMemo(() => {
    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    const numSides = skillData.length;
    const angleStep = (Math.PI * 2) / numSides;

    return skillData.map((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const value = (skill.value / 100) * radius;
      const x = centerX + value * Math.cos(angle);
      const y = centerY + value * Math.sin(angle);
      return { x, y, skill };
    });
  }, []);

  const radarPolygon = radarPoints.map((p, i) => `${p.x},${p.y}${i < radarPoints.length - 1 ? ' ' : ''}`).join('');

  const axisLines = useMemo(() => {
    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    const numSides = skillData.length;
    const angleStep = (Math.PI * 2) / numSides;

    return skillData.map((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return { x, y, skill };
    });
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

  const formatDate = (dateStr: Date | string | null | undefined) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  const getPeriod = (entry: Entry) => {
    if (!entry.workExp) return '';
    const start = formatDate(entry.workExp.startDate);
    const end = entry.workExp.endDate ? formatDate(entry.workExp.endDate) : '至今';
    return `${start} - ${end}`;
  };

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
                        何
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-1">何西元</h2>
                  <p className="text-primary font-medium mb-2">高级前端工程师</p>
                  <p className="text-muted-foreground text-sm mb-4">专注于 Web 前端开发，热爱技术创新与知识分享</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>杭州</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>contact@hexiyuan.me</span>
                    </div>
                    <a href="https://github.com/hexiyuan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
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
                <TrendingUp className="w-5 h-5 text-primary" />
                技能雷达图
              </h2>
              <div className="flex justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" className="max-w-[280px]">
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                    <polygon
                      key={i}
                      points={skillData.map((_, idx) => {
                        const angle = ((Math.PI * 2) / skillData.length) * idx - Math.PI / 2;
                        const x = 100 + (80 * scale) * Math.cos(angle);
                        const y = 100 + (80 * scale) * Math.sin(angle);
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border/50"
                    />
                  ))}
                  {axisLines.map((line, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={line.x}
                      y2={line.y}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border/50"
                    />
                  ))}
                  <polygon
                    points={radarPolygon}
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  {radarPoints.map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#3b82f6"
                    />
                  ))}
                  {axisLines.map((line, i) => (
                    <text
                      key={i}
                      x={line.x}
                      y={line.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs fill-foreground"
                      style={{
                        transform: `translate(${line.x > 100 ? 8 : line.x < 100 ? -8 : 0}px, ${line.y > 100 ? 8 : line.y < 100 ? -8 : 0}px)`
                      }}
                    >
                      {line.skill.name}
                    </text>
                  ))}
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {skillData.map((skill, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                    {skill.name} ({skill.value}%)
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass mb-8 overflow-hidden border-primary/10">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  工作经历
                </h2>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {years.map((year) => (
                      <Button
                        key={year}
                        variant={selectedYear === year ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedYear(year)}
                        className={selectedYear === year ? 'bg-primary hover:bg-primary/90' : 'bg-secondary/30 border-secondary'}
                      >
                        {year === 'all' ? '全部' : `${year}年`}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {filteredExperiences.length > 0 ? filteredExperiences.map((entry, index) => {
                  const exp = entry.workExp;
                  return (
                    <div key={entry.id} className="relative">
                      {index < filteredExperiences.length - 1 && (
                        <div className="absolute left-[14px] top-12 bottom-0 w-0.5 bg-border" />
                      )}
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                          <span className="text-primary-foreground font-medium text-sm">
                            {exp?.startDate ? new Date(exp.startDate).getFullYear().toString().slice(-2) : '24'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Link
                              href={`/experience/${entry.id}`}
                              className="font-semibold text-lg hover:text-primary transition-colors flex items-center gap-2"
                            >
                              {exp?.role || entry.title}
                              <ArrowRight className="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity" />
                            </Link>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              {exp?.company || '某公司'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span>{getPeriod(entry)}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">{entry.summary || '负责前端开发工作'}</p>
                          <div className="flex flex-wrap gap-2">
                            {parseJsonOrSplit(exp?.techStack).map((tech: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs bg-secondary/30 border-secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }) : (
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
                    <span className="text-accent-foreground font-medium text-sm">19</span>
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
