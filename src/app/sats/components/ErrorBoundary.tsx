'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Show error toast instead of console logging
    toast.error('An error occurred', {
      description: error.message || 'Something went wrong',
    });
    
    // In production, you would send this to your error tracking service
    // Example: sendToErrorTracking(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-epilogue font-semibold mb-4">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        {error.message || 'An unexpected error occurred while loading the photos.'}
      </p>
      <Button 
        onClick={reset}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Try again
      </Button>
    </div>
  );
} 