
import { Grok4Service, enhancedWebSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import type { ChatCompletion } from "openai/resources/chat/completions";
import { performance } from 'perf_hooks';

// Types
type ToolMessage = {
  role: 'tool';
  tool_call_id: string;
  content: string;
};

type RequestBody = {
  message: string;
  systemPrompt?: string;
  temperature?: number;
  stream?: boolean;
};

type BTCPriceCache = {
  price: number;
  timestamp: number;
};

type RateLimitEntry = {
  count: number;
  resetTime: number;
};

// Constants
const BTC_CACHE_TTL = 2 * 60 * 1000; // 2 minutes
const PREDICTION_TIMEOUT = 5000;
const BTC_FETCH_TIMEOUT = 3000;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute
const MAX_MESSAGE_LENGTH = 2000; // Prevent extremely long messages

// Caches
let cachedBTCPrice: BTCPriceCache | null = null;
const rateLimitCache = new Map<string, RateLimitEntry>();

// Performance tracking
class PerformanceTracker {
  private timings: Record<string, number> = {};
  
  start(label: string) {
    this.timings[label] = performance.now();
  }
  
  end(label: string) {
    if (this.timings[label]) {
      this.timings[label] = performance.now() - this.timings[label];
    }
  }
  
  getTimings() {
    return this.timings;
  }
  
  logTimings() {
    logger.info('Step timings (ms):', this.timings);
  }
}

// Rate limiting
function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const entry = rateLimitCache.get(clientId);
  
  if (!entry || now > entry.resetTime) {
    rateLimitCache.set(clientId, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  entry.count++;
  return true;
}

function getClientId(request: Request): string {
  // Use IP address or user agent as client identifier
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  return forwardedFor || realIp || userAgent.substring(0, 50);
}

// Input sanitization
function sanitizeMessage(message: string): string {
  // Remove potential XSS and limit length
  return message
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .substring(0, MAX_MESSAGE_LENGTH)
    .trim();
}

// Query classification functions
function needsWebSearch(query: string): boolean {
  const webSearchKeywords = [
    'price', 'current', 'live', 'now', 'today', 'market', 'trading',
    'bitcoin', 'btc', 'ethereum', 'eth', 'crypto', 'cryptocurrency',
    'gm', 'good morning', 'morning'
  ];
  
  const queryLower = query.toLowerCase();
  return webSearchKeywords.some(keyword => queryLower.includes(keyword));
}

function isGMQuery(q: string): boolean {
  const gmKeywords = ['gm', 'good morning', 'morning'];
  const queryLower = q.toLowerCase().trim();
  return gmKeywords.some(keyword => queryLower.includes(keyword));
}

function isPricePredictionQuery(q: string): boolean {
  const priceKeywords = [
    'price', 'value', 'worth', 'cost', 'how much',
    'current price', 'current value', 'price of', 'value of',
    'bitcoin price', 'btc price', 'eth price', 'ethereum price'
  ];
  
  const queryLower = q.toLowerCase();
  const hasPriceKeyword = priceKeywords.some(keyword => queryLower.includes(keyword));
  const hasPredictionKeyword = /price target|prediction|end of q4|end of year|forecast|target/i.test(q);
  const hasCryptoMention = /bitcoin|btc|ethereum|eth|crypto|cryptocurrency/i.test(q);
  
  return (hasPriceKeyword && hasCryptoMention) || hasPredictionKeyword;
}

// BTC Price fetching with better error handling and retry logic
async function getFastBTCPrice(retryCount = 0): Promise<number | null> {
  const now = Date.now();
  if (cachedBTCPrice && (now - cachedBTCPrice.timestamp) < BTC_CACHE_TTL) {
    return cachedBTCPrice.price;
  }
  
  try {
    const resp = await Promise.race([
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', {
        headers: {
          'User-Agent': 'LiveTheLifeTV-Grok4/1.0',
          'Accept': 'application/json'
        }
      }),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('BTC price fetch timeout')), BTC_FETCH_TIMEOUT)
      )
    ]);
    
    if (!resp.ok) {
      throw new Error(`BTC price API error: ${resp.status} ${resp.statusText}`);
    }
    
    const data = await resp.json();
    const price = data.bitcoin?.usd;
    
    if (typeof price === 'number' && price > 0) {
      cachedBTCPrice = { price, timestamp: now };
      logger.info('BTC price fetched successfully:', price);
      return price;
    } else {
      throw new Error('Invalid BTC price data');
    }
  } catch (error) {
    logger.error('BTC price fetch error:', error);
    
    // Retry once if it's a network error
    if (retryCount === 0 && error instanceof Error && error.message.includes('timeout')) {
      logger.info('Retrying BTC price fetch...');
      return getFastBTCPrice(1);
    }
    
    return cachedBTCPrice ? cachedBTCPrice.price : null;
  }
}

// Response helpers with CORS support
function createErrorResponse(message: string, status: number = 500): Response {
  return new Response(message, {
    status,
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

function createSuccessResponse(content: string): Response {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
}

// Enhanced request validation
async function validateRequest(request: Request): Promise<RequestBody> {
  if (request.method !== 'POST') {
    throw new Error('Method not allowed');
  }

  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Content-Type must be application/json');
  }

  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    throw new Error('Invalid JSON in request body');
  }

  if (!body.message || typeof body.message !== 'string') {
    throw new Error('Message is required and must be a string');
  }

  // Sanitize and validate message
  const sanitizedMessage = sanitizeMessage(body.message);
  if (!sanitizedMessage) {
    throw new Error('Message cannot be empty after sanitization');
  }

  // Validate temperature range
  if (body.temperature !== undefined && (body.temperature < 0 || body.temperature > 2)) {
    throw new Error('Temperature must be between 0 and 2');
  }

  return {
    ...body,
    message: sanitizedMessage
  };
}

// Price prediction handler with improved prompts
async function handlePricePrediction(message: string, systemPrompt?: string, temperature?: number): Promise<string> {
  const btcPrice = await getFastBTCPrice();
  const isPredictionQuery = /price target|prediction|end of q4|end of year|forecast|target/i.test(message);
  
  if (isPredictionQuery) {
    let prediction = '';
    try {
      const predictionPrompt = `Bitcoin is currently priced at $${btcPrice ? btcPrice.toLocaleString() : 'unknown'}. What is your price target for the end of Q4? Please answer in 2 sentences, and add a witty Satoshi-style remark.`;
      const predictionResp = await Promise.race([
        Grok4Service.chatCompletion({
          messages: [
            { role: 'system', content: systemPrompt || 'You are Grok, an AI assistant for LiveTheLifeTV.' },
            { role: 'user', content: predictionPrompt }
          ],
          temperature: temperature || 0.7,
          max_tokens: 120,
        }),
        new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('Prediction timeout')), PREDICTION_TIMEOUT)
        )
      ]) as ChatCompletion;
      
      prediction = predictionResp.choices?.[0]?.message?.content || '';
      
      if (!prediction || !prediction.trim()) {
        prediction = `As Satoshi might say: "Predicting Bitcoin's price is like predicting the weather in a quantum storm. HODL on!"`;
      }
    } catch (error) {
      logger.error('Price prediction error:', error);
      prediction = `As Satoshi might say: "Predicting Bitcoin's price is like predicting the weather in a quantum storm. HODL on!"`;
    }
    
    return `Current BTC price: $${btcPrice ? btcPrice.toLocaleString() : 'unavailable'}\n\n${prediction}`;
  } else {
    if (btcPrice) {
      return `Current Bitcoin price: $${btcPrice.toLocaleString()}\n\nAs Satoshi would say: "The price is what the market decides!"`;
    } else {
      return `I'm having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"`;
    }
  }
}

// CORS preflight handler
export async function OPTIONS(_request: Request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// Main route handler with enhanced security and monitoring
export async function POST(request: Request) {
  const tracker = new PerformanceTracker();
  const clientId = getClientId(request);
  const startTime = Date.now();

  // Rate limiting
  if (!checkRateLimit(clientId)) {
    logger.warn(`Rate limit exceeded for client: ${clientId}`);
    return createErrorResponse('Rate limit exceeded. Please try again later.', 429);
  }

  try {
    tracker.start('total');
    
    // Validate request
    const { message, systemPrompt, temperature, stream } = await validateRequest(request);

    // Log request details for monitoring
    logger.info('Request details:', {
      clientId,
      messageLength: message.length,
      hasStream: stream,
      temperature,
      timestamp: new Date().toISOString()
    });

    // Log GM detection
    if (isGMQuery(message)) {
      logger.info('GM query detected:', message);
    }

    // Handle price predictions
    if (isPricePredictionQuery(message)) {
      logger.info('Price prediction shortcut triggered for query:', message);
      const response = await handlePricePrediction(message, systemPrompt, temperature);
      tracker.end('total');
      tracker.logTimings();
      
      // Log successful response
      logger.info('Price prediction completed:', {
        duration: Date.now() - startTime,
        responseLength: response.length
      });
      
      return createSuccessResponse(response);
    }

    // Validate API key
    if (!process.env.XAI_API_KEY) {
      logger.error('XAI_API_KEY is not configured');
      return createErrorResponse('Grok4 service is not properly configured. Please contact support.', 500);
    }

    // Enhanced system prompt with context awareness
    const enhancedSystemPrompt = systemPrompt || `You are Grok, an AI assistant for LiveTheLifeTV. Your role is to help users understand Bitcoin-first investing, market analysis, and financial freedom. Be witty, insightful, and creative—channel the spirit of Satoshi Nakamoto. 

IMPORTANT INSTRUCTIONS:
- When users say "gm" or "good morning", always provide current Bitcoin price and a comprehensive market report including altcoins, MSTR, Mag7, and S&P500 performance
- Always use web search to get the most current data
- Keep responses concise but informative
- Use Satoshi-style wisdom when appropriate
- Be encouraging about Bitcoin adoption and financial freedom

You have access to web search for current information when needed.`;

    logger.info('Grok4 SYSTEM PROMPT:', enhancedSystemPrompt);
    logger.info('Grok4 USER MESSAGE:', message);

    // Prepare tools with enhanced descriptions
    const tools: ChatCompletionTool[] = [];
    if (needsWebSearch(message)) {
      tools.push({
        type: 'function',
        function: {
          name: 'search',
          description: 'Search the web for up-to-date information, with enhanced accuracy for cryptocurrency prices, market data, and financial news. Use this for current prices, market trends, and real-time information.',
          parameters: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'The search query - be specific and include relevant keywords for better results'
              }
            },
            required: ['query']
          }
        }
      });
    }

    // Prepare messages with conversation context
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: enhancedSystemPrompt },
      { role: 'user', content: message }
    ];

    // Handle streaming
    if (stream) {
      return await handleStreamingResponse(messages, tools, temperature, tracker);
    }

    // Handle non-streaming
    return await handleNonStreamingResponse(messages, tools, temperature, tracker);
    
  } catch (error) {
    tracker.end('total');
    logger.error('Grok4 API call failed:', error);
    tracker.logTimings();
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const duration = Date.now() - startTime;
    
    // Log error details for debugging
    logger.error('Error details:', {
      clientId,
      duration,
      error: errorMessage,
      timestamp: new Date().toISOString()
    });
    
    return createErrorResponse(`Sorry, I'm having trouble connecting to Grok4 right now. Please try again in a moment. (${errorMessage})`);
  }
}

// Streaming response handler with enhanced error handling
async function handleStreamingResponse(
  messages: ChatCompletionMessageParam[],
  tools: ChatCompletionTool[],
  temperature: number | undefined,
  tracker: PerformanceTracker
): Promise<Response> {
  try {
    tracker.start('streaming');
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
          let toolCallId = '';
          let toolCallFunction = '';
          let toolCallArguments = '';
          let contentLength = 0;
        
          for await (const chunk of completionStream) {
            const content = chunk.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
              contentLength += content.length;
            }
            
            // Handle tool calls in streaming
            const toolCalls = chunk.choices?.[0]?.delta?.tool_calls;
            if (toolCalls) {
              for (const toolCall of toolCalls) {
                if (toolCall.id) toolCallId = toolCall.id;
                if (toolCall.function?.name) toolCallFunction = toolCall.function.name;
                if (toolCall.function?.arguments) toolCallArguments += toolCall.function.arguments;
                
                if (toolCallFunction === 'search' && toolCallArguments) {
                  try {
                    const { query } = JSON.parse(toolCallArguments);
                    logger.info('Streaming search request:', query);
                    
                    // Perform search with timeout
                    const searchResult = await Promise.race([
                      enhancedWebSearch(query),
                      new Promise<string>((_, reject) => 
                        setTimeout(() => reject(new Error('Search timeout')), 8000)
                      )
                    ]);
                    
                    // Add tool response to messages
                    messages.push({
                      role: 'tool',
                      tool_call_id: toolCallId,
                      content: searchResult,
                    } as ToolMessage);
                    
                    // Get final response
                    const finalCompletion = await Grok4Service.chatCompletion({
                      messages,
                      temperature: temperature || 0.7,
                      max_tokens: 600,
                    });
                    
                    const finalContent = finalCompletion.choices?.[0]?.message?.content;
                    if (finalContent) {
                      controller.enqueue(encoder.encode(finalContent));
                      contentLength += finalContent.length;
                    }
                    
                  } catch (searchError) {
                    logger.error('Streaming search error:', searchError);
                    controller.enqueue(encoder.encode('Sorry, there was an error with the web search.'));
                  }
                }
              }
            }
          }
          
          // Log streaming completion
          logger.info('Streaming completed:', {
            contentLength,
            toolCalls: tools.length > 0 ? 'yes' : 'no'
          });
          
        } catch (streamError) {
          logger.error('Streaming error:', streamError);
          controller.enqueue(encoder.encode('Sorry, there was an error with the streaming response.'));
        } finally {
          controller.close();
        }
      }
    });
    
    tracker.end('streaming');
    tracker.end('total');
    tracker.logTimings();
    
    return new Response(streamResponse, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
    });
  } catch (streamError) {
    tracker.end('streaming');
    tracker.end('total');
    logger.error('Failed to create streaming response:', streamError);
    tracker.logTimings();
    return createErrorResponse('Sorry, I\'m having trouble with the streaming response. Please try again.');
  }
}

// Non-streaming response handler with enhanced monitoring
async function handleNonStreamingResponse(
  messages: ChatCompletionMessageParam[],
  tools: ChatCompletionTool[],
  temperature: number | undefined,
  tracker: PerformanceTracker
): Promise<Response> {
  tracker.start('grok4_api');
  let completion;
  
  try {
    completion = await Promise.race([
      Grok4Service.chatCompletion({
        messages,
        temperature: temperature || 0.7,
        ...(tools.length > 0 && { tools, tool_choice: 'auto' }),
        max_tokens: 600,
      }),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Grok4 API timeout')), 8000)
      )
    ]);
    tracker.end('grok4_api');
  } catch (grokError) {
    tracker.end('grok4_api');
    tracker.end('total');
    logger.error('Grok4 API error:', grokError);
    tracker.logTimings();
    return createErrorResponse(
      'Sorry, Grok4 or live web search is taking too long to respond. This sometimes happens for travel or open-ended queries. Please try again, rephrase your question, or ask for a general tip.',
      504
    );
  }

  // Handle tool calls (search) - only if tools were provided
  let toolCallCount = 0;
  if (tools.length > 0) {
    while (true) {
      const toolCall = Grok4Service.extractToolCall(completion);
      if (!toolCall || toolCall.function?.name !== 'search') break;
      
      toolCallCount++;
      if (toolCallCount > 3) {
        logger.warn('Too many tool calls, stopping to prevent infinite loops');
        break;
      }
      
      try {
        const { query: searchQuery } = JSON.parse(toolCall.function.arguments);
        logger.info('Grok4 requested search for:', searchQuery);
        
        // Use enhanced web search with timeout
        let searchResult;
        try {
          searchResult = await Promise.race([
            enhancedWebSearch(searchQuery),
            new Promise<string>((_, reject) => 
              setTimeout(() => reject(new Error('Search timeout')), 8000)
            )
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
          new Promise<never>((_, reject) => 
            setTimeout(() => reject(new Error('Grok4 API timeout')), 8000)
          )
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
  logger.info('Tool calls made:', toolCallCount);
  
  // Improved empty content handling with specific fallback messages
  if (!content || !content.trim()) {
    logger.error('Grok4 returned empty content. Full response:', JSON.stringify(completion, null, 2));
    
    // Provide context-aware fallback message based on the query
    const userMessage = messages[messages.length - 1]?.content as string || '';
    if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('btc') || userMessage.toLowerCase().includes('bitcoin')) {
      content = 'I\'m having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"';
    } else {
      content = 'I couldn\'t generate a proper response. Please try rephrasing your question.';
    }
  }
  
  tracker.end('total');
  tracker.logTimings();
  
  // Log successful completion
  logger.info('Non-streaming response completed:', {
    contentLength: content?.length || 0,
    toolCalls: toolCallCount,
    hasTools: tools.length > 0
  });
  
  return createSuccessResponse(content);
} 