// Remove 'use client' if present at the top of the file.
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import NFTContent from './NFTContent.client';
// Use React cache to deduplicate requests
import { cache } from 'react';
import { Suspense } from 'react';

// Define page props interface
interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
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
        slug: typeof slug === 'string' && slug ? slug.toLowerCase() : '',
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

            // For Art Blocks collections, ensure we have the correct slug
            const collectionName = typeof collectionData.collection.name === 'string' ? collectionData.collection.name.toLowerCase() : '';
            
            if (collectionName.includes('fidenza')) {
              collectionData.collection.slug = 'fidenza-by-tyler-hobbs';
            } else if (collectionName.includes('chromie squiggle')) {
              collectionData.collection.slug = 'chromie-squiggle';
            } else if (collectionName.includes('ringers')) {
              collectionData.collection.slug = 'ringers-by-dmitri-cherniak';
            } else if (collectionName.includes('subscapes')) {
              collectionData.collection.slug = 'subscapes-by-matt-deslauriers';
            } else if (collectionName.includes('meridian')) {
              collectionData.collection.slug = 'meridian-by-matt-deslauriers';
            }
          } catch (collErr) {
            logger.error('Failed to get collection by contract, creating fallback collection', { 
              error: collErr instanceof Error ? collErr.message : String(collErr)
            });
            
            // Create fallback collection
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

            // Try to get human-friendly slug even in fallback case
            try {
              const mappingRes = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/contract/${slug}`, {
                headers: {
                  'X-API-KEY': env.OPENSEA_API_KEY
                }
              });
              
              if (mappingRes.ok) {
                const mappingJson = await mappingRes.json();
                if (mappingJson?.collection && typeof mappingJson.collection === 'string') {
                  collectionData.collection.slug = mappingJson.collection;
                }
              }
            } catch (mappingErr) {
              logger.warn('Failed to fetch human-friendly slug in fallback case:', mappingErr);
            }
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

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <svg className="animate-spin h-12 w-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
    </div>
  );
}

export default async function NFTPage({ params }: NFTPageProps) {
  const { Layout } = await import('@/components/ui');
  const { nft, collection } = await fetchNFTData(params.slug, params.tokenId);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <NFTContent 
          nft={nft}
          collection={collection}
        />
      </Suspense>
    </Layout>
  );
}