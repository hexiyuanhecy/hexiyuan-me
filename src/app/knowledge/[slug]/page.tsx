'use client';

import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';

interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  tags: string[];
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function KnowledgeDetailPage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<KnowledgeArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      try {
        const res = await fetch('/api/knowledge');
        const articles = await res.json();
        const found = articles.find((a: KnowledgeArticle) => a.slug === params.slug);
        setArticle(found || null);
      } catch (error) {
        console.error('Failed to load article:', error);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
  }, [params.slug]);

  const tocItems: TocItem[] = useMemo(() => {
    if (!article?.content) return [];
    const lines = article.content.split('\n');
    const items: TocItem[] = [];
    
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        items.push({ id, text, level });
      }
    });
    
    return items;
  }, [article?.content]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <p className="text-muted-foreground mb-4">文章不存在</p>
        <Link href="/knowledge" className="text-primary hover:underline">
          返回知识库
        </Link>
      </div>
    );
  }

  const handleAnchorClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('highlight');
      setTimeout(() => element.classList.remove('highlight'), 1500);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/knowledge" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              返回知识库
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card className="glass border-accent/10 mb-6">
                <CardContent className="p-8">
                  <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                  <p className="text-muted-foreground mb-6 text-lg">{article.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, i) => (
                        <Badge key={i} className="bg-secondary/50 text-foreground border-secondary flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-accent/10">
                <CardContent className="p-8">
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: article.content 
                        ? marked(article.content).replace(/<h([23]) id="([^"]+)">(.+?)<\/h\1>/g, '<h$1 id="$2">$3</h$1>')
                        : ''
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="glass border-accent/10 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">目录</h3>
                  {tocItems.length > 0 ? (
                    <nav className="space-y-2">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleAnchorClick(item.id)}
                          className={`block w-full text-left text-sm py-1 px-2 rounded hover:bg-secondary/50 transition-colors ${
                            item.level === 2 ? 'font-medium' : 'text-muted-foreground pl-4'
                          }`}
                        >
                          {item.text}
                        </button>
                      ))}
                    </nav>
                  ) : (
                    <p className="text-sm text-muted-foreground">暂无目录</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
