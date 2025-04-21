'use client';

import { Shield } from 'lucide-react';

interface CollectionBadgeProps {
  variant?: 'verified' | 'warning' | 'error';
  children: React.ReactNode;
}

export function CollectionBadge({ variant = 'verified', children }: CollectionBadgeProps) {
  const variants = {
    verified: {
      text: 'text-yellow-400',
      icon: <Shield size={12} className="text-yellow-400" />
    },
    warning: {
      text: 'text-yellow-500',
      icon: <Shield size={12} className="text-yellow-500" />
    },
    error: {
      text: 'text-red-500',
      icon: <Shield size={12} className="text-red-500" />
    }
  };

  const styles = variants[variant];

  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-1 text-xs uppercase tracking-widest font-light ${styles.text}`}>
      {styles.icon}
      {children}
    </div>
  );
} 