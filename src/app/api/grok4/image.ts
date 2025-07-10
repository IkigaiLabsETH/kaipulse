import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { prompt, n, size } = await request.json();
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }
    // Prepare request body for xAI
    const body: Record<string, unknown> = {
      prompt,
      model: 'grok-2-image',
      n: n || 1,
      size: size || '1024x1024',
    };
    const res = await fetch('https://api.x.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.text();
      // Log the error status and body for debugging
      // eslint-disable-next-line no-console
      console.error('xAI image error:', res.status, err);
      return NextResponse.json({ error: 'xAI image generation failed', details: err }, { status: 500 });
    }
    const data = await res.json();
    const imageObj = data.data?.[0] || data.images?.[0];
    const imageUrl = imageObj?.url;
    const moderation = imageObj?.moderation || imageObj?.nsfw || false;
    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL returned from xAI' }, { status: 500 });
    }
    return NextResponse.json({ imageUrl, prompt, moderation });
  } catch (error) {
    return NextResponse.json({ error: 'Image generation failed', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 