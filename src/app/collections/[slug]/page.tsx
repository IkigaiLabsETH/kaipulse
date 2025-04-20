'use client';

import { Suspense, useEffect, useState } from 'react';
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import {
  CollectionStats,
  CollectionGrid,
  CollectionActivity,
  CollectionOffers,
  CollectionHeader
} from '@/components/collections';
import { Card } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';
import { Grid } from '@/components/ui/grid';
import { Loader } from '@/components/ui/loader';
import { NFTLayout } from '@/components/nft/NFTLayout';
import { logger } from '@/lib/logger';
import { AlertCircle } from 'lucide-react';

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

// Initialize API base URL
const API_BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}/api/opensea`
  : 'http://localhost:3000/api/opensea';

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

        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(params.slug);
        const normalizedAddress = isContractAddress ? params.slug.toLowerCase() : params.slug;
        
        logger.info('Fetching collection data:', { 
          slug: normalizedAddress,
          isContractAddress 
        });

        const response = await fetch(
          `${API_BASE_URL}?path=collection&contract=${normalizedAddress}`,
          { headers: { 'Accept': 'application/json' } }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch collection data');
        }

        const collectionData = await response.json();
        
        logger.info('Collection data received:', { 
          slug: normalizedAddress,
          name: collectionData?.name,
          hasLogo: !!collectionData?.image_url,
          hasBanner: !!collectionData?.banner_image_url
        });

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
      <NFTLayout>
        <div className="animate-pulse space-y-8">
          {/* Banner and Logo Skeleton */}
          <div className="relative bg-[#111111] overflow-hidden">
            <div className="w-full h-[500px] bg-[#1A1A1A]" />
            <div className="container mx-auto px-4 -mt-32">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <Skeleton className="w-40 h-40 md:w-56 md:h-56 rounded-2xl" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-16 w-96" />
                  <Skeleton className="h-24 w-full max-w-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Skeleton */}
          <div className="container mx-auto px-4">
            <Card className="p-6">
              <Grid className="grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-8 w-32" />
                  </div>
                ))}
              </Grid>
            </Card>
          </div>
        </div>
      </NFTLayout>
    );
  }

  if (error || !collection) {
    return (
      <NFTLayout>
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-md mx-auto p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Error</h3>
            <p className="text-gray-400">{error || 'Failed to load collection'}</p>
          </Card>
        </div>
      </NFTLayout>
    );
  }

  return (
    <NFTLayout>
      <CollectionHeader collection={collection} />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Suspense fallback={<Loader className="w-full" />}>
          <Card className="p-6">
            <CollectionStats stats={stats || {}} />
          </Card>
        </Suspense>

        <Suspense fallback={<Loader className="w-full" />}>
          <CollectionGrid collectionSlug={collection.slug} />
        </Suspense>

        <Grid className="grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense fallback={<Loader className="w-full" />}>
            <Card className="p-6">
              <CollectionActivity collectionSlug={collection.slug} />
            </Card>
          </Suspense>

          <Suspense fallback={<Loader className="w-full" />}>
            <Card className="p-6">
              <CollectionOffers collectionSlug={collection.slug} />
            </Card>
          </Suspense>
        </Grid>
      </div>
    </NFTLayout>
  );
} 