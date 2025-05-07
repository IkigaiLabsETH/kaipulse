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
import { env } from '@/env.mjs';
import { Metadata } from 'next';

// Use React cache to deduplicate requests
import { cache } from 'react';

// Define page props interface
interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Component props interface
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
    logger.error('OpenSea API key is not configured. This will cause fallback data to be shown in production.');
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

  try {
    // Server-side direct API approach to avoid ECONNREFUSED
    if (typeof window === 'undefined' && env.OPENSEA_API_KEY) {
      logger.info('Server-side rendering, using direct OpenSea API calls');
      
      try {
        // Import OpenSea API client
        const { OpenSeaAPI } = await import('@/services/opensea/api');
        const openSeaAPI = new OpenSeaAPI(env.OPENSEA_API_KEY);
        
        // Get collection data
        let collectionData: { 
          collection: Record<string, unknown>;
          asset_contract?: { address: string } 
        };
        let contractAddress = slug;
        
        if (isContractAddress(slug)) {
          try {
            const result = await openSeaAPI.collections.getCollectionByContractAddress({
              contractAddress: slug,
              chain: 'ethereum'
            });
            collectionData = result;
          } catch (collErr) {
            logger.error('Failed to get collection by contract, creating fallback collection', { 
              error: collErr instanceof Error ? collErr.message : String(collErr)
            });
            // Create a fallback collection with the contract address
            collectionData = {
              collection: {
                slug: slug.toLowerCase(),
                name: `Collection ${slug.slice(0, 6)}...${slug.slice(-4)}`,
                description: "Collection information unavailable",
                image_url: "/images/placeholder-logo.svg",
                banner_image_url: "/images/placeholder-banner.svg",
                safelist_status: "not_requested",
                is_nsfw: false
              },
              asset_contract: {
                address: slug
              }
            };
          }
        } else {
          try {
            // Try by slug first
            const result = await openSeaAPI.collections.getCollection({ slug });
            collectionData = result;
            contractAddress = result?.asset_contract?.address || slug;
          } catch (slugErr) {
            logger.error('Failed to get collection by slug, trying to interpret as contract', { 
              error: slugErr instanceof Error ? slugErr.message : String(slugErr)
            });
            
            // If slug lookup fails, try treating it as a contract address
            if (slug.startsWith('0x')) {
              try {
                const result = await openSeaAPI.collections.getCollectionByContractAddress({
                  contractAddress: slug,
                  chain: 'ethereum'
                });
                collectionData = result;
                contractAddress = slug;
              } catch (contractErr) {
                logger.error('Both slug and contract lookups failed', { error: contractErr });
                throw contractErr;
              }
            } else {
              throw slugErr;
            }
          }
        }
        
        if (!contractAddress) {
          throw new Error('Contract address not found');
        }
        
        // Get NFT data
        try {
          const nft = await openSeaAPI.nft.getNFT({
            chain: 'ethereum',
            address: contractAddress,
            tokenId
          });
          
          return {
            nft,
            collection: collectionData.collection,
            listing: null,
            isFallbackData: false
          };
        } catch (nftErr) {
          logger.error('Failed to get NFT data after getting collection', { error: nftErr });
          throw nftErr;
        }
      } catch (error) {
        logger.error('Error calling OpenSea API directly:', error);
        return createFallbackNFTData();
      }
    }
    
    // Client-side approach using API routes
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || 
        (typeof window !== 'undefined' ? window.location.origin : '');
    
    logger.info(`Using base URL for fetch: ${baseUrl || '[direct API calls]'}`);
    
    if (!baseUrl && typeof window === 'undefined') {
      // If we're on the server and there's no base URL, use the fallback
      logger.warn('No base URL available for fetch on server, using fallback data');
      return createFallbackNFTData();
    }
    
    // Function to implement retry logic
    const fetchWithRetry = async (url: string, options: RequestInit = {}, maxRetries = 3) => {
      let lastError: Error | null = null;
      
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
          }
          return await response.json();
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          
          if (attempt < maxRetries) {
            const delay = 1000 * Math.pow(2, attempt - 1);
            logger.warn(`Fetch attempt ${attempt} failed, retrying in ${delay}ms: ${lastError.message}`);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }
      }
      
      throw lastError;
    };
    
    try {
      // Collection data
      const collectionEndpoint = isContractAddress(slug) 
        ? `/api/collections/contract/${slug}` 
        : `/api/collections/${slug}`;
        
      const collectionData = await fetchWithRetry(
        `${baseUrl}${collectionEndpoint}`,
        { next: { revalidate: 3600 } }
      );
      
      // NFT data
      const nftData = await fetchWithRetry(
        `${baseUrl}/api/collections/${slug}/${tokenId}`,
        { next: { revalidate: 3600 } }
      );
      
      // Listings (non-critical)
      let listingsData = { orders: [] };
      try {
        listingsData = await fetchWithRetry(
          `${baseUrl}/api/collections/${slug}/${tokenId}/listings`,
          { next: { revalidate: 900 } }
        );
      } catch (error) {
        logger.warn('Failed to fetch listings (non-critical):', error);
      }
      
      return {
        nft: nftData.nft,
        collection: collectionData.collection,
        listing: listingsData.orders?.[0] || null,
        isFallbackData: nftData.isFallbackData || false
      };
    } catch (error) {
      logger.error('Error fetching NFT data:', error);
      return createFallbackNFTData();
    }
  } catch (error) {
    logger.error('Unhandled error in fetchNFTData:', error);
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
          <div className="mt-2 text-sm text-white/60">
            <p>Contract: {nft.contract}</p>
            <p>Token ID: {nft.identifier}</p>
            <p className="mt-2">You can also try viewing this NFT directly on OpenSea.</p>
          </div>
        </div>
      )}
      
      {/* Elegant navigation bar */}
      <div className="flex justify-between items-center mb-16 pt-12">
        <Link
          href={`/collections/${collection.slug || nft.collection || nft.contract || ''}`}
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

// Dynamic metadata for SEO optimization
export async function generateMetadata({ params }: NFTPageProps): Promise<Metadata> {
  try {
    const data = await fetchNFTData(params.slug, params.tokenId);
    
    const nftName = data.nft.name || `#${data.nft.identifier}`;
    const collectionName = data.collection.name;
    const title = `${nftName} | ${collectionName}`;
    const description = data.nft.description || 
      `View this ${collectionName} NFT, token #${data.nft.identifier} on our platform.`;
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: data.nft.image_url || '/images/placeholder-nft.svg' }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [data.nft.image_url || '/images/placeholder-nft.svg'],
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