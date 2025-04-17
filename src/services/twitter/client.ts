import { TwitterApi } from 'twitter-api-v2';
import { logger } from '../lib/logger';
import { createClient } from 'redis';

interface TwitterConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessSecret: string;
  bearerToken: string;
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

export class TwitterService {
  private v1Client: TwitterApi;
  private v2Client: TwitterApi;
  private redis?: {
    client: ReturnType<typeof createClient>;
    ttl: number;
  };

  constructor(config: TwitterConfig) {
    // Initialize v1 client with OAuth 1.0a credentials
    this.v1Client = new TwitterApi({
      appKey: config.apiKey,
      appSecret: config.apiSecret,
      accessToken: config.accessToken,
      accessSecret: config.accessSecret,
    });

    // Initialize v2 client with bearer token
    this.v2Client = new TwitterApi(config.bearerToken);

    // Set up Redis if provided
    if (config.redis) {
      this.redis = {
        client: config.redis.client,
        ttl: config.redis.ttl || 3600 // Default 1 hour TTL
      };
    }
  }

  async getTweet(tweetId: string): Promise<TweetData> {
    try {
      // Try to get from cache first if Redis is configured
      if (this.redis) {
        const cached = await this.redis.client.get(`tweet:${tweetId}`);
        if (cached) {
          return JSON.parse(cached);
        }
      }

      // Fetch from Twitter API using v2 client
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
} 