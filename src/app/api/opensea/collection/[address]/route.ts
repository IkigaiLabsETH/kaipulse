import { NextResponse } from 'next/server';
import { openSeaService } from '@/services/opensea';
import { logger } from '@/lib/logger';

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  try {
    logger.info('Fetching collection:', { identifier: params.address });
    
    const data = await openSeaService.getCollection(params.address);
    
    if (!data) {
      logger.error('Collection not found:', { identifier: params.address });
      return NextResponse.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    logger.error('Error fetching collection:', { 
      identifier: params.address,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    return NextResponse.json(
      { error: 'Failed to fetch collection data' },
      { status: 500 }
    );
  }
} 