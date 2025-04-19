import { Suspense } from 'react';
import Link from 'next/link';
import { OpenSeaAPI } from '@/services/opensea/api';
import { ArrowLeft } from 'lucide-react';
import { NFTActions } from '@/components/nft/NFTActions';
import { NFTDetails } from '@/components/nft/NFTDetails';
import { NFTActivity } from '@/components/nft/NFTActivity';
import { NFTTraits } from '@/components/nft/NFTTraits';
import { RelatedNFTs } from '@/components/nft/RelatedNFTs';
import { PriceHistory } from '@/components/nft/PriceHistory';
import { NFTImage } from '@/components/nft/NFTImage';
import { logger } from '@/lib/logger';
import type { OpenSeaEvent, OpenSeaNFT, OpenSeaTrait } from '@/services/opensea/types';

// Initialize API instance with API key
const openSeaApi = new OpenSeaAPI(process.env.OPENSEA_API_KEY);

interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
}

interface ActivityEvent {
  type: 'sale' | 'list' | 'transfer' | 'mint';
  price?: string;
  from: string;
  to: string;
  timestamp: string;
  tokenId: string;
  image?: string | null;
}

interface FormattedNFT {
  id: string;
  name: string;
  image_url: string | null;
  price: string;
}

async function NFTContent({ slug, tokenId }: { slug: string; tokenId: string }) {
  try {
    logger.info('Fetching NFT data for:', { slug, tokenId });
    
    // Validate contract address format
    if (!/^0x[a-fA-F0-9]{40}$/i.test(slug)) {
      throw new Error('Invalid contract address format');
    }

    const contractAddress = slug.toLowerCase();

    // Fetch NFT data with retries
    const nft = await openSeaApi.getNFT({
      chain: 'ethereum',
      address: contractAddress,
      identifier: tokenId,
      include_orders: true // Include orders to get current price
    }).catch(async (error: Error) => {
      logger.error('Error fetching NFT:', error);
      // Retry once with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return openSeaApi.getNFT({
        chain: 'ethereum',
        address: contractAddress,
        identifier: tokenId,
        include_orders: true
      });
    });

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
      traits: nft.traits?.length || 0
    });

    // Fetch price data with retries and backoff
    const [bestListing, bestOffer] = await Promise.allSettled([
      openSeaApi.getBestListing(contractAddress, tokenId),
      openSeaApi.getBestOffer(contractAddress, tokenId)
    ]);

    // Log price information
    logger.info('Price information:', {
      bestListing: bestListing.status === 'fulfilled' ? bestListing.value?.results?.[0] : null,
      bestOffer: bestOffer.status === 'fulfilled' ? bestOffer.value?.results?.[0] : null
    });

    const listing = bestListing.status === 'fulfilled' ? bestListing.value?.results?.[0] : null;

    // Update NFT with current price information
    const nftWithPrice: OpenSeaNFT = {
      ...nft,
      price: {
        currentPrice: listing?.current_price ? Number(listing.current_price) / 1e18 : undefined,
        paymentToken: {
          symbol: 'ETH',
          address: '0x0000000000000000000000000000000000000000',
          decimals: 18,
          eth_price: '1',
          usd_price: '1'
        },
        lastSale: nft.price?.lastSale
      }
    };

    // Fetch events and related NFTs in parallel with error handling
    const [events, relatedNFTs] = await Promise.allSettled([
      openSeaApi.getNFTEvents(contractAddress, tokenId, {
        limit: 50,
        event_type: 'sale'
      }),
      openSeaApi.getNFTsByContract({
        chain: 'ethereum',
        address: contractAddress,
        limit: 8,
        order_by: 'sale_price',
        order_direction: 'desc'
      })
    ]);

    // Transform OpenSea traits to our format with null checks
    const transformedTraits = (nft.traits || []).map((trait: OpenSeaTrait) => ({
      trait_type: trait.trait_type || 'Unknown',
      value: trait.value !== undefined ? String(trait.value) : 'Unknown',
      rarity: trait.trait_count ? (trait.trait_count / 10000) * 100 : 50
    }));

    // Sort events by date for price history
    const sortedEvents = events.status === 'fulfilled' ? events.value.results
      .filter(event => 
        event.type === 'sale' && 
        event.price?.current?.value && 
        (!event.payment_token || event.payment_token.symbol === 'ETH')
      )
      .sort((a, b) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime())
    : [];

    // Convert events to the format expected by NFTActivity
    const activityEvents: ActivityEvent[] = events.status === 'fulfilled' ? events.value.results
      .filter((event: OpenSeaEvent): event is OpenSeaEvent => 
        event && ['sale', 'listing', 'transfer', 'mint'].includes(event.type))
      .map((event: OpenSeaEvent) => ({
        type: (event.type === 'listing' ? 'list' : event.type) as ActivityEvent['type'],
        price: event.price?.current?.value ? 
          (event.payment_token?.symbol === 'ETH' ? 
            event.price.current.value.toString() : 
            undefined
          ) : undefined,
        from: event.from_address || '0x0000000000000000000000000000000000000000',
        to: event.to_address || event.from_address || '0x0000000000000000000000000000000000000000',
        timestamp: event.created_date,
        tokenId: tokenId,
        image: nft.image_url
      }))
    : [];

    // Transform related NFTs with better price handling
    const formattedRelatedNFTs: FormattedNFT[] = relatedNFTs.status === 'fulfilled' ? relatedNFTs.value.results
      .filter((relatedNft: OpenSeaNFT) => 
        relatedNft && relatedNft.identifier !== tokenId)
      .map((relatedNft: OpenSeaNFT) => ({
        id: relatedNft.identifier,
        name: relatedNft.name || `#${relatedNft.identifier}`,
        image_url: relatedNft.image_url,
        price: relatedNft.price?.currentPrice?.toFixed(3) || 
               relatedNft.price?.lastSale?.price?.toFixed(3) || 
               '—'
      }))
    : [];

    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href={`/collections/${contractAddress}`} className="inline-flex items-center text-neutral-400 hover:text-white">
              <ArrowLeft size={20} className="mr-2" />
              Back to Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1A1A1A]">
              <NFTImage 
                src={nftWithPrice.image_url || '/images/nft-placeholder.png'} 
                alt={nftWithPrice.name || `NFT #${tokenId}`}
              />
            </div>

            <div className="space-y-6">
              <NFTDetails
                name={nftWithPrice.name || `NFT #${tokenId}`}
                description={nftWithPrice.description || 'No description available'}
                tokenId={tokenId}
                contractAddress={contractAddress}
                owner={(nftWithPrice.owners && nftWithPrice.owners.length > 0) ? nftWithPrice.owners[0].address : undefined}
                creator={nftWithPrice.creator?.address}
              />

              <NFTActions
                contractAddress={contractAddress}
                tokenId={tokenId}
                nft={nftWithPrice}
              />

              {transformedTraits.length > 0 && (
                <NFTTraits traits={transformedTraits} />
              )}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedEvents.length > 0 && <PriceHistory events={sortedEvents} />}
            {activityEvents.length > 0 && <NFTActivity events={activityEvents} />}
          </div>

          {formattedRelatedNFTs.length > 0 && (
            <div className="mt-12">
              <RelatedNFTs nfts={formattedRelatedNFTs} />
            </div>
          )}
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
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading NFT</h1>
          <p className="text-neutral-400">Failed to load NFT details. Please try again later.</p>
          <p className="text-sm text-neutral-500 mt-2">{error instanceof Error ? error.message : 'Unknown error'}</p>
          <Link
            href={`/collections/${slug}`}
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors mt-6"
          >
            <ArrowLeft size={20} />
            <span>Back to collection</span>
          </Link>
        </div>
      </div>
    );
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