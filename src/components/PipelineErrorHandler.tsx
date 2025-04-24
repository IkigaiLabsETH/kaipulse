'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { clientLogger } from '@/utils/clientLogger';

export function PipelineErrorHandler({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPipeline, setIsPipeline] = useState(false);

  useEffect(() => {
    // Check if current URL contains pipeline
    if (pathname?.includes('/pipeline') || window.location.pathname.includes('/pipeline')) {
      clientLogger.warn('Pipeline URL detected in error handler, redirecting to home');
      setIsPipeline(true);
      // Use Next.js router for client-side navigation when possible
      try {
        router.replace('/');
      } catch {
        // Fallback to window.location if router fails
        window.location.href = '/';
      }
    }

    // Listen for unhandled errors related to pipeline
    const handleError = (event: ErrorEvent) => {
      if (event.message && (
        event.message.includes('parse URL from /pipeline') || 
        event.message.includes('Failed to parse URL')
      )) {
        clientLogger.error('Pipeline URL error caught in error handler');
        event.preventDefault();
        
        // Safely navigate to home
        try {
          router.replace('/');
        } catch {
          // Fallback to window.location if router fails
          window.location.href = '/';
        }
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [pathname, router]);

  // Don't render children during redirect
  if (isPipeline) {
    return null;
  }

  return <>{children}</>;
} 