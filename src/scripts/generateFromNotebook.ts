import { BlogPostGenerator } from '../services/ghost/blogGenerator';
import { logger } from '../services/lib/logger';
import { BlogPost, MarketAnalysis, AdoptionNews, TechnicalUpdate } from '../services/ghost/types';

interface PostData {
  title: string;
  featuredImage: string;
  analysis?: MarketAnalysis;
  news?: AdoptionNews;
  update?: TechnicalUpdate;
}

export async function generatePostPreview(
  type: 'market' | 'adoption' | 'technical',
  data: PostData
): Promise<BlogPost> {
  try {
    logger.info('Generating blog post preview...');
    
    let post: BlogPost;
    
    switch (type) {
      case 'market':
        if (!data.analysis) throw new Error('Market analysis data is required');
        post = BlogPostGenerator.generateMarketAnalysisPost(
          data.title,
          data.featuredImage,
          data.analysis
        );
        break;
        
      case 'adoption':
        if (!data.news) throw new Error('Adoption news data is required');
        post = BlogPostGenerator.generateAdoptionNewsPost(
          data.title,
          data.featuredImage,
          data.news
        );
        break;
        
      case 'technical':
        if (!data.update) throw new Error('Technical update data is required');
        post = BlogPostGenerator.generateTechnicalUpdatePost(
          data.title,
          data.featuredImage,
          data.update
        );
        break;
        
      default:
        throw new Error(`Unsupported post type: ${type}`);
    }
    
    logger.info('Successfully generated post preview:', post.title);
    return post;
  } catch (error) {
    logger.error('Error generating post preview:', error);
    throw error;
  }
}

// Example usage:
generatePostPreview('market', {
  title: "The Bitcoin Halving: A Catalyst for Price Discovery",
  featuredImage: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80",
  analysis: {
    currentPrice: "$45,000",
    marketTrend: "Bullish momentum ahead of halving",
    keyEvents: [
      "Bitcoin halving expected in April 2024",
      "Institutional interest at all-time high",
      "ETF approval speculation"
    ],
    technicalAnalysis: "Price action shows strong support at $44,000 with resistance at $48,000",
    marketSentiment: "Highly optimistic due to upcoming halving event"
  }
}); 