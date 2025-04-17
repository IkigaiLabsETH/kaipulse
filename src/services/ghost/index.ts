import GhostContentAPI from '@tryghost/content-api';
import { logger } from '../lib/logger';

const api = new GhostContentAPI({
  url: process.env.GHOST_URL || 'http://localhost:2368',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
});

export const ghostService = {
  getPosts: async () => {
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
    try {
      const post = await api.posts.read({ slug });
      return post;
    } catch (error) {
      logger.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
  }
}; 