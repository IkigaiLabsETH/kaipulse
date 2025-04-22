import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import { mockCollections } from '@/data/mockNFTs';
import fs from 'fs';
import path from 'path';

// Simple debug endpoint to help diagnose issues
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    
    // Check if boredapeyachtclub mock data exists and how many NFTs it has
    if (action === 'check-mock-data') {
      const mockData = mockCollections['boredapeyachtclub'] || [];
      
      return NextResponse.json({
        success: true,
        mockDataExists: !!mockCollections['boredapeyachtclub'],
        mockDataLength: mockData.length,
        mockDataKeys: Object.keys(mockCollections),
        firstItem: mockData.length > 0 ? {
          identifier: mockData[0].identifier,
          name: mockData[0].name,
          image_url: mockData[0].image_url
        } : null
      });
    }
    
    // Return information about the current environment
    if (action === 'check-env') {
      return NextResponse.json({
        success: true,
        nodeEnv: process.env.NODE_ENV,
        opensea_api_key_exists: !!process.env.OPENSEA_API_KEY,
        opensea_api_key_length: process.env.OPENSEA_API_KEY?.length || 0
      });
    }
    
    // Default action: return general debug info
    return NextResponse.json({
      success: true,
      message: 'Debug endpoint is working',
      availableActions: ['check-mock-data', 'check-env'],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error in debug API route:', {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 