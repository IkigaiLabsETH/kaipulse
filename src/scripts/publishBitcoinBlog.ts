import { BlogPostGenerator } from '../services/ghost/blogGenerator';
import { logger } from '../services/lib/logger';

async function publishBitcoinBlog(postType: string) {
  try {
    let marketAnalysisPost;
    let adoptionNewsPost;
    let technicalUpdatePost;

    switch (postType) {
      case 'market':
        marketAnalysisPost = await BlogPostGenerator.generateMarketAnalysisPost(
          'Bitcoin Market Analysis: Q1 2024 Review',
          'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80',
          {
            currentPrice: '$65,000',
            marketTrend: 'Bullish with strong institutional inflows',
            keyEvents: [
              'Spot Bitcoin ETF approvals in January',
              'Fourth Bitcoin halving approaching',
              'Increased institutional adoption',
              'Growing Layer 2 adoption'
            ],
            technicalAnalysis: 'Bitcoin has shown strong support at $60,000 with increasing volume. The RSI indicates healthy market conditions, and the MACD shows positive momentum. Key resistance levels to watch are $70,000 and $75,000.',
            marketSentiment: 'Positive, with growing institutional interest and retail FOMO'
          }
        );
        await BlogPostGenerator.publishPost(marketAnalysisPost);
        logger.info('Published market analysis post');
        break;

      case 'adoption':
        adoptionNewsPost = await BlogPostGenerator.generateAdoptionNewsPost(
          'Major Bank Announces Bitcoin Custody Services',
          'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80',
          {
            entity: 'Global Financial Institution',
            type: 'Institutional',
            details: 'One of the world\'s largest banks has announced plans to offer Bitcoin custody services to institutional clients, marking a significant step in traditional finance adoption.',
            impact: 'This move could open the door for more institutional investors to enter the Bitcoin market, potentially increasing liquidity and reducing volatility.',
            timeline: [
              'Q4 2023: Initial research and development',
              'Q1 2024: Regulatory approval process',
              'Q2 2024: Beta testing with select clients',
              'Q3 2024: Full public launch'
            ]
          }
        );
        await BlogPostGenerator.publishPost(adoptionNewsPost);
        logger.info('Published adoption news post');
        break;

      case 'technical':
        technicalUpdatePost = await BlogPostGenerator.generateTechnicalUpdatePost(
          'Bitcoin Layer 2 Solutions: Latest Developments',
          'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80',
          {
            development: 'Lightning Network Capacity Growth',
            description: 'The Lightning Network has reached new capacity milestones, enabling faster and cheaper Bitcoin transactions.',
            benefits: [
              'Reduced transaction fees',
              'Near-instant settlements',
              'Improved scalability',
              'Enhanced privacy features'
            ],
            implementation: 'The network now supports over 5,000 BTC in capacity with more than 15,000 active nodes worldwide.',
            impact: 'This growth in Layer 2 adoption could significantly improve Bitcoin\'s utility as a medium of exchange while maintaining its store of value properties.'
          }
        );
        await BlogPostGenerator.publishPost(technicalUpdatePost);
        logger.info('Published technical update post');
        break;

      default:
        logger.error('Invalid post type. Use: market, adoption, or technical');
        process.exit(1);
    }

    logger.info('Successfully published blog post!');
  } catch (error) {
    logger.error('Error publishing blog post:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Get post type from command line argument
const postType = process.argv[2];
if (!postType) {
  logger.error('Please specify post type: market, adoption, or technical');
  process.exit(1);
}

// Run the script
publishBitcoinBlog(postType); 