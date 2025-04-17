export interface NotebookEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'ready' | 'processing' | 'published';
}

export interface BlogPostIdea {
  title?: string;
  keyPoints: string[];
  targetAudience?: string;
  tone?: 'technical' | 'educational' | 'conversational' | 'professional';
  desiredLength?: 'short' | 'medium' | 'long';
  references?: string[];
  tags?: string[];
}

export interface GeneratedPost {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  meta: {
    title: string;
    description: string;
  };
} 