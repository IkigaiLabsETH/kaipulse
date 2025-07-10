import { NextResponse } from 'next/server';
import { Grok4Service, duckDuckGoSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionTool } from "openai/resources/chat/completions";
import type { ChatCompletionMessageParam } from "openai/resources/index";

// Type for tool response message
type ToolMessage = {
  role: 'tool';
  tool_call_id: string;
  content: string;
};

// In-memory cache for fingerprint tokens
const fingerprintCache = new Map<string, string>();

async function getFingerprintToken(fingerprintId: string): Promise<string> {
  if (fingerprintCache.has(fingerprintId)) {
    return fingerprintCache.get(fingerprintId)!;
  }
  // Call xAI /fingerprint endpoint
  const res = await fetch('https://api.x.ai/v1/fingerprint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
    },
    body: JSON.stringify({ identifier: fingerprintId }),
  });
  if (!res.ok) throw new Error('Failed to get fingerprint token from xAI');
  const data = await res.json();
  if (!data.fingerprint) throw new Error('No fingerprint token returned from xAI');
  fingerprintCache.set(fingerprintId, data.fingerprint);
  return data.fingerprint;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, systemPrompt, temperature, stream, fingerprintId } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Define the Live Search tool
    const tools: ChatCompletionTool[] = [
      {
        type: 'function',
        function: {
          name: 'search',
          description: 'Search the web for up-to-date information.',
          parameters: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'The search query'
              }
            },
            required: ['query']
          }
        }
      }
    ];

    // Step 1: Prepare initial messages
    const messages: ChatCompletionMessageParam[] = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'user', content: message });

    // Get fingerprint token if provided
    let fingerprintToken: string | undefined = undefined;
    if (fingerprintId) {
      fingerprintToken = await getFingerprintToken(fingerprintId);
    }

    // --- Streaming logic ---
    if (stream) {
      // Streaming response using OpenAI SDK
      const OpenAI = (await import('openai')).default;
      const completionStream = await new OpenAI({
        apiKey: process.env.XAI_API_KEY,
        baseURL: 'https://api.x.ai/v1',
      }).chat.completions.create({
        model: 'grok-4-0709',
        messages,
        temperature,
        tools,
        tool_choice: 'auto',
        stream: true,
        ...(fingerprintToken ? { fingerprint: fingerprintToken } : {}),
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
    // --- End streaming logic ---

    // Step 2: Call Grok4 with tool-calling enabled (non-streaming fallback)
    let completion = await Grok4Service.chatCompletion({
      messages,
      temperature,
      tools,
      tool_choice: 'auto',
      ...(fingerprintToken ? { fingerprint: fingerprintToken } : {}),
    });

    // Step 3: Loop for multiple tool calls
    while (true) {
      const toolCall = Grok4Service.extractToolCall(completion);
      if (!toolCall || toolCall.function?.name !== 'search') break;
      const { query: searchQuery } = JSON.parse(toolCall.function.arguments);
      const searchResult = await duckDuckGoSearch(searchQuery);
      // Add tool response to messages
      messages.push({
        role: 'tool',
        tool_call_id: toolCall.id,
        content: searchResult,
      } as ToolMessage);
      // Get next Grok4 response
      completion = await Grok4Service.chatCompletion({
        messages,
        temperature,
        ...(fingerprintToken ? { fingerprint: fingerprintToken } : {}),
      });
    }

    // Return Grok4's final answer
    const content = completion.choices?.[0]?.message?.content || 'No response from Grok4.';
    return NextResponse.json({ content });
  } catch (error) {
    logger.error('Grok4 API route error:', error);
    const isDev = process.env.NODE_ENV !== 'production';
    return NextResponse.json(
      { 
        error: 'Failed to generate response from Grok4',
        details: isDev && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 