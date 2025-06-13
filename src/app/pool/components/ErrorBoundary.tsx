import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log to error tracking service instead of console
    if (process.env.NODE_ENV === 'production') {
      // TODO: Implement proper error tracking service
      // Example: Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/50 text-red-200">
          <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm">Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
} 