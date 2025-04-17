import { NextResponse } from 'next/server';
import { OpenAIService } from '@/services/ai/openai';
import { BlogPostIdea } from '@/services/notebook/types';
import { logger } from '@/services/lib/logger';

export async function POST(request: Request) {
  try {
    const idea: BlogPostIdea = await request.json();

    if (!idea.keyPoints || idea.keyPoints.length === 0) {
      return NextResponse.json(
        { error: 'Key points are required for generating a blog post' },
        { status: 400 }
      );
    }

    const openaiService = new OpenAIService();
    const generatedPost = await openaiService.generateBlogPost(idea);

    return NextResponse.json(generatedPost);
  } catch (error) {
    logger.error('Error in generate-post API:', error);
    return NextResponse.json(
      { error: 'Failed to generate blog post' },
      { status: 500 }
    );
  }
} 