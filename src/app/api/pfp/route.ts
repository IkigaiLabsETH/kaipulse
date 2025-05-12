import { NextResponse } from 'next/server';
import { PFP_COLLECTION_SLUGS_OR_ADDRESSES } from '@/config/pfp';

export async function GET() {
  try {
    const collections = await Promise.all(
      PFP_COLLECTION_SLUGS_OR_ADDRESSES.map(async (slug) => {
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
        return {
          ...data,
          slug: slug,
        };
      })
    );

    return NextResponse.json({ collections });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch PFP collections' },
      { status: 500 }
    );
  }
} 