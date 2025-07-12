import { logger } from '@/lib/logger';
import { getFastBTCPrice } from './marketData';

// Query classification functions
export function needsWebSearch(query: string): boolean {
  const webSearchKeywords = [
    'price', 'current', 'live', 'now', 'today', 'market', 'trading',
    'bitcoin', 'btc', 'ethereum', 'eth', 'crypto', 'cryptocurrency',
    'gm', 'good morning', 'morning'
  ];
  
  const queryLower = query.toLowerCase();
  return webSearchKeywords.some(keyword => queryLower.includes(keyword));
}

export function isGMQuery(q: string): boolean {
  const gmKeywords = ['gm', 'good morning', 'morning'];
  const queryLower = q.toLowerCase().trim();
  return gmKeywords.some(keyword => queryLower.includes(keyword));
}

export function isPricePredictionQuery(q: string): boolean {
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

// Price prediction handler with improved prompts
export async function handlePricePrediction(message: string, _systemPrompt?: string, _temperature?: number): Promise<string> {
  const btcPrice = await getFastBTCPrice();
  const isPredictionQuery = /price target|prediction|end of q4|end of year|forecast|target/i.test(message);
  
  if (isPredictionQuery) {
    let prediction = '';
    try {
      // Removed unused predictionPrompt and predictionResp
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

// Stock symbol extraction utility
const STOCK_NAME_MAP: Record<string, string> = {
  'mstr': 'MSTR', 'microstrategy': 'MSTR',
  'coin': 'COIN', 'coinbase': 'COIN',
  'hood': 'HOOD', 'robinhood': 'HOOD',
  'nvda': 'NVDA', 'nvidia': 'NVDA',
  'tsla': 'TSLA', 'tesla': 'TSLA',
  'aapl': 'AAPL', 'apple': 'AAPL',
  'msft': 'MSFT', 'microsoft': 'MSFT',
  'googl': 'GOOGL', 'google': 'GOOGL',
  'amzn': 'AMZN', 'amazon': 'AMZN',
  'meta': 'META', 'facebook': 'META',
  'crcl': 'CRCL',
  'block': 'BLOCK', 'sq': 'BLOCK', 'square': 'BLOCK',
  'pypl': 'PYPL', 'paypal': 'PYPL',
  'iren': 'IREN', 'iris': 'IREN',
  'corz': 'CORZ',
  'cifr': 'CIFR',
  'riot': 'RIOT',
  'clsk': 'CLSK',
  'wulf': 'WULF',
  'hut': 'HUT',
  'mara': 'MARA',
  'glxy': 'GLXY', 'galaxy': 'GLXY',
  'qbts': 'QBTS',
  'crsp': 'CRSP', 'crispr': 'CRSP',
  'rgti': 'RGTI',
  'qubt': 'QUBT',
  'ktos': 'KTOS',
  'drs': 'DRS',
  'ionq': 'IONQ',
  'ibm': 'IBM',
  'pltr': 'PLTR', 'palantir': 'PLTR',
  'vrtx': 'VRTX',
  'regn': 'REGN',
  'mrna': 'MRNA',
  'lmt': 'LMT',
  'rtx': 'RTX',
  'noc': 'NOC',
  'gd': 'GD',
  'ba': 'BA',
  'tsm': 'TSM',
  'ccj': 'CCJ',
  'ceg': 'CEG',
  'etr': 'ETR',
  'uec': 'UEC',
};

// Prioritized stocks list
const PRIORITIZED_STOCK_LIST = [
  // Crypto & Tech
  'MSTR', 'COIN', 'HOOD', 'NVDA', 'TSLA', 'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'CRCL', 'BLOCK', 'PYPL',
  // Mining
  'IREN', 'CORZ', 'CIFR', 'RIOT', 'CLSK', 'WULF', 'HUT', 'MARA', 'GLXY',
  // Growth
  'QBTS', 'CRSP', 'RGTI', 'QUBT', 'KTOS', 'DRS', 'IONQ',
  // Innovation
  'IBM', 'PLTR', 'VRTX', 'REGN', 'MRNA', 'LMT', 'RTX', 'NOC', 'GD', 'BA', 'TSM',
  // Nuclear
  'CCJ', 'CEG', 'ETR', 'UEC'
];

// Build a regex for all prioritized tickers and company names
const STOCK_REGEX = new RegExp(
  Object.keys(STOCK_NAME_MAP)
    .concat(PRIORITIZED_STOCK_LIST.map(s => s.toLowerCase()))
    .sort((a, b) => b.length - a.length) // match longer names first
    .map(s => `\\b${s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`).join('|'),
  'gi'
);

/**
 * Extracts prioritized stock symbols from a query string.
 * Returns an array of unique, uppercased tickers.
 */
export function extractPrioritizedStockSymbols(query: string): string[] {
  const matches = query.match(STOCK_REGEX);
  if (!matches) return [];
  const tickers = matches.map(m => {
    const key = m.toLowerCase();
    return STOCK_NAME_MAP[key] || key.toUpperCase();
  });
  // Only return tickers that are in the prioritized list
  return Array.from(new Set(tickers.filter(t => PRIORITIZED_STOCK_LIST.includes(t))));
} 