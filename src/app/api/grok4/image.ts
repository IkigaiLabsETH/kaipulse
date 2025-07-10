import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { prompt, fingerprintId } = await request.json();
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }
    // Prepare request body for xAI
    const body: Record<string, any> = {
      prompt,
      model: 'grok-2-image',
      n: 1,
      size: '1024x1024',
    };
    if (fingerprintId) {
      // Optionally, call /fingerprint endpoint as in grok4/route.ts, or just pass as identifier
      body.fingerprint = fingerprintId;
    }
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
      return NextResponse.json({ error: 'xAI image generation failed', details: err }, { status: 500 });
    }
    const data = await res.json();
    const imageUrl = data.data?.[0]?.url || data.images?.[0]?.url;
    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL returned from xAI' }, { status: 500 });
    }
    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Image generation failed', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 