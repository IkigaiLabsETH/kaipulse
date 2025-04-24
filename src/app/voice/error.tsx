'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { clientLogger } from '@/utils/clientLogger'
import { usePathname, useRouter } from 'next/navigation'

export default function VoiceError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Log the error to our logging service
    clientLogger.error('Voice page error:', error);

    // Handle pipeline URLs
    if (pathname?.startsWith('/pipeline')) {
      clientLogger.warn('Pipeline URL detected in error page, redirecting to home');
      router.replace('/');
    }
  }, [error, pathname, router]);

  const handleGoHome = async () => {
    try {
      await router.replace('/');
    } catch (err) {
      clientLogger.error('Navigation error:', err);
      window.location.replace('/');
    }
  };

  // Don't render anything while redirecting from pipeline URLs
  if (pathname?.startsWith('/pipeline')) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-yellow-950/20">
      <div className="text-yellow-500 text-center max-w-md px-8 py-12 backdrop-blur-lg bg-black/40 rounded-2xl border border-yellow-500/10 shadow-2xl">
        <h2 className="text-2xl font-medium mb-4">😕 Something went wrong!</h2>
        <p className="mb-8 text-yellow-500/80">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={handleGoHome}
            className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border-yellow-500/20"
          >
            Go Home
          </Button>
          <Button
            onClick={reset}
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
} 