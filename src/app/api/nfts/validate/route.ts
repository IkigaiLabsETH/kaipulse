import { NextResponse } from 'next/server';
import { openSeaService } from '@/services/opensea';
import { logger } from '@/lib/logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // 60 seconds for validation

interface NFTConfig {
  contract: string;
  tokenId: string;
  title?: string;
  priority?: number;
}

interface ValidationResult {
  contract: string;
  tokenId: string;
  title?: string;
  status: 'valid' | 'not_found' | 'invalid_image' | 'error';
  error?: string;
  name?: string;
  image_url?: string;
}

async function validateSingleNFT(config: NFTConfig): Promise<ValidationResult> {
  try {
    const nft = await openSeaService.nft.getNFT({
      address: config.contract,
      tokenId: config.tokenId,
      chain: 'ethereum'
    });

    if (!nft) {
      return {
        contract: config.contract,
        tokenId: config.tokenId,
        title: config.title,
        status: 'not_found'
      };
    }

    // Check image URL
    if (!nft.image_url || nft.image_url.trim() === '') {
      return {
        contract: config.contract,
        tokenId: config.tokenId,
        title: config.title,
        status: 'invalid_image',
        error: 'No image URL',
        name: nft.name
      };
    }

    // More lenient validation - only reject severely broken URLs
    // Allow placeholder images as they often resolve to real images later
    const imageUrl = nft.image_url.toLowerCase();
    if (imageUrl.includes('undefined') || 
        imageUrl === 'null' || 
        imageUrl === '' ||
        imageUrl.startsWith('data:text/html')) {
      return {
        contract: config.contract,
        tokenId: config.tokenId,
        title: config.title,
        status: 'invalid_image',
        error: 'Severely broken image URL',
        name: nft.name,
        image_url: nft.image_url
      };
    }

    return {
      contract: config.contract,
      tokenId: config.tokenId,
      title: config.title,
      status: 'valid',
      name: nft.name,
      image_url: nft.image_url
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes('404') || 
        errorMessage.includes('Not Found') || 
        errorMessage.includes('not found')) {
      return {
        contract: config.contract,
        tokenId: config.tokenId,
        title: config.title,
        status: 'not_found'
      };
    }

    return {
      contract: config.contract,
      tokenId: config.tokenId,
      title: config.title,
      status: 'error',
      error: errorMessage
    };
  }
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

    logger.info(`Validating ${configs.length} NFT configurations`);

    const results: ValidationResult[] = [];
    
    // Process in small batches to avoid overwhelming the API
    const batchSize = 2;
    for (let i = 0; i < configs.length; i += batchSize) {
      const batch = configs.slice(i, i + batchSize);
      
      const batchResults = await Promise.allSettled(
        batch.map(config => validateSingleNFT(config))
      );
      
      const validatedBatch = batchResults.map(result => 
        result.status === 'fulfilled' ? result.value : {
          contract: '',
          tokenId: '',
          status: 'error' as const,
          error: 'Validation failed'
        }
      );
      
      results.push(...validatedBatch);
      
      // Add delay between batches
      if (i + batchSize < configs.length) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    // Summarize results
    const summary = {
      total: configs.length,
      valid: results.filter(r => r.status === 'valid').length,
      not_found: results.filter(r => r.status === 'not_found').length,
      invalid_image: results.filter(r => r.status === 'invalid_image').length,
      errors: results.filter(r => r.status === 'error').length
    };

    logger.info(`NFT validation completed`, summary);

    return NextResponse.json({ 
      results,
      summary,
      // Provide lists for easy cleanup
      problematic_nfts: {
        not_found: results.filter(r => r.status === 'not_found'),
        invalid_image: results.filter(r => r.status === 'invalid_image'),
        errors: results.filter(r => r.status === 'error')
      }
    });

  } catch (error) {
    logger.error('Error in NFT validation endpoint:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 