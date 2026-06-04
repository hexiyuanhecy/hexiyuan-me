import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, ExternalLink, Calendar, TrendingUp, FileText, Zap } from 'lucide-react';
import Link from 'next/link';
import { getProjectById } from '@/lib/queries';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { parseJsonOrSplit } from '@/lib/utils';

function highlightNumbers(text: string): string {
  return text.replace(/(\d+(?:\.\d+)?)(%|倍|万|千|元|ms|s|次|人|个|天|月|年)/g, '<strong class="text-primary font-semibold">$1$2</strong>');
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = await getProjectById(id);

  if (!entry) {
    notFound();
  }

  const project = entry.project;
  const techStack = parseJsonOrSplit(project?.techStack);
  const highlights = parseJsonOrSplit(project?.highlights);
  const detailedContent = entry.textContent?.content || '';

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            返回项目列表
          </Link>

          <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h1 className="text-3xl font-bold">{project?.name || entry.title}</h1>
                  {project?.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      项目链接
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.occurredAt ? new Date(entry.occurredAt).toLocaleDateString('zh-CN') : '-'}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {techStack.slice(0, 5).map((tech: string, i: number) => (
                      <Badge key={i} className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                        {tech}
                      </Badge>
                    ))}
                    {techStack.length > 5 && (
                      <Badge variant="outline" className="text-sm">
                        +{techStack.length - 5}
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project?.description || entry.summary || '项目描述'}
                </p>
              </div>

              {highlights.length > 0 && (
                <div className="mb-6 pb-6 border-b border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    项目亮点
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((highlight: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                        <Star className="w-5 h-5 text-accent fill-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: highlightNumbers(highlight) }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detailedContent && (
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    项目详情
                  </h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <Markdown components={{
                      strong: ({ children }) => <strong className="text-primary font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="text-accent">{children}</em>,
                      h2: ({ children }) => <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">{children}</h3>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-2">{children}</ul>,
                      li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                      p: ({ children }) => <p className="mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightNumbers(String(children)) }} />,
                    }}>
                      {detailedContent}
                    </Markdown>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              返回项目列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}