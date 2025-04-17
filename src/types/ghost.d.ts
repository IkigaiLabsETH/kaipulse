declare module '@tryghost/admin-api' {
  interface Post {
    id: string;
    title: string;
    slug: string;
    html: string;
    feature_image?: string;
    tags?: string[];
    published_at?: string;
    excerpt?: string;
    meta_title?: string;
    meta_description?: string;
    status: 'draft' | 'published' | 'scheduled';
  }

  interface PostsAPI {
    add: (post: Partial<Post>) => Promise<Post>;
    edit: (post: { id: string } & Partial<Post>) => Promise<Post>;
    delete: (options: { id: string }) => Promise<void>;
  }

  interface GhostAdminAPI {
    posts: PostsAPI;
  }

  export default class AdminAPI implements GhostAdminAPI {
    constructor(options: {
      url: string;
      key: string;
      version: string;
    });
    posts: PostsAPI;
  }
}

declare module '@tryghost/content-api' {
  interface Post {
    id: string;
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

  interface PostsAPI {
    browse: (options?: { limit?: number | 'all'; include?: string[] }) => Promise<Post[]>;
    read: (options: { slug: string }) => Promise<Post>;
  }

  interface GhostContentAPI {
    posts: PostsAPI;
  }

  export default class ContentAPI implements GhostContentAPI {
    constructor(options: {
      url: string;
      key: string;
      version: string;
    });
    posts: PostsAPI;
  }
} 