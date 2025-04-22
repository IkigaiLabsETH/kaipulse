'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { NFTImage } from '@/components/nft/NFTImage';
import { logger } from '@/lib/logger';

export default function NFTError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  useEffect(() => {
    // Check if we're in demo mode (missing API key)
    const checkConfig = async () => {
      try {
        const response = await fetch('/api/collections/config-check');
        if (response.ok) {
          const data = await response.json();
          setIsDemoMode(!data.apiKeyConfigured);
        }
      } catch (e) {
        logger.error('Failed to check config status:', e);
      }
    };
    
    checkConfig();
    
    // Log the error to our backend service
    logger.error('NFT page error:', { 
      message: error.message,
      digest: error.digest,
      stack: error.stack
    });
  }, [error]);

  const isApiKeyError = error.message.includes('API key') || 
                        error.message.includes('not configured') ||
                        error.message.includes('OpenSea API');
                        
  const isGenericFetchError = error.message.includes('Failed to fetch NFT from OpenSea');

  // Function to determine what the user-friendly error message should be
  const getErrorMessage = () => {
    if (isApiKeyError) {
      return 'The OpenSea API key is not configured or invalid. Please set up your environment variables.';
    }
    
    if (isGenericFetchError) {
      return 'Failed to fetch NFT from OpenSea. This may be due to rate limiting or the NFT may not exist.';
    }
    
    return 'An error occurred while loading the NFT. Please try again later.';
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        <div className="w-24 h-24 mx-auto mb-8 opacity-50">
          <NFTImage
            src="/images/error-placeholder.png"
            alt="Error"
          />
        </div>
        <h1 className="text-xl font-light mb-4 text-white uppercase tracking-widest">ERROR LOADING ARTWORK</h1>
        <p className="text-white/70 mb-2">
          {getErrorMessage()}
        </p>
        
        {isDemoMode && (
          <p className="text-yellow-400/80 text-sm border border-yellow-400/20 bg-yellow-400/5 p-4 mb-8 mt-4">
            Demo Mode: OpenSea API key is not configured. Some features will use mock data.
            Try accessing <Link href="/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/163000597" className="underline">our demo NFT</Link> instead.
          </p>
        )}
        
        {!isApiKeyError && !isGenericFetchError && (
          <p className="text-white/50 text-sm mb-8">
            {error.message}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-yellow-400/30 text-yellow-400 text-sm uppercase tracking-wider hover:bg-yellow-400/10 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO COLLECTIONS</span>
          </Link>
          
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 text-sm uppercase tracking-wider transition-colors"
          >
            <RefreshCw size={16} />
            <span>TRY AGAIN</span>
          </button>
        </div>
      </div>
    </div>
  );
} 