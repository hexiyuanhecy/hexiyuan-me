// 旅行详情页 - PRD F2.4 旅行聚合详情页
// 展示一次旅行的详细信息和每日行程

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plane, Calendar, MapPin, ArrowLeft, ArrowRight, Home, Utensils, Camera } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 临时数据
const travelData = {
  id: 'tokyo-2024',
  slug: 'tokyo-2024',
  title: '日本东京之旅',
  destination: '东京',
  startDate: '2024-04-01',
  endDate: '2024-04-07',
  summary: '探索东京的现代与传统，从浅草寺到秋叶原',
  content: '这是一次难忘的东京之旅，涵盖了东京的热门景点、美食和购物体验。',
  tags: ['日本', '东京', '美食', '文化'],
};

const dayPlans = [
  {
    id: 'day-1',
    date: '2024-04-01',
    location: '成田机场 → 浅草',
    content: `**上午**：抵达成田机场，乘坐地铁前往浅草

**下午**：游览浅草寺，感受东京最古老的佛教寺庙

**晚上**：在浅草附近品尝人形烧和抹茶冰淇淋`,
    transportation: '地铁（成田快速）',
    accommodation: '浅草微笑酒店',
    images: [],
  },
  {
    id: 'day-2',
    date: '2024-04-02',
    location: '筑地市场 → 银座',
    content: `**早上**：早起前往筑地市场，品尝最新鲜的寿司和刺身

**下午**：步行至银座，开启购物模式

**晚上**：在银座品尝米其林拉面`,
    transportation: '步行 + 地铁',
    accommodation: '浅草微笑酒店',
    images: [],
  },
  {
    id: 'day-3',
    date: '2024-04-03',
    location: '富士山一日游',
    content: `**全天**：参加富士山一日游团，游览忍野八海和河口湖

**亮点**：
- 忍野八海清澈的泉水
- 远眺富士山的壮丽景色
- 品尝富士山泉水豆腐`,
    transportation: '旅游巴士',
    accommodation: '返回浅草',
    images: [],
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export default async function TravelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // TODO: 从数据库根据 slug 查询旅行数据
  // const travel = await getTravelBySlug(slug);
  // if (!travel) notFound();

  // 临时使用假数据
  if (slug !== 'tokyo-2024') {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 返回链接 */}
          <Link 
            href="/travel" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回旅行攻略
          </Link>

          {/* 旅行概要 */}
          <Card className="glass mb-8 overflow-hidden border-green-500/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{travelData.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-green-500" />
                      {travelData.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(travelData.startDate)} - {formatDate(travelData.endDate)}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{travelData.summary}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {travelData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 每日行程 - PRD F2.4 */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-green-500" />
            每日行程
          </h2>
          
          <div className="space-y-6 mb-8">
            {dayPlans.map((day, index) => (
              <Card key={day.id} className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg text-white font-bold">
                        D{index + 1}
                      </div>
                      {index < dayPlans.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">
                          {formatDate(day.date)}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {day.location}
                        </Badge>
                      </div>
                      
                      <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
                        <p className="text-foreground whitespace-pre-wrap">{day.content}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {day.transportation && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-green-500" />
                            <span>{day.transportation}</span>
                          </div>
                        )}
                        {day.accommodation && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Home className="w-4 h-4 text-green-500" />
                            <span>{day.accommodation}</span>
                          </div>
                        )}
                      </div>

                      {day.images && day.images.length > 0 && (
                        <div className="mt-4 flex gap-2 overflow-x-auto">
                          {day.images.map((img, i) => (
                            <div key={i} className="w-24 h-24 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center">
                              <Camera className="w-8 h-8 text-muted-foreground" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/travel">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回列表
              </Link>
            </Button>
            <Button asChild>
              <Link href="/timeline">
                查看时间轴
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
