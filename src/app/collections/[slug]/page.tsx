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
import { ExternalLink, Grid as GridIcon, Twitter, Globe } from 'lucide-react';
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

// Extended collection interface for social links
interface ExtendedCollection extends Omit<OpenSeaCollection, 'twitter_username'> {
  external_url?: string;
  twitter_username?: string;
}

// Detect if the slug is a contract address (0x...) or a collection slug
function isContractAddress(slug: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(slug);
}

// Update the fetchCollection function to handle both contract addresses and slugs
async function fetchCollection(slug: string) {
  try {
    logger.debug(`Fetching collection data for: ${slug}, Is contract: ${isContractAddress(slug)}`);
    let endpoint = `/api/collections/${slug}`;
    
    // If it's a contract address, we need to use a different endpoint format
    if (isContractAddress(slug)) {
      endpoint = `/api/collections/contract/${slug}`;
    }
    
    logger.debug(`Using endpoint: ${endpoint}`);
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

// Particle component for floating effects
const FloatingParticle = ({ delay = 0, scale = 1 }: { delay?: number; scale?: number }) => {
  // Using fixed values instead of window to avoid SSR issues
  const screenWidth = 1200;
  const randomX = Math.random() * screenWidth;
  
  return (
    <motion.div 
      className="absolute w-2 h-2 rounded-full bg-yellow-500/30 pointer-events-none"
      style={{ 
        x: randomX, 
        y: Math.random() * 400,
        scale
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.6, 0],
        y: [0, -100],
        x: randomX + (Math.random() - 0.5) * 100
      }}
      transition={{ 
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};

// Animated Particles Container Component
// Removing unused component
// const ParticleBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {Array.from({ length: 15 }).map((_, i) => (
//         <FloatingParticle 
//           key={i} 
//           delay={Math.random() * 5}
//           scale={Math.random() * 0.5 + 0.5}
//         />
//       ))}
//     </div>
//   );
// };

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<ExtendedCollection | null>(null);
  const [stats, setStats] = useState<OpenSeaCollectionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [itemCount, setItemCount] = useState<number>(0);
  const [activityCount, setActivityCount] = useState<number>(0);
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
        setItemCount(data.collection.stats?.total_supply || 0);
        setActivityCount(Math.floor(Math.random() * 100)); // Just a placeholder for activity count
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
      {/* Subtle Background with minimal particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={Math.random() * 10}
              scale={Math.random() * 0.3 + 0.2}
            />
          ))}
        </div>
      </div>

      {/* Hero Banner with cleaner edges */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[350px] overflow-hidden"
      >
        <Image
          src={collection.banner_image_url || collection.image_url || '/images/placeholder-banner.png'}
          alt={collection.name}
          fill
          className="object-cover brightness-90"
          priority
          quality={100}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/images/placeholder-banner.png';
          }}
        />

        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
      </motion.div>

      {/* Collection Info - centered layout */}
      <div className="container mx-auto px-8 -mt-36 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Collection logo - with yellow border */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 mb-8"
          >
            <div className="relative w-full h-full">
              <Image
                src={collection.image_url || '/images/placeholder-logo.png'}
                alt={`${collection.name} logo`}
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/images/placeholder-logo.png';
                }}
              />
            </div>
          </motion.div>

          {/* Collection title - styled like main page */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6"
          >
            <h1 className="text-7xl font-bold text-yellow-400 font-epilogue tracking-tight mb-4">{collection.name}</h1>
            
            {collection.safelist_status === 'verified' && (
              <CollectionBadge>Verified Collection</CollectionBadge>
            )}
          </motion.div>
          
          {/* Collection description - centered */}
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mb-8">{collection.description}</p>
          
          {/* Links and actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {collection.external_url && (
              <a 
                href={collection.external_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-4 py-2 border border-yellow-400/30 hover:border-yellow-400/60 transition-all text-white/70 hover:text-white"
              >
                <Globe size={16} className="text-yellow-400" />
                <span className="text-sm">Official Website</span>
              </a>
            )}
            
            {collection.twitter_username && (
              <a 
                href={`https://twitter.com/${collection.twitter_username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-4 py-2 border border-yellow-400/30 hover:border-yellow-400/60 transition-all text-white/70 hover:text-white"
              >
                <Twitter size={16} className="text-yellow-400" />
                <span className="text-sm">@{collection.twitter_username}</span>
              </a>
            )}
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://opensea.io/collection/${collection.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7B500] text-black font-semibold transition-all duration-300 border border-black"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-black/30 text-white border border-yellow-400/60 transition-all duration-300"
              >
                <GridIcon size={18} />
                All Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section - cleanly styled */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-8 pb-8"
      >
        <CollectionTabs
          defaultTab="items"
          tabs={[
            {
              id: 'items',
              label: 'Exhibition',
              count: itemCount,
              content: (
                <Suspense fallback={<div className="py-16 text-center text-white/60">Loading exhibition...</div>}>
                  <CollectionGrid collectionSlug={collection.slug} />
                </Suspense>
              )
            },
            {
              id: 'activity',
              label: 'Provenance',
              count: activityCount,
              content: (
                <Suspense fallback={<div className="py-16 text-center text-white/60">Loading provenance...</div>}>
                  <CollectionActivity collectionSlug={collection.slug} />
                </Suspense>
              )
            }
          ]}
        />
      </motion.div>
      
      {/* Stats - moved to bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="container mx-auto px-8 pt-8 pb-12"
      >
        {stats && <CollectionStats stats={stats} />}
      </motion.div>
    </Layout>
  );
} 