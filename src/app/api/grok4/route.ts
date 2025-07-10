import { NextResponse } from 'next/server';
import { Grok4Service, duckDuckGoSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionTool } from "openai/resources/chat/completions";
import type { ChatCompletionMessageParam } from "openai/resources/index";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, systemPrompt, temperature } = body;

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

    // Step 1: Send user message with tool-calling enabled
    let completion = await Grok4Service.generateResponseWithTools(
      message,
      systemPrompt,
      temperature,
      tools,
      'auto'
    );

    // Step 2: If Grok4 wants to call the search tool, handle it
    const toolCall = Grok4Service.extractToolCall(completion);
    if (toolCall && toolCall.function?.name === 'search') {
      const { query: searchQuery } = JSON.parse(toolCall.function.arguments);
      const searchResult = await duckDuckGoSearch(searchQuery);
      // Step 3: Send the search result back to Grok4 as a tool response
      const toolMessage = {
        role: 'tool',
        tool_call_id: toolCall.id,
        content: searchResult,
      };
      // Continue the conversation: system, user, then tool response
      const messages = [];
      if (systemPrompt) {
        messages.push({ role: 'system', content: systemPrompt });
      }
      messages.push({ role: 'user', content: message });
      messages.push(toolMessage);
      // Get Grok4's final answer
      completion = await Grok4Service.chatCompletion({
        messages: messages as ChatCompletionMessageParam[], // allow 'tool' role for OpenAI tool-calling
        temperature,
      });
    }

    // Return Grok4's answer
    const content = completion.choices?.[0]?.message?.content || 'No response from Grok4.';
    return NextResponse.json({ content });
  } catch (error) {
    logger.error('Grok4 API route error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate response from Grok4',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 