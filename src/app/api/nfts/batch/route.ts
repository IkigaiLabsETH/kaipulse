import { NextResponse } from 'next/server';
import { openSeaService } from '@/services/opensea';
import { logger } from '@/lib/logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30; // 30 seconds timeout

interface NFTConfig {
  contract: string;
  tokenId: string;
  title?: string;
  priority?: number;
}

interface NFT {
  name: string;
  description: string;
  image_url: string;
  contract_address: string;
  token_id: string;
}

// Enhanced fetchSingleNFT with timeout and retries
async function fetchSingleNFT(
  contract: string, 
  tokenId: string, 
  title?: string,
  retries = 2
): Promise<NFT | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 6000); // 6 second timeout
      });

      const fetchPromise = openSeaService.nft.getNFT({
        address: contract,
        tokenId,
        chain: 'ethereum'
      });

      const nft = await Promise.race([fetchPromise, timeoutPromise]);

      if (!nft) {
        // Don't retry for not found - it's likely permanently missing
        logger.info(`NFT not found: ${contract}/${tokenId} (this is expected for some NFTs)`);
        return null;
      }

      // Validate image URL
      if (!nft.image_url || nft.image_url.trim() === '') {
        logger.info(`NFT ${contract}/${tokenId} has no image URL, skipping`);
        return null;
      }

      // Only filter out severely broken URLs - allow placeholder images
      // as they often resolve to real images when displayed
      const imageUrl = nft.image_url.toLowerCase();
      if (imageUrl.includes('undefined') || 
          imageUrl === 'null' || 
          imageUrl === '' ||
          imageUrl.startsWith('data:text/html')) {
        logger.info(`NFT ${contract}/${tokenId} has severely broken image URL, skipping`);
        return null;
      }

      // Validate that we have a proper NFT name
      const nftName = title || nft.name || '';
      if (!nftName.trim()) {
        logger.info(`NFT ${contract}/${tokenId} has no name, skipping`);
        return null;
      }

      return {
        name: nftName,
        description: nft.description || '',
        image_url: nft.image_url,
        contract_address: contract,
        token_id: tokenId,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      // Check if this is a 404/not found error - no need to retry
      if (errorMessage.includes('404') || 
          errorMessage.includes('Not Found') || 
          errorMessage.includes('not found')) {
        logger.info(`NFT ${contract}/${tokenId} not found (404) - likely moved or burned`);
        return null;
      }
      
      // Only log warnings for retryable errors
      if (attempt < retries) {
        logger.info(`Attempt ${attempt}/${retries} failed for NFT ${contract}/${tokenId}, will retry`);
      } else {
        logger.warn(`All attempts failed for NFT ${contract}/${tokenId}: ${errorMessage}`);
        return null;
      }
      
      // Shorter delay for retries
      const delay = Math.min(500 * attempt + Math.random() * 500, 2000);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return null;
}

export async function POST(request: Request) {
  try {
    const { configs }: { configs: NFTConfig[] } = await request.json();

    if (!configs || !Array.isArray(configs)) {
      return NextResponse.json(
        { error: 'Invalid configs provided' },
        { status: 400 }
      );
    }

    logger.info(`Batch NFT request received`, {
      batchSize: configs.length,
      contracts: configs.map(c => `${c.contract}/${c.tokenId}`).slice(0, 3)
    });

    // Process in very small sub-batches to be conservative with the API
    const subBatchSize = 2; // Very small batches to maximize success rate
    const results: (NFT | null)[] = [];
    
    for (let i = 0; i < configs.length; i += subBatchSize) {
      const subBatch = configs.slice(i, i + subBatchSize);
      
      // Use Promise.allSettled to continue even if some fail
      const subBatchResults = await Promise.allSettled(
        subBatch.map(({ contract, tokenId, title }) => 
          fetchSingleNFT(contract, tokenId, title)
        )
      );
      
      const subBatchNFTs = subBatchResults.map(result => 
        result.status === 'fulfilled' ? result.value : null
      );
      
      results.push(...subBatchNFTs);
      
      // Add longer delay between sub-batches to be more respectful of rate limits
      if (i + subBatchSize < configs.length) {
        await new Promise(resolve => setTimeout(resolve, 600)); // Longer delay for stability
      }
    }

    const validNFTs = results.filter((nft): nft is NFT => nft !== null);
    const failedCount = results.length - validNFTs.length;
    
    logger.info(`Batch NFT request completed`, {
      requested: configs.length,
      loaded: validNFTs.length,
      failed: failedCount,
      successRate: ((validNFTs.length / configs.length) * 100).toFixed(1) + '%'
    });

    return NextResponse.json({ 
      nfts: results, // Return all results including nulls to maintain order
      stats: {
        total: configs.length,
        loaded: validNFTs.length,
        failed: failedCount
      }
    });

  } catch (error) {
    logger.error('Error in batch NFT endpoint:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 