'use client';

import { Suspense, useEffect, useState } from 'react';
import { OpenSeaAPI, OpenSeaAPIError } from '@/services/opensea/api.new';
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import {
  CollectionHeader,
  CollectionStats,
  CollectionGrid,
  CollectionActivity,
  CollectionOffers
} from '@/components/collections';
import { logger } from '@/lib/logger';
import { AlertCircle } from 'lucide-react';

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

const api = new OpenSeaAPI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY 
});

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<OpenSeaCollection | null>(null);
  const [stats, setStats] = useState<Partial<OpenSeaCollectionStats> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCollectionData() {
      try {
        setIsLoading(true);
        setError(null);

        let collectionData;

        // Check if the slug is a contract address and normalize it
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(params.slug);
        const normalizedAddress = isContractAddress ? params.slug.toLowerCase() : params.slug;
        
        logger.info('Fetching collection data:', { 
          slug: normalizedAddress,
          isContractAddress 
        });

        if (isContractAddress) {
          // First get the collection details to get the proper slug
          try {
            const collection = await api.getCollection(normalizedAddress);
            logger.info('Found collection by contract:', { 
              contractAddress: normalizedAddress,
              collectionSlug: collection.slug 
            });
            
            // Now get the full collection data using the slug
            collectionData = await api.getCollection(collection.slug);
            logger.info('Collection data by slug:', { 
              slug: collection.slug,
              name: collectionData?.name
            });
          } catch (error: unknown) {
            const apiError = error as OpenSeaAPIError;
            logger.error('Error fetching collection by contract:', { 
              error: apiError.message,
              status: apiError.statusCode,
              contractAddress: normalizedAddress 
            });
            throw apiError;
          }
        } else {
          // If it's a slug, fetch directly
          try {
            collectionData = await api.getCollection(normalizedAddress);
            logger.info('Collection data by slug:', { 
              slug: normalizedAddress,
              responseSlug: collectionData?.slug,
              name: collectionData?.name
            });
          } catch (error: unknown) {
            const apiError = error as OpenSeaAPIError;
            logger.error('Detailed collection fetch error:', { 
              error: apiError.message,
              status: apiError.statusCode,
              slug: normalizedAddress 
            });
            throw apiError;
          }
        }

        // Extract stats from collection data
        const statsData: Partial<OpenSeaCollectionStats> = {
          floor_price: collectionData.stats?.floor_price || null,
          total_volume: collectionData.stats?.total_volume || null,
          total_supply: collectionData.stats?.total_supply || null,
          num_owners: collectionData.stats?.num_owners || null,
          one_day_volume: collectionData.stats?.one_day_volume || null,
          seven_day_volume: collectionData.stats?.seven_day_volume || null,
          thirty_day_volume: collectionData.stats?.thirty_day_volume || null
        };

        setCollection(collectionData);
        setStats(statsData);
      } catch (error: unknown) {
        logger.error('Error fetching collection data:', error);
        setError('Failed to load collection data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollectionData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading collection...</div>
      </div>
    );
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Error</h3>
          <p className="text-gray-400">{error || 'Failed to load collection'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <CollectionHeader collection={collection} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Suspense fallback={<div className="animate-pulse">Loading stats...</div>}>
          <CollectionStats stats={stats || {}} />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse">Loading NFTs...</div>}>
          <CollectionGrid collectionSlug={collection.slug} />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense fallback={<div className="animate-pulse">Loading activity...</div>}>
            <CollectionActivity collectionSlug={collection.slug} />
          </Suspense>

          <Suspense fallback={<div className="animate-pulse">Loading offers...</div>}>
            <CollectionOffers collectionSlug={collection.slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 