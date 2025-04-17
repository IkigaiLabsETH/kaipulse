import GhostContentAPI from '@tryghost/content-api';
import { logger } from '../lib/logger';

const ghostUrl = process.env.GHOST_URL;
const ghostKey = process.env.GHOST_CONTENT_API_KEY;

// Check if Ghost CMS is configured
const isGhostConfigured = ghostUrl && ghostKey;

let api: GhostContentAPI | null = null;

// Only initialize Ghost API if configured
if (isGhostConfigured) {
  try {
    api = new GhostContentAPI({
      url: ghostUrl,
      key: ghostKey,
      version: 'v5.0'
    });
    logger.info('Ghost CMS API initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize Ghost CMS API:', error);
  }
}

export const ghostService = {
  getPosts: async () => {
    if (!api) {
      logger.warn('Ghost CMS not configured - returning empty posts array');
      return [];
    }

    try {
      const posts = await api.posts.browse({
        limit: 'all',
        include: ['tags']
      });
      return posts;
    } catch (error) {
      logger.error('Error fetching posts from Ghost:', error);
      return [];
    }
  },

  getPostBySlug: async (slug: string) => {
    if (!api) {
      logger.warn('Ghost CMS not configured - returning null for post');
      return null;
    }

    try {
      const post = await api.posts.read({ slug });
      return post;
    } catch (error) {
      logger.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
  }
}; 