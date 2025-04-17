import { NextResponse } from 'next/server';
import { ghostAdminService } from '@/services/ghost/admin';
import { BlogPost } from '@/services/ghost/types';
import { logger } from '@/services/lib/logger';

export async function POST(request: Request) {
  try {
    const post: BlogPost = await request.json();
    
    // Validate the post data
    if (!post.title || !post.html) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the post using the admin service
    const result = await ghostAdminService.createPost(post);

    return NextResponse.json(result);
  } catch (error) {
    logger.error('Error in POST /api/posts:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
} 