import { TwitterApi } from 'twitter-api-v2';
import { logger } from '../lib/logger';
import { createClient } from 'redis';

interface TwitterConfig {
  bearerToken: string;
  // OAuth credentials are optional since we're only using bearer token for free tier
  apiKey?: string;
  apiSecret?: string;
  accessToken?: string;
  accessSecret?: string;
  redis?: {
    client: ReturnType<typeof createClient>;
    ttl?: number; // Time to live in seconds
  };
}

interface TweetData {
  id: string;
  text: string;
  author: {
    username: string;
    name: string;
  };
  createdAt: string;
  metrics: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

interface QuotaManager {
  reads: number;
  lastReset: Date;
}

// In-memory cache for when Redis is not available
class InMemoryCache {
  private store: Map<string, { data: unknown; expires: number }> = new Map();

  async get<T>(key: string): Promise<T | null> {
    const item = this.store.get(key);
    if (!item) return null;
    if (Date.now() > item.expires) {
      this.store.delete(key);
      return null;
    }
    return item.data as T;
  }

  async set(key: string, value: unknown, ttl: number): Promise<void> {
    this.store.set(key, {
      data: value,
      expires: Date.now() + ttl * 1000
    });
  }
}

export class TwitterService {
  private v2Client: TwitterApi;
  private cache: InMemoryCache;
  private quota: QuotaManager = {
    reads: 0,
    lastReset: new Date()
  };

  private static MONTHLY_READ_LIMIT = 100; // Free tier limit

  constructor(config: TwitterConfig) {
    // Initialize v2 client with bearer token only (free tier)
    this.v2Client = new TwitterApi(config.bearerToken);
    this.cache = new InMemoryCache();
  }

  private async checkQuota(): Promise<void> {
    const now = new Date();
    if (now.getMonth() !== this.quota.lastReset.getMonth()) {
      this.quota.reads = 0;
      this.quota.lastReset = now;
    }

    if (this.quota.reads >= TwitterService.MONTHLY_READ_LIMIT) {
      throw new Error('Monthly API quota exceeded');
    }

    this.quota.reads++;
  }

  async getTweet(tweetId: string): Promise<TweetData> {
    try {
      // Check quota before proceeding
      await this.checkQuota();

      // Try to get from cache first
      const cached = await this.cache.get<TweetData>(`tweet:${tweetId}`);
      if (cached) {
        return cached;
      }

      // Fetch from Twitter API using v2 client with minimal fields to optimize quota
      const tweet = await this.v2Client.v2.singleTweet(tweetId, {
        expansions: ['author_id'],
        'tweet.fields': ['created_at', 'public_metrics'],
        'user.fields': ['name', 'username'],
      });

      if (!tweet.data) {
        throw new Error('Tweet not found');
      }

      // Transform the data
      const tweetData: TweetData = {
        id: tweet.data.id,
        text: tweet.data.text,
        author: {
          username: tweet.includes?.users?.[0]?.username || 'unknown',
          name: tweet.includes?.users?.[0]?.name || 'Unknown',
        },
        createdAt: tweet.data.created_at || new Date().toISOString(),
        metrics: {
          likes: tweet.data.public_metrics?.like_count || 0,
          retweets: tweet.data.public_metrics?.retweet_count || 0,
          replies: tweet.data.public_metrics?.reply_count || 0,
        },
      };

      // Cache the result
      await this.cache.set(`tweet:${tweetId}`, tweetData, 3600); // 1 hour TTL

      return tweetData;
    } catch (error) {
      logger.error('Error fetching tweet:', error);
      throw error;
    }
  }
} 