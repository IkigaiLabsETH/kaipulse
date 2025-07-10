import { NextResponse } from 'next/server';
import { Grok4Service, enhancedWebSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import fs from 'fs';
import path from 'path';

// Type for tool response message
type ToolMessage = {
  role: 'tool';
  tool_call_id: string;
  content: string;
};

// Knowledge base functions with caching
let cachedKnowledgeChunks: string[] | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function loadKnowledgeFiles(): Promise<string[]> {
  // Return cached chunks if recent
  const now = Date.now();
  if (cachedKnowledgeChunks && (now - lastCacheTime) < CACHE_DURATION) {
    return cachedKnowledgeChunks;
  }
  
  const knowledgeDir = path.join(process.cwd(), 'knowledge');
  const chunks: string[] = [];
  
  try {
    const files = fs.readdirSync(knowledgeDir, { recursive: true });
    
    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.md')) {
        const filePath = path.join(knowledgeDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Split content into chunks (by headers or paragraphs)
        const sections = content.split(/(?=^#)/m); // Split by markdown headers
        for (const section of sections) {
          if (section.trim()) {
            chunks.push(section.trim());
          }
        }
      }
    }
    
    // Cache the results
    cachedKnowledgeChunks = chunks;
    lastCacheTime = now;
  } catch (error) {
    logger.error('Error loading knowledge files:', error);
  }
  
  return chunks;
}

async function findRelevantKnowledge(query: string, chunks: string[]): Promise<string[]> {
  // Improved: Only return chunks that contain any significant word from the query
  const queryWords = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const relevantChunks: string[] = [];
  for (const chunk of chunks) {
    const chunkLower = chunk.toLowerCase();
    if (queryWords.some(word => chunkLower.includes(word))) {
      relevantChunks.push(chunk);
    }
  }
  // Return up to 2 most relevant chunks
  return relevantChunks.slice(0, 2);
}

// Check if query needs web search
function needsWebSearch(query: string): boolean {
  const webSearchKeywords = [
    'price', 'current', 'live', 'now', 'today', 'market', 'trading',
    'bitcoin', 'btc', 'ethereum', 'eth', 'crypto', 'cryptocurrency'
  ];
  
  const queryLower = query.toLowerCase();
  return webSearchKeywords.some(keyword => queryLower.includes(keyword));
}

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

    // Load knowledge base
    const knowledgeChunks = await loadKnowledgeFiles();
    const relevantKnowledge = await findRelevantKnowledge(message, knowledgeChunks);
    
    // Build enhanced system prompt with knowledge
    let enhancedSystemPrompt = systemPrompt || 'You are Grok, an AI assistant for LiveTheLifeTV. Your role is to help users understand Bitcoin-first investing, market analysis, and financial freedom. Be witty, insightful, and creative—channel the spirit of Satoshi Nakamoto.';
    
    if (relevantKnowledge.length > 0) {
      enhancedSystemPrompt += '\n\nYou have access to the following knowledge base information:\n' + 
        relevantKnowledge.map((chunk, i) => `[Knowledge ${i + 1}]:\n${chunk}`).join('\n\n');
    }

    // Log the full prompt and user message for debugging
    logger.info('Grok4 SYSTEM PROMPT:', enhancedSystemPrompt);
    logger.info('Grok4 USER MESSAGE:', message);

    // Only add search tool if query needs web search
    const tools: ChatCompletionTool[] = [];
    if (needsWebSearch(message)) {
      tools.push({
        type: 'function',
        function: {
          name: 'search',
          description: 'Search the web for up-to-date information, with enhanced accuracy for cryptocurrency prices and market data.',
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
      });
    }

    // Prepare messages
    const messages: ChatCompletionMessageParam[] = [];
    messages.push({ role: 'system', content: enhancedSystemPrompt });
    messages.push({ role: 'user', content: message });

    // --- Streaming logic ---
    if (stream) {
      const OpenAI = (await import('openai')).default;
      const completionStream = await new OpenAI({
        apiKey: process.env.XAI_API_KEY,
        baseURL: 'https://api.x.ai/v1',
      }).chat.completions.create({
        model: 'grok-4',
        messages,
        temperature: temperature || 0.7,
        ...(tools.length > 0 && { tools, tool_choice: 'auto' }),
        stream: true,
        max_tokens: 800, // Reduced from 1000
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

    // --- Non-streaming logic with tool calling ---
    // Step 1: Initial call with tools (if needed)
    let completion = await Promise.race([
      Grok4Service.chatCompletion({
        messages,
        temperature: temperature || 0.7,
        ...(tools.length > 0 && { tools, tool_choice: 'auto' }),
        max_tokens: 500, // Further reduced for faster responses
      }),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Grok4 API timeout')), 15000)
      )
    ]);

    // Step 2: Handle tool calls (search) - only if tools were provided
    if (tools.length > 0) {
      while (true) {
        const toolCall = Grok4Service.extractToolCall(completion);
        if (!toolCall || toolCall.function?.name !== 'search') break;
        
        const { query: searchQuery } = JSON.parse(toolCall.function.arguments);
        logger.info('Grok4 requested search for:', searchQuery);
        
        // Use enhanced web search with timeout
        const searchResult = await Promise.race([
          enhancedWebSearch(searchQuery),
          new Promise<string>((_, reject) => 
            setTimeout(() => reject(new Error('Search timeout')), 10000)
          )
        ]).catch(() => 'Web search timed out. Please try again.');
        
        // Add tool response to messages
        messages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: searchResult,
        } as ToolMessage);
        
        // Get next Grok4 response with timeout
        completion = await Promise.race([
          Grok4Service.chatCompletion({
            messages,
            temperature: temperature || 0.7,
            max_tokens: 500, // Further reduced for faster responses
          }),
          new Promise<never>((_, reject) => 
            setTimeout(() => reject(new Error('Grok4 API timeout')), 15000)
          )
        ]);
      }
    }

    // Extract content from final response
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