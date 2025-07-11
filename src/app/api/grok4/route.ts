
import { Grok4Service, enhancedWebSearch } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import type { ChatCompletion } from "openai/resources/chat/completions";

import { performance } from 'perf_hooks';

// Type for tool response message
type ToolMessage = {
  role: 'tool';
  tool_call_id: string;
  content: string;
};

// Knowledge base functions with caching


// Check if query needs web search
function needsWebSearch(query: string): boolean {
  const webSearchKeywords = [
    'price', 'current', 'live', 'now', 'today', 'market', 'trading',
    'bitcoin', 'btc', 'ethereum', 'eth', 'crypto', 'cryptocurrency'
  ];
  
  const queryLower = query.toLowerCase();
  return webSearchKeywords.some(keyword => queryLower.includes(keyword));
}

// Add a simple in-memory cache for BTC price
let cachedBTCPrice: { price: number, timestamp: number } | null = null;
const BTC_CACHE_TTL = 2 * 60 * 1000; // 2 minutes



async function getFastBTCPrice(): Promise<number | null> {
  const now = Date.now();
  if (cachedBTCPrice && (now - cachedBTCPrice.timestamp) < BTC_CACHE_TTL) {
    return cachedBTCPrice.price;
  }
  
  try {
    const resp = await Promise.race([
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'),
      new Promise((_, reject) => setTimeout(() => reject(new Error('BTC price fetch timeout')), 3000))
    ]) as Response;
    
    if (!resp.ok) {
      logger.error('BTC price API error:', resp.status, resp.statusText);
      throw new Error('BTC price API error');
    }
    
    const data = await resp.json();
    const price = data.bitcoin?.usd;
    
    if (typeof price === 'number' && price > 0) {
      cachedBTCPrice = { price, timestamp: now };
      logger.info('BTC price fetched successfully:', price);
      return price;
    } else {
      logger.error('Invalid BTC price data:', data);
      throw new Error('Invalid BTC price data');
    }
  } catch (error) {
    logger.error('BTC price fetch error:', error);
    // Return cached price if available, otherwise null
    return cachedBTCPrice ? cachedBTCPrice.price : null;
  }
}

function isPricePredictionQuery(q: string): boolean {
  const priceKeywords = [
    'price', 'value', 'worth', 'cost', 'how much',
    'current price', 'current value', 'price of', 'value of',
    'bitcoin price', 'btc price', 'eth price', 'ethereum price'
  ];
  
  const queryLower = q.toLowerCase();
  
  // Check for price-related keywords
  const hasPriceKeyword = priceKeywords.some(keyword => queryLower.includes(keyword));
  
  // Check for specific prediction/forecast keywords
  const hasPredictionKeyword = /price target|prediction|end of q4|end of year|forecast|target/i.test(q);
  
  // Check for crypto/bitcoin mentions
  const hasCryptoMention = /bitcoin|btc|ethereum|eth|crypto|cryptocurrency/i.test(q);
  
  // Return true if it's a price query with crypto mention, or a prediction query
  return (hasPriceKeyword && hasCryptoMention) || hasPredictionKeyword;
}

export async function POST(request: Request) {
  const stepTimings: Record<string, number> = {};
  const stepStart = (label: string) => stepTimings[label] = performance.now();
  const stepEnd = (label: string) => stepTimings[label] = performance.now() - (stepTimings[label] || 0);
  try {
    stepStart('total');
    // Validate request method
    if (request.method !== 'POST') {
      return new Response(
        'Method not allowed',
        { status: 405, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        'Content-Type must be application/json',
        { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      logger.error('Failed to parse request body:', parseError);
      return new Response(
        'Invalid JSON in request body',
        { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    const { message, systemPrompt, temperature, stream } = body;

    if (!message || typeof message !== 'string') {
      return new Response(
        'Message is required and must be a string. Please provide a valid message to chat with Grok4.',
        { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    // Price prediction shortcut (run before knowledge base, etc)
    if (isPricePredictionQuery(message)) {
      logger.info('Price prediction shortcut triggered for query:', message);
      // Step 1: Fast price fetch
      const btcPrice = await getFastBTCPrice();
      
      // Step 2: Determine if this is a prediction query or just a price query
      const isPredictionQuery = /price target|prediction|end of q4|end of year|forecast|target/i.test(message);
      
      let response = '';
      
      if (isPredictionQuery) {
        logger.info('Handling as prediction query');
        // Handle prediction queries
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
            new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Prediction timeout')), 5000))
          ]) as ChatCompletion;
          
          // Extract content with better error handling
          prediction = predictionResp.choices?.[0]?.message?.content || '';
          
          // If still empty, use fallback
          if (!prediction || !prediction.trim()) {
            prediction = `As Satoshi might say: "Predicting Bitcoin's price is like predicting the weather in a quantum storm. HODL on!"`;
          }
        } catch (error) {
          logger.error('Price prediction error:', error);
          prediction = `As Satoshi might say: "Predicting Bitcoin's price is like predicting the weather in a quantum storm. HODL on!"`;
        }
        
        response = `Current BTC price: $${btcPrice ? btcPrice.toLocaleString() : 'unavailable'}\n\n${prediction}`;
      } else {
        logger.info('Handling as simple price query');
        // Handle simple price queries
        if (btcPrice) {
          response = `Current Bitcoin price: $${btcPrice.toLocaleString()}\n\nAs Satoshi would say: "The price is what the market decides!"`;
        } else {
          response = `I'm having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"`;
        }
      }
      
      return new Response(response, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });
    } else {
      logger.info('Query did not match price prediction shortcut:', message);
    }

    // Validate API key
    if (!process.env.XAI_API_KEY) {
      logger.error('XAI_API_KEY is not configured');
      return new Response(
        'Grok4 service is not properly configured. Please contact support.',
        { 
          status: 500,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        }
      );
    }

    // Simplified approach: Use a focused system prompt without complex knowledge base
    const enhancedSystemPrompt = systemPrompt || 'You are Grok, an AI assistant for LiveTheLifeTV. Your role is to help users understand Bitcoin-first investing, market analysis, and financial freedom. Be witty, insightful, and creative—channel the spirit of Satoshi Nakamoto. You have access to web search for current information when needed.';

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
                // Handle tool calls in streaming
                const toolCalls = chunk.choices?.[0]?.delta?.tool_calls;
                if (toolCalls) {
                  // For now, we'll handle tool calls in non-streaming mode
                  // This could be enhanced to stream tool call responses
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
          return new Response(
            'Sorry, I\'m having trouble with the streaming response. Please try again.',
            { 
              status: 500,
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            }
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
      return new Response(
        'Sorry, Grok4 or live web search is taking too long to respond. This sometimes happens for travel or open-ended queries. Please try again, rephrase your question, or ask for a general tip.',
        { 
          status: 504,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        }
      );
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
      
      // Provide context-aware fallback message based on the query
      if (message.toLowerCase().includes('price') || message.toLowerCase().includes('btc') || message.toLowerCase().includes('bitcoin')) {
        content = 'I\'m having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"';
      } else {
        content = 'I couldn\'t generate a proper response. Please try rephrasing your question.';
      }
    }
    stepEnd('total');
    logger.info('Step timings (ms):', stepTimings);
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (apiError) {
    stepEnd('total');
    logger.error('Grok4 API call failed:', apiError);
    logger.info('Step timings (ms):', stepTimings);
    return new Response(
      'Sorry, I\'m having trouble connecting to Grok4 right now. Please try again in a moment.',
      { 
        status: 500,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      }
    );
  }
} 