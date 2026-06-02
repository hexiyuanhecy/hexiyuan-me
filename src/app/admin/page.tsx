'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Edit2, Trash2, Plus, Filter, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Entry {
  id: string;
  title: string;
  type: string;
  status: string;
  createdAt: string;
}

const ENTRY_TYPES: Record<string, string> = {
  work_experience: '工作经历',
  project: '项目',
  knowledge: '知识库',
  blog: '博客',
  travel: '旅行',
  food: '美食',
  daily: '日常',
  other: '其他',
};

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  published: 'bg-green-500/20 text-green-400 border-green-500/30',
  archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default function AdminPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEntries();
  }, [searchTerm, filterType]);

  async function loadEntries() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/entries');
      let data = await response.json();
      
      if (searchTerm) {
        data = data.filter((e: Entry) => 
          e.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (filterType !== 'all') {
        data = data.filter((e: Entry) => e.type === filterType);
      }
      
      setEntries(data);
    } catch (error) {
      console.error('Failed to load entries:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这条记录吗？')) return;
    
    try {
      await fetch(`/api/entries/${id}`, { method: 'DELETE' });
      setEntries(prev => prev.filter(e => e.id !== id));
    } catch (error) {
      console.error('Failed to delete entry:', error);
    }
  };

  const handleLogout = () => {
    document.cookie = 'auth_token=; max-age=0; path=/';
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">管理后台</h1>
            <p className="text-muted-foreground mt-1">管理所有内容条目</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            退出登录
          </Button>
        </div>

        <Card className="glass border-primary/10 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="搜索条目..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                >
                  <option value="all">全部类型</option>
                  {Object.entries(ENTRY_TYPES).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground gap-2">
                <Plus className="w-4 h-4" />
                新增条目
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/10">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>标题</TableHead>
                  <TableHead className="w-[120px]">类型</TableHead>
                  <TableHead className="w-[120px]">状态</TableHead>
                  <TableHead className="w-[160px]">创建时间</TableHead>
                  <TableHead className="w-[120px]">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      加载中...
                    </TableCell>
                  </TableRow>
                ) : entries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      暂无条目
                    </TableCell>
                  </TableRow>
                ) : (
                  entries.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-mono text-sm">{entry.id.slice(0, 8)}...</TableCell>
                      <TableCell className="font-medium">{entry.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ENTRY_TYPES[entry.type] || entry.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={STATUS_COLORS[entry.status]}>
                          {entry.status === 'draft' ? '草稿' : entry.status === 'published' ? '已发布' : '已归档'}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(entry.createdAt).toLocaleString('zh-CN')}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDelete(entry.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
