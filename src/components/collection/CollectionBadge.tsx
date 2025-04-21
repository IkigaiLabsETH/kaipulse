'use client';

import { Shield } from 'lucide-react';

interface CollectionBadgeProps {
  variant?: 'verified' | 'warning' | 'error';
  children: React.ReactNode;
}

export function CollectionBadge({ variant = 'verified', children }: CollectionBadgeProps) {
  const variants = {
    verified: {
      bg: 'bg-[#F7B500]/10',
      text: 'text-[#F7B500]',
      border: 'border-[#F7B500]',
      icon: <Shield size={14} className="text-[#F7B500]" />
    },
    warning: {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-500',
      border: 'border-yellow-500',
      icon: <Shield size={14} className="text-yellow-500" />
    },
    error: {
      bg: 'bg-red-500/10',
      text: 'text-red-500',
      border: 'border-red-500',
      icon: <Shield size={14} className="text-red-500" />
    }
  };

  const styles = variants[variant];

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full border ${styles.bg} ${styles.text} ${styles.border}`}>
      {styles.icon}
      {children}
    </div>
  );
} 