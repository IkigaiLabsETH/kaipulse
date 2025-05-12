import { NextResponse } from 'next/server';
import { PFP_COLLECTION_SLUGS_OR_ADDRESSES } from '@/config/pfp';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // Validate that this is a PFP collection
    if (!PFP_COLLECTION_SLUGS_OR_ADDRESSES.includes(slug)) {
      return NextResponse.json(
        { error: 'Invalid PFP collection' },
        { status: 400 }
      );
    }

    // Fetch collection data from OpenSea
    const response = await fetch(
      `https://api.opensea.io/api/v2/collections/${slug}`,
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
    
    return NextResponse.json({
      collection: {
        ...data,
        slug: slug,
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch collection data' },
      { status: 500 }
    );
  }
} 