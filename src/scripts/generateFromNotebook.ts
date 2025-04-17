import { OpenAIService } from '../services/ai/openai';
import { ghostService } from '../services/ghost';
import { BlogPostIdea } from '../services/notebook/types';
import { logger } from '../services/lib/logger';

async function generateAndPublishPost() {
  try {
    // This would typically come from a database or file
    // For now, we'll use a sample idea
    const idea: BlogPostIdea = {
      title: "The Bitcoin Halving: A Catalyst for Price Discovery",
      keyPoints: [
        "Explanation of Bitcoin's halving mechanism",
        "Historical impact of previous halvings on price",
        "Supply and demand dynamics post-halving",
        "Institutional interest around halving events",
        "Predictions and analysis for the upcoming halving"
      ],
      targetAudience: "Bitcoin investors and cryptocurrency enthusiasts",
      tone: "educational",
      desiredLength: "long",
      references: [
        "Previous halving events (2012, 2016, 2020)",
        "Stock-to-flow model predictions",
        "Historical price data around halvings",
        "Expert opinions and market analysis"
      ],
      tags: ['Bitcoin', 'Halving', 'Investment', 'Technical Analysis']
    };

    // Initialize OpenAI service
    const openai = new OpenAIService();

    // Generate the blog post
    logger.info('Generating blog post from idea...');
    const generated = await openai.generateBlogPost(idea);

    // Format for Ghost
    const ghostPost = {
      title: generated.title,
      slug: generated.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      html: `
        <article class="bitcoin-analysis">
          ${generated.content}
        </article>
      `,
      feature_image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80",
      tags: generated.tags,
      meta_title: generated.meta.title,
      meta_description: generated.meta.description,
      excerpt: generated.excerpt
    };

    // Publish to Ghost
    logger.info('Publishing generated post to Ghost...');
    const result = await ghostService.createPost(ghostPost);
    
    logger.info('Successfully published generated post:', result.slug);
    return result;
  } catch (error) {
    logger.error('Error in generate and publish process:', error);
    throw error;
  }
}

// Run the script
generateAndPublishPost(); 