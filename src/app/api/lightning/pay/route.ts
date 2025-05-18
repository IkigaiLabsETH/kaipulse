import { NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';
import { InMemoryRateLimiter } from '@/lib/rate-limit';

// Force dynamic route
export const dynamic = 'force-dynamic';

// In-memory rate limiter for when Redis is not available
const rateLimiter = new InMemoryRateLimiter({
  maxRequests: 50,
  windowMs: 60 * 1000 // 1 minute
});

const paymentSchema = z.object({
  invoice: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const rateLimitResult = await rateLimiter.check(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { invoice } = paymentSchema.parse(body);

    // TODO: Implement actual Lightning payment logic here
    // This is just a placeholder response
    return NextResponse.json({
      success: true,
      message: 'Payment processed successfully',
      invoice
    });
  } catch (error) {
    logger.error('Lightning payment error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 