import { Redis } from '@upstash/redis';
import { logger } from '@/lib/logger';

interface CacheInterface {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: unknown, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

// No-op cache implementation when Redis is not configured
class NoOpCache implements CacheInterface {
  async get<T>(_key: string): Promise<T | null> {
    return null;
  }

  async set(_key: string, _value: unknown, _ttl?: number): Promise<void> {}

  async delete(_key: string): Promise<void> {}

  async exists(_key: string): Promise<boolean> {
    return false;
  }

  async clear(): Promise<void> {}
}

// Redis cache implementation
class RedisCache implements CacheInterface {
  private redis: Redis;

  constructor(redis: Redis) {
    this.redis = redis;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data as string) : null;
    } catch (error) {
      logger.error('Redis cache get error:', error);
      return null;
    }
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    try {
      const data = JSON.stringify(value);
      if (ttl) {
        await this.redis.setex(key, ttl, data);
      } else {
        await this.redis.set(key, data);
      }
    } catch (error) {
      logger.error('Redis cache set error:', error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await this.redis.del(key);
    } catch (error) {
      logger.error('Redis cache delete error:', error);
    }
  }

  async exists(key: string): Promise<boolean> {
    try {
      return await this.redis.exists(key) === 1;
    } catch (error) {
      logger.error('Redis cache exists error:', error);
      return false;
    }
  }

  async clear(): Promise<void> {
    try {
      await this.redis.flushall();
    } catch (error) {
      logger.error('Redis cache clear error:', error);
    }
  }
}

// Initialize cache based on environment configuration
function initializeCache(): CacheInterface {
  const redisUrl = process.env.REDIS_URL;
  const redisToken = process.env.REDIS_TOKEN;

  if (!redisUrl || !redisToken) {
    logger.info('Redis not configured, using no-op cache');
    return new NoOpCache();
  }

  try {
    const redis = new Redis({
      url: redisUrl,
      token: redisToken
    });
    logger.info('Redis cache initialized');
    return new RedisCache(redis);
  } catch (error) {
    logger.error('Failed to initialize Redis cache:', error);
    return new NoOpCache();
  }
}

export const cache = initializeCache(); 