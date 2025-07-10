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
    });

    // Handle deferred completion (initial)
    // @ts-expect-error: xAI API may return 'deferred.completion' object
    if (completion && typeof completion === 'object' && 'object' in completion && completion.object === 'deferred.completion' && 'id' in completion && completion.id) {
      const deferred = await Grok4Service.pollDeferredCompletion(completion.id);
      if (deferred.object === 'chat.completion') {
        completion = deferred as import("openai/resources/chat/completions").ChatCompletion;
      } else {
        throw new Error('Deferred completion did not resolve to a chat.completion object.');
      }
    }

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
      });
      // Handle deferred completion (tool call)
      // @ts-expect-error: xAI API may return 'deferred.completion' object
      if (completion && typeof completion === 'object' && 'object' in completion && completion.object === 'deferred.completion' && 'id' in completion && completion.id) {
        const deferred = await Grok4Service.pollDeferredCompletion(completion.id);
        if (deferred.object === 'chat.completion') {
          completion = deferred as import("openai/resources/chat/completions").ChatCompletion;
        } else {
          throw new Error('Deferred completion did not resolve to a chat.completion object.');
        }
      }
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