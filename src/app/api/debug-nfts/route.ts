import { NextRequest, NextResponse } from 'next/server';
import { mockCollections } from '@/data/mockNFTs';

export async function GET(request: NextRequest) {
  // Get slug from query parameter
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || 'boredapeyachtclub';

  console.log(`[debug-nfts] Requested NFTs for collection: ${slug}`);
  
  // Get the mock data
  const mockData = mockCollections[slug] || [];
  console.log(`[debug-nfts] Found ${mockData.length} NFTs in mock data`);
  
  // Create response with NO caching
  const response = NextResponse.json(mockData);
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  response.headers.set('X-Debug-Info', `Mock data for ${slug}, ${mockData.length} NFTs`);
  
  return response;
} 