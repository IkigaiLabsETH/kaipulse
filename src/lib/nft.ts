import { openSeaService } from '@/services/opensea';
import { logger } from './logger';

export interface NFT {
  name: string;
  description: string;
  image_url: string;
  contract_address: string;
  token_id: string;
  blurhash?: string;
}

interface NFTConfig {
  contract: string;
  tokenId: string;
  title?: string;
  priority?: number;
}

// Interface for OpenSea NFT response (flexible to handle API inconsistencies)
interface OpenSeaNFTResponse {
  name?: string;
  description?: string;
  image_url?: string;
  animation_url?: string;
  blurhash?: string;
  [key: string]: unknown; // Allow additional fields from OpenSea API
}

// Fetch NFTs with improved error handling and resilience
export async function fetchNFTs(configs: NFTConfig[], priorityCount: number = 4): Promise<NFT[]> {
  try {
    // Sort NFTs by priority if specified
    const sortedConfigs = [...configs].sort((a, b) => 
      (a.priority || Infinity) - (b.priority || Infinity)
    );

    // Split configs into priority and non-priority
    const priorityConfigs = sortedConfigs.slice(0, priorityCount);
    const remainingConfigs = sortedConfigs.slice(priorityCount);

    // Fetch priority NFTs first with timeout
    const priorityNFTsPromise = Promise.allSettled(
      priorityConfigs.map(async ({ contract, tokenId, title }) => {
        return fetchSingleNFT(contract, tokenId, title);
      })
    );

    // Start fetching remaining NFTs in parallel
    const remainingNFTsPromise = fetchRemainingNFTs(remainingConfigs);

    // Wait for both with timeout protection
    const [priorityResults, remainingNFTs] = await Promise.allSettled([
      priorityNFTsPromise,
      remainingNFTsPromise
    ]);

    // Process priority results
    const validPriorityNFTs: NFT[] = [];
    if (priorityResults.status === 'fulfilled' && priorityResults.value) {
      priorityResults.value.forEach(result => {
        if (result.status === 'fulfilled' && result.value) {
          validPriorityNFTs.push(result.value);
        }
      });
    }

    // Process remaining results
    const validRemainingNFTs: NFT[] = [];
    if (remainingNFTs.status === 'fulfilled' && remainingNFTs.value) {
      remainingNFTs.value.forEach(nft => {
        if (nft) validRemainingNFTs.push(nft);
      });
    }

    const allNFTs = [...validPriorityNFTs, ...validRemainingNFTs];
    
    logger.info(`Successfully fetched ${allNFTs.length} out of ${configs.length} NFTs`, {
      priority: validPriorityNFTs.length,
      remaining: validRemainingNFTs.length,
      total: allNFTs.length
    });

    return allNFTs;
  } catch (error) {
    logger.error('Error fetching NFTs:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      configCount: configs.length
    });
    return [];
  }
}

// Helper function to fetch a single NFT with improved error handling
async function fetchSingleNFT(contract: string, tokenId: string, title?: string): Promise<NFT | null> {
  const maxRetries = 3;
  let retryCount = 0;
  let lastError: Error | null = null;

  while (retryCount < maxRetries) {
    try {
      if (retryCount > 0) {
        // Exponential backoff with jitter
        const delay = Math.pow(2, retryCount) * 500 + Math.random() * 500;
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      // Add timeout to prevent hanging requests
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      const nftPromise = openSeaService.nft.getNFT({
        address: contract,
        tokenId,
        chain: 'ethereum'
      });

      const nft = await Promise.race([nftPromise, timeoutPromise]) as unknown as OpenSeaNFTResponse;

      if (!nft) {
        logger.warn(`NFT not found: ${contract}/${tokenId}`);
        return null;
      }

      // Validate essential fields
      if (!nft.image_url && !nft.animation_url) {
        logger.warn(`NFT missing media: ${contract}/${tokenId}`);
        return null;
      }

      return {
        name: title || nft.name || 'Untitled',
        description: nft.description || '',
        image_url: nft.image_url || nft.animation_url || '',
        contract_address: contract,
        token_id: tokenId,
        blurhash: nft.blurhash || undefined,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      retryCount++;
      
      logger.warn(`Failed attempt ${retryCount} for NFT ${contract}/${tokenId}`, {
        error: lastError.message,
        retryCount,
        maxRetries
      });

      if (retryCount === maxRetries) {
        logger.error(`Failed to fetch NFT after ${maxRetries} attempts: ${contract}/${tokenId}`, {
          error: lastError.message,
          stack: lastError.stack
        });
        return null;
      }
    }
  }
  return null;
}

// Helper function to fetch remaining NFTs in batches with better error handling
async function fetchRemainingNFTs(configs: NFTConfig[]): Promise<(NFT | null)[]> {
  const batchSize = 8; // Reduced batch size for better stability
  const nfts: (NFT | null)[] = [];
  
  for (let i = 0; i < configs.length; i += batchSize) {
    const batch = configs.slice(i, i + batchSize);
    
    try {
      // Use Promise.allSettled to continue even if some fail
      const batchResults = await Promise.allSettled(
        batch.map(({ contract, tokenId, title }) => 
          fetchSingleNFT(contract, tokenId, title)
        )
      );
      
      const batchNFTs = batchResults.map(result => 
        result.status === 'fulfilled' ? result.value : null
      );
      
      nfts.push(...batchNFTs);
      
      // Add small delay between batches to avoid rate limiting
      if (i + batchSize < configs.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      logger.error(`Error fetching batch ${i}-${i + batchSize}:`, {
        error: error instanceof Error ? error.message : String(error)
      });
      // Add nulls for failed batch
      nfts.push(...Array(batch.length).fill(null));
    }
  }
  
  return nfts;
} 