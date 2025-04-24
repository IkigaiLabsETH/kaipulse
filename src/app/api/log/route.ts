import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Extract log data
    const { level, message, url, timestamp } = body;
    
    // Log using the server-side logger
    if (level === 'error') {
      logger.error(message, { url, timestamp });
    } else if (level === 'warn') {
      logger.warn(message, { url, timestamp });
    } else {
      logger.info(message, { url, timestamp });
    }
    
    return NextResponse.json({ success: true });
  } catch {
    // Silently handle errors - don't expose details
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 