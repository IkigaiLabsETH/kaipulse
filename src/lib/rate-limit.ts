import { logger } from './logger';

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 50,
  windowMs: 60 * 1000 // 1 minute
};

export class InMemoryRateLimiter {
  private store: Map<string, { count: number; resetTime: number }> = new Map();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  async check(ip: string): Promise<{ success: boolean; remaining: number }> {
    const now = Date.now();
    const key = `rate:${ip}`;
    const record = this.store.get(key);

    if (!record || now > record.resetTime) {
      // First request or window expired
      this.store.set(key, {
        count: 1,
        resetTime: now + this.config.windowMs
      });
      return { success: true, remaining: this.config.maxRequests - 1 };
    }

    if (record.count >= this.config.maxRequests) {
      return { success: false, remaining: 0 };
    }

    // Increment counter
    record.count++;
    return { success: true, remaining: this.config.maxRequests - record.count };
  }

  async reset(ip: string): Promise<void> {
    this.store.delete(`rate:${ip}`);
  }
}

// Singleton rate limiter instance
let rateLimiterInstance: InMemoryRateLimiter | null = null;

export function getRateLimiter(): InMemoryRateLimiter {
  if (!rateLimiterInstance) {
    rateLimiterInstance = new InMemoryRateLimiter(DEFAULT_CONFIG);
    logger.info('In-memory rate limiter initialized');
  }
  return rateLimiterInstance;
}

export async function rateLimit(ip: string): Promise<{ success: boolean; remaining: number }> {
  const limiter = getRateLimiter();
  return limiter.check(ip);
} 