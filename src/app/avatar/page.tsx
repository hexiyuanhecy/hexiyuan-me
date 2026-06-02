'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, MessageCircle, Sparkles, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const mockResponses = [
  '您好！我是何西元的数字分身。很高兴能与您交流！',
  '何西元是一位资深的前端工程师，拥有多年的开发经验。',
  '他擅长 React、Next.js、TypeScript 等现代前端技术栈。',
  '如果您想了解更多关于他的项目或经历，可以访问他的个人主页。',
  '感谢您的提问！如果您有其他问题，请随时告诉我。',
];

export default function AvatarPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      content: '您好！我是何西元的数字分身。有什么我可以帮您了解的吗？',
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const responseMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
      role: 'assistant',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, responseMessage]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col relative z-10">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">AI 数字分身</h1>
            </div>
            <p className="text-muted-foreground">与何西元的 AI 分身对话</p>
          </div>

          <Card className="glass flex-1 flex flex-col h-[500px] border-primary/10">
            <CardContent className="flex-1 flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <Avatar className="w-10 h-10 flex-shrink-0">
                      <AvatarFallback className={`${message.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                        {message.role === 'user' ? (
                          <User className="w-5 h-5" />
                        ) : (
                          <Sparkles className="w-5 h-5" />
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`max-w-[70%] ${message.role === 'user' ? 'text-right' : ''}`}>
                      <div
                        className={`inline-block px-4 py-2 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-md'
                            : 'bg-secondary text-foreground rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <p className="text-xs mt-1 text-muted-foreground">
                        {message.timestamp.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10 flex-shrink-0">
                      <AvatarFallback className="bg-accent/20 text-accent">
                        <Sparkles className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>

              <div className="p-4 border-t border-border">
                <div className="flex gap-3">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="输入您的问题..."
                    className="flex-1 bg-secondary/50 border-secondary"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
