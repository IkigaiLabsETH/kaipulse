import { NextResponse } from 'next/server';
import { Grok4Service } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam } from "openai/resources/index";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, systemPrompt, temperature, stream } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Prepare messages
    const messages: ChatCompletionMessageParam[] = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'user', content: message });

    // --- Streaming logic ---
    if (stream) {
      const OpenAI = (await import('openai')).default;
      const completionStream = await new OpenAI({
        apiKey: process.env.XAI_API_KEY,
        baseURL: 'https://api.x.ai/v1',
      }).chat.completions.create({
        model: 'grok-4', // Fixed: use correct model name
        messages,
        temperature: temperature || 0.7,
        stream: true,
      });

      const encoder = new TextEncoder();
      const streamResponse = new ReadableStream({
        async start(controller) {
          for await (const chunk of completionStream) {
            const content = chunk.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        }
      });
      return new Response(streamResponse, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });
    }

    // --- Non-streaming logic ---
    // Simple chat completion without tools for now
    const completion = await Grok4Service.chatCompletion({
      messages,
      temperature: temperature || 0.7,
    });

    // Extract content from response
    let content = completion.choices?.[0]?.message?.content;
    
    // Add detailed logging to debug the empty response
    logger.info('Grok4 completion object:', JSON.stringify(completion, null, 2));
    logger.info('Grok4 content field:', content);
    logger.info('Grok4 content type:', typeof content);
    logger.info('Grok4 content length:', content?.length);
    
    if (!content || !content.trim()) {
      logger.error('Grok4 returned empty content. Full response:', JSON.stringify(completion, null, 2));
      content = 'No response from Grok4 (empty or unexpected error).';
    }
    
    return NextResponse.json({ content });
  } catch (error) {
    logger.error('Grok4 API route error:', error);
    const key = process.env.XAI_API_KEY || '';
    logger.info('XAI_API_KEY:', key ? key.slice(0,6) + '...' + key.slice(-2) : '[not set]');
    logger.error('API error:', error);
    return NextResponse.json(
      { 
        content: 'No response from Grok4 (API error).',
        error: 'Failed to generate response from Grok4',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 