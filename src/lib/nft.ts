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

export async function fetchNFTs(configs: NFTConfig[]): Promise<NFT[]> {
  try {
    // Sort NFTs by priority if specified
    const sortedConfigs = [...configs].sort((a, b) => 
      (a.priority || Infinity) - (b.priority || Infinity)
    );

    // Fetch NFTs in smaller batches to prevent timeout
    const batchSize = 5;
    const nfts: (NFT | null)[] = [];
    
    for (let i = 0; i < sortedConfigs.length; i += batchSize) {
      const batch = sortedConfigs.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async ({ contract, tokenId, title }) => {
          const maxRetries = 3;
          let retryCount = 0;
          let lastError: Error | null = null;

          while (retryCount < maxRetries) {
            try {
              // Add exponential backoff between retries
              if (retryCount > 0) {
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
              }

              const nft = await openSeaService.nft.getNFT({
                address: contract,
                tokenId,
                chain: 'ethereum'
              });

              if (!nft) {
                logger.warn(`NFT not found: ${contract}/${tokenId}`);
                return null;
              }

              if (!nft.image_url) {
                logger.warn(`NFT missing image_url: ${contract}/${tokenId}`);
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
        })
      );
      
      nfts.push(...batchResults);
    }

    // Filter out failed fetches and null values
    const validNFTs = nfts.filter((nft): nft is NFT => nft !== null);

    if (validNFTs.length === 0) {
      logger.error('No valid NFTs found after fetching', {
        totalAttempted: sortedConfigs.length,
        failedNFTs: sortedConfigs.filter((_, i) => nfts[i] === null).map(nft => ({
          contract: nft.contract,
          tokenId: nft.tokenId
        }))
      });
      return [];
    }

    return validNFTs;
  } catch (error) {
    logger.error('Error fetching NFTs:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return [];
  }
} 