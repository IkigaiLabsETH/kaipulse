import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/ui';
import { logger } from '@/lib/logger';
import type { 
  OpenSeaNFT,
  Listing,
  Collection
} from '@/services/opensea/types';
import NFTImageGallery from '@/components/nft/NFTImageGallery';
import { notFound } from 'next/navigation';
import { env } from '@/env.mjs';

// Use React cache to deduplicate requests
import { cache } from 'react';

interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
}

interface NFTContentProps {
  nft: OpenSeaNFT;
  collection: Collection;
  listing: Listing | null;
  isFallbackData?: boolean;
}

// Detect if the slug is a contract address (0x...) or a collection slug
function isContractAddress(slug: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(slug);
}

// Server-side data fetching using React cache to deduplicate requests
const fetchNFTData = cache(async (slug: string, tokenId: string) => {
  // Check if OpenSea API is configured
  if (!env.OPENSEA_API_KEY) {
    throw new Error('OpenSea API key is not configured. Please set up your API key in the environment variables.');
  }
  
  // Create mock data for fallback when OpenSea API is down
  const createFallbackNFTData = () => {
    logger.warn('Using fallback NFT data due to OpenSea API issues', { slug, tokenId });
    
    // Format token ID with proper leading zeros if numeric
    const formattedTokenId = isNaN(Number(tokenId)) ? tokenId : `#${tokenId.padStart(4, '0')}`;
    
    // Generate mock NFT object
    return {
      nft: {
        identifier: tokenId,
        token_id: tokenId,
        collection: slug,
        contract: slug,
        contract_address: slug,
        chain: 'ethereum',
        token_standard: 'erc721',
        name: `NFT ${formattedTokenId}`,
        description: "This is fallback NFT data shown when OpenSea API is unavailable. The actual NFT information will be displayed when the API becomes available again.",
        image_url: "/images/placeholder-nft.svg",
        metadata_url: "",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_disabled: false,
        is_nsfw: false,
        traits: [
          { trait_type: "Status", value: "OpenSea API Unavailable" }
        ],
        animation_url: null,
        background_color: null
      },
      collection: {
        slug: slug,
        name: isContractAddress(slug) ? `Collection ${slug.slice(0, 6)}...${slug.slice(-4)}` : slug,
        description: "This is fallback collection data shown when OpenSea API is unavailable.",
        image_url: "/images/placeholder-logo.svg",
        banner_image_url: "/images/placeholder-banner.svg",
        safelist_status: "not_requested",
        is_nsfw: false,
        category: "other",
        asset_contract: {
          address: isContractAddress(slug) ? slug : "0x0000000000000000000000000000000000000000",
          name: "Unknown Contract",
          schema_name: "ERC721"
        }
      },
      listing: null,
      isFallbackData: true
    };
  };

  // Function to implement retry logic with exponential backoff
  const fetchWithRetry = async <T,>(
    fetcher: () => Promise<T>,
    options: { maxRetries?: number; initialDelay?: number; description?: string; useFallback?: boolean } = {}
  ): Promise<T> => {
    const { maxRetries = 3, initialDelay = 1000, description = 'API request', useFallback = false } = options;
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fetcher();
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        // Check if this is a retryable error
        const isRetryable = 
          lastError.message.includes('Bad Gateway') || 
          lastError.message.includes('503') || 
          lastError.message.includes('502') || 
          lastError.message.includes('504') || 
          lastError.message.includes('429') || 
          lastError.message.includes('timeout') ||
          lastError.message.includes('network error');
        
        // If we've used all retries or it's not a retryable error, rethrow
        if (attempt >= maxRetries || !isRetryable) {
          // If we've exhausted retries and fallback is enabled, use fallback data
          if (attempt >= maxRetries && useFallback && isRetryable) {
            logger.warn(`${description} failed after ${maxRetries} retries, using fallback data`);
            return createFallbackNFTData() as unknown as T;
          }
          throw lastError;
        }
        
        // Calculate delay with exponential backoff and jitter
        const delay = initialDelay * Math.pow(2, attempt - 1) * (1 + 0.2 * Math.random());
        
        logger.warn(`${description} failed, retrying (${attempt}/${maxRetries}) after ${Math.round(delay)}ms: ${lastError.message}`);
        
        // Wait before the next retry
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    // This should never happen due to the throw in the loop
    throw lastError!;
  };
  
  // Fetch collection data
  let collectionEndpoint = `/api/collections/${slug}`;
  
  // If it's a contract address, use the contract endpoint
  if (isContractAddress(slug)) {
    collectionEndpoint = `/api/collections/contract/${slug}`;
  }

  // Make collection request with absolute URL
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    // Fetch collection data with retry logic
    const collectionData = await fetchWithRetry(
      async () => {
        const collectionResponse = await fetch(`${baseUrl}${collectionEndpoint}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });

        if (!collectionResponse.ok) {
          logger.error(`Failed to fetch collection: ${collectionResponse.statusText}`);
          
          if (collectionResponse.status === 404) {
            notFound();
          }
          
          throw new Error(`Failed to fetch collection: ${collectionResponse.statusText}`);
        }

        const data = await collectionResponse.json();
        
        if (!data.collection) {
          throw new Error('Collection data is missing or malformed');
        }
        
        return data;
      },
      { description: 'Collection fetch' }
    );
    
    // Fetch NFT data with retry logic
    const nftData = await fetchWithRetry(
      async () => {
        const nftResponse = await fetch(`${baseUrl}/api/collections/${slug}/${tokenId}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });
        
        // Handle API key missing case separately
        if (nftResponse.status === 503) {
          throw new Error('OpenSea API is not configured properly');
        }
        
        if (!nftResponse.ok) {
          if (nftResponse.status === 404) {
            notFound();
          }
          
          // Special handling for 502 Bad Gateway errors
          if (nftResponse.status === 502) {
            throw new Error('Failed to fetch NFT from OpenSea: Bad Gateway');
          }
          
          logger.error(`Failed to fetch NFT: ${nftResponse.statusText}`);
          throw new Error(`Failed to fetch NFT from OpenSea: ${nftResponse.statusText}`);
        }
        
        const data = await nftResponse.json();
          
        if (!data.nft) {
          throw new Error('NFT data is missing or malformed');
        }
        
        return data;
      },
      { description: 'NFT fetch', useFallback: true }
    );

    // Fetch listings (non-critical) - don't retry as this is less important
    let listingsData = { orders: [] };
    try {
      const listingsResponse = await fetch(`${baseUrl}/api/collections/${slug}/${tokenId}/listings`, {
        cache: 'no-store'
      });
      
      if (listingsResponse.ok) {
        listingsData = await listingsResponse.json();
      }
    } catch (marketDataError) {
      logger.warn('Failed to fetch listings data:', marketDataError);
    }

    const result = {
      nft: nftData.nft,
      collection: collectionData.collection,
      listing: listingsData.orders?.[0] || null,
      isFallbackData: nftData.isFallbackData || false
    };
    
    return result;
  } catch (error) {
    // Last resort fallback if something unexpected happens
    logger.error('Unhandled error fetching NFT data, using fallback:', error);
    return createFallbackNFTData();
  }
});

function NFTContent({ 
  nft, 
  collection, 
  listing,
  isFallbackData = false
}: NFTContentProps) {
  // Process image URLs
  const processImageUrl = (url: string | undefined | null): string => {
    if (!url || url === '/images/nft-placeholder.png') {
      // Use SVG placeholder for better visual appearance in fallback mode
      return '/images/placeholder-nft.svg';
    }
    
    try {
      if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      }
      new URL(url); // This will throw if the URL is invalid
      return url;
    } catch {
      return '/images/placeholder-nft.svg';
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
      {/* Fallback data notice */}
      {isFallbackData && (
        <div className="mb-8 bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded-sm">
          <h3 className="text-yellow-400 text-sm font-semibold mb-2">Temporary Display Mode</h3>
          <p className="text-white/70 text-sm">
            OpenSea&apos;s API is currently experiencing issues. We&apos;re showing a placeholder while waiting for their service to recover. 
            You can try refreshing the page later to see the actual NFT data.
          </p>
        </div>
      )}
      
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
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Large artwork display */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="sticky top-8">
            <NFTImageGallery images={images} alt={alt} fallbackMode={isFallbackData} />
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
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: NFTPageProps) {
  try {
    const data = await fetchNFTData(params.slug, params.tokenId);
    return {
      title: `${data.nft.name || '#' + data.nft.identifier} | ${data.collection.name}`,
      description: data.nft.description || `View this ${data.collection.name} NFT on our platform.`,
      openGraph: {
        images: [data.nft.image_url],
      },
    };
  } catch {
    return {
      title: 'NFT Details',
      description: 'View NFT details and information.'
    };
  }
}

export default async function NFTPage({ params }: NFTPageProps) {
  try {
    // Fetch NFT data on the server
    const { nft, collection, listing, isFallbackData } = await fetchNFTData(params.slug, params.tokenId);
    
    return (
      <Layout>
        <NFTContent 
          nft={nft}
          collection={collection}
          listing={listing}
          isFallbackData={isFallbackData}
        />
      </Layout>
    );
  } catch (error) {
    logger.error('Error loading NFT:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      slug: params.slug,
      tokenId: params.tokenId
    });
    
    // Let error be handled by the nearest error boundary
    throw error;
  }
}