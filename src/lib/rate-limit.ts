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

// Lazy-loaded Redis instance
let redisInstance: Redis | null = null;
let inMemoryLimiter: InMemoryRateLimiter | null = null;

// Initialize rate limiter only when needed
function getRateLimiter() {
  if (inMemoryLimiter) return inMemoryLimiter;
  
  const redisUrl = process.env.REDIS_URL || '';
  const redisToken = process.env.REDIS_TOKEN || '';

  if (redisUrl.startsWith('https://') && redisToken) {
    try {
      redisInstance = new Redis({ url: redisUrl, token: redisToken });
      logger.info('Redis rate limiter initialized');
      return null; // Will use Redis directly
    } catch (error) {
      logger.error('Failed to initialize Redis:', error);
    }
  }

  inMemoryLimiter = new InMemoryRateLimiter();
  logger.info('Using in-memory rate limiter');
  return inMemoryLimiter;
}

export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = DEFAULT_CONFIG
): Promise<{ success: boolean; remaining: number }> {
  const ip = request.ip || 'anonymous';

  // Try Redis first if it's initialized
  if (redisInstance) {
    const key = `rate-limit:${ip}`;
    try {
      const [requests] = await redisInstance
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
      // Fall back to in-memory limiter
      const limiter = getRateLimiter();
      if (limiter) return limiter.checkLimit(ip, config);
    }
  }

  // Use in-memory limiter
  const limiter = getRateLimiter();
  return limiter!.checkLimit(ip, config);
} 