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

// Fetch NFTs without React cache
export async function fetchNFTs(configs: NFTConfig[], priorityCount: number = 4): Promise<NFT[]> {
  try {
    // Sort NFTs by priority if specified
    const sortedConfigs = [...configs].sort((a, b) => 
      (a.priority || Infinity) - (b.priority || Infinity)
    );

    // Split configs into priority and non-priority
    const priorityConfigs = sortedConfigs.slice(0, priorityCount);
    const remainingConfigs = sortedConfigs.slice(priorityCount);

    // Fetch priority NFTs first
    const priorityNFTs = await Promise.all(
      priorityConfigs.map(async ({ contract, tokenId, title }) => {
        const nft = await fetchSingleNFT(contract, tokenId, title);
        return nft;
      })
    );

    // Start fetching remaining NFTs in the background
    const remainingNFTsPromise = fetchRemainingNFTs(remainingConfigs);

    // Return priority NFTs immediately
    const validPriorityNFTs = priorityNFTs.filter((nft): nft is NFT => nft !== null);

    // Wait for remaining NFTs in the background
    const remainingNFTs = await remainingNFTsPromise;
    const validRemainingNFTs = remainingNFTs.filter((nft): nft is NFT => nft !== null);

    return [...validPriorityNFTs, ...validRemainingNFTs];
  } catch (error) {
    logger.error('Error fetching NFTs:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return [];
  }
}

// Helper function to fetch a single NFT
async function fetchSingleNFT(contract: string, tokenId: string, title?: string): Promise<NFT | null> {
  const maxRetries = 2;
  let retryCount = 0;
  let lastError: Error | null = null;

  while (retryCount < maxRetries) {
    try {
      if (retryCount > 0) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 500));
      }

      const nft = await openSeaService.nft.getNFT({
        address: contract,
        tokenId,
        chain: 'ethereum'
      });

      if (!nft || !nft.image_url) {
        return null;
      }

      return {
        name: title || nft.name || 'Untitled',
        description: nft.description || '',
        image_url: nft.image_url,
        contract_address: contract,
        token_id: tokenId,
        blurhash: nft.blurhash || undefined,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      retryCount++;
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

// Helper function to fetch remaining NFTs in batches
async function fetchRemainingNFTs(configs: NFTConfig[]): Promise<(NFT | null)[]> {
  const batchSize = 10;
  const nfts: (NFT | null)[] = [];
  
  for (let i = 0; i < configs.length; i += batchSize) {
    const batch = configs.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(({ contract, tokenId, title }) => 
        fetchSingleNFT(contract, tokenId, title)
      )
    );
    nfts.push(...batchResults);
  }
  
  return nfts;
} 