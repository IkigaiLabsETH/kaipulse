import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
} 