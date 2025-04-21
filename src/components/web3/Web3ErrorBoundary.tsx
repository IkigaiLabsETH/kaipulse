'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/lib/logger';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class Web3ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('Web3 Error:', { error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <h2 className="text-yellow-500 font-semibold mb-2">Web3 Connection Error</h2>
          <p className="text-yellow-100/80 text-sm">
            Unable to connect to Web3 provider. Please make sure you have a Web3 wallet installed and connected.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
} 