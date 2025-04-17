import GhostAdminAPI from '@tryghost/admin-api';
import { BlogPost } from './types';
import { logger } from '../lib/logger';

// This service should only be used server-side
const adminApi = new GhostAdminAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_ADMIN_API_KEY || '',
  version: 'v5.0'
});

export const ghostAdminService = {
  createPost: async (post: BlogPost) => {
    try {
      const result = await adminApi.posts.add({
        ...post,
        status: 'published'
      });
      logger.info(`Successfully created post: ${result.slug}`);
      return result;
    } catch (error) {
      logger.error('Error creating post:', error);
      throw error;
    }
  }
}; 