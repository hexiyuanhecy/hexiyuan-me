'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, CheckCircle2, Sparkles, Code, Briefcase, BookOpen, History, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ImportResult {
  analyzed: any[];
  created: {
    experiences: any[];
    projects: any[];
    timelineItems: any[];
    knowledgeArticles: any[];
  };
}

export default function ImportPage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImport = async () => {
    if (!content.trim()) {
      setError('请输入要导入的内容');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) throw new Error('Import failed');
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError('导入失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const exampleContents = [
    '2022年加入某独角兽公司，担任高级前端工程师，负责核心产品架构设计与性能优化，使用 React、Next.js、TypeScript 技术栈',
    '主导电商平台前端重构项目，使用 React、Next.js、Redux Toolkit，实现了性能提升 40%，首屏加载优化到 1.5秒',
    '2024年撰写技术分享文章，分享内容关于 React Hooks 完全指南，包含大量的学习笔记',
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">智能导入</h1>
            </div>
            <p className="text-muted-foreground">输入你的经历或内容，系统会自动分析并添加到对应模块</p>
          </div>

          <Card className="glass mb-8 overflow-hidden border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                输入内容
              </CardTitle>
              <CardDescription>
                输入你的工作经历、项目介绍、知识分享或成就等内容，系统会自动分类
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="例如：2022年加入某科技公司，担任高级前端工程师，负责电商平台前端架构设计，使用 React、Next.js、TypeScript..."
                className="min-h-[200px] mb-4 bg-secondary/30 border-secondary"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    handleImport();
                  }
                }}
              />
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">快速示例（点击使用）：</p>
                <div className="flex flex-wrap gap-2">
                  {exampleContents.map((example, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="sm"
                      onClick={() => setContent(example)}
                      className="text-xs bg-secondary/30 border-secondary hover:bg-secondary/50"
                    >
                      {example.slice(0, 30)}...
                    </Button>
                  ))}
                </div>
              </div>
              <Button 
                onClick={handleImport} 
                disabled={loading || !content.trim()} 
                className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground"
              >
                {loading ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    正在分析...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    智能导入
                  </>
                )}
              </Button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </CardContent>
          </Card>

          {result && (
            <Card className="glass overflow-hidden border-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  导入成功
                </CardTitle>
                <CardDescription>
                  已自动分析并添加了以下内容
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {result.created.experiences.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="font-medium">工作经历</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {result.created.experiences.length}条
                      </Badge>
                    </div>
                    <div className="pl-7 text-sm text-muted-foreground">
                      {result.created.experiences[0].role || result.created.experiences[0].company}...
                    </div>
                  </div>
                )}
                {result.created.projects.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="font-medium">项目</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {result.created.projects.length}条
                      </Badge>
                    </div>
                    <div className="pl-7 text-sm text-muted-foreground">
                      {result.created.projects[0].title}
                    </div>
                  </div>
                )}
                {result.created.timelineItems.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <History className="w-5 h-5 text-primary" />
                      <span className="font-medium">时间轴</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {result.created.timelineItems.length}条
                      </Badge>
                    </div>
                    <div className="pl-7 text-sm text-muted-foreground">
                      {result.created.timelineItems[0].title}
                    </div>
                  </div>
                )}
                {result.created.knowledgeArticles.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-accent" />
                      <span className="font-medium">知识库</span>
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        {result.created.knowledgeArticles.length}条
                      </Badge>
                    </div>
                    <div className="pl-7 text-sm text-muted-foreground">
                      {result.created.knowledgeArticles[0].title}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 pt-4">
                  <Button variant="outline" className="bg-secondary/30 border-secondary" asChild>
                    <Link href="/resume">查看简历</Link>
                  </Button>
                  <Button variant="outline" className="bg-secondary/30 border-secondary" asChild>
                    <Link href="/projects">查看项目</Link>
                  </Button>
                  <Button variant="outline" className="bg-secondary/30 border-secondary" asChild>
                    <Link href="/timeline">查看时间轴</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
