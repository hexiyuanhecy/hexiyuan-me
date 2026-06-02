'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timeline, Briefcase, GraduationCap, Trophy, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  type: string;
}

const typeConfig: Record<string, { icon: any; color: string; label: string; bgColor: string }> = {
  work: { icon: Briefcase, color: 'text-primary', label: '工作', bgColor: 'bg-primary/10' },
  education: { icon: GraduationCap, color: 'text-accent', label: '教育', bgColor: 'bg-accent/10' },
  achievement: { icon: Trophy, color: 'text-yellow-500', label: '成就', bgColor: 'bg-yellow-500/10' },
  project: { icon: Code, color: 'text-green-500', label: '项目', bgColor: 'bg-green-500/10' },
};

export default function TimelinePage() {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/timeline');
        const data = await res.json();
        setItems(data);
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
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Timeline className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">成长时间轴</h1>
            </div>
            <p className="text-muted-foreground">记录职业成长历程和重要时刻</p>
          </div>

          {items.length > 0 ? (
            <div className="space-y-6">
              {items.map((item) => {
                const config = typeConfig[item.type] || typeConfig.work;
                const Icon = config.icon;

                return (
                  <Card key={item.id} className="glass card-hover overflow-hidden border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex gap-4 md:gap-8">
                        <div className="hidden md:flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full ${config.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${config.color}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl font-bold text-primary">{item.year}</span>
                            <Badge className={`${config.bgColor} ${config.color} border-0`}>
                              {config.label}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="glass text-center p-12">
              <CardContent>
                <Timeline className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
                <p className="text-muted-foreground mb-2">暂无时间轴数据</p>
                <Link href="/import" className="text-primary text-sm flex items-center justify-center gap-1 hover:underline">
                  去智能导入添加
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
