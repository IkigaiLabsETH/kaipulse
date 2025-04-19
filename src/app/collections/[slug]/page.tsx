'use client';

import { Suspense, useEffect, useState } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
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

const api = new OpenSeaAPI();

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [traits, setTraits] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCollectionData() {
      try {
        setIsLoading(true);
        setError(null);

        let collectionData;
        let collectionSlug = params.slug;

        // Check if the slug is a contract address
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(params.slug);
        
        logger.info('Fetching collection data:', { 
          slug: params.slug,
          isContractAddress 
        });

        if (isContractAddress) {
          // If it's a contract address, first get the collection data by contract
          const contractData = await api.getCollectionByContract(params.slug);
          logger.info('Contract data:', { contractData });
          
          // Get the collection slug from the contract data
          collectionSlug = contractData.collection;
          
          // Now fetch the full collection data using the slug
          collectionData = await api.getCollection(collectionSlug);
        } else {
          // If it's a slug, fetch directly
          collectionData = await api.getCollection(params.slug);
        }

        logger.info('Collection data:', { collectionData });
        
        // Fetch traits using the correct slug
        const traitsData = await api.getCollectionTraits(collectionSlug);
        logger.info('Collection traits:', { traitsData });

        setCollection(collectionData);
        setStats(collectionData.stats || {});
        setTraits(traitsData);
      } catch (error) {
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
          <CollectionStats stats={stats} />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse">Loading NFTs...</div>}>
          <CollectionGrid 
            collectionSlug={collection.collection}
            traits={traits}
          />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense fallback={<div className="animate-pulse">Loading activity...</div>}>
            <CollectionActivity collectionSlug={collection.collection} />
          </Suspense>

          <Suspense fallback={<div className="animate-pulse">Loading offers...</div>}>
            <CollectionOffers collectionSlug={collection.collection} />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 