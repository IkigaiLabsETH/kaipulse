import { NextResponse } from 'next/server';
import { PFP_COLLECTION_SLUGS_OR_ADDRESSES } from '@/config/pfp';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '50';
    const offset = searchParams.get('offset') || '0';

    // Validate that this is a PFP collection
    if (!PFP_COLLECTION_SLUGS_OR_ADDRESSES.includes(slug)) {
      return NextResponse.json(
        { error: 'Invalid PFP collection' },
        { status: 400 }
      );
    }

    // Fetch NFTs from OpenSea
    const response = await fetch(
      `https://api.opensea.io/api/v2/collection/${slug}/nfts?limit=${limit}&offset=${offset}`,
      {
        headers: {
          'X-API-KEY': process.env.OPENSEA_API_KEY || '',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`OpenSea API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data.nfts || []);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch NFT data' },
      { status: 500 }
    );
  }
} 