'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Layout } from '@/components/ui';
import { logger } from '@/lib/logger';

export default function NFTError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to our backend service
    logger.error('NFT page error:', { 
      message: error.message,
      digest: error.digest,
      stack: error.stack
    });
  }, [error]);

  // Function to determine what the user-friendly error message should be
  const getErrorInfo = () => {
    const message = error.message || '';
    
    if (message.includes('API key') || message.includes('not configured')) {
      return {
        title: 'API Configuration Missing',
        description: 'The OpenSea API key is not configured. Please set up your environment variables.',
        showDeveloperInfo: true
      };
    }
    
    if (message.includes('Failed to fetch NFT from OpenSea') || message.includes('Bad Gateway')) {
      return {
        title: 'Cannot Load This NFT',
        description: 'OpenSea API is currently unavailable or experiencing issues. Please try again later. This is often a temporary problem with their service.',
        showDeveloperInfo: false,
        isTemporaryIssue: true
      };
    }
    
    if (message.includes('Collection data is missing')) {
      return {
        title: 'Collection Not Found',
        description: 'We couldn\'t find the collection for this NFT. It may have been delisted or renamed.',
        showDeveloperInfo: false
      };
    }
    
    return {
      title: 'Error Loading Artwork',
      description: message,
      showDeveloperInfo: false
    };
  };

  const errorInfo = getErrorInfo();

  return (
    <Layout>
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors tracking-wider text-sm uppercase"
          >
            <ArrowLeft size={16} className="text-yellow-400" />
            <span>Back to Collections</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 mb-8 opacity-50 relative">
            <Image 
              src="/images/nft-placeholder.png" 
              alt="Error" 
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-light mb-4 text-white uppercase tracking-widest">
            {errorInfo.title}
          </h1>
          <p className="text-white/70 mb-6 max-w-lg">
            {errorInfo.description}
          </p>
          
          {/* Show suggestions for API key errors */}
          {errorInfo.showDeveloperInfo && (
            <div className="bg-yellow-400/10 border border-yellow-400/20 p-4 mb-8 max-w-lg text-left">
              <p className="text-yellow-400 text-sm mb-2">Developer Note:</p>
              <p className="text-white/70 text-sm mb-2">
                To connect to OpenSea, please set <code className="bg-black/30 px-1 py-0.5 rounded">OPENSEA_API_KEY</code> in your environment variables.
              </p>
              <p className="text-white/70 text-sm">
                You can get an API key from the <a href="https://docs.opensea.io/reference/api-keys" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">OpenSea Developer Portal</a>.
              </p>
            </div>
          )}
          
          {/* Special message for temporary issues */}
          {errorInfo.isTemporaryIssue && (
            <div className="bg-gray-800/50 border border-yellow-400/20 p-4 mb-8 max-w-lg text-left">
              <p className="text-white/70 text-sm mb-2">
                <strong className="text-yellow-400">Note:</strong> OpenSea&apos;s API occasionally experiences temporary outages or rate limiting. This is a temporary issue and not a problem with our application.
              </p>
            </div>
          )}
          
          <div className="flex gap-4 mt-2">
            {errorInfo.isTemporaryIssue ? (
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black text-sm uppercase tracking-wider transition-colors hover:bg-yellow-500"
              >
                <RefreshCw size={16} />
                <span>Try Again</span>
              </button>
            ) : (
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 text-sm uppercase tracking-wider transition-colors"
              >
                <RefreshCw size={16} />
                <span>Try Again</span>
              </button>
            )}
            
            <Link
              href="/collections" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 