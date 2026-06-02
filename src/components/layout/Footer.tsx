import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white text-xs">H</span>
            <span>Hexiyuan's Digital Garden</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 何西元. All rights reserved.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>Built with Next.js</span>
          <span>Styled with Tailwind CSS</span>
          <span>Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
