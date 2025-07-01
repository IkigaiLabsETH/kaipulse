import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PremiumLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PremiumLayout({ children, className }: PremiumLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16", className)}>
        <div className="space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
} 