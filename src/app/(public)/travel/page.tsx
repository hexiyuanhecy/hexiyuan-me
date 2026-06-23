// 旅行页面 - PRD F2.4
// 展示所有旅行经历

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 临时数据，实际应从数据库读取
const travels = [
  {
    id: 'tokyo-2024',
    slug: 'tokyo-2024',
    title: '日本东京之旅',
    destination: '东京',
    startDate: '2024-04-01',
    endDate: '2024-04-07',
    summary: '探索东京的现代与传统，从浅草寺到秋叶原',
    tags: ['日本', '东京', '美食', '文化'],
  },
  {
    id: 'hangzhou-2023',
    slug: 'hangzhou-2023',
    title: '杭州周末游',
    destination: '杭州',
    startDate: '2023-10-01',
    endDate: '2023-10-03',
    summary: '西湖美景，品味江南水乡',
    tags: ['杭州', '西湖', '周末游'],
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export default async function TravelPage() {
  // TODO: 从数据库读取旅行数据
  // const travels = await getTravels();

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-green-500" />
              <h1 className="text-3xl font-bold">旅行攻略</h1>
            </div>
            <p className="text-muted-foreground">记录每一次旅途的美好瞬间</p>
          </div>

          {/* 全国地图占位 - PRD 要求 */}
          <Card className="glass mb-8 overflow-hidden border-green-500/10">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-green-500 opacity-50" />
              <p className="text-muted-foreground">全国地图展示功能开发中</p>
              <p className="text-sm text-muted-foreground mt-1">目前共有 {travels.length} 个旅行目的地</p>
            </CardContent>
          </Card>

          {/* 旅行列表 - PRD F2.4 */}
          <div className="space-y-6">
            {travels.map((travel) => (
              <Link key={travel.id} href={`/travel/${travel.slug}`} className="group block">
                <Card className="overflow-hidden border-border/50 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                        <Plane className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg group-hover:text-green-500 transition-colors">
                            {travel.title}
                          </h3>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                            {travel.destination}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {travel.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {travel.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs bg-secondary/50 border-border/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-green-500 transition-all flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {travels.length === 0 && (
            <Card className="text-center p-12 bg-card/80 border-border/50">
              <CardContent>
                <Plane className="w-12 h-12 mx-auto mb-4 text-green-500 opacity-50" />
                <p className="text-muted-foreground mb-2">暂无旅行数据</p>
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
