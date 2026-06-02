'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, GitBranch, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: '首页', href: '/' },
  { label: '简历', href: '/resume' },
  { label: '项目', href: '/projects' },
  { label: '时间轴', href: '/timeline' },
  { label: '知识库', href: '/knowledge' },
  { label: 'AI 分身', href: '/avatar' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              H
            </div>
            <span className="hidden sm:block font-semibold text-xl tracking-tight">
              <span className="gradient-text">Hexi</span>yuan
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 group"
              >
                {item.label}
                <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hexiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hexiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </a>

            <Button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground" asChild>
              <Link href="/import">
                <Sparkles className="w-4 h-4" />
                智能导入
              </Link>
            </Button>

            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass rounded-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
              <Button className="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground" asChild>
                <Link href="/import" onClick={() => setMobileMenuOpen(false)}>
                  <Sparkles className="w-4 h-4" />
                  智能导入
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
