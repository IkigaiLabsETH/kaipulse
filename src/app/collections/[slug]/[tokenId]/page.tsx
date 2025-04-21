'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NFTActions } from '@/components/nft/NFTActions';
import { NFTDetails } from '@/components/nft/NFTDetails';
import { NFTActivity } from '@/components/nft/NFTActivity';
import { NFTTraits } from '@/components/nft/NFTTraits';
import { PriceHistory } from '@/components/nft/PriceHistory';
import { NFTImageGallery } from '@/components/nft/NFTImageGallery';
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
    {
      url: processImageUrl(nft.image_url),
      alt: nft.name || `${collection.slug} #${nft.identifier}`
    }
  ];

  if (nft.animation_url) {
    images.push({
      url: processImageUrl(nft.animation_url),
      alt: `${nft.name || `${collection.slug} #${nft.identifier}`} Animation`
    });
  }

  // Transform events for activity
  const activityEvents = events
    .map((event) => {
      let type: 'sale' | 'transfer' | 'mint' | 'list';
      if (event.event_type.toLowerCase().includes('sale')) {
        type = 'sale';
      } else if (event.event_type.toLowerCase().includes('list')) {
        type = 'list';
      } else if (event.event_type.toLowerCase().includes('transfer')) {
        type = 'transfer';
      } else {
        type = 'mint';
      }

      return {
        type,
        price: event.payment?.quantity ? (Number(event.payment.quantity) / 1e18).toFixed(4) : undefined,
        from: event.from_account?.address || '0x0000000000000000000000000000000000000000',
        to: event.to_account?.address || '0x0000000000000000000000000000000000000000',
        timestamp: event.created_date
      };
    })
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  // Transform traits
  const transformedTraits = (nft.traits || []).map((trait) => ({
    trait_type: trait.trait_type || 'Unknown',
    value: trait.value !== undefined ? String(trait.value) : 'Unknown',
    rarity: trait.trait_count ? (trait.trait_count / 10000) * 100 : 50
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/collections/${collection.slug}`}
          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to collection</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <NFTImageGallery images={images} />
          <NFTTraits traits={transformedTraits} />
          <NFTActivity events={activityEvents} />
        </div>

        <div className="space-y-8">
          <NFTDetails 
            nft={nft} 
            collection={{
              name: collection.name,
              slug: collection.slug
            }}
          />
          <NFTActions 
            nft={nft} 
            listing={listing} 
            bestOffer={offer} 
          />
          <PriceHistory events={events} />
        </div>
      </div>
    </div>
  );
}

function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 opacity-50">
            <NFTImage
              src="/images/error-placeholder.png"
              alt="Error"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Error Loading NFT</h1>
          <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400 mb-2">
              {error.message.includes('API key') 
                ? 'OpenSea API key is not configured. Please set up your environment variables.'
                : error.message}
            </p>
            {error.message.includes('API key') && (
              <p className="text-sm text-neutral-400">
                Add NEXT_PUBLIC_OPENSEA_API_KEY to your .env.local file and restart the server.
              </p>
            )}
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to collections</span>
          </Link>
        </div>
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

        // Fetch events with error handling
        let eventsData = { events: [] };
        try {
          const eventsRes = await fetch(`/api/collections/${params.slug}/${params.tokenId}/events`, {
            signal: controller.signal
          });
          if (eventsRes.ok) {
            eventsData = await eventsRes.json();
          }
        } catch (eventsError) {
          // Non-critical error - just log it
          logger.warn('Failed to fetch NFT events:', eventsError);
        }

        // Fetch listings and offers in parallel with error handling
        let listingsData = { orders: [] };
        let offersData = { orders: [] };
        
        try {
          const [listingsRes, offersRes] = await Promise.all([
            fetch(`/api/collections/${params.slug}/${params.tokenId}/listings`, {
              signal: controller.signal
            }),
            fetch(`/api/collections/${params.slug}/${params.tokenId}/offers`, {
              signal: controller.signal
            })
          ]);

          if (listingsRes.ok) {
            listingsData = await listingsRes.json();
          }

          if (offersRes.ok) {
            offersData = await offersRes.json();
          }
        } catch (marketDataError) {
          // Non-critical error - just log it
          logger.warn('Failed to fetch market data:', marketDataError);
        }

        if (!isMounted) return;

        // Update state with all the data
        setCollection(collectionData.collection);
        setNFT(nftData.nft);
        setEvents(eventsData.events || []);
        setListing(listingsData.orders?.[0] || null);
        setOffer(offersData.orders?.[0] || null);
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
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-700 rounded mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="aspect-square bg-gray-700 rounded-lg" />
                <div className="h-48 bg-gray-700 rounded-lg" />
              </div>
              <div className="space-y-8">
                <div className="h-64 bg-gray-700 rounded-lg" />
                <div className="h-48 bg-gray-700 rounded-lg" />
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