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
  metrics?: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

interface QuotaManager {
  reads: number;
  lastReset: Date;
}

export class TwitterService {
  private v2Client: TwitterApi;
  private redis?: {
    client: ReturnType<typeof createClient>;
    ttl: number;
  };
  private quota: QuotaManager = {
    reads: 0,
    lastReset: new Date()
  };

  private static MONTHLY_READ_LIMIT = 100; // Free tier limit

  constructor(config: TwitterConfig) {
    // Initialize v2 client with bearer token only (free tier)
    this.v2Client = new TwitterApi(config.bearerToken);

    // Set up Redis if provided
    if (config.redis) {
      this.redis = {
        client: config.redis.client,
        ttl: config.redis.ttl || 3600 // Default 1 hour TTL
      };
    }

    // Reset quota monthly
    setInterval(() => this.resetQuotaIfNeeded(), 24 * 60 * 60 * 1000); // Check daily
  }

  private resetQuotaIfNeeded() {
    const now = new Date();
    const monthsSinceReset = (now.getFullYear() - this.quota.lastReset.getFullYear()) * 12 + 
                            (now.getMonth() - this.quota.lastReset.getMonth());
    
    if (monthsSinceReset >= 1) {
      this.quota = {
        reads: 0,
        lastReset: now
      };
      logger.info('Twitter API quota reset');
    }
  }

  private async checkQuota() {
    if (this.quota.reads >= TwitterService.MONTHLY_READ_LIMIT) {
      throw new Error('Monthly API read limit reached. Please try again next month.');
    }
    this.quota.reads++;
  }

  async getTweet(tweetId: string): Promise<TweetData> {
    try {
      // Check quota before proceeding
      await this.checkQuota();

      // Try to get from cache first if Redis is configured
      if (this.redis) {
        const cached = await this.redis.client.get(`tweet:${tweetId}`);
        if (cached) {
          return JSON.parse(cached);
        }
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

      // Cache the result if Redis is configured
      if (this.redis) {
        await this.redis.client.setEx(
          `tweet:${tweetId}`,
          this.redis.ttl,
          JSON.stringify(tweetData)
        );
      }

      return tweetData;
    } catch (error) {
      logger.error('Error fetching tweet:', error);
      throw error;
    }
  }

  // Get current quota status
  getQuotaStatus() {
    return {
      remainingReads: TwitterService.MONTHLY_READ_LIMIT - this.quota.reads,
      nextReset: new Date(
        this.quota.lastReset.getFullYear(),
        this.quota.lastReset.getMonth() + 1,
        1
      )
    };
  }
} 