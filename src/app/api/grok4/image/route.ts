import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    logger.info('Image generation request:', { prompt });

    // Prepare request body for xAI - simplified without size parameter
    const body = {
      prompt,
      model: 'grok-2-image',
      n: 1,
    };

    logger.info('Calling xAI image API with body:', body);

    const res = await fetch('https://api.x.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    logger.info('xAI response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      logger.error('xAI image API error:', {
        status: res.status,
        statusText: res.statusText,
        error: errorText
      });
      
      return NextResponse.json({ 
        error: 'xAI image generation failed', 
        details: `Status: ${res.status} - ${errorText}` 
      }, { status: 500 });
    }

    const data = await res.json();
    logger.info('xAI response data:', data);

    // Handle different response formats
    let imageUrl: string | undefined;
    let revisedPrompt: string | undefined;
    let moderation = false;

    if (data.data && Array.isArray(data.data) && data.data[0]) {
      imageUrl = data.data[0].url;
      revisedPrompt = data.data[0].revised_prompt;
      moderation = data.data[0].moderation || data.data[0].nsfw || false;
    } else if (data.images && Array.isArray(data.images) && data.images[0]) {
      imageUrl = data.images[0].url;
      revisedPrompt = data.images[0].revised_prompt;
      moderation = data.images[0].moderation || data.images[0].nsfw || false;
    } else if (data.url) {
      imageUrl = data.url;
      revisedPrompt = data.revised_prompt;
      moderation = data.moderation || data.nsfw || false;
    }

    if (!imageUrl) {
      logger.error('No image URL in xAI response:', data);
      return NextResponse.json({ 
        error: 'No image URL returned from xAI',
        details: 'Response did not contain expected image data'
      }, { status: 500 });
    }

    logger.info('Image generation successful:', { imageUrl, moderation });

    return NextResponse.json({ 
      imageUrl, 
      prompt, 
      revised_prompt: revisedPrompt,
      moderation 
    });

  } catch (error) {
    logger.error('Image generation error:', error);
    
    return NextResponse.json({ 
      error: 'Image generation failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
} 