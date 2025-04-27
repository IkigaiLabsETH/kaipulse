import { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';
import { logger } from './logger';

const redisUrl = process.env.REDIS_URL || '';
const redisToken = process.env.REDIS_TOKEN || '';

let redis: Redis | null = null;
if (redisUrl.startsWith('https://') && redisToken) {
  redis = new Redis({ url: redisUrl, token: redisToken });
} else {
  logger.warn('Redis is not configured or URL is invalid. Rate limiting is disabled.');
}

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 50, // requests
  windowMs: 60 * 1000 // 1 minute
};

export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = DEFAULT_CONFIG
): Promise<{ success: boolean; remaining: number }> {
  if (!redis) {
    // Redis not configured, always allow
    return {
      success: true,
      remaining: config.maxRequests
    };
  }
  const ip = request.ip || 'anonymous';
  const key = `rate-limit:${ip}`;
  
  try {
    const [requests] = await redis
      .multi()
      .incr(key)
      .expire(key, Math.ceil(config.windowMs / 1000))
      .exec();

    const remaining = config.maxRequests - (requests as number);
    
    return {
      success: remaining > 0,
      remaining: Math.max(0, remaining)
    };
  } catch (error) {
    logger.error('Rate limit error:', error);
    // Fail open if Redis is down
    return {
      success: true,
      remaining: config.maxRequests
    };
  }
} 