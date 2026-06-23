// 生活日常详情页 - PRD F2.5 生活日常详情页
// 展示单条生活事件的详细信息

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Camera, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 临时数据
const lifeEventData = {
  id: 'reading-2024-04',
  slug: 'reading-2024-04',
  title: '阅读《设计心理学》',
  date: '2024-04-15',
  category: '学习',
  content: `今天开始阅读《设计心理学》这本书，作者是唐·诺曼。

## 为什么要读这本书？

作为产品设计师，理解用户行为和心理是非常重要的。这本书给了我很多新的视角：

1. **可供性（Affordance）**：物品的设计应该让用户一眼就能看出如何使用
2. **映射（Mapping）**：控制和效果之间的关系应该清晰明了
3. **反馈（Feedback）**：每个动作都应该有及时的反馈
4. **概念模型（Conceptual Model）**：帮助用户理解系统是如何工作的

## 我的收获

读完前四章，我对日常设计中忽略的细节有了新的认识。比如：

- 门把手的设计（推还是拉？）
- 灶台旋钮的位置与对应的炉头
- 手机通知的声音与来源的对应

这些看似简单的设计背后都有深刻的心理学原理。

## 下一步

计划将书中的理论应用到实际项目中，用日记的形式记录实践过程。`,
  tags: ['阅读', '设计', '学习', '心理学', '产品经理'],
  images: [],
};

export default async function DailyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // TODO: 从数据库根据 slug 查询生活事件
  // const event = await getLifeEventBySlug(slug);
  // if (!event) notFound();

  // 临时使用假数据
  if (!lifeEventData) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 返回链接 */}
          <Link 
            href="/daily" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回生活日常
          </Link>

          {/* 事件概要 */}
          <Card className="glass mb-8 overflow-hidden border-purple-500/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-3">{lifeEventData.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {lifeEventData.date}
                    </span>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                      {lifeEventData.category}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lifeEventData.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-secondary/50 border-border/50">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 内容详情 */}
          <Card className="mb-8 bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {lifeEventData.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-semibold my-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-4 my-1">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="ml-4 my-1 list-decimal">
                        {paragraph.replace(/^\d+\.\s*/, '')}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="my-2 leading-relaxed">
                      {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={i} className="font-semibold text-purple-500">
                              {part.replace(/\*\*/g, '')}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>

              {/* 图片展示 - PRD F3 富文本 */}
              {lifeEventData.images && lifeEventData.images.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-purple-500" />
                    相关图片
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {lifeEventData.images.map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-secondary flex items-center justify-center border border-border/50">
                        <Camera className="w-8 h-8 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/daily">
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
