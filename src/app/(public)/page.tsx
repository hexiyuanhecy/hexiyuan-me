import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Code, BookOpen, MessageCircle, ArrowRight, Mail, MapPin, Sparkles, Zap, Target, Users, GraduationCap, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';
import { getProfile, getProjects } from '@/lib/queries';
import { parseJsonOrSplit } from '@/lib/utils';

const stats = [
  { icon: Zap, value: '8+', label: '年开发经验' },
  { icon: Target, value: '50+', label: '完成项目' },
  { icon: Users, value: '100K+', label: '用户服务' },
];

const skills = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'Vue', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 78, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'Docker', level: 70, category: 'devops' },
  { name: 'Prisma', level: 85, category: 'database' },
  { name: 'Redux', level: 82, category: 'frontend' },
  { name: 'Webpack', level: 76, category: 'build' },
  { name: 'Git', level: 90, category: 'tools' },
];

const categoryColors: Record<string, string> = {
  frontend: 'bg-blue-500',
  backend: 'bg-green-500',
  database: 'bg-purple-500',
  devops: 'bg-orange-500',
  build: 'bg-pink-500',
  tools: 'bg-teal-500',
};

const sections = [
  {
    id: 'resume',
    icon: Briefcase,
    title: '专业经历',
    description: '工作经历、项目经验与技能展示',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    id: 'timeline',
    icon: TrendingUp,
    title: '成长时间轴',
    description: '工作、旅行、学习的精彩瞬间',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
  {
    id: 'knowledge',
    icon: BookOpen,
    title: '知识库',
    description: '技术文章、学习笔记与资源链接',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
];

export default async function Home() {
  const profile = await getProfile();
  const projects = await getProjects();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />

      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-[2px] shadow-lg shadow-primary/10">
                <Avatar className="w-full h-full rounded-2xl bg-card border border-border/50">
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {profile.name?.charAt(0) || 'H'}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary/80 to-accent/80 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              {profile.title}
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="rounded-xl p-4 text-center bg-secondary/30 hover:bg-secondary/50 transition-all border border-border/30">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              技能标签云
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm font-medium bg-secondary/50 border-border/50 hover:${categoryColors[skill.category]}/20 hover:border-${categoryColors[skill.category].replace('bg-', '')}/40 transition-all cursor-default group`}
                >
                  <span className="flex items-center gap-2">
                    {skill.name}
                    <span className="text-xs opacity-60">{skill.level}%</span>
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Globe className="w-6 h-6 text-accent" />
              探索板块
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link key={section.id} href={`/${section.id}`} className="group">
                    <Card className={`overflow-hidden border ${section.borderColor} hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:-translate-y-1`}>
                      <CardHeader className="pb-2">
                        <div className={`w-12 h-12 rounded-xl ${section.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`} />
                        </div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <CardDescription className="text-sm">{section.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          进入探索
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                精选项目
              </h2>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                查看全部
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((entry) => {
                const project = entry.project;
                const techStack = parseJsonOrSplit(project?.techStack);

                return (
                  <Link key={entry.id} href={`/projects/${entry.id}`} className="group">
                    <Card className="overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {project?.name || entry.title}
                          </h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {entry.occurredAt ? new Date(entry.occurredAt).getFullYear() : ''}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project?.description || entry.summary || '项目描述'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {techStack.slice(0, 4).map((tech: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-xs bg-secondary/50 border-border/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {projects.length === 0 && (
              <Card className="text-center p-12 bg-card/80 border-border/50">
                <CardContent>
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
                  <p className="text-muted-foreground mb-2">暂无项目数据</p>
                  <p className="text-sm text-muted-foreground">去智能导入页面添加项目吧！</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
