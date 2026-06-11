'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Upload, CheckCircle2, Sparkles, Code, Briefcase, BookOpen, History, ArrowRight, Trash2, AlertCircle, FileText, Layers, Eye, EyeOff, Edit3, Plus, Merge } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AnalyzedItem {
  id: string;
  type: string;
  title: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  date: string;
  detailedMarkdown: string;
  suggestedModules: string[];
  selectedModules: string[];
  confirmed: boolean;
  status: 'published' | 'draft';
}

interface ImportResult {
  success: boolean;
  message: string;
  counts: {
    resume: number;
    projects: number;
    timeline: number;
    knowledge: number;
  };
}

const MODULES = [
  { name: 'resume', label: '简历时间轴', icon: Briefcase },
  { name: 'projects', label: '项目作品集', icon: Code },
  { name: 'timeline', label: '成长时间轴', icon: History },
  { name: 'knowledge', label: '知识库', icon: BookOpen },
];

const TYPE_LABELS: Record<string, string> = {
  work_experience: '工作经历',
  project: '项目',
  knowledge_link: '知识库链接',
  travel: '旅行',
  food: '美食',
  daily: '日常',
  other: '其他',
};

const TYPE_COLORS: Record<string, string> = {
  work_experience: 'bg-blue-500',
  project: 'bg-purple-500',
  knowledge_link: 'bg-green-500',
  travel: 'bg-orange-500',
  food: 'bg-pink-500',
  daily: 'bg-teal-500',
  other: 'bg-gray-500',
};

const TEMPLATES = {
  work_experience: `公司：某科技公司
职位：高级前端工程师
时间：2022-01 至 2024-06
技术栈：React, Next.js, TypeScript
职责描述：负责核心业务系统的前端架构设计与开发，主导性能优化项目，带领团队完成多个关键项目交付。`,
  project: `项目名称：电商平台前端重构
技术栈：React, Next.js, TypeScript, Tailwind CSS
项目描述：对现有电商平台进行前端架构升级，采用微前端方案实现模块解耦。
主要亮点：
- 性能提升 40%
- 首屏加载时间优化至 1.5s
- 代码复用率提升至 60%`,
  travel: `目的地：日本东京
旅行时间：2024-04-01 至 2024-04-07
行程亮点：
- 浅草寺祈福
- 筑地市场美食
- 富士山一日游
- 秋叶原动漫圣地巡礼`,
};

type AIService = 'agnes' | 'deepseek';

const AI_SERVICES: { value: AIService; label: string; description: string }[] = [
  { value: 'agnes', label: 'Agnes AI', description: '智能分析，支持多语言' },
  { value: 'deepseek', label: 'DeepSeek', description: '深度理解，专业领域' },
];

export default function ImportPage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'quick' | 'deep'>('quick');
  const [aiService, setAiService] = useState<AIService>('agnes');
  const [analyzedItems, setAnalyzedItems] = useState<AnalyzedItem[]>([]);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'detail'>('summary');
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!content.trim()) {
      setError('请输入要导入的内容');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, mode, analyzeOnly: true, aiService }),
      });

      if (!res.ok) throw new Error('分析失败');
      const data = await res.json();

      const items: AnalyzedItem[] = (data.items || []).map((item: any) => ({
        id: item.id || Math.random().toString(36).substr(2, 9),
        type: item.type || 'other',
        title: item.title || item.data?.title || '未命名',
        summary: item.summary || item.data?.summary || '',
        techStack: item.techStack || item.data?.techStack || [],
        highlights: item.highlights || item.data?.highlights || [],
        date: item.date || item.data?.date || '',
        detailedMarkdown: item.detailed_markdown || item.data?.description || '',
        suggestedModules: item.suggested_modules || item.data?.suggested_modules || ['timeline'],
        selectedModules: item.suggested_modules || item.data?.suggested_modules || ['timeline'],
        confirmed: true,
        status: 'published',
      }));

      setAnalyzedItems(items);
      setImportResult(null);
    } catch (err) {
      setError('分析失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    const confirmedItems = analyzedItems.filter(item => item.confirmed);

    if (confirmedItems.length === 0) {
      setError('请至少选择一项内容导入');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/import/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: confirmedItems }),
      });

      if (!res.ok) throw new Error('导入失败');
      const data = await res.json();
      setImportResult({
        success: true,
        message: data.message || '导入成功',
        counts: data.counts || { resume: 0, projects: 0, timeline: 0, knowledge: 0 },
      });
      setAnalyzedItems([]);
      setContent('');
    } catch (err) {
      setError('导入失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const toggleModule = (itemId: string, moduleName: string) => {
    setAnalyzedItems(items => items.map(item => {
      if (item.id !== itemId) return item;

      const isWorkExp = item.type === 'work_experience';
      if (isWorkExp && moduleName === 'resume') {
        return item;
      }

      const hasModule = item.selectedModules.includes(moduleName);
      return {
        ...item,
        selectedModules: hasModule
          ? item.selectedModules.filter(m => m !== moduleName)
          : [...item.selectedModules, moduleName],
      };
    }));
  };

  const updateItemField = (itemId: string, field: keyof AnalyzedItem, value: any) => {
    setAnalyzedItems(items => items.map(item => {
      if (item.id !== itemId) return item;
      return { ...item, [field]: value };
    }));
  };

  const deleteItem = (itemId: string) => {
    setAnalyzedItems(items => items.filter(item => item.id !== itemId));
  };

  const mergeItems = (ids: string[]) => {
    const selectedItems = analyzedItems.filter(item => ids.includes(item.id));
    if (selectedItems.length < 2) return;

    const mergedTitle = selectedItems.map(i => i.title).join(' + ');
    const mergedSummary = selectedItems.map(i => i.summary).join('\n\n');
    const mergedMarkdown = selectedItems.map(i => i.detailedMarkdown).join('\n\n---\n\n');
    const mergedTechStack = [...new Set(selectedItems.flatMap(i => i.techStack))];
    const mergedHighlights = [...new Set(selectedItems.flatMap(i => i.highlights))];

    const mergedItem: AnalyzedItem = {
      id: Math.random().toString(36).substr(2, 9),
      type: selectedItems[0].type,
      title: mergedTitle,
      summary: mergedSummary,
      techStack: mergedTechStack,
      highlights: mergedHighlights,
      date: selectedItems[0].date,
      detailedMarkdown: mergedMarkdown,
      suggestedModules: selectedItems[0].suggestedModules,
      selectedModules: selectedItems[0].selectedModules,
      confirmed: true,
      status: 'published',
    };

    setAnalyzedItems(items => [...items.filter(item => !ids.includes(item.id)), mergedItem]);
  };

  const splitItem = (itemId: string) => {
    const item = analyzedItems.find(i => i.id === itemId);
    if (!item) return;

    const parts = item.detailedMarkdown.split('---\n\n').filter(p => p.trim());
    if (parts.length < 2) {
      setError('无法拆分，内容中没有分隔符 ---');
      return;
    }

    const newItems: AnalyzedItem[] = parts.map((part, index) => ({
      ...item,
      id: `${itemId}-${index}`,
      title: `${item.title} (${index + 1})`,
      detailedMarkdown: part,
      summary: part.slice(0, 100) + (part.length > 100 ? '...' : ''),
    }));

    setAnalyzedItems(items => [...items.filter(i => i.id !== itemId), ...newItems]);
  };

  const applyTemplate = (type: string) => {
    setContent(TEMPLATES[type as keyof typeof TEMPLATES] || '');
    setActiveTemplate(type);
  };

  if (importResult) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="glass overflow-hidden border-accent/10">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>导入成功</CardTitle>
              <CardDescription>{importResult.message}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {importResult.counts.resume > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">简历时间轴</p>
                      <p className="font-bold text-blue-600">{importResult.counts.resume} 条</p>
                    </div>
                  </div>
                )}
                {importResult.counts.projects > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Code className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">项目作品集</p>
                      <p className="font-bold text-purple-600">{importResult.counts.projects} 条</p>
                    </div>
                  </div>
                )}
                {importResult.counts.timeline > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <History className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">成长时间轴</p>
                      <p className="font-bold text-orange-600">{importResult.counts.timeline} 条</p>
                    </div>
                  </div>
                )}
                {importResult.counts.knowledge > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">知识库</p>
                      <p className="font-bold text-green-600">{importResult.counts.knowledge} 条</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <Button variant="outline" className="bg-secondary/30 border-secondary" onClick={() => setImportResult(null)}>
                  继续导入
                </Button>
                <Button variant="outline" className="bg-secondary/30 border-secondary" asChild>
                  <Link href="/admin">管理内容</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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

          {analyzedItems.length === 0 ? (
            <Card className="glass mb-8 overflow-hidden border-primary/10">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    输入内容
                  </CardTitle>
                  <CardDescription>
                    {mode === 'quick' ? '快速录入单条内容' : '深度整理模式：自动去重、拆分、排版'}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={mode === 'quick' ? 'default' : 'outline'}
                      onClick={() => setMode('quick')}
                      size="sm"
                      disabled={loading}
                      className={mode === 'quick' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary/30'}
                    >
                      快速模式
                    </Button>
                    <Button
                      variant={mode === 'deep' ? 'default' : 'outline'}
                      onClick={() => setMode('deep')}
                      size="sm"
                      disabled={loading}
                      className={mode === 'deep' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary/30'}
                    >
                      深度整理
                    </Button>
                  </div>
                  <div className="h-6 w-px bg-border hidden sm:block" />
                  <div className="flex flex-wrap gap-2">
                    {AI_SERVICES.map((service) => (
                      <Button
                        key={service.value}
                        variant={aiService === service.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAiService(service.value)}
                        disabled={loading}
                        className={cn(
                          'text-sm',
                          aiService === service.value
                            ? 'bg-primary hover:bg-primary/90'
                            : 'bg-secondary/30 border-secondary'
                        )}
                      >
                        {service.label}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    {AI_SERVICES.find(s => s.value === aiService)?.description}
                  </p>
                </div> */}

                <div className="mb-4 mt-4 flex items-center gap-2">
                  <div className="text-sm text-muted-foreground mb-2">模板参考（点击使用）：</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(TEMPLATES).map(([type, _]) => (
                      <Button
                        key={type}
                        variant="outline"
                        size="sm"
                        onClick={() => applyTemplate(type)}
                        disabled={loading}
                        className={cn(
                          'text-xs bg-secondary/30 border-secondary hover:bg-secondary/50',
                          activeTemplate === type && 'border-primary text-primary'
                        )}
                      >
                        {TYPE_LABELS[type]}
                      </Button>
                    ))}
                  </div>
                </div>

                <Textarea
                  placeholder={mode === 'quick'
                    ? '例如：2022年加入某科技公司，担任高级前端工程师，负责电商平台前端架构设计，使用 React、Next.js、TypeScript...'
                    : '粘贴大段文本（如完整简历、多项目复盘、旅行游记合集等），系统会自动去重、拆分和排版...'
                  }
                  className="min-h-[200px] max-h-[400px] overflow-y-auto mb-4 bg-secondary/30 border-secondary"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  disabled={loading}
                  readOnly={loading}
                />

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <div className="flex justify-end">
                  <Button
                    onClick={handleAnalyze}
                    disabled={loading || !content.trim()}
                    className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground"
                  >
                    {loading ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        分析中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        {mode === 'quick' ? '智能分析' : '深度整理'}
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="glass mb-6 overflow-hidden border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      分析结果
                    </CardTitle>
                    <CardDescription>共 {analyzedItems.length} 条内容，点击编辑或调整模块</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setViewMode(viewMode === 'summary' ? 'detail' : 'summary')}
                      className="bg-secondary/30"
                    >
                      {viewMode === 'summary' ? <Eye className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      {viewMode === 'summary' ? '详情视图' : '摘要视图'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setAnalyzedItems([]);
                        setContent('');
                      }}
                      className="bg-secondary/30"
                    >
                      重新导入
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-4 mb-6">
                {analyzedItems.map((item) => (
                  <Card key={item.id} className="glass border-primary/10 overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={cn('w-3 h-3 rounded-full', TYPE_COLORS[item.type])} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {TYPE_LABELS[item.type]}
                            </Badge>
                            {item.date && (
                              <Badge variant="secondary" className="text-xs">
                                {item.date}
                              </Badge>
                            )}
                            <select
                              value={item.status}
                              onChange={(e) => updateItemField(item.id, 'status', e.target.value)}
                              className="text-xs px-2 py-1 rounded border border-border bg-background"
                            >
                              <option value="published">已发布</option>
                              <option value="draft">草稿</option>
                            </select>
                          </div>

                          <Input
                            value={item.title}
                            onChange={(e) => updateItemField(item.id, 'title', e.target.value)}
                            className="font-medium mb-2 bg-transparent border-none focus-visible:ring-0 px-0"
                            placeholder="标题"
                          />

                          {viewMode === 'summary' ? (
                            <div className="space-y-2">
                              <Textarea
                                value={item.summary}
                                onChange={(e) => updateItemField(item.id, 'summary', e.target.value)}
                                className="min-h-[60px] text-sm bg-secondary/30"
                                placeholder="摘要"
                              />

                              {item.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {item.techStack.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {item.highlights.length > 0 && (
                                <div className="text-sm text-muted-foreground">
                                  <p className="font-medium mb-1">亮点：</p>
                                  <ul className="list-disc list-inside space-y-1">
                                    {item.highlights.map((h, i) => (
                                      <li key={i}>{h}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : (
                            <ScrollArea className="h-40">
                              <Textarea
                                value={item.detailedMarkdown}
                                onChange={(e) => updateItemField(item.id, 'detailedMarkdown', e.target.value)}
                                className="min-h-[160px] text-sm bg-secondary/30 font-mono"
                                placeholder="详细内容（Markdown格式）"
                              />
                            </ScrollArea>
                          )}

                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 mb-2">
                              <Layers className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-medium">导入模块</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {MODULES.map((module) => {
                                const Icon = module.icon;
                                const isWorkExp = item.type === 'work_experience';
                                const isSelected = item.selectedModules.includes(module.name);
                                const isDisabled = isWorkExp && module.name === 'resume';

                                return (
                                  <button
                                    key={module.name}
                                    onClick={() => toggleModule(item.id, module.name)}
                                    disabled={isDisabled}
                                    className={cn(
                                      'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all',
                                      isDisabled && 'opacity-50 cursor-not-allowed',
                                      isSelected
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'bg-secondary/30 text-muted-foreground hover:bg-secondary/50 border border-transparent'
                                    )}
                                  >
                                    <Icon className="w-3.5 h-3.5" />
                                    {module.label}
                                    {isDisabled && <span className="text-xs">(强制)</span>}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => splitItem(item.id)}
                            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                            title="拆分条目"
                          >
                            <Plus className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                            title="删除"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                          <button
                            onClick={() => updateItemField(item.id, 'confirmed', !item.confirmed)}
                            className={cn(
                              'p-2 rounded-lg transition-colors',
                              item.confirmed
                                ? 'bg-primary/10 text-primary'
                                : 'bg-secondary/30 text-muted-foreground'
                            )}
                            title={item.confirmed ? '取消选中' : '选中'}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass border-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        已选择 {analyzedItems.filter(i => i.confirmed).length}/{analyzedItems.length} 条内容
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={handleConfirm}
                        disabled={loading || analyzedItems.filter(i => i.confirmed).length === 0}
                        className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground"
                      >
                        {loading ? (
                          <>
                            <Sparkles className="w-4 h-4 animate-spin" />
                            正在导入...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            确认入库
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
