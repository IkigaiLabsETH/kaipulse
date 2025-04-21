'use client';

import { Suspense, useEffect, useState } from 'react';
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import {
  CollectionStats,
  CollectionGrid,
  CollectionActivity,
  CollectionTabs,
  CollectionBadge,
  CollectionSkeleton,
  CollectionError
} from '@/components/collection';
import { Layout } from '@/components/ui';
import { ExternalLink, Grid as GridIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { logger } from '@/lib/logger';

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

// Detect if the slug is a contract address (0x...) or a collection slug
function isContractAddress(slug: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(slug);
}

// Update the fetchCollection function to handle both contract addresses and slugs
async function fetchCollection(slug: string) {
  try {
    let endpoint = `/api/collections/${slug}`;
    
    // If it's a contract address, we need to use a different endpoint format
    if (isContractAddress(slug)) {
      endpoint = `/api/collections/contract/${slug}`;
    }
    
    const response = await fetch(endpoint, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch collection data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    logger.error('Error fetching collection:', error);
    throw error;
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<OpenSeaCollection | null>(null);
  const [stats, setStats] = useState<OpenSeaCollectionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchCollectionData() {
      try {
        if (!params.slug) return;
        
        setIsLoading(true);
        setError(null);

        // Use internal API route with timeout and abort controller
        const data = await fetchCollection(params.slug);
        
        if (!isMounted) return;

        if (data.error) {
          throw new Error(data.error);
        }

        if (!data.collection) {
          throw new Error('Collection data is missing');
        }

        setCollection(data.collection);
        setStats(data.collection.stats);
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (!isMounted) return;

        const errorMessage = error instanceof Error ? error.message : 'Failed to load collection data';
        logger.error('Error fetching collection data:', { error: errorMessage, slug: params.slug });
        
        setError(errorMessage);

        // Implement retry logic for specific errors
        if (retryCount < MAX_RETRIES && 
            (errorMessage.includes('Internal Server Error') || 
             errorMessage.includes('Failed to fetch'))) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            if (isMounted) {
              fetchCollectionData();
            }
          }, Math.min(1000 * Math.pow(2, retryCount), 8000)); // Exponential backoff
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchCollectionData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [params.slug, retryCount]);

  if (isLoading) {
    return (
      <Layout>
        <CollectionSkeleton />
      </Layout>
    );
  }

  if (error || !collection) {
    return (
      <Layout>
        <CollectionError 
          error={error} 
          retry={retryCount < MAX_RETRIES ? () => setRetryCount(prev => prev + 1) : undefined}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px]"
      >
        <Image
          src={collection.banner_image_url || collection.image_url || '/images/placeholder-banner.png'}
          alt={collection.name}
          fill
          className="object-cover"
          priority
          quality={100}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/images/placeholder-banner.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#111111]" />
      </motion.div>

      {/* Collection Info */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] transition-all duration-300"
          >
            <Image
              src={collection.image_url || '/images/placeholder-logo.png'}
              alt={`${collection.name} logo`}
              width={192}
              height={192}
              className="w-full h-full object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = '/images/placeholder-logo.png';
              }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 pt-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-white">{collection.name}</h1>
              {collection.safelist_status === 'verified' && (
                <CollectionBadge>Verified Collection</CollectionBadge>
              )}
            </div>
            <p className="text-gray-300 max-w-2xl mb-6">{collection.description}</p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://opensea.io/collection/${collection.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#F7B500] text-black rounded-lg font-semibold hover:bg-[#F7B500]/90 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <ExternalLink size={18} />
                View on OpenSea
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-[#1A1A1A] text-white rounded-lg font-semibold hover:bg-[#252525] transition-all duration-300 border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] hover:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
                >
                  <GridIcon size={18} />
                  Back to Collections
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-8">
        {stats && <CollectionStats stats={stats} />}
      </div>

      {/* Tabs Section */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <CollectionTabs
          defaultTab="items"
          tabs={[
            {
              id: 'items',
              label: 'Items',
              content: (
                <Suspense fallback={<div>Loading items...</div>}>
                  <CollectionGrid collectionSlug={collection.slug} />
                </Suspense>
              )
            },
            {
              id: 'activity',
              label: 'Activity',
              content: (
                <Suspense fallback={<div>Loading activity...</div>}>
                  <CollectionActivity collectionSlug={collection.slug} />
                </Suspense>
              )
            }
          ]}
        />
      </motion.div>
    </Layout>
  );
} 