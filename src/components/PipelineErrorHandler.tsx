'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clientLogger } from '@/utils/clientLogger';

export function PipelineErrorHandler({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPipeline, setIsPipeline] = useState(false);

  useEffect(() => {
    // Check if current URL contains pipeline
    if (pathname?.includes('/pipeline') || window.location.pathname.includes('/pipeline')) {
      clientLogger.warn('Pipeline URL detected in error handler, redirecting to home');
      setIsPipeline(true);
      window.location.replace('/');
    }

    // Listen for unhandled errors related to pipeline
    const handleError = (event: ErrorEvent) => {
      if (event.message && event.message.includes('parse URL from /pipeline')) {
        clientLogger.error('Pipeline URL error caught in error handler');
        window.location.replace('/');
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [pathname]);

  // Don't render children during redirect
  if (isPipeline) {
    return null;
  }

  return <>{children}</>;
} 