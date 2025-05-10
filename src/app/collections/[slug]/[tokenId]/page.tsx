import { logger } from '@/lib/logger';
import type { 
  OpenSeaNFT,
  Listing,
  Collection
} from '@/services/opensea/types';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import Image from 'next/image';

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
  collection
}: NFTContentProps) {
  const processImageUrl = (url: string | undefined | null): string => {
    if (!url || url === '/images/nft-placeholder.png') {
      return '/images/placeholder-nft.svg';
    }
    try {
      if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      }
      new URL(url);
      return url;
    } catch {
      return '/images/placeholder-nft.svg';
    }
  };

  const imageUrl = processImageUrl(nft.image_url);
  const alt = nft.name || `${collection.slug} #${nft.identifier}`;

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Main Content */}
      <div className="relative flex flex-col-reverse md:flex-row w-full min-h-[80vh]">
        {/* Left: Info (on mobile, below image) */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 py-8 md:py-0 max-w-3xl z-10 mt-0 md:mt-24">
          {/* TODO: Ensure 'Epilogue' font is loaded in your project (Google Fonts, @fontsource, or similar) */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-yellow-400 mb-8 leading-tight"
            style={{ fontFamily: 'Epilogue, sans-serif' }}
          >
            {nft.name || collection.name}
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-yellow-400 uppercase mb-4 tracking-widest">About this work</h2>
          <p className="text-white/90 text-base md:text-xl font-light mb-8" style={{lineHeight: 1.6}}>{nft.description || collection.description}</p>
          <div className="mt-4 flex flex-col items-start gap-0">
            <a
              href={`https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-lg md:text-xl font-medium"
            >
              View on OpenSea
            </a>
            <a
              href={`/collections/${collection.slug || nft.collection || nft.contract || ''}`}
              className="inline-flex items-center gap-2 text-yellow-400 font-bold text-sm uppercase tracking-widest hover:underline hover:text-yellow-300 transition-colors mt-8"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back to Collection
            </a>
          </div>
        </div>
        {/* Right: NFT Image (on mobile, on top) */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[400px] md:min-h-0 md:static mt-0 md:mt-24">
          <div className="relative w-screen h-screen md:absolute md:top-0 md:right-0 md:w-1/2 md:h-screen">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              style={{ objectFit: 'contain', borderRadius: 0 }}
              className="w-full h-full"
              priority
            />
          </div>
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
  // Import Layout here to avoid linter error
  const { Layout } = await import('@/components/ui');
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
    throw error;
  }
}