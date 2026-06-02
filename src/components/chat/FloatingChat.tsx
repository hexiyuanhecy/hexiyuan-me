'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const FAQ_RESPONSES: Record<string, string> = {
  '你好': '你好！我是何西元的 AI 数字分身，很高兴认识你！',
  '你是谁': '我是何西元的 AI 数字分身，一个前端工程师的智能助手。',
  '技术栈': '何西元擅长 React、Next.js、TypeScript、Tailwind CSS 等前端技术。',
  '工作经历': '他曾就职于头部电商与独角兽 SaaS 公司，有丰富的企业级项目经验。',
  '项目经验': '他主导过百万级用户电商平台的前端架构升级，性能提升显著。',
  '学历': '何西元毕业于计算机相关专业，2019年进入互联网行业。',
  '爱好': '除了技术，他喜欢旅行、阅读和探索新技术。',
  '联系方式': '你可以通过网站上的 GitHub 或 LinkedIn 链接联系他。',
  '简历': '你可以访问 /resume 页面查看详细的工作经历和技能。',
  '项目': '访问 /projects 页面可以看到他的项目作品集。',
};

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        content: '你好！我是何西元的 AI 数字分身，很高兴为你介绍他的技术能力和项目经历。有什么想了解的吗？',
        role: 'assistant',
        timestamp: new Date(),
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    let response = '';
    const lowerInput = input.toLowerCase();
    
    for (const [keyword, answer] of Object.entries(FAQ_RESPONSES)) {
      if (lowerInput.includes(keyword)) {
        response = answer;
        break;
      }
    }

    if (!response) {
      response = `抱歉，我还在学习中。你可以访问网站的其他板块了解更多：\n- /resume - 简历时间轴\n- /projects - 项目作品集\n- /knowledge - 知识库\n- /timeline - 成长时间轴`;
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response,
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-110 z-50"
        variant="default"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center sm:items-center">
          <div className="w-full max-w-lg mx-4 mb-20 sm:mb-0">
            <Card className="glass border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                      H
                    </div>
                    <div>
                      <p className="font-semibold">AI 数字分身</p>
                      <p className="text-xs text-muted-foreground">何西元的智能助手</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ScrollArea className="h-80">
                  <div ref={scrollRef} className="p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {message.role === 'user' ? 'U' : 'H'}
                        </div>
                        <div className={`max-w-[70%] ${message.role === 'user' ? 'text-right' : ''}`}>
                          <p className={`px-4 py-2 rounded-xl ${
                            message.role === 'user'
                              ? 'bg-primary/20 text-foreground rounded-br-sm'
                              : 'bg-secondary/50 text-foreground rounded-bl-sm'
                          }`}>
                            {message.content}
                          </p>
                          <p className="text-xs mt-1 text-muted-foreground">
                            {message.timestamp.toLocaleTimeString('zh-CN', { hour12: false })}
                          </p>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-bold">
                          H
                        </div>
                        <div className="px-4 py-2 rounded-xl bg-secondary/50 rounded-bl-sm">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="输入你的问题..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button onClick={handleSend} disabled={isLoading} className="bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
