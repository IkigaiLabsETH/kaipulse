'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export interface CollectionErrorProps {
  error: string | null;
  retry?: () => void;
}

export function CollectionError({ error, retry }: CollectionErrorProps) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-[#171717] border border-yellow-500/20 rounded-xl shadow-lg text-center">
        <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#F7B500" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/>
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-white">Failed to Load Collection</h1>
        
        <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-6">
          <p className="text-red-400 mb-2">
            {error?.includes('API key') 
              ? 'OpenSea API key is not configured. Please set up your environment variables.'
              : error || 'Failed to fetch collection data from OpenSea. Please try again later.'}
          </p>
          
          {error?.includes('API key') && (
            <p className="text-sm text-neutral-400">
              Add OPENSEA_API_KEY to your .env.local file and restart the server.
            </p>
          )}
          
          {error?.includes('fetch') && (
            <p className="text-sm text-neutral-400">
              The server may be experiencing issues connecting to OpenSea. Please try again later.
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {retry && (
            <button 
              onClick={retry}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-medium transition-colors"
            >
              <RefreshCw size={18} />
              <span>Try Again</span>
            </button>
          )}
          
          <Link
            href="/collections"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Collections</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 