import { NextResponse } from 'next/server';
import { TweetAnalyzer } from '@/services/twitter/tweetAnalyzer';
import { logger } from '@/services/lib/logger';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'Tweet URL is required' },
        { status: 400 }
      );
    }

    const analysis = await TweetAnalyzer.analyzeTweet(url);

    return NextResponse.json(analysis);
  } catch (error) {
    logger.error('Error in analyze-tweet API:', error);
    return NextResponse.json(
      { error: 'Failed to analyze tweet' },
      { status: 500 }
    );
  }
} 