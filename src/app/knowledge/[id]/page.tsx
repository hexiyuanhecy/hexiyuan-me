import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getKnowledgeById } from '@/lib/queries';
import { notFound } from 'next/navigation';

export default async function KnowledgeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = await getKnowledgeById(id);

  if (!entry) {
    notFound();
  }

  const knowledge = entry.knowledge;
  const tags = knowledge?.tags ? JSON.parse(knowledge.tags) : [];

  const formatDate = (dateStr?: string | Date) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/knowledge" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            返回知识库
          </Link>

          <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4">{entry.title}</h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(entry.occurredAt || entry.createdAt)}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag: string, i: number) => (
                  <Badge key={i} className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>{knowledge?.description || entry.summary || '暂无描述'}</p>
              </div>

              {knowledge?.url && (
                <div className="pt-6 border-t border-border/50">
                  <a 
                    href={knowledge.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    打开原文链接
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link href="/knowledge" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              返回知识库
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
