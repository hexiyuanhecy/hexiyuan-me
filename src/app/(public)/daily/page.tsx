// 生活日常聚合页 - PRD F2.5
// 展示所有生活日常，按月聚合

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

// 临时数据
const lifeEvents = [
  {
    id: 'reading-2024-04',
    slug: 'reading-2024-04',
    title: '阅读《设计心理学》',
    date: '2024-04-15',
    category: '学习',
    summary: '深入了解用户体验设计的核心原则',
    tags: ['阅读', '设计', '学习'],
  },
  {
    id: 'cooking-2024-04',
    slug: 'cooking-2024-04',
    title: '周末烘焙时光',
    date: '2024-04-14',
    category: '美食',
    summary: '第一次尝试制作马卡龙，成功率 60%',
    tags: ['烘焙', '美食', '周末'],
  },
  {
    id: 'trip-2024-04',
    slug: 'trip-2024-04',
    title: '城市骑行',
    date: '2024-04-13',
    category: '运动',
    summary: '绕城骑行 30 公里，发现城市角落的美',
    tags: ['骑行', '运动', '探索'],
  },
  {
    id: 'learning-2024-03',
    slug: 'learning-2024-03',
    title: '学习 AI 新技术',
    date: '2024-03-28',
    category: '学习',
    summary: '开始学习机器学习基础概念',
    tags: ['AI', '学习', '技术'],
  },
];

// 按月分组
const groupedEvents = lifeEvents.reduce((acc, event) => {
  const yearMonth = event.date.substring(0, 7); // YYYY-MM
  if (!acc[yearMonth]) {
    acc[yearMonth] = [];
  }
  acc[yearMonth].push(event);
  return acc;
}, {} as Record<string, typeof lifeEvents>);

const formatMonth = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-');
  return `${year}年${parseInt(month)}月`;
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case '学习':
      return <Sparkles className="w-4 h-4" />;
    case '美食':
      return <Sparkles className="w-4 h-4" />;
    case '运动':
      return <Sparkles className="w-4 h-4" />;
    default:
      return <Sparkles className="w-4 h-4" />;
  }
};

export default async function DailyPage() {
  // TODO: 从数据库读取生活事件数据
  // const events = await getLifeEvents();
  // 按月份分组

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-purple-500" />
              <h1 className="text-3xl font-bold">生活日常</h1>
            </div>
            <p className="text-muted-foreground">记录生活的点点滴滴</p>
          </div>

          {/* 月份分组列表 - PRD F2.5 生活月虚拟容器 */}
          <div className="space-y-8">
            {Object.entries(groupedEvents)
              .sort(([a], [b]) => b.localeCompare(a)) // 降序排列
              .map(([yearMonth, events]) => (
                <div key={yearMonth}>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 sticky top-16 z-10 bg-background/80 backdrop-blur-sm py-2">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                      {formatMonth(yearMonth)}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-normal">
                      {events.length} 条记录
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {events.map((event) => (
                      <Link key={event.id} href={`/daily/${event.slug}`} className="group block">
                        <Card className="overflow-hidden border-border/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20 text-white">
                                {getCategoryIcon(event.category)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-medium group-hover:text-purple-500 transition-colors">
                                    {event.title}
                                  </h3>
                                  <Badge variant="outline" className="text-xs bg-secondary/50 border-border/50">
                                    {event.category}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                  <Clock className="w-3 h-3" />
                                  {event.date}
                                </div>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                  {event.summary}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {event.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs py-0 px-1.5 bg-secondary/30 border-border/30">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-purple-500 transition-all flex-shrink-0 mt-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {lifeEvents.length === 0 && (
            <Card className="text-center p-12 bg-card/80 border-border/50">
              <CardContent>
                <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-500 opacity-50" />
                <p className="text-muted-foreground mb-2">暂无生活记录</p>
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
