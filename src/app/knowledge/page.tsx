'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  tags: string[];
}

export default function KnowledgePage() {
  const [articles, setArticles] = useState<KnowledgeArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/knowledge');
        const data = await res.json();
        setArticles(data);
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 animate-pulse" />
          <span className="text-muted-foreground">加载中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h1 className="text-3xl font-bold">知识库</h1>
            </div>
            <p className="text-muted-foreground">记录和分享技术心得、学习笔记和最佳实践</p>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="glass card-hover group overflow-hidden border-accent/10 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-secondary/30 border-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass text-center p-12">
              <CardContent>
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent opacity-50" />
                <p className="text-muted-foreground mb-2">暂无知识库文章</p>
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
