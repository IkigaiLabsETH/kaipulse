import { NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { logger } from '@/lib/logger';

export async function GET() {
  try {
    // Extract the API key
    const apiKey = env.OPENSEA_API_KEY;
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Log API key status (without revealing the key)
    logger.info('Checking OpenSea API configuration status', {
      apiKeyConfigured: !!apiKey,
      apiKeyLength: apiKey?.length || 0,
      environment: process.env.NODE_ENV
    });

    return NextResponse.json({ 
      apiKeyConfigured: !!apiKey,
      isDevelopment,
      message: apiKey 
        ? 'OpenSea API key is configured' 
        : 'OpenSea API key is not configured',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error checking API configuration:', error);
    
    return NextResponse.json({ 
      apiKeyConfigured: false,
      error: error instanceof Error ? error.message : 'Unknown error checking OpenSea API configuration',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 