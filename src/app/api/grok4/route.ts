
import { Grok4Service, enhancedWebSearch, getXSentiment } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import type { ChatCompletion } from "openai/resources/chat/completions";
import { performance } from 'perf_hooks';

// Enhanced types for multi-modal support
type RequestBody = {
  message: string;
  systemPrompt?: string;
  temperature?: number;
  stream?: boolean;
  imageUrl?: string; // For vision capabilities
  generateImage?: boolean; // For image generation
  imagePrompt?: string; // For image generation prompts
};

type ImageGenerationRequest = {
  prompt: string;
  model?: string;
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
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

// Image generation handler
async function generateImageWithXAI(request: ImageGenerationRequest): Promise<string> {
  try {
    const response = await fetch('https://api.x.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: request.prompt,
        model: request.model || 'grok-2-image',
        n: 1,
        size: request.size || '1024x1024',
        quality: request.quality || 'standard',
        style: request.style || 'vivid',
      }),
    });

    if (!response.ok) {
      throw new Error(`Image generation failed: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.[0]?.url || '';
  } catch (error) {
    logger.error('Image generation error:', error);
    throw error;
  }
}

// Vision analysis handler
async function analyzeImage(imageUrl: string, query: string): Promise<string> {
  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-4',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: query },
              { type: 'image_url', image_url: { url: imageUrl } }
            ]
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Vision analysis failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } catch (error) {
    logger.error('Vision analysis error:', error);
    throw error;
  }
}

// Enhanced tool functions for Grok4
const ENHANCED_TOOLS: ChatCompletionTool[] = [
  {
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
  },
  {
    type: 'function',
    function: {
      name: 'get_crypto_price',
      description: 'Get real-time cryptocurrency prices from multiple sources. Use this for accurate, up-to-date price information.',
      parameters: {
        type: 'object',
        properties: {
          symbol: {
            type: 'string',
            description: 'The cryptocurrency symbol (e.g., BTC, ETH, SOL)'
          },
          currency: {
            type: 'string',
            description: 'The currency to display price in (default: USD)',
            default: 'USD'
          }
        },
        required: ['symbol']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_market_data',
      description: 'Get comprehensive market data including price, volume, market cap, and 24h change for cryptocurrencies.',
      parameters: {
        type: 'object',
        properties: {
          symbols: {
            type: 'array',
            items: { type: 'string' },
            description: 'Array of cryptocurrency symbols to get data for'
          }
        },
        required: ['symbols']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_x_sentiment',
      description: 'Analyze sentiment and key points from a specific X (Twitter) post. Use this to summarize the impact, narrative, and key takeaways from a tweet URL.',
      parameters: {
        type: 'object',
        properties: {
          tweetUrl: {
            type: 'string',
            description: 'The URL of the X (Twitter) post to analyze.'
          }
        },
        required: ['tweetUrl']
      }
    }
  }
];

// Conversation memory (in-memory for now, could be moved to Redis/database)
const conversationMemory = new Map<string, ChatCompletionMessageParam[]>();

// Get conversation history
function getConversationHistory(clientId: string): ChatCompletionMessageParam[] {
  return conversationMemory.get(clientId) || [];
}

// Add message to conversation history
function addToConversationHistory(clientId: string, message: ChatCompletionMessageParam) {
  const history = getConversationHistory(clientId);
  history.push(message);
  
  // Keep only last 10 messages to prevent context overflow
  if (history.length > 10) {
    history.splice(0, history.length - 10);
  }
  
  conversationMemory.set(clientId, history);
}

// Market data type for CoinGecko response
interface MarketData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  [key: string]: string | number | boolean | undefined;
}

// Enhanced crypto price fetching
async function getCryptoPrice(symbol: string, currency: string = 'USD'): Promise<number | null> {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=${currency.toLowerCase()}`);
    const data = await response.json();
    return data[symbol.toLowerCase()]?.[currency.toLowerCase()] ?? null;
  } catch (error) {
    logger.error('Crypto price fetch error:', error);
    return null;
  }
}

// Enhanced market data fetching
async function getMarketData(symbols: string[]): Promise<MarketData[] | null> {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${symbols.join(',')}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    const data = await response.json();
    return Array.isArray(data) ? data as MarketData[] : null;
  } catch (error) {
    logger.error('Market data fetch error:', error);
    return null;
  }
}

// Enhanced market data fetching for crypto stocks
async function getCryptoStocksData(): Promise<string> {
  try {
    // Updated based on codebase analysis - most tracked crypto stocks
    const cryptoStocks = [
      'MSTR', 'COIN', 'HOOD', 'CRCL', 'MARA', 'RIOT', 'PYPL', 'SQ', 
      'NVDA', 'TSLA', 'MSTY', 'STRF', 'STRK', 'BMNR', 'SBET', 'SQNS', 'MBAV'
    ];
    
    // Use Alpha Vantage for stock data since we have it configured
    const stockPromises = cryptoStocks.map(async (symbol) => {
      try {
        const response = await fetch(`/api/market-data?ticker=${symbol}`);
        if (!response.ok) return null;
        const data = await response.json();
        return { symbol, price: data.spotPrice };
      } catch {
        return null;
      }
    });

    const stockResults = await Promise.all(stockPromises);
    const validStocks = stockResults.filter(Boolean);

    if (validStocks.length === 0) {
      return 'Unable to fetch crypto stock data';
    }

    let result = 'Crypto-Related Stocks:\\n';
    
    validStocks.forEach((stock: any) => {
      if (stock) {
        result += `• ${stock.symbol}: $${stock.price?.toFixed(2) || 'N/A'}\\n`;
      }
    });

    return result;
      } catch {
      return 'Unable to fetch crypto stock data';
    }
}

// Enhanced altcoins data fetching
async function getAltcoinsData(): Promise<string> {
  try {
    // Updated based on codebase analysis - most tracked altcoins
    const altcoins = [
      'ethereum', 'solana', 'sui', 'aave', 'chainlink', 'uniswap', 
      'avalanche-2', 'polygon', 'cosmos', 'cardano', 'polkadot',
      'hyperliquid', 'berachain-bera', 'infrafred-bgt', 'blockstack',
      'dogecoin', 'pepe', 'mog-coin', 'bittensor', 'render-token',
      'fartcoin', 'railgun', 'ondo-finance', 'ethena'
    ];

    const idsParam = altcoins.join(',');
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`
    );

    if (!response.ok) {
      return 'Unable to fetch altcoins data';
    }

    const data = await response.json();
    let result = 'Top Altcoins (24h):\\n';

    // Sort by 24h change for most interesting performance
    const sortedAltcoins = Object.entries(data)
      .filter(([_, coinData]: [string, any]) => coinData && coinData.usd_24h_change !== undefined)
      .sort(([_, a]: [string, any], [__, b]: [string, any]) => Math.abs(b.usd_24h_change) - Math.abs(a.usd_24h_change))
      .slice(0, 12); // Top 12 by absolute change

    sortedAltcoins.forEach(([id, coinData]: [string, any]) => {
      const change = coinData.usd_24h_change;
      const emoji = change >= 0 ? '🟢' : '🔴';
      const symbol = id.toUpperCase();
      result += `${emoji} ${symbol}: ${change >= 0 ? '+' : ''}${change?.toFixed(2) || 'N/A'}%\\n`;
    });

    return result;
      } catch {
      return 'Unable to fetch altcoins data';
    }
}

// Enhanced GM handler with comprehensive market analysis
async function handleGMQuery(message: string, systemPrompt?: string, temperature?: number): Promise<string> {
  try {
    logger.info('Starting comprehensive GM market analysis');
    
    // Fetch all market data in parallel
    const [btcPrice, cryptoStocks, altcoins] = await Promise.all([
      getFastBTCPrice(),
      getCryptoStocksData(),
      getAltcoinsData()
    ]);
    
    // Build market data summary
    let marketSummary = `🌅 Good Morning! Here's your comprehensive market report:\n\n`;
    
    // Bitcoin section
    marketSummary += `💰 BITCOIN:\n`;
    marketSummary += `Current Price: $${btcPrice ? btcPrice.toLocaleString() : 'unavailable'}\n\n`;
    
    // Altcoins section
    marketSummary += `${altcoins}\n`;
    
    // Crypto stocks section
    marketSummary += `${cryptoStocks}\n`;
    
    // Add macro context
    marketSummary += `📊 MACRO CONTEXT:\n`;
    marketSummary += `- S&P 500 and Magnificent 7 performance\n`;
    marketSummary += `- Fed policy and interest rate expectations\n`;
    marketSummary += `- Institutional adoption trends\n`;
    marketSummary += `- Regulatory developments\n\n`;
    
    // Use Grok 4 to analyze X sentiment and provide insights
    const analysisPrompt = `Based on the current market data above, provide a concise analysis of:
1. Bitcoin sentiment and key narratives on X (Twitter)
2. Altcoin season indicators and emerging trends
3. Crypto stock performance and institutional flows
4. Macro factors affecting crypto markets
5. Key events to watch today

Keep it concise, actionable, and include specific X sentiment insights.`;

    try {
      const analysisResponse = await Grok4Service.chatCompletion({
        messages: [
          { 
            role: 'system', 
            content: systemPrompt || 'You are a crypto market analyst providing real-time insights combining technical data with X sentiment analysis. Be concise, actionable, and focus on key narratives.' 
          },
          { 
            role: 'user', 
            content: `${marketSummary}\n\n${analysisPrompt}` 
          }
        ],
        temperature: temperature || 0.7,
        max_tokens: 400,
      });
      
      const analysis = analysisResponse.choices?.[0]?.message?.content || '';
      
      return `${marketSummary}${analysis}`;
      
    } catch (analysisError) {
      logger.error('GM analysis error:', analysisError);
      return `${marketSummary}Note: Sentiment analysis temporarily unavailable. Check X for latest crypto narratives.`;
    }
    
  } catch (error) {
    logger.error('GM handler error:', error);
    return 'Good morning! Having trouble fetching market data. Check CoinGecko for live prices.';
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

// --- Prompt Engineering Guide for Grok 4 + X Data ---
// Example system prompt for best results:
const DEFAULT_SYSTEM_PROMPT = `You are a crypto trading expert with a witty, concise style, pulling insights from real-time X (Twitter) data and technical indicators. Always:
- Analyze sentiment and trends from X posts, especially from high-profile accounts (e.g., Whale Alert, Michael Saylor)
- Detect emerging tokens, memecoins, and macro events
- Combine X sentiment with technical analysis (RSI, MACD, etc.)
- Provide actionable, context-rich, and concise responses
- Use the latest X data for all crypto and Bitcoin queries
- For GM queries: Focus on Bitcoin sentiment, altcoin season indicators, crypto stock performance, and macro factors
- Include specific X narratives and key events to watch
`;

// Helper to build Grok 4 prompt with Human/Assistant format and context-rich instructions
function buildGrok4Prompt(history: ChatCompletionMessageParam[], userMessage: string): string {
  // Only include user/assistant turns (ignore system/tool)
  const turns = history.filter(
    m => m.role === 'user' || m.role === 'assistant'
  ) as { role: 'user' | 'assistant'; content: string }[];
  let prompt = '';
  for (const turn of turns) {
    prompt += `${turn.role === 'user' ? 'Human' : 'Assistant'}: ${turn.content.trim()}
`;
  }
  // Example: If userMessage is about X sentiment, make it explicit
  // (You can add more logic here to auto-augment prompts for common use cases)
  // e.g., if (userMessage.toLowerCase().includes('sentiment')) { ... }
  prompt += `Human: ${userMessage.trim()}
Assistant:`;
  return prompt;
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
    const { message, systemPrompt, temperature, stream, imageUrl, generateImage, imagePrompt } = await validateRequest(request);

    // Log request details for monitoring
    logger.info('Request details:', {
      clientId,
      messageLength: message.length,
      hasStream: stream,
      temperature,
      timestamp: new Date().toISOString()
    });

    // Handle image generation requests
    if (generateImage && imagePrompt) {
      logger.info('Image generation requested:', imagePrompt);
      try {
        const generatedImageUrl = await generateImageWithXAI({
          prompt: imagePrompt,
          model: 'grok-2-image',
          size: '1024x1024',
          quality: 'standard',
          style: 'vivid'
        });
        
        tracker.end('total');
        tracker.logTimings();
        
        logger.info('Image generation completed:', {
          duration: Date.now() - startTime,
          imageUrl: generatedImageUrl.substring(0, 100) + '...'
        });
        
        return createSuccessResponse(`Generated image: ${generatedImageUrl}`);
      } catch (error) {
        logger.error('Image generation failed:', error);
        return createErrorResponse('Failed to generate image. Please try again.');
      }
    }

    // Handle vision analysis requests
    if (imageUrl) {
      logger.info('Vision analysis requested:', { imageUrl: imageUrl.substring(0, 100) + '...', query: message });
      try {
        const analysis = await analyzeImage(imageUrl, message);
        
        tracker.end('total');
        tracker.logTimings();
        
        logger.info('Vision analysis completed:', {
          duration: Date.now() - startTime,
          analysisLength: analysis.length
        });
        
        return createSuccessResponse(analysis);
      } catch (error) {
        logger.error('Vision analysis failed:', error);
        return createErrorResponse('Failed to analyze image. Please try again.');
      }
    }

    // Handle GM queries with comprehensive market analysis
    if (isGMQuery(message)) {
      logger.info('Comprehensive GM market analysis requested:', message);
      const response = await handleGMQuery(message, systemPrompt, temperature);
      tracker.end('total');
      tracker.logTimings();
      
      // Log successful response
      logger.info('Comprehensive GM analysis completed:', {
        duration: Date.now() - startTime,
        responseLength: response.length
      });
      
      return createSuccessResponse(response);
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
    const enhancedSystemPrompt = systemPrompt || DEFAULT_SYSTEM_PROMPT;

    logger.info('Grok4 SYSTEM PROMPT:', enhancedSystemPrompt);
    logger.info('Grok4 USER MESSAGE:', message);

    // Prepare tools with enhanced capabilities
    const tools: ChatCompletionTool[] = [];
    if (needsWebSearch(message)) {
      tools.push(...ENHANCED_TOOLS);
    }

    // Prepare messages with conversation context and history
    const conversationHistory = getConversationHistory(clientId);
    // const messages: ChatCompletionMessageParam[] = [
    //   { role: 'system', content: enhancedSystemPrompt },
    //   ...conversationHistory,
    //   { role: 'user', content: message }
    // ];
    // Add current message to conversation history
    addToConversationHistory(clientId, { role: 'user', content: message });

    // Build Grok 4 prompt string
    const grok4Prompt = buildGrok4Prompt(conversationHistory, message);

    // Handle streaming
    if (stream) {
      return await handleStreamingResponse(tools, temperature, tracker, clientId, enhancedSystemPrompt, grok4Prompt);
    }

    // Handle non-streaming
    return await handleNonStreamingResponse(tools, temperature, tracker, clientId, enhancedSystemPrompt, grok4Prompt);
    
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
  tools: ChatCompletionTool[],
  temperature: number | undefined,
  tracker: PerformanceTracker,
  clientId: string,
  enhancedSystemPrompt: string,
  grok4Prompt: string
): Promise<Response> {
  try {
    tracker.start('streaming');
        const OpenAI = (await import('openai')).default;
        const completionStream = await new OpenAI({
          apiKey: process.env.XAI_API_KEY,
          baseURL: 'https://api.x.ai/v1',
        }).chat.completions.create({
          model: 'grok-4',
          messages: [
            { role: 'system', content: enhancedSystemPrompt },
            { role: 'user', content: grok4Prompt }
          ],
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

                if (toolCallFunction && toolCallArguments) {
                  let toolResult = '';
                  if (toolCallFunction === 'search') {
                    const { query } = JSON.parse(toolCallArguments);
                    toolResult = await enhancedWebSearch(query);
                  } else if (toolCallFunction === 'get_crypto_price') {
                    const { symbol, currency = 'USD' } = JSON.parse(toolCallArguments);
                    const price = await getCryptoPrice(symbol, currency);
                    toolResult = price ? `${symbol.toUpperCase()}: $${price} ${currency}` : `Unable to get price for ${symbol}`;
                  } else if (toolCallFunction === 'get_market_data') {
                    const { symbols } = JSON.parse(toolCallArguments);
                    const marketData = await getMarketData(symbols);
                    toolResult = marketData ? JSON.stringify(marketData, null, 2) : `Unable to get market data for ${symbols.join(', ')}`;
                  } else if (toolCallFunction === 'get_x_sentiment') {
                    const { tweetUrl } = JSON.parse(toolCallArguments);
                    toolResult = await getXSentiment(tweetUrl);
                  }
                  // Push tool response message
                  const toolResponseMsg: ChatCompletionMessageParam = {
                    role: 'tool',
                    tool_call_id: toolCallId,
                    content: toolResult,
                  };
                  // Add to conversation and call model again
                  const updatedMessages: ChatCompletionMessageParam[] = [
                    { role: 'system', content: enhancedSystemPrompt },
                    { role: 'user', content: grok4Prompt },
                    toolResponseMsg
                  ];
                  const finalCompletion = await Grok4Service.chatCompletion({
                    messages: updatedMessages,
                    temperature: temperature || 0.7,
                    max_tokens: 600,
                  });
                  const finalContent = finalCompletion.choices?.[0]?.message?.content;
                  if (finalContent) {
                    controller.enqueue(encoder.encode(finalContent));
                    contentLength += finalContent.length;
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
  tools: ChatCompletionTool[],
  temperature: number | undefined,
  tracker: PerformanceTracker,
  clientId: string,
  enhancedSystemPrompt: string,
  grok4Prompt: string
): Promise<Response> {
  tracker.start('grok4_api');
  let completion;
  let content: string | undefined;
  let toolCallCount = 0;

  try {
    completion = await Promise.race([
      Grok4Service.chatCompletion({
        messages: [
          { role: 'system', content: enhancedSystemPrompt },
          { role: 'user', content: grok4Prompt }
        ],
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
  if (tools.length > 0) {
    while (true) {
      const toolCall = Grok4Service.extractToolCall(completion);
      if (!toolCall || !toolCall.function?.name) break;
      toolCallCount++;
      if (toolCallCount > 3) {
        logger.warn('Too many tool calls, stopping to prevent infinite loops');
        break;
      }
      try {
        const toolCallId = toolCall.id;
        const toolCallFunction = toolCall.function.name;
        const toolCallArguments = toolCall.function.arguments;
        let toolResult = '';
        if (toolCallFunction === 'search') {
          const { query } = JSON.parse(toolCallArguments);
          toolResult = await enhancedWebSearch(query);
        } else if (toolCallFunction === 'get_crypto_price') {
          const { symbol, currency = 'USD' } = JSON.parse(toolCallArguments);
          const price = await getCryptoPrice(symbol, currency);
          toolResult = price ? `${symbol.toUpperCase()}: $${price} ${currency}` : `Unable to get price for ${symbol}`;
        } else if (toolCallFunction === 'get_market_data') {
          const { symbols } = JSON.parse(toolCallArguments);
          const marketData = await getMarketData(symbols);
          toolResult = marketData ? JSON.stringify(marketData, null, 2) : `Unable to get market data for ${symbols.join(', ')}`;
        } else if (toolCallFunction === 'get_x_sentiment') {
          const { tweetUrl } = JSON.parse(toolCallArguments);
          toolResult = await getXSentiment(tweetUrl);
        } else {
          toolResult = `Unknown tool: ${toolCallFunction}`;
        }
        // Push tool response message
        const toolResponseMsg: ChatCompletionMessageParam = {
          role: 'tool',
          tool_call_id: toolCallId,
          content: toolResult,
        };
        const updatedMessages: ChatCompletionMessageParam[] = [
          { role: 'system', content: enhancedSystemPrompt },
          { role: 'user', content: grok4Prompt },
          toolResponseMsg
        ];
        completion = await Promise.race([
          Grok4Service.chatCompletion({
            messages: updatedMessages,
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
  content = (completion.choices?.[0]?.message?.content ?? undefined);

  // Add detailed logging to debug the empty response
  logger.info('Grok4 completion object:', JSON.stringify(completion, null, 2));
  logger.info('Grok4 content field:', content);
  logger.info('Grok4 content type:', typeof content);
  logger.info('Grok4 content length:', content?.length);
  logger.info('Tool calls made:', toolCallCount);

  // Improved empty content handling with specific fallback messages
  if (!content || !content.trim()) {
    logger.error('Grok4 returned empty content. Full response:', JSON.stringify(completion, null, 2));
    // Use the last user message for context
    if (grok4Prompt.toLowerCase().includes('price') || grok4Prompt.toLowerCase().includes('btc') || grok4Prompt.toLowerCase().includes('bitcoin')) {
      content = 'I\'m having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"';
    } else {
      content = 'I couldn\'t generate a proper response. Please try rephrasing your question.';
    }
  }

  tracker.end('total');
  tracker.logTimings();

  // Add assistant response to conversation history
  if (content) {
    addToConversationHistory(clientId, { role: 'assistant', content });
  }

  // Log successful completion
  logger.info('Non-streaming response completed:', {
    contentLength: content?.length || 0,
    toolCalls: toolCallCount,
    hasTools: tools.length > 0
  });

  return createSuccessResponse(content);
} 