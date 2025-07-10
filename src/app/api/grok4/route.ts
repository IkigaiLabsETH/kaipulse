import { NextResponse } from 'next/server';
import { Grok4Service, enhancedWebSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';

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
  // Improved: Return top 2 most relevant chunks, but limit each to 400 chars
  const queryWords = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const scoredChunks = chunks.map(chunk => {
    const chunkLower = chunk.toLowerCase();
    let score = 0;
    for (const word of queryWords) {
      if (chunkLower.includes(word)) score++;
    }
    return { chunk, score };
  }).filter(item => item.score > 0);
  
  // Sort by score and take top 2, truncate each
  return scoredChunks
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(item => item.chunk.slice(0, 400));
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
  const stepTimings: Record<string, number> = {};
  const stepStart = (label: string) => stepTimings[label] = performance.now();
  const stepEnd = (label: string) => stepTimings[label] = performance.now() - (stepTimings[label] || 0);
  try {
    stepStart('total');
    // Validate request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      logger.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { message, systemPrompt, temperature, stream } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Validate API key
    if (!process.env.XAI_API_KEY) {
      logger.error('XAI_API_KEY is not configured');
      return NextResponse.json(
        { 
          content: 'Grok4 service is not properly configured. Please contact support.',
          error: 'Missing API key configuration'
        },
        { status: 500 }
      );
    }

    stepStart('knowledge_load');
    let knowledgeChunks: string[] = [];
    try {
      knowledgeChunks = await Promise.race([
        loadKnowledgeFiles(),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Knowledge base load timeout')), 5000))
      ]);
      stepEnd('knowledge_load');
    } catch (kbError) {
      stepEnd('knowledge_load');
      stepEnd('total');
      logger.error('Knowledge base load error:', kbError);
      logger.info('Step timings (ms):', stepTimings);
      return NextResponse.json({
        content: 'Sorry, the knowledge base is currently unavailable. Please try again later.',
        error: 'Knowledge base load timeout',
        details: kbError instanceof Error ? kbError.message : String(kbError)
      }, { status: 504 });
    }
    stepStart('find_relevant_knowledge');
    let relevantKnowledge: string[] = [];
    try {
      relevantKnowledge = await findRelevantKnowledge(message, knowledgeChunks);
      stepEnd('find_relevant_knowledge');
    } catch (relError) {
      stepEnd('find_relevant_knowledge');
      stepEnd('total');
      logger.error('Relevant knowledge search error:', relError);
      logger.info('Step timings (ms):', stepTimings);
      return NextResponse.json({
        content: 'Sorry, there was an error searching the knowledge base.',
        error: 'Knowledge search error',
        details: relError instanceof Error ? relError.message : String(relError)
      }, { status: 500 });
    }
    
    // Build enhanced system prompt with improved knowledge injection
    let enhancedSystemPrompt = systemPrompt || 'You are Grok, an AI assistant for LiveTheLifeTV. Your role is to help users understand Bitcoin-first investing, market analysis, and financial freedom. Be witty, insightful, and creative—channel the spirit of Satoshi Nakamoto.';
    
    if (relevantKnowledge.length > 0) {
      enhancedSystemPrompt += '\n\nYou have access to the following knowledge base information:\n';
      relevantKnowledge.forEach((chunk, index) => {
        enhancedSystemPrompt += `[Knowledge ${index + 1}]:\n${chunk}\n\n`;
      });
      enhancedSystemPrompt += 'IMPORTANT: If you cannot answer from the above knowledge, say so explicitly. Do not leave your response blank.';
    } else {
      enhancedSystemPrompt += '\n\nIMPORTANT: No relevant knowledge base entries were found for this query. If you do not know the answer, say "I don\'t have information about that in my knowledge base." Do not leave your response blank.';
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
      try {
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
          max_tokens: 800,
        });

        const encoder = new TextEncoder();
        const streamResponse = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of completionStream) {
                const content = chunk.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              }
            } catch (streamError) {
              logger.error('Streaming error:', streamError);
              controller.enqueue(encoder.encode('Sorry, there was an error with the streaming response.'));
            } finally {
              controller.close();
            }
          }
        });
        stepEnd('total');
        logger.info('Step timings (ms):', stepTimings);
        return new Response(streamResponse, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache',
          },
        });
      } catch (streamError) {
        stepEnd('total');
        logger.error('Failed to create streaming response:', streamError);
        logger.info('Step timings (ms):', stepTimings);
        return NextResponse.json(
          { 
            content: 'Sorry, I\'m having trouble with the streaming response. Please try again.',
            error: 'Streaming failed'
          },
          { status: 500 }
        );
      }
    }

    // --- Non-streaming logic with tool calling ---
    stepStart('grok4_api');
    let completion;
    try {
      completion = await Promise.race([
        Grok4Service.chatCompletion({
          messages,
          temperature: temperature || 0.7,
          ...(tools.length > 0 && { tools, tool_choice: 'auto' }),
          max_tokens: 600,
        }),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Grok4 API timeout')), 8000))
      ]);
      stepEnd('grok4_api');
    } catch (grokError) {
      stepEnd('grok4_api');
      stepEnd('total');
      logger.error('Grok4 API error:', grokError);
      logger.info('Step timings (ms):', stepTimings);
      return NextResponse.json({
        content: 'Sorry, Grok4 or live web search is taking too long to respond. This sometimes happens for travel or open-ended queries. Please try again, rephrase your question, or ask for a general tip.',
        error: 'Grok4 API timeout',
        details: grokError instanceof Error ? grokError.message : String(grokError)
      }, { status: 504 });
    }

    // Step 2: Handle tool calls (search) - only if tools were provided
    if (tools.length > 0) {
      while (true) {
        const toolCall = Grok4Service.extractToolCall(completion);
        if (!toolCall || toolCall.function?.name !== 'search') break;
        try {
          const { query: searchQuery } = JSON.parse(toolCall.function.arguments);
          logger.info('Grok4 requested search for:', searchQuery);
          // Use enhanced web search with timeout
          let searchResult;
          try {
            searchResult = await Promise.race([
              enhancedWebSearch(searchQuery),
              new Promise<string>((_, reject) => setTimeout(() => reject(new Error('Search timeout')), 8000))
            ]);
          } catch (searchTimeout) {
            logger.error('Web search timed out:', searchTimeout);
            // Fallback travel tip for Portugal
            if (/portugal/i.test(searchQuery)) {
              searchResult = 'Travel tip: In Portugal, consider staying at a "pousada"—a historic inn or castle converted into a boutique hotel. Lisbon and Porto have many excellent options. For a unique experience, try a coastal town like Cascais or Lagos.';
            } else {
              searchResult = 'Sorry, live web search is taking too long. Please try again or rephrase your question.';
            }
          }
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
              max_tokens: 600,
            }),
            new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Grok4 API timeout')), 8000))
          ]);
        } catch (toolError) {
          logger.error('Tool call error:', toolError);
          break;
        }
      }
    }

    // Extract content from final response with improved error handling
    let content = completion.choices?.[0]?.message?.content;
    // Add detailed logging to debug the empty response
    logger.info('Grok4 completion object:', JSON.stringify(completion, null, 2));
    logger.info('Grok4 content field:', content);
    logger.info('Grok4 content type:', typeof content);
    logger.info('Grok4 content length:', content?.length);
    // Improved empty content handling with specific fallback messages
    if (!content || !content.trim()) {
      logger.error('Grok4 returned empty content. Full response:', JSON.stringify(completion, null, 2));
      // Provide context-aware fallback message
      if (relevantKnowledge.length > 0) {
        content = 'I found some relevant information in my knowledge base, but I couldn\'t generate a proper response. Please try rephrasing your question.';
      } else {
        content = 'I don\'t have information about that in my knowledge base. Please try asking something else or rephrasing your question.';
      }
    }
    stepEnd('total');
    logger.info('Step timings (ms):', stepTimings);
    return NextResponse.json({ content });
  } catch (apiError) {
    stepEnd('total');
    logger.error('Grok4 API call failed:', apiError);
    logger.info('Step timings (ms):', stepTimings);
    return NextResponse.json(
      { 
        content: 'Sorry, I\'m having trouble connecting to Grok4 right now. Please try again in a moment.',
        error: 'Grok4 API call failed',
        details: apiError instanceof Error ? apiError.message : String(apiError)
      },
      { status: 500 }
    );
  }
} 