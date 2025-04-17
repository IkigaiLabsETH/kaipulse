import GhostAdminAPI from '@tryghost/admin-api';
import GhostContentAPI from '@tryghost/content-api';
import { logger } from '../lib/logger';

// Initialize Ghost APIs
const contentApi = new GhostContentAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
});

const adminApi = new GhostAdminAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_ADMIN_API_KEY || '',
  version: 'v5.0'
});

export interface BlogPost {
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  tags?: string[];
  published_at?: string;
  excerpt?: string;
  meta_title?: string;
  meta_description?: string;
}

export class GhostService {
  /**
   * Create a new blog post
   */
  async createPost(post: BlogPost) {
    try {
      const result = await adminApi.posts.add({
        ...post,
        status: 'published'
      });
      return result;
    } catch (error) {
      logger.error('Error creating Ghost post', error);
      throw error;
    }
  }

  /**
   * Get all published posts
   */
  async getPosts() {
    try {
      const posts = await contentApi.posts.browse({
        limit: 'all',
        include: ['tags', 'authors']
      });
      return posts;
    } catch (error) {
      logger.error('Error fetching Ghost posts', error);
      throw error;
    }
  }

  /**
   * Get a specific post by slug
   */
  async getPostBySlug(slug: string) {
    try {
      const post = await contentApi.posts.read({
        slug
      });
      return post;
    } catch (error) {
      logger.error('Error fetching Ghost post', error);
      throw error;
    }
  }

  /**
   * Update an existing post
   */
  async updatePost(id: string, post: Partial<BlogPost>) {
    try {
      const result = await adminApi.posts.edit({
        id,
        ...post
      });
      return result;
    } catch (error) {
      logger.error('Error updating Ghost post', error);
      throw error;
    }
  }

  /**
   * Delete a post
   */
  async deletePost(id: string) {
    try {
      await adminApi.posts.delete({
        id
      });
      return true;
    } catch (error) {
      logger.error('Error deleting Ghost post', error);
      throw error;
    }
  }
}

export const ghostService = new GhostService(); 