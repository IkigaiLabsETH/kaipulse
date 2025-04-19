'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
import { AlertCircle, Sparkles } from 'lucide-react';
import { CollectionCard } from '@/components/nft/CollectionCard';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { FEATURED_COLLECTIONS } from '@/constants/collections';
import { logger } from '@/lib/logger';
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import { OpenSeaAPIError } from '@/services/opensea/api';

// Initialize API instance
const openSeaApi = new OpenSeaAPI();

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

  // Cache collections in memory
  const collectionsCache = new Map<string, OpenSeaCollection & { stats: OpenSeaCollectionStats }>();

  useEffect(() => {
    const fetchCollection = async (contractAddress: string) => {
      // Check cache first
      if (collectionsCache.has(contractAddress)) {
        logger.info('Using cached collection:', { contractAddress });
        return collectionsCache.get(contractAddress)!;
      }

      try {
        if (!process.env.NEXT_PUBLIC_OPENSEA_API_KEY) {
          throw new Error('OpenSea API key is not configured');
        }

        logger.info('Fetching collection:', { contractAddress });
        
        // Fetch collection and stats in parallel to improve performance
        const [collection, stats] = await Promise.all([
          openSeaApi.getCollectionByContract(contractAddress).catch(error => {
            logger.error('Failed to fetch collection:', { contractAddress, error });
            throw error;
          }),
          openSeaApi.getCollectionStatsByContract(contractAddress).catch(error => {
            logger.error('Failed to fetch collection stats:', { contractAddress, error });
            throw error;
          })
        ]);

        logger.info('Raw API response:', {
          collection: {
            name: collection.name,
            slug: collection.collection,
            imageUrl: collection.image_url,
            bannerUrl: collection.banner_image_url,
            raw: collection
          },
          stats: {
            floorPrice: stats.floor_price,
            totalVolume: stats.total_volume,
            raw: stats
          }
        });

        // Merge collection and stats data
        const result = {
          ...collection,
          stats: {
            ...stats,
            floor_price: Number(stats.floor_price || 0),
            total_volume: Number(stats.total_volume || 0),
            total_supply: Number(stats.total_supply || collection.total_supply || 0),
            num_owners: Number(stats.num_owners || 0)
          }
        };

        logger.info('Processed collection data:', {
          contractAddress,
          name: result.name,
          slug: result.collection,
          imageUrl: result.image_url,
          bannerUrl: result.banner_image_url,
          stats: result.stats
        });

        collectionsCache.set(contractAddress, result);
        return result;
      } catch (error) {
        if (error instanceof OpenSeaAPIError) {
          logger.error(`OpenSea API error for ${contractAddress}:`, {
            status: error.status,
            code: error.code,
            message: error.message
          });
          if (error.status === 404) {
            throw new Error(`Collection not found: ${contractAddress}`);
          }
          if (error.status === 429) {
            throw new Error('Rate limit exceeded. Please try again later.');
          }
        }
        logger.error(`Failed to fetch collection for ${contractAddress}:`, error);
        throw error;
      }
    };

    const fetchCollections = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (!process.env.NEXT_PUBLIC_OPENSEA_API_KEY) {
          throw new Error('OpenSea API key is not configured. Please add NEXT_PUBLIC_OPENSEA_API_KEY to your environment variables.');
        }

        logger.info('Starting to fetch collections for categories:', 
          FEATURED_COLLECTIONS.map(cat => ({ id: cat.id, count: cat.contractAddresses.length }))
        );
        
        // Fetch collections for each category in parallel
        const categoriesWithCollections = await Promise.all(
          FEATURED_COLLECTIONS.map(async (category) => {
            logger.info(`Fetching collections for category: ${category.id}`);
            
            // Fetch collections in parallel within each category
            const collections = await Promise.allSettled(
              category.contractAddresses.map(contractAddress => fetchCollection(contractAddress))
            );

            const validCollections = collections.map((result, index) => {
              if (result.status === 'fulfilled') {
                return result.value;
              }
              logger.error('Failed to fetch collection:', {
                category: category.id,
                contractAddress: category.contractAddresses[index],
                error: result.reason
              });
              return null;
            }).filter(Boolean); // Remove null values

            logger.info(`Completed fetching collections for category: ${category.id}`, {
              total: collections.length,
              successful: validCollections.length,
              failed: collections.length - validCollections.length
            });

            return {
              id: category.id,
              name: category.name,
              description: category.description,
              collections: validCollections
            };
          })
        );

        // Filter out categories with no valid collections
        const validCategories = categoriesWithCollections.filter(
          category => category.collections.length > 0
        );

        if (validCategories.length === 0) {
          throw new Error('No collections could be loaded. Please try again later.');
        }

        setCategorizedCollections(validCategories);
        setIsLoading(false); // Make sure to set loading to false
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load collections';
        logger.error('Failed to fetch collections:', error);
        setError(errorMessage);
        setIsLoading(false); // Make sure to set loading to false even on error
        
        // Implement retry logic with exponential backoff
        if (retryCount < maxRetries) {
          const delay = Math.pow(2, retryCount) * 1000;
          logger.info(`Retrying in ${delay}ms... (attempt ${retryCount + 1}/${maxRetries})`);
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, delay);
        }
      }
    };

    // Call fetchCollections when the component mounts or when retryCount changes
    fetchCollections();
  }, [retryCount]); // Add retryCount as a dependency

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
      <h1 className="text-4xl font-bold text-white mb-6">NFT Collections</h1>
      <p className="text-gray-400 mb-12 max-w-3xl">
        Explore our curated selection of NFT collections, featuring the most innovative and influential
        projects across different categories.
      </p>
      <ErrorBoundary fallback={<div className="text-red-500">Error loading collections</div>}>
        <CuratedCollections />
      </ErrorBoundary>
    </div>
  );
} 