
import { Grok4Service, enhancedWebSearch, getXSentiment } from './grok4';
import { logger } from '@/lib/logger';
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import type { ChatCompletion } from "openai/resources/chat/completions";
import { performance } from 'perf_hooks';

// Configure API route timeout for Grok4 API calls
export const maxDuration = 60; // 60 seconds timeout

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

// Enhanced tool functions for Grok 4 based on GROK420.md documentation
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
      description: 'Get real-time cryptocurrency prices from multiple sources. Use this for accurate, up-to-date price information for the most tracked assets: BTC, ETH, SOL, AAVE, MKR, UNI, etc.',
      parameters: {
        type: 'object',
        properties: {
          symbol: {
            type: 'string',
            description: 'The cryptocurrency symbol (e.g., BTC, ETH, SOL, AAVE, MKR, UNI)'
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
      description: 'Get comprehensive market data including price, volume, market cap, and 24h change for cryptocurrencies. Focus on the most tracked assets from the curated list.',
      parameters: {
        type: 'object',
        properties: {
          symbols: {
            type: 'array',
            items: { type: 'string' },
            description: 'Array of cryptocurrency symbols to get data for (e.g., ["BTC", "ETH", "SOL"])'
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
      description: 'Analyze sentiment and key points from a specific X (Twitter) post. Use this to summarize the impact, narrative, and key takeaways from a tweet URL. Essential for market sentiment analysis.',
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
  },
  {
    type: 'function',
    function: {
      name: 'get_stock_price',
      description: 'Get real-time stock and crypto stock prices via Yahoo Finance. Track the most important crypto-related stocks: MSTR, COIN, HOOD, MARA, RIOT, NVDA, TSLA, etc.',
      parameters: {
        type: 'object',
        properties: {
          symbol: {
            type: 'string',
            description: 'The stock symbol (e.g., MSTR, COIN, HOOD, MARA, RIOT, NVDA, TSLA)'
          }
        },
        required: ['symbol']
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
// Enhanced system prompt focused on X sentiment analysis
const DEFAULT_SYSTEM_PROMPT = `You are a crypto market intelligence expert specializing in X (Twitter) sentiment analysis. Your role is to:

**🎯 CORE FOCUS:**
- Analyze thoughts, ideas, and opinions from X about Bitcoin, altcoins, and crypto stocks
- Identify key narratives, sentiment shifts, and emerging trends
- Provide actionable insights based on social sentiment

**📊 SENTIMENT ANALYSIS FRAMEWORK:**
- **Bitcoin**: Institutional adoption, ETF flows, halving impact, regulatory sentiment
- **Altcoins**: Memecoin vs DeFi sentiment, Layer 1 vs Layer 2 discussions, airdrop narratives
- **Crypto Stocks**: MSTR accumulation strategy, COIN exchange performance, HOOD retail sentiment
- **Macro**: Fed policy impact, inflation concerns, election effects on crypto

**🔍 KEY INFLUENCERS TO MONITOR:**
- Bitcoin maximalists and institutional voices
- DeFi protocol founders and developers
- Crypto exchange CEOs and executives
- Memecoin creators and community leaders
- Traditional finance commentators on crypto

**💡 ANALYSIS APPROACH:**
- Identify sentiment drivers and narrative shifts
- Highlight controversial opinions and debates
- Track viral tweets and emerging trends
- Connect social sentiment to price action
- Provide context for market movements

**🎪 FOR GM QUERIES:**
- Comprehensive X sentiment analysis for all tracked assets
- Focus on thoughts, ideas, and opinions driving market sentiment
- Identify key narratives and emerging trends
- Provide actionable insights based on social intelligence
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

// --- Fetch with Timeout Helper ---
async function fetchWithTimeout(resource: RequestInfo, options: RequestInit = {}, timeout = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(id);
  }
}

// Bitcoin network data interface
interface BitcoinNetworkData {
  hashRate?: number;
  difficulty?: number;
  blockHeight?: number;
  mempoolSize?: number;
}

// CoinGecko API response interface
interface CoinGeckoCoin {
  usd?: number;
  usd_24h_change?: number;
  usd_market_cap?: number;
  usd_24h_vol?: number;
}

// Bitcoin network data fetching
async function _getBitcoinNetworkData(): Promise<BitcoinNetworkData | null> {
  try {
    const response = await fetchWithTimeout('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false', {}, 5000);
    if (!response.ok) return null;
    const data = await response.json();
    return {
      hashRate: data.market_data?.hash_rate_24h,
      difficulty: data.market_data?.difficulty,
      blockHeight: data.block_time_in_minutes,
      mempoolSize: data.community_data?.reddit_subscribers
    };
  } catch {
    return null;
  }
}

// Enhanced altcoins data with curated list from GROK420.md
enum AltcoinId {
  Bitcoin = 'bitcoin',
  Ethereum = 'ethereum',
  Solana = 'solana',
  Sui = 'sui',
  Aave = 'aave',
  Maker = 'maker',
  Uniswap = 'uniswap',
  Pendle = 'pendle',
  Liquity = 'liquity',
  Syrup = 'syrup',
  Eigenlayer = 'eigenlayer',
  Chainlink = 'chainlink',
  Hyperliquid = 'hyperliquid',
  Blockstack = 'blockstack',
  Injective = 'injective-protocol',
  Sei = 'sei-network',
  Dogecoin = 'dogecoin',
  Pepe = 'pepe',
  Mog = 'mog-coin',
  Wif = 'dogwifcoin',
  Rekt = 'rekt-4',
  Spx6900 = 'spx6900',
  Fart = 'fartcoin',
  Tao = 'bittensor',
  Rndr = 'render-token',
  Rail = 'railgun',
  Ondo = 'ondo-finance',
  USDe = 'ethena'
}

async function getAltcoinsData(): Promise<string> {
  try {
    const altcoins = Object.values(AltcoinId);
    const idsParam = altcoins.join(',');
    const response = await fetchWithTimeout(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`,
      {},
      5000
    );
    if (!response.ok) {
      return '_Unable to fetch altcoins data_';
    }
    const data: Record<string, CoinGeckoCoin> = await response.json();
    // Sort by 24h change (descending)
    const sortedAltcoins = Object.entries(data)
      .filter(([_, coinData]) => coinData && typeof coinData.usd_24h_change === 'number')
      .sort(([, a], [, b]) => (b.usd_24h_change || 0) - (a.usd_24h_change || 0))
      .slice(0, 15);
    const symbolMap: { [key: string]: string } = {
      'bitcoin': 'BTC', 'ethereum': 'ETH', 'solana': 'SOL', 'sui': 'SUI',
      'aave': 'AAVE', 'maker': 'MKR', 'uniswap': 'UNI', 'pendle': 'PENDLE',
      'liquity': 'LQTY', 'syrup': 'SYRUP', 'eigenlayer': 'EIGEN', 'chainlink': 'LINK',
      'hyperliquid': 'HYPER', 'blockstack': 'STX', 'injective-protocol': 'INJ', 'sei-network': 'SEI',
      'dogecoin': 'DOGE', 'pepe': 'PEPE', 'mog-coin': 'MOG', 'dogwifcoin': 'WIF',
      'rekt-4': 'REKT', 'spx6900': 'SPX6900', 'fartcoin': 'FART',
      'bittensor': 'TAO', 'render-token': 'RNDR', 'railgun': 'RAIL',
      'ondo-finance': 'ONDO', 'ethena': 'USDe'
    };
    let table = '| Symbol | 24h Change | Market Cap |\n|--------|------------|------------|\n';
    sortedAltcoins.forEach(([id, coinData]) => {
      const change = coinData.usd_24h_change || 0;
      const emoji = change >= 0 ? '🟢' : '🔴';
      const symbol = symbolMap[id] || id.toUpperCase();
      const marketCap = coinData.usd_market_cap ? 
        new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(coinData.usd_market_cap) : 'N/A';
      table += `| ${emoji} ${symbol} | ${change >= 0 ? '+' : ''}${change.toFixed(2)}% | $${marketCap} |\n`;
    });
    return `**🪙 Top Altcoins (24h):**\n${table}`;
  } catch {
    return '_Unable to fetch altcoins data_';
  }
}

// Enhanced crypto stocks data with Yahoo Finance


async function _getCryptoStocksData(): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured');
      return '**📈 Crypto Stocks:**\n_Unable to fetch stock data - API key not configured_';
    }

    // Focus on the most important crypto stocks
    const stocks = [
      'MSTR', 'COIN', 'HOOD', 'MARA', 'RIOT', 'NVDA', 'TSLA'
    ];
    
    logger.info('Fetching crypto stocks data for symbols:', stocks);
    
    // Fetch each stock individually (Finnhub free tier limitation)
    const stockPromises = stocks.map(async (symbol) => {
      try {
        const response = await fetchWithTimeout(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
          {},
          3000 // 3 second timeout per stock
        );
        
        if (!response.ok) {
          logger.warn(`Finnhub API error for ${symbol}:`, response.status, response.statusText);
          return null;
        }
        
        const data = await response.json();
        
        // Validate Finnhub response structure
        if (!data || typeof data.c !== 'number' || typeof data.dp !== 'number') {
          logger.warn(`Invalid Finnhub data for ${symbol}:`, data);
          return null;
        }
        
        return {
          symbol,
          currentPrice: data.c,
          previousClose: data.pc,
          change: data.d,
          changePercent: data.dp,
          high: data.h,
          low: data.l,
          open: data.o
        };
      } catch (error) {
        logger.warn(`Error fetching ${symbol} from Finnhub:`, error);
        return null;
      }
    });
    
    const results = await Promise.allSettled(stockPromises);
    const validStocks = results
      .filter((result): result is PromiseFulfilledResult<CryptoStockQuote> => 
        result.status === 'fulfilled' && result.value !== null
      )
      .map(result => result.value)
      .sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
      .slice(0, 10);
    
    if (validStocks.length === 0) {
      logger.warn('No valid stock quotes found from Finnhub');
      return '**📈 Crypto Stocks:**\n_Unable to fetch stock data_';
    }
    
    let table = '| Symbol | Price | 24h Change |\n|--------|-------|------------|\n';
    validStocks.forEach((stock) => {
      const emoji = stock.changePercent >= 0 ? '🟢' : '🔴';
      const price = stock.currentPrice.toFixed(2);
      const changePercent = stock.changePercent >= 0 ? 
        `+${stock.changePercent.toFixed(2)}%` : 
        `${stock.changePercent.toFixed(2)}%`;
      
      table += `| ${emoji} ${stock.symbol} | $${price} | ${changePercent} |\n`;
    });
    
    logger.info('Crypto stocks data successfully fetched from Finnhub:', {
      stockCount: validStocks.length,
      symbols: validStocks.map(s => s.symbol)
    });
    
    return `**📈 Crypto Stocks:**\n${table}`;
  } catch (error) {
    logger.error('Error fetching crypto stocks data from Finnhub:', error);
    return '**📈 Crypto Stocks:**\n_Unable to fetch stock data_';
  }
}

// Macro market data interface
interface MacroMarketData {
  sp500?: string;
  mag7?: string;
  fearGreed?: string;
}

// Add explicit interfaces for stock results
interface CryptoStockQuote {
  symbol: string;
  currentPrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  open: number;
}

interface MacroStockQuote {
  symbol: string;
  currentPrice: number;
  changePercent: number;
}
// Macro market data using Finnhub
async function _getMacroMarketData(): Promise<MacroMarketData | null> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for macro data');
      return null;
    }

    // Fetch S&P 500 and Magnificent 7 stocks individually
    const symbols = ['SPY', 'MSFT', 'AAPL', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'AVGO'];
    
    const stockPromises = symbols.map(async (symbol) => {
      try {
        const response = await fetchWithTimeout(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
          {},
          3000
        );
        
        if (!response.ok) {
          logger.warn(`Finnhub macro API error for ${symbol}:`, response.status);
          return null;
        }
        
        const data = await response.json();
        
        if (!data || typeof data.c !== 'number' || typeof data.dp !== 'number') {
          logger.warn(`Invalid Finnhub macro data for ${symbol}:`, data);
          return null;
        }
        
        return {
          symbol,
          currentPrice: data.c,
          changePercent: data.dp
        };
      } catch (error) {
        logger.warn(`Error fetching ${symbol} macro data from Finnhub:`, error);
        return null;
      }
    });
    
    const results = await Promise.allSettled(stockPromises);
    const validStocks = results
      .filter((result): result is PromiseFulfilledResult<MacroStockQuote> => 
        result.status === 'fulfilled' && result.value !== null
      )
      .map(result => result.value);
    
    const sp500 = validStocks.find(s => s.symbol === 'SPY');
    const mag7Stocks = validStocks.filter(s => s.symbol !== 'SPY');
    const mag7Avg = mag7Stocks.length > 0 ? 
      mag7Stocks.reduce((sum, stock) => sum + stock.changePercent, 0) / mag7Stocks.length : 0;
    
    return {
      sp500: sp500 ? `${sp500.currentPrice.toFixed(2)} (${sp500.changePercent >= 0 ? '+' : ''}${sp500.changePercent.toFixed(2)}%)` : 'N/A',
      mag7: `${mag7Avg >= 0 ? '+' : ''}${mag7Avg.toFixed(2)}%`,
      fearGreed: 'N/A'
    };
  } catch (error) {
    logger.error('Error fetching macro market data from Finnhub:', error);
    return null;
  }
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

    // Handle GM queries - Market data + X sentiment analysis
    if (isGMQuery(message)) {
      logger.info('GM market data + X sentiment analysis requested:', message);
      try {
        // Fetch market data first (fast APIs)
        logger.info('Fetching market data for GM...');
        const fetchStart = Date.now();
        
        // Fetch essential market data in parallel
        const [btcPrice, altcoins, cryptoStocks] = await Promise.all([
          getFastBTCPrice(),
          getAltcoinsData(),
          _getCryptoStocksData()
        ]);
        
        logger.info('Market data fetched in', Date.now() - fetchStart, 'ms');
        
        // Generate dynamic GM greeting
        const gmGreetings = [
          "🌅 **GOOD MORNING CRYPTO MARKETS**",
          "🌞 **RISE AND GRIND, DEGENS**",
          "🚀 **WAKE UP, IT'S MOON TIME**",
          "⚡ **MORNING VOLTAGE: CRYPTO MARKETS LIVE**",
          "🔥 **GOOD MORNING, BULLS**",
          "💎 **DIAMOND HANDS MORNING REPORT**",
          "🌊 **TIDAL WAVES OF CRYPTO MARKETS**",
          "⚔️ **BATTLE STATIONS: MARKET UPDATE**",
          "🎯 **PRECISION STRIKE: CRYPTO MORNING**",
          "🌪️ **WHIRLWIND OF OPPORTUNITY**",
          "🏆 **CHAMPIONS OF CRYPTO MARKETS**",
          "🎪 **CIRCUS MAXIMUS: CRYPTO EDITION**",
          "⚡ **LIGHTNING ROUND: MARKET PULSE**",
          "🌋 **VOLCANIC CRYPTO MORNING**",
          "🎭 **THEATER OF CRYPTO MARKETS**",
          "🦅 **EAGLE EYE: MARKET OVERVIEW**",
          "🎪 **CARNIVAL OF CRYPTO MARKETS**",
          "⚡ **ENERGY SURGE: CRYPTO MORNING**",
          "🌊 **TSUNAMI OF CRYPTO MARKETS**",
          "🎯 **BULLSEYE: MARKET FOCUS**"
        ];
        
        const randomGreeting = gmGreetings[Math.floor(Math.random() * gmGreetings.length)];
        let marketSummary = `${randomGreeting}\n\n`;
        
        // Bitcoin section
        marketSummary += `**💰 BITCOIN**\n`;
        marketSummary += `- **Current Price:** $${btcPrice ? btcPrice.toLocaleString() : 'unavailable'}\n`;
        marketSummary += `\n`;
        
        // Altcoins section
        marketSummary += altcoins || '_Unable to fetch altcoin data_\n\n';
        
        // Crypto stocks section
        marketSummary += `\n`;
        marketSummary += cryptoStocks || '_Unable to fetch stock data_\n\n';
        
        // Enhanced X sentiment analysis prompt with specific asset focus
        const xSentimentPrompt = `Write a single, concise paragraph summarizing today’s hottest crypto news, memes, and sentiment as seen on X. Focus on the most important narratives, price action, and viral stories for BTC, ETH, top altcoins, and crypto stocks. Make it sound like a social media recap, not a list. Mention at least one X meme, thread, or influencer per asset if possible. If nothing is trending, say so, but always provide a narrative summary.`;

        // Try Grok4 for X sentiment analysis with timeout
        
        // Start Grok4 call in background with very aggressive timeout
        const grok4Timeout = 8000; // 8 second timeout
        const enhancedSystemPrompt = systemPrompt || DEFAULT_SYSTEM_PROMPT;
        addToConversationHistory(clientId, { role: 'user', content: message });
        
        // Try Grok4 for X sentiment analysis with timeout
        let xSentimentAnalysis = '';
        try {
          const grok4Response = await Promise.race([
            Grok4Service.chatCompletion({
              messages: [
                { role: 'system', content: enhancedSystemPrompt },
                { role: 'user', content: xSentimentPrompt }
              ],
              temperature: temperature || 0.7,
              tools: ENHANCED_TOOLS,
              tool_choice: 'auto',
              max_tokens: 2000,
            }),
            new Promise<never>((_, reject) => 
              setTimeout(() => reject(new Error('Grok4 X sentiment timeout')), grok4Timeout)
            )
          ]);
          logger.info('Raw Grok4 X sentiment output:', grok4Response);
          
          xSentimentAnalysis = grok4Response.choices?.[0]?.message?.content || '';
          logger.info('Grok4 X sentiment analysis completed successfully');
        } catch (error) {
          logger.warn('Grok4 X sentiment analysis failed:', error);
          // Generate fallback X sentiment summary based on market data
          const btcChange = typeof btcPrice === 'number' ? btcPrice : null;
          let altcoinSummary = '';
          let stockSummary = '';

          // Parse altcoins table for top movers
          let altcoinMovers: string[] = [];
          if (altcoins) {
            const altcoinLines = altcoins.split('\n').filter(l => l.includes('|'));
            altcoinMovers = altcoinLines.slice(2, 7).map(line => {
              const parts = line.split('|').map(s => s.trim());
              return parts[1] ? `${parts[1]} (${parts[2]})` : null;
            }).filter(Boolean) as string[];
            if (altcoinMovers.length) {
              altcoinSummary = `Memecoins and top altcoins like ${altcoinMovers.join(', ')} are leading the charge.`;
            }
          }

          // Parse crypto stocks table for top movers
          let stockMovers: string[] = [];
          if (cryptoStocks) {
            const stockLines = cryptoStocks.split('\n').filter(l => l.includes('|'));
            stockMovers = stockLines.slice(2, 7).map(line => {
              const parts = line.split('|').map(s => s.trim());
              return parts[1] ? `${parts[1]} (${parts[2]})` : null;
            }).filter(Boolean) as string[];
            if (stockMovers.length) {
              stockSummary = `Crypto stocks in focus include ${stockMovers.join(', ')}.`;
            }
          }

          // Compose a narrative-style paragraph
          const btcSentence = btcChange !== null ? `Bitcoin is trading at $${btcChange.toLocaleString()} and remains the center of attention on X.` : '';
          const altcoinSentence = altcoinSummary;
          const stockSentence = stockSummary;
          const hypeSentence = `Socials are hyped about ETF inflows, record AUM, and the latest airdrops and regulatory news.`;

          xSentimentAnalysis = [btcSentence, altcoinSentence, stockSentence, hypeSentence]
            .filter(Boolean)
            .join(' ');
        }
        
        // Combine market data with X sentiment analysis
        const fullResponse = `${marketSummary}\n\n**🤖 X SENTIMENT ANALYSIS**\n\n${xSentimentAnalysis}`;
        
        // Return combined response
        tracker.end('total');
        tracker.logTimings();
        
        logger.info('GM full response completed:', {
          duration: Date.now() - startTime,
          responseLength: fullResponse.length,
          hasXSentiment: xSentimentAnalysis.length > 0
        });
        
        return new Response(
          new ReadableStream({
            start(controller) {
              controller.enqueue(new TextEncoder().encode(`data: ${fullResponse}\n\n`));
              controller.close();
            }
          }),
          {
            headers: {
              'Content-Type': 'text/plain; charset=utf-8',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
            },
          }
        );
      } catch (error) {
        logger.error('GM handler error:', error);
        return createErrorResponse('Good morning! Having trouble fetching market data. Check CoinGecko for live prices.');
      }
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
        
        // Add timeout to Grok4 API call
        const grok4Timeout = 15000; // 15 second timeout (increased from 5s)
        const grok4Promise = new OpenAI({
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
        max_tokens: 2000,
        });
        
        const completionStream = await Promise.race([
          grok4Promise,
          new Promise<never>((_, reject) => 
            setTimeout(() => reject(new Error('Grok4 API timeout')), grok4Timeout)
          )
        ]);

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
                    const { symbol } = JSON.parse(toolCallArguments);
                    // const price = await getCryptoPrice(symbol, currency); // Commented out
                    toolResult = `Unable to get price for ${symbol}`; // Commented out
                  } else if (toolCallFunction === 'get_market_data') {
                    const { symbols } = JSON.parse(toolCallArguments);
                    // const marketData = await getMarketData(symbols); // Commented out
                    toolResult = `Unable to get market data for ${symbols.join(', ')}`; // Commented out
                  } else if (toolCallFunction === 'get_x_sentiment') {
                    const { tweetUrl } = JSON.parse(toolCallArguments);
                    toolResult = await getXSentiment(tweetUrl);
                  } else if (toolCallFunction === 'get_stock_price') {
                    const { symbol } = JSON.parse(toolCallArguments);
                    try {
                      const response = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`);
                      if (response.ok) {
                        const data = await response.json();
                        const quote = data?.quoteResponse?.result?.[0];
                        if (quote) {
                          const price = quote.regularMarketPrice;
                          const change = quote.regularMarketChangePercent;
                          const marketCap = quote.marketCap;
                          toolResult = `${symbol} Stock Data:
💰 Price: $${price?.toFixed(2) || 'N/A'}
${change >= 0 ? '🟢' : '🔴'} 24h Change: ${change >= 0 ? '+' : ''}${change?.toFixed(2) || 'N/A'}%
📊 Market Cap: $${marketCap ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(marketCap) : 'N/A'}
⏰ Updated: ${new Date().toLocaleString()}`;
                        } else {
                          toolResult = `No data found for ${symbol}`;
                        }
                      } else {
                        toolResult = `Failed to fetch data for ${symbol}`;
                      }
                    } catch (error) {
                      toolResult = `Error fetching stock data for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
                    }
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
                    max_tokens: 2000,
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
        max_tokens: 2000,
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Grok4 API timeout')), 15000)
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
          const { symbol } = JSON.parse(toolCallArguments);
          // const price = await getCryptoPrice(symbol, currency); // Commented out
          toolResult = `Unable to get price for ${symbol}`; // Commented out
        } else if (toolCallFunction === 'get_market_data') {
          const { symbols } = JSON.parse(toolCallArguments);
          // const marketData = await getMarketData(symbols); // Commented out
          toolResult = `Unable to get market data for ${symbols.join(', ')}`; // Commented out
        } else if (toolCallFunction === 'get_x_sentiment') {
          const { tweetUrl } = JSON.parse(toolCallArguments);
          toolResult = await getXSentiment(tweetUrl);
        } else if (toolCallFunction === 'get_stock_price') {
          const { symbol } = JSON.parse(toolCallArguments);
          try {
            const response = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`);
            if (response.ok) {
              const data = await response.json();
              const quote = data?.quoteResponse?.result?.[0];
              if (quote) {
                const price = quote.regularMarketPrice;
                const change = quote.regularMarketChangePercent;
                const marketCap = quote.marketCap;
                toolResult = `${symbol} Stock Data:
💰 Price: $${price?.toFixed(2) || 'N/A'}
${change >= 0 ? '🟢' : '🔴'} 24h Change: ${change >= 0 ? '+' : ''}${change?.toFixed(2) || 'N/A'}%
📊 Market Cap: $${marketCap ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(marketCap) : 'N/A'}
⏰ Updated: ${new Date().toLocaleString()}`;
              } else {
                toolResult = `No data found for ${symbol}`;
              }
            } else {
              toolResult = `Failed to fetch data for ${symbol}`;
            }
          } catch (error) {
            toolResult = `Error fetching stock data for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
          }
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
            max_tokens: 2000,
          }),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('Grok4 API timeout')), 15000)
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
    // Fallback: Try a direct Grok4 completion with a special prompt
    try {
      const fallbackPrompt = `${grok4Prompt}\n\nIf you can't access live data, give your best witty, helpful answer anyway.`;
      const fallbackCompletion = await Grok4Service.chatCompletion({
        messages: [
          { role: 'system', content: enhancedSystemPrompt },
          { role: 'user', content: fallbackPrompt }
        ],
        temperature: temperature || 0.7,
        max_tokens: 2000,
      });
      content = fallbackCompletion.choices?.[0]?.message?.content || '';
    } catch (fallbackError) {
      logger.error('Grok4 fallback completion error:', fallbackError);
      content = 'I couldn\'t generate a proper response. Please try rephrasing your question.';
    }
    // If still empty, use a generic fallback
    if (!content || !content.trim()) {
      if (grok4Prompt.toLowerCase().includes('price') || grok4Prompt.toLowerCase().includes('btc') || grok4Prompt.toLowerCase().includes('bitcoin')) {
        content = 'I\'m having trouble getting the current Bitcoin price right now. You can check live prices on CoinGecko or CoinMarketCap. As Satoshi would say: "The price is what the market decides!"';
      } else {
        content = 'I couldn\'t generate a proper response. Please try rephrasing your question.';
      }
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