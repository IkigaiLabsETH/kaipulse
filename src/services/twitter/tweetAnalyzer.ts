import { logger } from '../lib/logger';
import OpenAI from 'openai';
import { TwitterService } from './client';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

interface TweetAnalysis {
  keyPoints: string[];
  suggestedTitle?: string;
  suggestedTags: string[];
}

export class TweetAnalyzer {
  private static twitterService = new TwitterService({
    bearerToken: process.env.TWITTER_BEARER_TOKEN || '',
  });

  private static isOpenAIKeyAvailable() {
    return process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'dummy-key-for-build';
  }

  private static getFallbackAnalysis(tweetData: any): TweetAnalysis {
    return {
      keyPoints: ["OpenAI API key not configured - please add OPENAI_API_KEY to your environment variables"],
      suggestedTitle: "Analysis Not Available",
      suggestedTags: ["setup-required"]
    };
  }

  static async analyzeTweet(tweetUrl: string): Promise<TweetAnalysis> {
    try {
      // Check quota status first
      const quotaStatus = this.twitterService.getQuotaStatus();
      if (quotaStatus.remainingReads <= 0) {
        throw new Error(`API quota exceeded. Next reset: ${quotaStatus.nextReset.toLocaleDateString()}`);
      }

      // Extract tweet ID from URL
      const tweetId = this.extractTweetId(tweetUrl);
      if (!tweetId) {
        throw new Error('Invalid tweet URL');
      }

      // Fetch tweet content using Twitter API
      const tweetData = await this.twitterService.getTweet(tweetId);

      // If OpenAI key is not available, return fallback response
      if (!this.isOpenAIKeyAvailable()) {
        return this.getFallbackAnalysis(tweetData);
      }

      // Prepare context for analysis
      const analysisContext = `
Tweet by ${tweetData.author.name} (@${tweetData.author.username})
Posted on: ${new Date(tweetData.createdAt).toLocaleDateString()}
Engagement: ${tweetData.metrics?.likes} likes, ${tweetData.metrics?.retweets} retweets

Content:
${tweetData.text}
      `.trim();

      // Analyze tweet content using GPT-4
      const analysis = await this.analyzeTweetContent(analysisContext);

      return analysis;
    } catch (error) {
      if (error instanceof Error && error.message.includes('API quota exceeded')) {
        logger.warn('Twitter API quota exceeded:', error);
      } else {
        logger.error('Error analyzing tweet:', error);
      }
      throw error;
    }
  }

  // Get current API quota status
  static getQuotaStatus() {
    return this.twitterService.getQuotaStatus();
  }

  private static extractTweetId(url: string): string | null {
    // Handle both old and new Twitter URL formats
    const patterns = [
      /twitter\.com\/\w+\/status\/(\d+)/,
      /x\.com\/\w+\/status\/(\d+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  }

  private static async analyzeTweetContent(tweetContext: string): Promise<TweetAnalysis> {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert Bitcoin analyst. Analyze the given tweet and extract key points for a blog post.
Your response should be in JSON format with the following structure:
{
  "keyPoints": ["point1", "point2", ...],
  "suggestedTitle": "A compelling title for the blog post",
  "suggestedTags": ["tag1", "tag2", ...]
}

Consider:
- Technical accuracy and depth
- Market implications
- Historical context
- Potential impact on Bitcoin adoption
- Related developments and trends

Focus on providing actionable insights and thorough analysis.`
        },
        {
          role: "user",
          content: tweetContext
        }
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message?.content;
    if (!content) {
      throw new Error('No analysis generated');
    }

    try {
      return JSON.parse(content) as TweetAnalysis;
    } catch (error) {
      logger.error('Error parsing GPT response:', error);
      throw new Error('Invalid analysis format');
    }
  }
}