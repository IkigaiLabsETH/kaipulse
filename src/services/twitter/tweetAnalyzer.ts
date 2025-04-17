import { logger } from '../lib/logger';
import OpenAI from 'openai';
import { TwitterService } from './client';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface TweetAnalysis {
  keyPoints: string[];
  suggestedTitle?: string;
  suggestedTags: string[];
}

export class TweetAnalyzer {
  private static twitterService = new TwitterService({
    apiKey: process.env.TWITTER_API_KEY || '',
    apiSecret: process.env.TWITTER_API_SECRET || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
    bearerToken: process.env.TWITTER_BEARER_TOKEN || '',
  });

  static async analyzeTweet(tweetUrl: string): Promise<TweetAnalysis> {
    try {
      // Extract tweet ID from URL
      const tweetId = this.extractTweetId(tweetUrl);
      if (!tweetId) {
        throw new Error('Invalid tweet URL');
      }

      // Fetch tweet content using Twitter API
      const tweetData = await this.twitterService.getTweet(tweetId);

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
      logger.error('Error analyzing tweet:', error);
      throw error;
    }
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