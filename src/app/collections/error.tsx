'use client';

import { useEffect } from 'react';

// In a real app, you would import your error reporting service here
const reportError = () => {
  // Send to error reporting service like Sentry/LogRocket
  // For now, we'll silently capture the error
  // TODO: Implement proper error reporting service integration
  return;
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportError();
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-gray-600 dark:text-gray-400">
        {error.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={reset}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
} 