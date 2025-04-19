import { ReactNode } from 'react';

interface NFTLayoutProps {
  children: ReactNode;
}

export function NFTLayout({ children }: NFTLayoutProps) {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
} 