import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BoxyCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  breaking?: boolean;
}

export function BoxyCard({ children, className, title, breaking = false }: BoxyCardProps) {
  return (
    <div className={cn(
      "bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]",
      className
    )}>
      {title && (
        <div className="flex items-center mb-6">
          {breaking && (
            <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-none mr-4">
              BREAKING
            </span>
          )}
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
} 