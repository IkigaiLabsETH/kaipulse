'use client';

import { Suspense } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
import { Search, AlertCircle, Sparkles } from 'lucide-react';
import { CollectionCard } from '@/components/nft/CollectionCard';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/useDebounce';
import { trackEvent } from '@/lib/analytics';
import { FEATURED_COLLECTIONS } from '@/constants/collections';
import { logger } from '@/services/lib/logger';

// Initialize API instance
const openSeaApi = new OpenSeaAPI();

async function FeaturedCollections() {
  try {
    const collections = await Promise.all(
      FEATURED_COLLECTIONS.map(async (category) => {
        // Get the first contract address from each category
        const contractAddress = category.contractAddresses[0];
        try {
          const collection = await openSeaApi.getCollectionByContract(contractAddress);
          return collection;
        } catch (error) {
          logger.error(`Failed to fetch collection for ${contractAddress}:`, error);
          return null;
        }
      })
    );

    const validCollections = collections.filter(Boolean);

    if (validCollections.length === 0) {
      return null;
    }

    return (
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white">Featured Collections</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {validCollections.map((collection, index) => (
            collection && <CollectionCard
              key={collection.collection}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    logger.error('Failed to fetch featured collections:', error);
    return null;
  }
}

async function CollectionsGrid({ 
  searchQuery = '', 
  page = 1 
}: { 
  searchQuery?: string;
  page?: number;
}) {
  try {
    const response = await openSeaApi.getCollections({ 
      limit: 50,
      query: searchQuery,
      next: page > 1 ? `${(page - 1) * 50}` : undefined
    });

    const collections = response?.results || [];

    if (!collections || collections.length === 0) {
      return (
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Collections Found</h3>
          <p className="text-gray-400">Try adjusting your search criteria</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <CollectionCard
            key={collection.collection}
            collection={collection}
            index={index}
          />
        ))}
      </div>
    );
  } catch (error) {
    logger.error('Failed to fetch collections:', error);
    return (
      <div className="text-center py-12">
        <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
        <p className="text-gray-400">Failed to load collections. Please try again later.</p>
      </div>
    );
  }
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl border-[3px] border-yellow-500/30 bg-[#1A1A1A] overflow-hidden"
        >
          <div className="h-48 bg-yellow-500/10" />
          <div className="p-6 pt-16 relative">
            <div className="absolute top-[-24px] left-6">
              <div className="h-24 w-24 rounded-xl bg-yellow-500/10" />
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-yellow-500/10 rounded-full w-1/3" />
              <div className="h-8 bg-yellow-500/10 rounded-full w-2/3" />
              <div className="h-4 bg-yellow-500/10 rounded-full w-full" />
              <div className="h-4 bg-yellow-500/10 rounded-full w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CollectionsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const { q = '', page = '1' } = searchParams;
  const debouncedSearch = useDebounce(q, 300);

  return (
    <main className="min-h-screen bg-[#111111] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            NFT Collections
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore the most popular NFT collections. Each collection is verified and includes detailed statistics about floor price, volume, and more.
          </p>
        </div>

        {/* Featured Collections */}
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedCollections />
        </Suspense>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
              <Search size={20} />
            </div>
            <Input
              type="text"
              placeholder="Search collections by name..."
              value={q}
              onChange={(e) => {
                const newParams = new URLSearchParams(searchParams);
                newParams.set('q', e.target.value);
                window.history.pushState(null, '', `?${newParams.toString()}`);
                trackEvent('collection_search', { query: e.target.value });
              }}
              className="w-full bg-[#1A1A1A] text-white border-[3px] border-yellow-500 rounded-xl pl-12 pr-4 py-3 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] transition-all duration-200 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Main Collections Grid */}
        <ErrorBoundary fallback={<div>Error loading collections</div>}>
          <Suspense fallback={<LoadingSkeleton />}>
            <CollectionsGrid
              searchQuery={debouncedSearch}
              page={parseInt(page)}
            />
          </Suspense>
        </ErrorBoundary>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => {
              const newParams = new URLSearchParams(searchParams);
              newParams.set('page', (parseInt(page) + 1).toString());
              window.history.pushState(null, '', `?${newParams.toString()}`);
              trackEvent('collection_load_more', { page: parseInt(page) + 1 });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-200"
          >
            Load More Collections
            <span>↓</span>
          </Button>
        </div>
      </div>
    </main>
  );
} 