import { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';
import { logger } from './logger';

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 50, // requests
  windowMs: 60 * 1000 // 1 minute
};

// In-memory rate limiter for when Redis is not available
class InMemoryRateLimiter {
  private store: Map<string, { count: number; resetTime: number }> = new Map();

  async checkLimit(ip: string, config: RateLimitConfig): Promise<{ success: boolean; remaining: number }> {
    const now = Date.now();
    const key = `rate-limit:${ip}`;
    const stored = this.store.get(key);

    if (!stored || now > stored.resetTime) {
      // First request or window expired
      this.store.set(key, { count: 1, resetTime: now + config.windowMs });
      return { success: true, remaining: config.maxRequests - 1 };
    }

    if (stored.count >= config.maxRequests) {
      return { success: false, remaining: 0 };
    }

    stored.count++;
    return { success: true, remaining: config.maxRequests - stored.count };
  }
}

// Initialize Redis if configured
const redisUrl = process.env.REDIS_URL || '';
const redisToken = process.env.REDIS_TOKEN || '';
let redis: Redis | null = null;
let inMemoryLimiter: InMemoryRateLimiter | null = null;

if (redisUrl.startsWith('https://') && redisToken) {
  try {
    redis = new Redis({ url: redisUrl, token: redisToken });
    logger.info('Redis rate limiter initialized');
  } catch (error) {
    logger.error('Failed to initialize Redis:', error);
  }
}

if (!redis) {
  inMemoryLimiter = new InMemoryRateLimiter();
  logger.info('Using in-memory rate limiter');
}

export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = DEFAULT_CONFIG
): Promise<{ success: boolean; remaining: number }> {
  const ip = request.ip || 'anonymous';

  if (redis) {
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
      logger.error('Redis rate limit error:', error);
      // Fall back to in-memory limiter if Redis fails
      if (!inMemoryLimiter) {
        inMemoryLimiter = new InMemoryRateLimiter();
      }
    }
  }

  // Use in-memory limiter if Redis is not available or failed
  return inMemoryLimiter!.checkLimit(ip, config);
} 