import { NextRequest, NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api.new';
import { logger } from '@/lib/logger';

// Initialize API instance with API key from server environment
const openSeaApi = new OpenSeaAPI({ 
  apiKey: process.env.OPENSEA_API_KEY 
});

// Log API key status
logger.info('OpenSea API Configuration:', {
  hasApiKey: !!process.env.OPENSEA_API_KEY,
  keyLength: process.env.OPENSEA_API_KEY?.length
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  try {
    const path = searchParams.get('path');
    const contractAddress = searchParams.get('contract');
    const tokenId = searchParams.get('tokenId');
    const collection = searchParams.get('collection');
    const chain = searchParams.get('chain') || 'ethereum';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 50;

    // Log request parameters
    logger.info('OpenSea API Request:', {
      path,
      contractAddress,
      tokenId,
      collection,
      chain,
      limit
    });

    if (!path) {
      return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 });
    }

    let data;
    switch (path) {
      case 'nft':
        if (!contractAddress || !tokenId) {
          return NextResponse.json({ error: 'Contract address and token ID are required' }, { status: 400 });
        }
        data = await openSeaApi.getNFT({
          chain: 'ethereum',
          address: contractAddress,
          identifier: tokenId,
          include_orders: true
        });
        break;

      case 'collection':
        if (!collection && !contractAddress) {
          return NextResponse.json({ error: 'Collection slug or contract address is required' }, { status: 400 });
        }
        data = await openSeaApi.getCollection(collection || contractAddress!);
        // Log collection response
        logger.info('Collection Response:', {
          hasData: !!data,
          imageUrl: data?.image_url,
          bannerUrl: data?.banner_image_url,
          description: data?.description?.slice(0, 100)
        });
        break;

      case 'collections':
        const response = await openSeaApi.getCollections({
          chain,
          limit,
          include_hidden: false,
          order_by: 'created_date',
          order_direction: 'desc'
        });
        
        // Log the raw response
        logger.info('Collections API Response:', {
          hasResults: !!response.results,
          hasData: !!response.data,
          resultCount: response.results?.length || 0,
          dataCount: response.data?.length || 0,
          sampleUrls: (response.results || response.data || []).slice(0, 2).map(col => ({
            name: col.name,
            imageUrl: col.image_url,
            bannerUrl: col.banner_image_url
          }))
        });
        
        data = response.results || response.data || [];
        
        // Log processed data
        logger.info('Processed Collections:', {
          count: data.length,
          sampleCollection: data[0] ? {
            name: data[0].name,
            imageUrl: data[0].image_url,
            bannerUrl: data[0].banner_image_url,
            description: data[0].description?.slice(0, 100)
          } : null
        });
        break;

      case 'events':
        if (!contractAddress || !tokenId) {
          return NextResponse.json({ error: 'Contract address and token ID are required' }, { status: 400 });
        }
        data = await openSeaApi.getNFTEvents(contractAddress, tokenId, {
          limit: 50,
          event_type: 'created,successful,transfer,cancelled,offer_entered,approve'
        });
        break;

      case 'bestListing':
        if (!contractAddress || !tokenId) {
          return NextResponse.json({ error: 'Contract address and token ID are required' }, { status: 400 });
        }
        data = await openSeaApi.getBestListing(contractAddress, tokenId);
        break;

      case 'bestOffer':
        if (!contractAddress || !tokenId) {
          return NextResponse.json({ error: 'Contract address and token ID are required' }, { status: 400 });
        }
        data = await openSeaApi.getBestOffer(contractAddress, tokenId);
        break;

      case 'relatedNFTs':
        if (!collection) {
          return NextResponse.json({ error: 'Collection parameter is required' }, { status: 400 });
        }
        const nftsResponse = await openSeaApi.getNFTsByCollection({
          collection,
          limit: limit || 12
        });
        data = nftsResponse.data;
        break;

      default:
        return NextResponse.json({ error: 'Invalid path parameter' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    logger.error('OpenSea API Error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      path: searchParams.get('path'),
      contractAddress: searchParams.get('contract'),
      collection: searchParams.get('collection')
    });
    return NextResponse.json(
      { error: 'Failed to fetch data from OpenSea' },
      { status: 500 }
    );
  }
} 