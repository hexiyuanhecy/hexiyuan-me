'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Edit2, Trash2, Plus, Filter, LogOut, Save, X, Download, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
// import { getAllEntries, deleteEntry } from '@/lib/queries'; // prisma can only run on server

interface Entry {
  id: string;
  title: string;
  type: string;
  status: string;
  summary: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const ENTRY_TYPES: Record<string, string> = {
  work_experience: '工作经历',
  project: '项目',
  knowledge_link: '知识库',
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
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);
  const [editForm, setEditForm] = useState({ title: '', summary: '', status: 'published' });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    loadEntries();
  }, [searchTerm, filterType]);

  async function loadEntries() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/entries');
      const data = await response.json();
      let filtered = data;
      
      if (searchTerm) {
        filtered = filtered.filter((e: Entry) => 
          e.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (filterType !== 'all') {
        filtered = filtered.filter((e: Entry) => e.type === filterType);
      }
      
      setEntries(filtered);
    } catch (error) {
      console.error('Failed to load entries:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这条记录吗？此操作不可撤销。')) return;
    
    try {
      await fetch(`/api/entries?id=${id}`, { method: 'DELETE' });
      setEntries(prev => prev.filter(e => e.id !== id));
      alert('删除成功');
    } catch (error) {
      console.error('Failed to delete entry:', error);
      alert('删除失败，请重试');
    }
  };

  const handleBatchDelete = async () => {
    setDeleteLoading(true);
    try {
      for (const id of selectedIds) {
        await fetch(`/api/entries?id=${id}`, { method: 'DELETE' });
      }
      setEntries(prev => prev.filter(e => !selectedIds.includes(e.id)));
      setSelectedIds([]);
      setShowConfirmDialog(false);
      alert(`成功删除 ${selectedIds.length} 条记录`);
    } catch (error) {
      console.error('Failed to delete entries:', error);
      alert('删除失败，请重试');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleEdit = (entry: Entry) => {
    setEditingEntry(entry);
    setEditForm({
      title: entry.title,
      summary: entry.summary || '',
      status: entry.status,
    });
  };

  const handleSave = async () => {
    if (!editingEntry) return;
    
    try {
      await fetch(`/api/entries/${editingEntry.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      setEntries(prev => prev.map(e => 
        e.id === editingEntry.id 
          ? { ...e, ...editForm, updatedAt: new Date() }
          : e
      ));
      setEditingEntry(null);
      alert('保存成功');
    } catch (error) {
      console.error('Failed to update entry:', error);
      alert('保存失败，请重试');
    }
  };

  const handleExport = () => {
    const exportData = entries.map(e => ({
      id: e.id,
      title: e.title,
      type: ENTRY_TYPES[e.type],
      status: e.status,
      summary: e.summary,
      createdAt: e.createdAt.toISOString(),
      updatedAt: e.updatedAt.toISOString(),
    }));
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `entries-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    document.cookie = 'auth_token=; max-age=0; path=/';
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  const toggleSelectAll = (checked: boolean | 'indeterminate' | undefined) => {
    if (checked === true) {
      setSelectedIds(entries.map(e => e.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (id: string) => (checked: boolean | 'indeterminate' | undefined) => {
    if (checked === true) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(i => i !== id));
    }
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

        {selectedIds.length > 0 && (
          <Card className="glass border-destructive/30 mb-6 bg-destructive/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <span>已选择 <strong>{selectedIds.length}</strong> 条记录</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedIds([])}
                  >
                    取消选择
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => setShowConfirmDialog(true)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    批量删除
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
              <Button onClick={handleExport} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                导出数据
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground gap-2">
                <Plus className="w-4 h-4" />
                新增条目
              </Button>
            </div>
          </CardContent>
        </Card>

        {editingEntry && (
          <Card className="glass border-primary/30 mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">编辑条目</h3>
                <Button variant="ghost" size="sm" onClick={() => setEditingEntry(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">标题</label>
                  <Input
                    value={editForm.title}
                    onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">摘要</label>
                  <Textarea
                    value={editForm.summary}
                    onChange={(e) => setEditForm(prev => ({ ...prev, summary: e.target.value }))}
                    className="w-full min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">状态</label>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm(prev => ({ ...prev, status: e.target.value }))}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground w-full"
                  >
                    <option value="draft">草稿</option>
                    <option value="published">已发布</option>
                    <option value="archived">已归档</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    保存更改
                  </Button>
                  <Button variant="outline" onClick={() => setEditingEntry(null)}>
                    取消
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="glass border-primary/10 overflow-x-auto">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox 
                      checked={selectedIds.length === entries.length && entries.length > 0}
                      onCheckedChange={toggleSelectAll}
                      className="mr-2"
                    />
                  </TableHead>
                  <TableHead className="min-w-[200px]">标题</TableHead>
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
                      <TableCell>
                        <Checkbox 
                          checked={selectedIds.includes(entry.id)}
                          onCheckedChange={toggleSelect(entry.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium max-w-[300px] truncate">{entry.title}</TableCell>
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
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleEdit(entry)}
                          >
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

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">确认批量删除</h3>
                  <p className="text-sm text-muted-foreground">确定要删除选中的 {selectedIds.length} 条记录吗？此操作不可恢复。</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowConfirmDialog(false)} className="flex-1">
                  取消
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleBatchDelete}
                  disabled={deleteLoading}
                  className="flex-1 gap-2"
                >
                  {deleteLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      删除中...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      确认删除
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}