'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { NFTActions } from '@/components/nft/NFTActions';
import { NFTDetails } from '@/components/nft/NFTDetails';
import { NFTImage } from '@/components/nft/NFTImage';
import { Layout } from '@/components/ui';
import { logger } from '@/lib/logger';
import type { 
  OpenSeaNFT, 
  OpenSeaEventDetails, 
  Listing,
  Offer,
  Collection
} from '@/services/opensea/types';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { formatEther } from 'viem';
// These imports are causing errors, commenting them out
// import { getNFT } from '@/services/nft/fetchers';
// import { getCollection } from '@/services/collections/fetchers';
// import { CollectionData, NFTData } from '@/types/opensea';
// import NFTBreadcrumbs from '@/components/nft/NFTBreadcrumbs';
import NFTImageGallery from '@/components/nft/NFTImageGallery';
// import NFTMintDetails from '@/components/nft/NFTMintDetails';

interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
}

interface NFTContentProps {
  nft: OpenSeaNFT;
  collection: Collection;
  events: OpenSeaEventDetails[];
  listing: Listing | null;
  offer: Offer | null;
}

function NFTContent({ 
  nft, 
  collection, 
  events, 
  listing, 
  offer 
}: NFTContentProps) {
  // Process image URLs
  const processImageUrl = (url: string | undefined | null): string => {
    if (!url) return '/images/nft-placeholder.png';
    
    try {
      if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      }
      new URL(url);
      return url;
    } catch {
      return '/images/nft-placeholder.png';
    }
  };

  // Transform images for gallery
  const images = [
    processImageUrl(nft.image_url)
  ];

  if (nft.animation_url) {
    images.push(processImageUrl(nft.animation_url));
  }

  const alt = nft.name || `${collection.slug} #${nft.identifier}`;
  const currentPrice = listing?.current_price 
    ? Number(listing.current_price) / 1e18 
    : undefined;

  return (
    <div className="container mx-auto px-8 py-12">
      {/* Elegant navigation bar */}
      <div className="flex justify-between items-center mb-16">
        <Link
          href={`/collections/${collection.slug}`}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors tracking-wider text-sm uppercase"
        >
          <ArrowLeft size={16} className="text-yellow-400" />
          <span>Back to Exhibition</span>
        </Link>
        
        <div>
          <Link
            href={`https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors tracking-wider text-sm uppercase"
          >
            <span>View on OpenSea</span>
            <ArrowUpRight size={16} className="text-yellow-400" />
          </Link>
        </div>
      </div>

      {/* Artwork display section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16"
      >
        {/* Large artwork display */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="sticky top-8">
            <NFTImageGallery images={images} alt={alt} />
          </div>
        </div>

        {/* Artwork info panel */}
        <div className="lg:col-span-5 xl:col-span-4">
          {/* Artwork title and collection */}
          <div className="mb-10">
            <h1 className="text-4xl font-light text-white mb-2">
              {nft.name || `#${nft.identifier}`}
            </h1>
            <div className="text-yellow-400 uppercase tracking-widest text-sm font-light">
              {collection.name}
            </div>
            
            {/* Price display */}
            {currentPrice && (
              <div className="mt-6 text-3xl font-light">
                <span className="text-white/70">Ξ</span> 
                <span className="text-white">{currentPrice.toFixed(2)}</span>
              </div>
            )}
            
            {/* Simple divider */}
            <div className="h-[1px] w-16 bg-yellow-400/40 my-8"></div>
          </div>
          
          {/* Artwork description */}
          {nft.description && (
            <div className="mb-10">
              <h2 className="text-xs uppercase tracking-widest text-yellow-400 mb-4">About this work</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                {nft.description}
              </p>
            </div>
          )}
          
          {/* Creator info */}
          {nft.creator && (
            <div className="mb-10">
              <h2 className="text-xs uppercase tracking-widest text-yellow-400 mb-4">Creator</h2>
              <p className="text-white text-sm">
                {nft.creator.username || nft.creator.address}
              </p>
            </div>
          )}
          
          {/* Collection info */}
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest text-yellow-400 mb-4">Details</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <span className="text-white/50 text-xs mb-1">Contract</span>
                <span className="text-white/80 text-sm font-light truncate">{nft.contract}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-xs mb-1">Token ID</span>
                <span className="text-white/80 text-sm font-light">{nft.identifier}</span>
              </div>
              {nft.owners?.[0] && (
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs mb-1">Owner</span>
                  <span className="text-white/80 text-sm font-light truncate">
                    {nft.owners[0].address}
                    {nft.owners[0].quantity > 1 && ` (${nft.owners[0].quantity})`}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Essential traits only */}
          {nft.traits && nft.traits.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xs uppercase tracking-widest text-yellow-400 mb-4">Properties</h2>
              <div className="grid grid-cols-2 gap-3">
                {nft.traits.slice(0, 6).map((trait, index) => (
                  <div key={index} className="border border-white/10 p-3">
                    <span className="text-white/50 text-xs block mb-1">{trait.trait_type}</span>
                    <span className="text-white text-sm font-light">{trait.value}</span>
                  </div>
                ))}
                {nft.traits.length > 6 && (
                  <div className="border border-white/10 p-3 flex items-center justify-center">
                    <span className="text-white/50 text-xs">+{nft.traits.length - 6} more</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        <div className="w-24 h-24 mx-auto mb-8 opacity-50">
          <NFTImage
            src="/images/error-placeholder.png"
            alt="Error"
          />
        </div>
        <h1 className="text-xl font-light mb-4 text-white uppercase tracking-widest">Error Loading Artwork</h1>
        <p className="text-white/70 mb-8">
          {error.message.includes('API key') 
            ? 'OpenSea API key is not configured. Please set up your environment variables.'
            : error.message}
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-yellow-400/30 text-yellow-400 text-sm uppercase tracking-wider hover:bg-yellow-400/10 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to Collections</span>
        </Link>
      </div>
    </div>
  );
}

export default function NFTPage({ params }: NFTPageProps) {
  const [nft, setNFT] = useState<OpenSeaNFT | null>(null);
  const [collection, setCollection] = useState<Collection | null>(null);
  const [events, setEvents] = useState<OpenSeaEventDetails[]>([]);
  const [listing, setListing] = useState<Listing | null>(null);
  const [offer, setOffer] = useState<Offer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch collection data first
        const collectionRes = await fetch(`/api/collections/${params.slug}`, {
          signal: controller.signal,
          // Add cache control headers to prevent stale data
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!collectionRes.ok) {
          const errorData = await collectionRes.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to fetch collection: ${collectionRes.status} ${collectionRes.statusText}`);
        }
        
        const collectionData = await collectionRes.json();
        if (!collectionData.collection) {
          throw new Error('Collection data is missing or malformed');
        }

        // Fetch NFT data
        const nftRes = await fetch(`/api/collections/${params.slug}/${params.tokenId}`, {
          signal: controller.signal,
          // Add cache control headers to prevent stale data
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!nftRes.ok) {
          const errorData = await nftRes.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to fetch NFT: ${nftRes.status} ${nftRes.statusText}`);
        }
        
        const nftData = await nftRes.json();
        if (!nftData.nft) {
          throw new Error('NFT data is missing or malformed');
        }

        // Fetch listings and offers in parallel with error handling
        let listingsData = { orders: [] };
        let offersData = { orders: [] };
        
        try {
          const listingsRes = await fetch(`/api/collections/${params.slug}/${params.tokenId}/listings`, {
            signal: controller.signal
          });

          if (listingsRes.ok) {
            listingsData = await listingsRes.json();
          }
        } catch (marketDataError) {
          // Non-critical error - just log it
          logger.warn('Failed to fetch listings data:', marketDataError);
        }

        if (!isMounted) return;

        // Update state with all the data
        setCollection(collectionData.collection);
        setNFT(nftData.nft);
        setListing(listingsData.orders?.[0] || null);
        setRetryCount(0); // Reset retry count on success
      } catch (err) {
        if (!isMounted) return;

        const errorMessage = err instanceof Error ? err.message : 'Failed to load NFT data';
        logger.error('Error loading NFT:', { 
          error: errorMessage, 
          slug: params.slug,
          tokenId: params.tokenId
        });
        
        setError(err instanceof Error ? err : new Error(errorMessage));

        // Implement retry logic
        if (retryCount < 3) {
          setRetryCount(prev => prev + 1);
          const delay = Math.min(1000 * Math.pow(2, retryCount), 8000);
          logger.info(`Retrying in ${delay}ms...`, { attempt: retryCount + 1 });
          
          setTimeout(() => {
            if (isMounted) {
              fetchData();
            }
          }, delay);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [params.slug, params.tokenId, retryCount]);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (isLoading || !nft || !collection) {
    return (
      <Layout>
        <div className="container mx-auto px-8 py-12">
          <div className="animate-pulse">
            <div className="h-5 w-32 bg-white/10 mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="aspect-square bg-white/5" />
              </div>
              <div className="lg:col-span-5 xl:col-span-4 space-y-8">
                <div className="h-8 w-3/4 bg-white/5" />
                <div className="h-4 w-1/3 bg-white/5" />
                <div className="h-[1px] w-16 bg-white/10 my-8" />
                <div className="space-y-4">
                  <div className="h-4 w-full bg-white/5" />
                  <div className="h-4 w-full bg-white/5" />
                  <div className="h-4 w-2/3 bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <NFTContent 
        nft={nft}
        collection={collection}
        events={events}
        listing={listing}
        offer={offer}
      />
    </Layout>
  );
}