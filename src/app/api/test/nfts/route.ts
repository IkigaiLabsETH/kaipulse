import { NextResponse } from 'next/server';
import { mockCollections } from '@/data/mockNFTs';

export async function GET() {
  const mockData = mockCollections['boredapeyachtclub'] || [];
  
  // Return the NFT array directly with proper headers
  const response = NextResponse.json(mockData);
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('X-Debug', 'test-nfts-endpoint');
  
  return response;
} 