'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Timeline, Briefcase, Code, BookOpen, Plane, Utensils, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const typeConfig: Record<string, { icon: any; color: string; label: string; bgColor: string }> = {
  work_experience: { icon: Briefcase, color: 'text-primary', label: '💼 工作', bgColor: 'bg-primary/10' },
  project: { icon: Code, color: 'text-accent', label: '🛠️ 项目', bgColor: 'bg-accent/10' },
  knowledge_link: { icon: BookOpen, color: 'text-blue-500', label: '📚 知识', bgColor: 'bg-blue-500/10' },
  travel: { icon: Plane, color: 'text-green-500', label: '✈️ 旅行', bgColor: 'bg-green-500/10' },
  food: { icon: Utensils, color: 'text-orange-500', label: '🍜 美食', bgColor: 'bg-orange-500/10' },
  daily: { icon: Calendar, color: 'text-purple-500', label: '📝 日常', bgColor: 'bg-purple-500/10' },
  other: { icon: Calendar, color: 'text-muted-foreground', label: '其他', bgColor: 'bg-muted/50' },
};

export default function TimelinePage() {
  const [filterType, setFilterType] = useState('all');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const response = await fetch('/api/timeline');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to load timeline:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredItems = filterType === 'all' 
    ? items 
    : items.filter(item => item.type === filterType);

  const sortedItems = [...filteredItems].sort((a, b) => {
    const dateA = a.occurredAt ? new Date(a.occurredAt) : new Date(a.createdAt);
    const dateB = b.occurredAt ? new Date(b.occurredAt) : new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  const formatDate = (dateStr?: string | Date | null) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const getYear = (dateStr?: string | Date | null) => {
    if (!dateStr) return '';
    return new Date(dateStr).getFullYear();
  };

  const typeCounts = items.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Timeline className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">成长时间轴</h1>
            </div>
            <p className="text-muted-foreground">记录职业成长历程和生活点滴</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filterType === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterType('all')}
              className={filterType === 'all' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary/30 border-secondary'}
              size="sm"
            >
              全部 ({items.length})
            </Button>
            {Object.entries(typeConfig).map(([key, config]) => (
              <Button
                key={key}
                variant={filterType === key ? 'default' : 'outline'}
                onClick={() => setFilterType(key)}
                className={filterType === key ? `${config.bgColor.replace('/10', '')} hover:opacity-90` : 'bg-secondary/30 border-secondary'}
                size="sm"
              >
                {config.label} ({typeCounts[key] || 0})
              </Button>
            ))}
          </div>

          {sortedItems.length > 0 ? (
            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-6">
                {sortedItems.map((item) => {
                  const config = typeConfig[item.type] || typeConfig.other;
                  const Icon = config.icon;

                  return (
                    <Card key={item.id} className="glass card-hover overflow-hidden border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full ${config.bgColor} flex items-center justify-center shadow-lg`}>
                              <Icon className={`w-5 h-5 ${config.color}`} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className="text-lg font-bold text-primary">{getYear(item.occurredAt || item.createdAt)}</span>
                              <Badge className={`${config.bgColor} ${config.color} border-0`}>
                                {config.label}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(item.occurredAt || item.createdAt)}
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.summary || '暂无描述'}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
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