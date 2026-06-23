'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, ExternalLink, ArrowRight, Search, Tag, Filter } from 'lucide-react';
import Link from 'next/link';

interface KnowledgeEntry {
  id: string;
  title: string;
  summary: string | null;
  occurredAt: string | Date | null;
  createdAt: string | Date;
  knowledge: {
    url?: string;
    category?: string;
    tags: string;
    description?: string;
  } | null;
}

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [articles, setArticles] = useState<KnowledgeEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/api/knowledge');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to load knowledge:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach(article => {
      const tags = article.knowledge?.tags ? JSON.parse(article.knowledge.tags) : [];
      tags.forEach((tag: string) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [articles]);

  const allCategories = useMemo(() => {
    const categorySet = new Set<string>();
    articles.forEach(article => {
      if (article.knowledge?.category) {
        categorySet.add(article.knowledge.category);
      }
    });
    return Array.from(categorySet);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.knowledge?.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = !selectedTag || 
        (article.knowledge?.tags ? JSON.parse(article.knowledge.tags).includes(selectedTag) : false);
      
      return matchesSearch && matchesTag;
    });
  }, [articles, searchQuery, selectedTag]);

  const formatDate = (dateStr?: string | Date | null) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
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

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h1 className="text-3xl font-bold">知识库</h1>
            </div>
            <p className="text-muted-foreground">记录和分享技术心得、学习笔记和最佳实践</p>
          </div>

          <Card className="glass mb-8 overflow-hidden border-accent/10">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="搜索文章..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/30 border-secondary"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag(null);
                  }}
                  className="bg-secondary/30 border-secondary"
                >
                  重置筛选
                </Button>
              </div>
            </CardContent>
          </Card>

          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-2">标签筛选：</span>
              <Button
                variant={selectedTag === null ? 'default' : 'outline'}
                onClick={() => setSelectedTag(null)}
                size="sm"
                className={selectedTag === null ? 'bg-accent hover:bg-accent/90' : 'bg-secondary/30 border-secondary'}
              >
                全部
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  size="sm"
                  className={selectedTag === tag ? 'bg-accent hover:bg-accent/90' : 'bg-secondary/30 border-secondary'}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Button>
              ))}
            </div>
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArticles.map((entry) => {
                const knowledge = entry.knowledge;
                const tags = knowledge?.tags ? JSON.parse(knowledge.tags) : [];
                
                return (
                  <Link key={entry.id} href={`/knowledge/${entry.id}`} className="group">
                    <Card className="overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                            {knowledge?.url ? (
                              <a href={knowledge.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                {entry.title}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            ) : (
                              entry.title
                            )}
                          </h3>
                          {knowledge?.category && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                              {knowledge.category}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {knowledge?.description || entry.summary || '暂无描述'}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {formatDate(entry.occurredAt || entry.createdAt)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {tags.map((tag: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-xs bg-secondary/50 border-border/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Card className="text-center p-12 border-border/50 bg-card/80">
              <CardContent>
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent opacity-50" />
                <p className="text-muted-foreground mb-2">
                  {searchQuery || selectedTag ? '没有找到匹配的文章' : '暂无知识库文章'}
                </p>
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