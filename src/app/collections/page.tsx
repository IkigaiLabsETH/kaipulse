'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { CollectionCard } from '@/components/nft/CollectionCard';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { FEATURED_COLLECTIONS } from '@/constants/collections';
import { logger } from '@/lib/logger';
import type { OpenSeaCollection } from '@/services/opensea/types';

// Log API configuration on initialization
if (process.env.NODE_ENV === 'development') {
  logger.info('OpenSea API Configuration:', {
    hasApiKey: !!process.env.NEXT_PUBLIC_OPENSEA_API_KEY,
    environment: process.env.NODE_ENV,
    isTestnet: process.env.NODE_ENV === 'development'
  });
}

interface CategoryCollections {
  id: string;
  name: string;
  description: string;
  collections: (OpenSeaCollection | null)[];
}

function CategorySection({ category }: { category: CategoryCollections }) {
  if (!category.collections.some(Boolean)) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-yellow-500" />
        <h2 className="text-2xl font-bold text-white">{category.name}</h2>
      </div>
      <p className="text-gray-400 mb-8">{category.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {category.collections.map((collection, index) => (
          collection && (
            <CollectionCard
              key={collection.collection}
              collection={collection}
              index={index}
            />
          )
        ))}
      </div>
    </div>
  );
}

function CuratedCollections() {
  const [categorizedCollections, setCategorizedCollections] = useState<CategoryCollections[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // Cache collections in a ref
  const collectionsCache = useRef(new Map<string, OpenSeaCollection>());

  const fetchCollections = useCallback(async () => {
    const fetchCollection = async (contractAddress: string): Promise<OpenSeaCollection | null> => {
      try {
        // Check cache first
        if (collectionsCache.current.has(contractAddress)) {
          logger.info('Using cached data for collection', { contractAddress });
          return collectionsCache.current.get(contractAddress)!;
        }

        // First, get the collection slug using the contract address
        const slugResponse = await fetch(
          `https://api.opensea.io/api/v2/chain/ethereum/contract/${contractAddress}`,
          {
            headers: {
              'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
              'Accept': 'application/json'
            },
          }
        );

        if (!slugResponse.ok) {
          throw new Error(`OpenSea API error: ${slugResponse.status} - ${slugResponse.statusText}`);
        }

        const slugData = await slugResponse.json();
        const collectionSlug = slugData.collection;

        if (!collectionSlug) {
          throw new Error('Could not find collection slug');
        }

        logger.info('Found collection slug', { contractAddress, collectionSlug });

        // Then, get the detailed collection data using the slug
        const detailsResponse = await fetch(
          `https://api.opensea.io/api/v2/collections/${collectionSlug}`,
          {
            headers: {
              'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
              'Accept': 'application/json'
            },
          }
        );

        if (!detailsResponse.ok) {
          throw new Error(`OpenSea API error: ${detailsResponse.status} - ${detailsResponse.statusText}`);
        }

        const detailsData = await detailsResponse.json();
        
        // Add a delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Also fetch collection stats for floor price
        const statsResponse = await fetch(
          `https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`,
          {
            headers: {
              'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
              'Accept': 'application/json'
            },
          }
        );

        if (!statsResponse.ok) {
          throw new Error(`OpenSea API error: ${statsResponse.status} - ${statsResponse.statusText}`);
        }

        const statsData = await statsResponse.json();

        // Log the raw responses for debugging
        logger.info('OpenSea API responses:', {
          contractAddress,
          collectionSlug,
          details: detailsData,
          stats: statsData
        });

        // Combine collection details with stats
        const collectionData = {
          ...detailsData,
          stats: statsData,
          collection: collectionSlug
        };

        collectionsCache.current.set(contractAddress, collectionData);
        return collectionData;
      } catch (err) {
        logger.error('Error fetching collection', { 
          contractAddress, 
          error: err instanceof Error ? err.message : 'Unknown error',
          stack: err instanceof Error ? err.stack : undefined
        });
        return null;
      }
    };

    setIsLoading(true);
    setError(null);

    if (!process.env.NEXT_PUBLIC_OPENSEA_API_KEY) {
      setError('OpenSea API key is not configured');
      setIsLoading(false);
      return;
    }

    try {
      const categorizedResults: CategoryCollections[] = [];

      // Fetch collections sequentially for each category
      for (const category of FEATURED_COLLECTIONS) {
        logger.info('Fetching collections for category', { categoryName: category.name });
        const collections: OpenSeaCollection[] = [];

        for (const address of category.contractAddresses) {
          // Add delay between requests
          await new Promise(resolve => setTimeout(resolve, 1000));

          const collection = await fetchCollection(address);
          if (collection) {
            collections.push(collection);
          }
        }

        if (collections.length > 0) {
          categorizedResults.push({
            id: category.id,
            name: category.name,
            description: category.description,
            collections
          });
        }

        logger.info('Category fetch complete', { 
          categoryName: category.name, 
          collectionCount: collections.length 
        });
      }

      setCategorizedCollections(categorizedResults);
    } catch (err) {
      logger.error('Error fetching collections', { error: err });
      setError('Failed to fetch collections. Please try again later.');
      
      // Implement retry logic
      if (retryCount < maxRetries) {
        setRetryCount(prev => prev + 1);
        setTimeout(() => {
          fetchCollections();
        }, Math.pow(2, retryCount) * 1000); // Exponential backoff
      }
    } finally {
      setIsLoading(false);
    }
  }, [retryCount, maxRetries]);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Failed to Load Collections</h3>
        <p className="text-gray-400 mb-4">{error}</p>
        {retryCount < maxRetries && (
          <p className="text-sm text-gray-500">
            Retrying automatically... (Attempt {retryCount + 1}/{maxRetries})
          </p>
        )}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-16">
      {categorizedCollections.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
      {categorizedCollections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No collections available at the moment.</p>
        </div>
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-16">
      {[...Array(4)].map((_, categoryIndex) => (
        <div key={categoryIndex} className="mb-16 animate-pulse">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-6 rounded-full bg-yellow-500/20" />
            <div className="h-8 w-48 rounded-lg bg-gray-800" />
          </div>
          <div className="h-6 w-96 rounded-lg bg-gray-800 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border-[3px] border-yellow-500/20 bg-[#1A1A1A] overflow-hidden"
              >
                <div className="h-48 bg-gray-800" />
                <div className="p-6">
                  <div className="h-6 w-32 rounded-lg bg-gray-800 mb-4" />
                  <div className="h-4 w-full rounded bg-gray-800 mb-2" />
                  <div className="h-4 w-2/3 rounded bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">NFT Collections</h1>
        <p className="text-gray-400 max-w-3xl">
          Explore our curated selection of NFT collections, featuring the most innovative and influential
          projects across different categories.
        </p>
      </div>

      <ErrorBoundary fallback={<div className="text-red-500">Error loading collections</div>}>
        <CuratedCollections />
      </ErrorBoundary>
    </div>
  );
} 