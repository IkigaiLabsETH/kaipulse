import { Suspense } from 'react';
import Link from 'next/link';
import { OpenSeaAPI } from '@/services/opensea/api.new';
import { ArrowLeft } from 'lucide-react';
import { NFTActions } from '@/components/nft/NFTActions';
import { NFTDetails } from '@/components/nft/NFTDetails';
import { NFTActivity, type NFTEvent } from '@/components/nft/NFTActivity';
import { NFTTraits } from '@/components/nft/NFTTraits';
import { RelatedNFTs } from '@/components/nft/RelatedNFTs';
import { PriceHistory } from '@/components/nft/PriceHistory';
import { NFTImageGallery } from '@/components/nft/NFTImageGallery';
import { logger } from '@/lib/logger';
import type { OpenSeaEvent, OpenSeaNFT } from '@/services/opensea/types';
import type { EnhancedNFT } from '@/types/nft';

// Initialize API instance with API key
logger.info('Initializing OpenSea API with config:', {
  hasApiKey: !!process.env.NEXT_PUBLIC_OPENSEA_API_KEY,
  apiKeyLength: process.env.NEXT_PUBLIC_OPENSEA_API_KEY?.length
});

const openSeaApi = new OpenSeaAPI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY 
});

interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
}

type EventType = 'sale' | 'list' | 'transfer' | 'mint';

interface ActivityEvent {
  type: EventType;
  price?: string;
  from: string;
  to: string;
  timestamp: string;
  tokenId: string;
  image?: string | null;
  transaction_hash?: string;
  payment_token?: string;
}

interface FormattedNFT {
  id: string;
  name: string;
  image_url: string | null;
  price: string;
}

// Add error boundary component
function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center">
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

async function NFTContent({ slug, tokenId }: { slug: string; tokenId: string }) {
  try {
    // Log initial request parameters
    logger.info('NFTContent: Starting request with params:', {
      slug,
      tokenId,
      isContractAddress: /^0x[a-fA-F0-9]{40}$/i.test(slug),
      apiKeyPresent: !!process.env.NEXT_PUBLIC_OPENSEA_API_KEY
    });

    // Validate API key first
    if (!process.env.NEXT_PUBLIC_OPENSEA_API_KEY) {
      logger.error('NFTContent: Missing OpenSea API key');
      throw new Error('OpenSea API key is not configured');
    }

    logger.info('Starting NFT data fetch:', { 
      slug, 
      tokenId,
      isContractAddress: /^0x[a-fA-F0-9]{40}$/i.test(slug)
    });
    
    // Check if the slug is a contract address
    const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(slug);
    let nft: OpenSeaNFT;
    let contractAddress: string;
    let collectionSlug: string = slug;

    if (isContractAddress) {
      contractAddress = slug.toLowerCase();
      logger.info('Fetching collection by contract:', { 
        contractAddress,
        apiKey: !!process.env.NEXT_PUBLIC_OPENSEA_API_KEY 
      });
      
      try {
        const collection = await openSeaApi.getCollection(contractAddress);
        collectionSlug = collection.slug;
        logger.info('Collection details fetched:', { 
          contractAddress, 
          collectionSlug,
          collectionName: collection.name,
          safelistStatus: collection.safelist_status
        });
      } catch (error) {
        logger.error('Failed to fetch collection:', { 
          contractAddress,
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        });
        throw new Error(`Failed to fetch collection details: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }

      // Now fetch the NFT using the contract address
      logger.info('Fetching NFT by contract:', { 
        chain: 'ethereum',
        contractAddress, 
        tokenId,
        includeOrders: true 
      });
      
      try {
        nft = await openSeaApi.getNFT({
          chain: 'ethereum',
          address: contractAddress,
          identifier: tokenId,
          include_orders: true
        });
        
        logger.info('NFT fetched successfully:', {
          identifier: nft.identifier,
          name: nft.name,
          tokenStandard: nft.token_standard,
          imageUrl: nft.image_url,
          hasTraits: !!nft.traits?.length,
          hasPrice: !!nft.price
        });
      } catch (error) {
        logger.error('Failed to fetch NFT:', {
          contractAddress,
          tokenId,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        throw error;
      }
    } else {
      // If it's a collection slug, use the collection endpoint directly
      try {
        logger.info('Fetching NFT by collection:', { slug, tokenId });
        nft = await openSeaApi.getNFTByCollection({
          collection: slug,
          identifier: tokenId,
          include_orders: true
        });
        contractAddress = nft.contract;
      } catch (error) {
        logger.error('Error fetching NFT by collection:', error);
        throw new Error('Failed to fetch NFT data');
      }
    }

    if (!nft) {
      logger.error('NFT data is null or undefined');
      throw new Error('NFT not found');
    }

    // Log detailed NFT data for debugging
    logger.info('Raw NFT data:', {
      identifier: nft.identifier,
      name: nft.name,
      image_url: nft.image_url,
      description: nft.description,
      owners: nft.owners,
      creator: nft.creator,
      traits: nft.traits?.length || 0,
      contract: nft.contract,
      token_standard: nft.token_standard,
      metadata_url: nft.metadata_url
    });

    // Log full NFT object for debugging
    logger.info('Full NFT object:', { nft });

    // Ensure image URL is valid and handle IPFS URLs
    const processImageUrl = (url: string | undefined | null): string => {
      if (!url) return '/images/nft-placeholder.png';
      
      // Log the original URL for debugging
      logger.info('Processing image URL:', { originalUrl: url });
      
      try {
        // Handle IPFS URLs
        if (url.startsWith('ipfs://')) {
          const ipfsUrl = url.replace('ipfs://', 'https://ipfs.io/ipfs/');
          logger.info('Converted IPFS URL:', { original: url, converted: ipfsUrl });
          return ipfsUrl;
        }

        // Validate URL format
        new URL(url);
        return url;
      } catch (error) {
        logger.error('Invalid image URL:', { url, error: error instanceof Error ? error.message : 'Unknown error' });
        return '/images/nft-placeholder.png';
      }
    };

    // Transform image URLs and collect all available images
    const images = [
      {
        url: processImageUrl(nft.image_url),
        alt: nft.name || `${collectionSlug} #${tokenId}`
      }
    ];

    // Add animation URL if available
    if (nft.animation_url) {
      images.push({
        url: processImageUrl(nft.animation_url),
        alt: `${nft.name || `${collectionSlug} #${tokenId}`} Animation`
      });
    }

    // Add any additional images from metadata
    if (nft.additional_images?.length) {
      images.push(
        ...nft.additional_images.map((url: string, index: number) => ({
          url: processImageUrl(url),
          alt: `${nft.name || `${collectionSlug} #${tokenId}`} Image ${index + 2}`
        }))
      );
    }

    logger.info('Processed images:', { 
      mainImage: images[0].url,
      totalImages: images.length,
      hasAnimation: !!nft.animation_url,
      additionalImages: nft.additional_images?.length || 0
    });

    // Fetch price data with retries and backoff
    logger.info('Fetching price data:', { contractAddress, tokenId });
    
    const [bestListing, bestOffer] = await Promise.allSettled([
      openSeaApi.getBestListing(contractAddress, tokenId).catch(error => {
        logger.error('Failed to fetch best listing:', {
          contractAddress,
          tokenId,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        return { results: [] };
      }),
      openSeaApi.getBestOffer(contractAddress, tokenId).catch(error => {
        logger.error('Failed to fetch best offer:', {
          contractAddress,
          tokenId,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        return { results: [] };
      })
    ]);

    // Log price information
    const listing = bestListing.status === 'fulfilled' && bestListing.value?.results?.[0] || null;
    const offer = bestOffer.status === 'fulfilled' && bestOffer.value?.results?.[0] || null;

    logger.info('Price data fetched:', {
      hasListing: !!listing,
      hasOffer: !!offer,
      listingPrice: listing?.current_price,
      offerPrice: offer?.current_price
    });

    // Fetch events with all event types
    const [events, relatedNFTs] = await Promise.allSettled([
      openSeaApi.getNFTEvents(contractAddress, tokenId, {
        limit: 50,
        event_type: 'created,successful,transfer,cancelled,offer_entered,approve'
      }),
      // Always use collection slug for related NFTs
      openSeaApi.getNFTsByCollection({
        collection: collectionSlug,
        limit: 12
      })
    ]);

    // Log raw events for debugging
    logger.info('Raw events from OpenSea:', {
      success: events.status === 'fulfilled',
      eventCount: events.status === 'fulfilled' ? events.value?.results?.length : 0,
      firstEvent: events.status === 'fulfilled' ? events.value?.results?.[0] : null
    });

    // Sort events by date for price history
    const sortedEvents = events.status === 'fulfilled' && events.value?.results ? 
      events.value.results
        .filter(event => 
          event.event_type === 'sale' && 
          event.total_price
        )
        .sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())
      : [];

    // Convert events to the format expected by NFTActivity
    const activityEvents: NFTEvent[] = (events.status === 'fulfilled' && events.value?.results) ? 
      events.value.results
        .filter(event => {
          const isValid = event.event_type && event.created_date;
          logger.info('Validating event:', { event, isValid });
          return isValid;
        })
        .map((event: OpenSeaEvent) => {
          // Format price to ETH with 4 decimal places if available
          const formattedPrice = event.total_price 
            ? (Number(event.total_price) / 1e18).toFixed(4)
            : undefined;

          // Map event type to our supported types (case insensitive)
          let eventType: NFTEvent['type'];
          const eventTypeLower = event.event_type.toLowerCase();
          
          // Map OpenSea event types to our types
          if (eventTypeLower.includes('sale') || eventTypeLower === 'successful') {
            eventType = 'sale';
          } else if (eventTypeLower.includes('list') || eventTypeLower === 'created') {
            eventType = 'list';
          } else if (eventTypeLower.includes('transfer')) {
            eventType = 'transfer';
          } else if (eventTypeLower.includes('mint') || eventTypeLower === 'approve') {
            eventType = 'mint';
          } else {
            logger.info('Unknown event type:', { 
              originalType: event.event_type,
              defaultingTo: 'transfer'
            });
            eventType = 'transfer';
          }

          const transformedEvent = {
            type: eventType,
            price: formattedPrice,
            from: event.from_account || '0x0000000000000000000000000000000000000000',
            to: event.to_account || '0x0000000000000000000000000000000000000000',
            timestamp: event.created_date
          };

          logger.info('Event transformation:', { 
            original: {
              type: event.event_type,
              price: event.total_price,
              from: event.from_account,
              to: event.to_account,
              timestamp: event.created_date
            },
            transformed: transformedEvent
          });

          return transformedEvent;
        })
        .filter(event => {
          // Filter out invalid events
          const isValid = event.type !== 'transfer' || event.from !== event.to;
          if (!isValid) {
            logger.info('Filtering out invalid event:', { event });
          }
          return isValid;
        })
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      : [];

    // Log final events
    logger.info('Activity events after processing:', {
      totalEvents: activityEvents.length,
      eventTypes: Array.from(new Set(activityEvents.map(e => e.type))),
      events: activityEvents
    });

    // Transform OpenSea traits to our format with null checks
    const transformedTraits = (nft.traits || []).map(trait => ({
      trait_type: trait.trait_type || 'Unknown',
      value: trait.value !== undefined ? String(trait.value) : 'Unknown',
      rarity: trait.trait_count ? (trait.trait_count / 10000) * 100 : 50
    }));

    // Update NFT with transformed image URL and current price information
    const nftWithPrice: OpenSeaNFT = {
      ...nft,
      image_url: processImageUrl(nft.image_url) || '/images/nft-placeholder.png',
      price: {
        currentPrice: listing?.current_price ? Number(listing.current_price) / 1e18 : undefined,
        paymentToken: {
          id: 1,
          symbol: 'ETH',
          address: '0x0000000000000000000000000000000000000000',
          image_url: 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg',
          name: 'Ether',
          decimals: 18,
          eth_price: '1',
          usd_price: '1'
        }
      },
      // Ensure owners is properly formatted as an array of strings
      owners: Array.isArray(nft.owners) ? nft.owners.map((owner: { address: string } | string) => {
        if (typeof owner === 'string') return owner;
        if (owner && typeof owner === 'object' && 'address' in owner) return owner.address;
        return '';
      }).filter(Boolean) : [],
    };

    // Transform related NFTs
    const formattedRelatedNFTs = relatedNFTs.status === 'fulfilled' && relatedNFTs.value?.results ? 
      relatedNFTs.value.results
        .filter((relatedNft: OpenSeaNFT) => relatedNft.identifier !== tokenId)
        .slice(0, 8)
        .map((relatedNft: OpenSeaNFT) => ({
          id: relatedNft.identifier,
          name: relatedNft.name || `${collectionSlug} #${relatedNft.identifier}`,
          image_url: relatedNft.image_url,
          price: relatedNft.price?.currentPrice 
            ? `${relatedNft.price.currentPrice}` 
            : ''
        }))
      : [];

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href={`/collections/${collectionSlug}`}
            className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Image Gallery */}
          <div className="space-y-8">
            <NFTImageGallery
              images={images}
              className="w-full rounded-2xl overflow-hidden"
            />
            
            <NFTTraits traits={transformedTraits} />
          </div>

          {/* Right column - Details */}
          <div className="space-y-8">
            <NFTDetails
              nft={nftWithPrice}
              collection={{
                name: nft.collection_name || collectionSlug,
                slug: collectionSlug
              }}
            />

            <NFTActions
              nft={nftWithPrice}
              listing={listing}
              bestOffer={offer}
            />

            <PriceHistory events={sortedEvents} />
          </div>
        </div>

        {/* Full width sections */}
        <div className="mt-16 space-y-16">
          <NFTActivity events={activityEvents} />
          
          <RelatedNFTs
            nfts={formattedRelatedNFTs}
            collectionSlug={collectionSlug}
          />
        </div>
      </div>
    );
  } catch (error) {
    logger.error('Error in NFTContent:', error);
    if (error instanceof Error) {
      logger.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    return <ErrorDisplay error={error instanceof Error ? error : new Error('An unknown error occurred')} />;
  }
}

export default function NFTPage({ params }: NFTPageProps) {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Suspense 
        fallback={
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-6 w-32 bg-yellow-500/10 rounded-full" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square w-full rounded-2xl bg-yellow-500/10" />
                  <div className="h-16 mt-6 bg-yellow-500/10 rounded-xl" />
                </div>
                <div className="space-y-6">
                  <div className="h-64 rounded-2xl bg-yellow-500/10" />
                  <div className="h-48 rounded-2xl bg-yellow-500/10" />
                  <div className="h-32 rounded-2xl bg-yellow-500/10" />
                </div>
              </div>
              <div className="h-64 rounded-2xl bg-yellow-500/10" />
            </div>
          </div>
        }
      >
        <NFTContent slug={params.slug} tokenId={params.tokenId} />
      </Suspense>
    </main>
  );
}