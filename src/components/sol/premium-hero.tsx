import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PremiumHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  children?: ReactNode;
  className?: string;
}

export function PremiumHero({ title, subtitle, tagline, children, className }: PremiumHeroProps) {
  return (
    <div className={cn("text-center space-y-8", className)}>
      {subtitle && (
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
          {subtitle}
        </p>
      )}
      
      <h1 className="text-center">
        <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
          {title}
        </span>
      </h1>
      
      {tagline && (
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-gray-300 font-light italic font-satoshi">
            {tagline}
          </p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      )}
      
      {children}
    </div>
  );
} 