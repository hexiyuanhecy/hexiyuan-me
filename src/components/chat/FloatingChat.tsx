'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Loader2, Minus, Briefcase, Code, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}

interface FAQItem {
  keywords: string[];
  answer: string;
}

const FAQ_RESPONSES: FAQItem[] = [
  { keywords: ['技术栈', '会什么', '技术', '前端', 'React'], answer: '何茜媛精通 React、TypeScript、Taro、Next.js、UD Design 等技术栈，有丰富的企业级前端开发经验。' },
  { keywords: ['工作', '经历', '在哪', '公司'], answer: '何茜媛拥有6年前端开发经验，先后在叙简科技、滴滴出行-橙心优选、字节跳动-飞书工作，现自由职业中。' },
  { keywords: ['项目', '做过什么', '作品'], answer: '主要项目包括：飞书汇报2.0重构、假勤双系统融合、NPS用户体验治理等。详见 [项目作品集](/projects)。' },
  { keywords: ['简历', 'resume', '工作经历'], answer: '你可以访问 [简历时间轴](/resume) 查看详细的工作经历和技能。' },
  { keywords: ['你好', 'hi', 'hello'], answer: '你好！我是何茜媛的 AI 助手，很高兴为你服务！' },
  { keywords: ['你是谁', '身份'], answer: '我是何茜媛的 AI 助手，可以介绍她的工作经历和项目，也能回答简单的常识问题。' },
  { keywords: ['学历', '教育', '毕业'], answer: '何茜媛毕业于浙江理工大学数字媒体技术专业，2019年进入互联网行业。' },
  { keywords: ['爱好', '兴趣'], answer: '除了技术，她喜欢旅行、阅读和探索新技术，持续保持技术手感。' },
  { keywords: ['联系方式', '联系'], answer: '你可以通过网站上的联系方式联系她，电话：18177310581，邮箱：hexiyuan123@foxmail.com。' },
  { keywords: ['react hooks', 'hooks'], answer: '何茜媛熟练使用 React Hooks，包括 useState、useEffect、useContext、useReducer 等，擅长自定义 hooks 来复用状态逻辑。' },
  { keywords: ['nextjs', 'next'], answer: '精通 Next.js，包括 App Router、Server Components、API Routes、Static Generation 和 SSR 等核心特性。' },
  { keywords: ['typescript', 'ts'], answer: 'TypeScript 是主力语言，擅长类型安全、泛型、装饰器等高级特性，能有效提升代码质量和开发效率。' },
  { keywords: ['性能优化', '优化'], answer: '有丰富的性能优化经验，实现过IOS端TTI提升43%，包体积缩减1.1MB。' },
  { keywords: ['NPS', '用户体验'], answer: '作为NPS治理专项Owner，搭建了三级问题打标体系，满意度从87%提升至93%。' },
  { keywords: ['JSError', '稳定性'], answer: '牵头假勤全链路JS错误治理，整体JS错误量下降80%，方案被兄弟团队复用。' },
  { keywords: ['多端', '小程序'], answer: '有丰富的多端开发经验，完成过休假、加班控件组从原生小程序到Web、H5的全量迁移重构。' },
];

const CONTEXT_MESSAGES: Record<string, string> = {
  '/resume': '她的工作经历涵盖多个领域，要我展开讲讲某个项目吗？',
  '/projects': '这里是她做过的项目，每个都有技术亮点，点击卡片可以看详情。',
  '/timeline': '时间轴上不仅有工作经历，还有她的旅行故事，想看哪个？',
  '/knowledge': '这里是她整理的前端知识库，想搜什么技术话题？',
};

const WELCOME_MESSAGE = '嗨，欢迎来到何茜媛的个人网站！我是她的 AI 助手，可以带你了解她的工作经历和项目，也能回答简单的常识问题。';

const RATE_LIMIT_MSG = '我的分身需要喘口气，稍后再聊吧';
const MAX_MESSAGES_PER_MINUTE = 100; // Agnes AI 免费，放开限制

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messageTimestampsRef = useRef<number[]>([]);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitCount') || '0');
    setVisitCount(count);

    if (count === 0) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setShowWelcome(true);
      }, 500);
      return () => clearTimeout(timer);
    } else if (count >= 2 && count <= 5) {
      const timer = setTimeout(() => {
        setShowBubble(true);
        const hideTimer = setTimeout(() => {
          setShowBubble(false);
        }, 8000);
        return () => clearTimeout(hideTimer);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const newCount = visitCount + 1;
    if (newCount <= 5) {
      localStorage.setItem('visitCount', newCount.toString());
    }
  }, [visitCount]);

  useEffect(() => {
    if (isOpen && !isMinimized && messages.length === 0) {
      setMessages([{
        id: '1',
        content: WELCOME_MESSAGE,
        role: 'assistant',
        timestamp: new Date(),
      }]);
    }
  }, [isOpen, isMinimized, messages.length, showWelcome]);

  useEffect(() => {
    if (isOpen && pathname && CONTEXT_MESSAGES[pathname]) {
      const hasContextMessage = messages.some(m => 
        m.content === CONTEXT_MESSAGES[pathname]
      );
      if (!hasContextMessage && messages.length > 0) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            content: CONTEXT_MESSAGES[pathname],
            role: 'assistant',
            timestamp: new Date(),
          }]);
        }, 1500);
      }
    }
  }, [pathname, isOpen, messages]);

  useEffect(() => {
    const now = Date.now();
    messageTimestampsRef.current = messageTimestampsRef.current.filter(
      ts => now - ts < 60000
    );
    
    if (messageTimestampsRef.current.length >= MAX_MESSAGES_PER_MINUTE) {
      setIsRateLimited(true);
      setTimeout(() => setIsRateLimited(false), 60000);
    }
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isMinimized, scrollToBottom]);

  const typeMessage = useCallback(async (messageId: string, fullContent: string) => {
    const typingSpeed = 30;
    for (let i = 1; i <= fullContent.length; i++) {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, content: fullContent.slice(0, i) }
          : msg
      ));
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, isTyping: false }
        : msg
    ));
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isRateLimited) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    messageTimestampsRef.current.push(Date.now());

    await new Promise(resolve => setTimeout(resolve, 300));

    let response = '';
    const lowerInput = input.toLowerCase();
    
    for (const faq of FAQ_RESPONSES) {
      for (const keyword of faq.keywords) {
        if (lowerInput.includes(keyword.toLowerCase())) {
          response = faq.answer;
          break;
        }
      }
      if (response) break;
    }

    if (!response) {
      const personalKeywords = ['经历', '项目', '工作', '技术', '学习', '能力', '简历', '作品'];
      const isPersonalQuestion = personalKeywords.some(k => lowerInput.includes(k));
      
      if (isPersonalQuestion) {
        response = `这个问题我需要想想... 你可以直接浏览网站了解更多：\n- [💼 简历时间轴](/resume)\n- [🛠️ 项目作品集](/projects)\n- [📚 知识库](/knowledge)\n- [📖 成长时间轴](/timeline)`;
      } else {
        response = '哎呀，这个问题超出我的认知范围了，我只知道何西元的事～要不聊聊他的项目？';
      }
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: '',
      role: 'assistant',
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);

    await typeMessage(assistantMessage.id, response);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleGuideButton = (path: string, message: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: message,
      role: 'assistant',
      timestamp: new Date(),
    }]);
    router.push(path);
  };

  return (
    <>
      {showBubble && !isOpen && (
        <div className="fixed bottom-20 right-6 z-40 animate-bounce">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
            好久不见，有什么想了解的？
          </div>
        </div>
      )}

      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-110 z-50"
          variant="default"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <div className="fixed bottom-6 right-6 w-80 z-50">
          <Card className="glass border-primary/10 overflow-hidden shadow-xl shadow-primary/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                    H
                  </div>
                  <div>
                    <p className="font-semibold text-sm">AI 助手</p>
                    <p className="text-xs text-muted-foreground">何茜媛的智能助手</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  <ScrollArea className="h-72">
                    <div className="p-3 space-y-3">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                          <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            {message.role === 'user' ? 'U' : 'H'}
                          </div>
                          <div className="max-w-[75%]">
                            <div className={`px-3 py-2 rounded-xl text-sm ${
                              message.role === 'user'
                                ? 'bg-primary/20 text-foreground rounded-br-sm'
                                : 'bg-secondary/50 text-foreground rounded-bl-sm'
                            }`}>
                              <div className="whitespace-pre-wrap text-left">
                                {message.role === 'assistant' ? (
                                  <Markdown 
                                    components={{
                                      a: ({ href, children }) => (
                                        <button
                                          onClick={() => {
                                            if (href && href.startsWith('/')) {
                                              router.push(href);
                                            } else if (href) {
                                              window.open(href, '_blank');
                                            }
                                          }}
                                          className="text-primary underline hover:text-primary/80 cursor-pointer"
                                        >
                                          {children}
                                        </button>
                                      ),
                                      strong: ({ children }) => (
                                        <strong className="font-semibold text-foreground">{children}</strong>
                                      ),
                                    }}
                                  >
                                    {message.content}
                                  </Markdown>
                                ) : (
                                  <p>{message.content}</p>
                                )}
                              </div>
                              
                              {message.content === WELCOME_MESSAGE && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  <button
                                    onClick={() => handleGuideButton('/resume', '他的技术栈主要是 React/Next.js/TypeScript，我带你去简历页看看。')}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors"
                                  >
                                    <Briefcase className="w-3 h-3" />
                                    技术能力
                                  </button>
                                  <button
                                    onClick={() => handleGuideButton('/projects', '这里是他做过的项目，每个都有技术亮点，点击卡片可以看详情。')}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs rounded-full hover:bg-purple-600 transition-colors"
                                  >
                                    <Code className="w-3 h-3" />
                                    项目经历
                                  </button>
                                  <button
                                    onClick={() => handleGuideButton('/timeline', '时间轴上不仅有工作经历，还有他的旅行故事，想看哪个？')}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600 transition-colors"
                                  >
                                    <BookOpen className="w-3 h-3" />
                                    个人故事
                                  </button>
                                </div>
                              )}
                            </div>
                            <p className="text-xs mt-1 text-muted-foreground">
                              {message.timestamp.toLocaleTimeString('zh-CN', { hour12: false })}
                            </p>
                          </div>
                        </div>
                      ))}

                      {isLoading && (
                        <div className="flex gap-2">
                          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
                            H
                          </div>
                          <div className="px-3 py-2 rounded-xl bg-secondary/50 rounded-bl-sm">
                            <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                          </div>
                        </div>
                      )}
                      <div ref={messageEndRef} />
                    </div>
                  </ScrollArea>

                  <div className="p-3 border-t border-border/50">
                    <div className="flex gap-2">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="输入问题..."
                        className="flex-1 h-9 text-sm"
                        disabled={isLoading || isRateLimited}
                      />
                      <Button 
                        onClick={handleSend} 
                        disabled={isLoading || isRateLimited} 
                        className="bg-primary hover:bg-primary/90 h-9 px-3"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    {isRateLimited && (
                      <p className="text-xs text-destructive mt-2 text-center">
                        {RATE_LIMIT_MSG}
                      </p>
                    )}
                  </div>
                </>
              )}

              {isMinimized && (
                <div className="p-3 text-center">
                  <button
                    onClick={() => setIsMinimized(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    点击展开聊天
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}