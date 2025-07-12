import { logger } from '@/lib/logger';

// Types
interface BTCPriceCache {
  price: number;
  timestamp: number;
}

interface CoinGeckoMarket {
  id: string;
  symbol: string;
  name: string;
  market_cap: number;
  price_change_percentage_24h?: number;
  price_change_percentage_7d?: number;
  'price_change_percentage_1y_in_currency.usd'?: number;
  [key: string]: unknown;
}

// Constants
const BTC_CACHE_TTL = 2 * 60 * 1000; // 2 minutes
const BTC_FETCH_TIMEOUT = 3000;

// Caches
let cachedBTCPrice: BTCPriceCache | null = null;

// Fetch with timeout helper
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

// BTC Price fetching with better error handling and retry logic
export async function getFastBTCPrice(retryCount = 0): Promise<number | null> {
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

/**
 * Fetches BTC outperformers and returns a single comprehensive table.
 * Returns: { btcOutperformersTable, btcChange, label }
 */
export async function getBTCOutperformersAndAltcoinTables(period: "24h" | "7d" | "ytd" = "24h"): Promise<{ btcOutperformersTable: string; btcChange: number; label: string }> {
  try {
    const changeKey = period === "24h" ? "price_change_percentage_24h" : 
                     period === "7d" ? "price_change_percentage_7d" : 
                     "price_change_percentage_1y_in_currency.usd";
    
    const label = period === "24h" ? "24h" : period === "7d" ? "7d" : "YTD";
    
    // Fetch top 100 coins by market cap
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d,1y_in_currency');
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    const data: CoinGeckoMarket[] = await response.json();
    
    // Find BTC data
    const btcData = data.find((coin: CoinGeckoMarket) => coin.id === 'bitcoin');
    if (!btcData) {
      throw new Error('Bitcoin data not found');
    }
    
    const btcChange = typeof btcData[changeKey] === 'number' ? btcData[changeKey] as number : 0;
    
    // Preferred altcoins (curated list)
    const preferredAlts = [
      'ETH', 'SOL', 'LINK', 'AVAX', 'AAVE', 'UNI', 'MKR', 'SNX', 'ARB', 'OP', 'LDO', 'INJ', 'TIA', 'JUP', 'PYTH', 'RUNE', 'STX', 'DOGE', 'PEPE', 'WIF', 'BONK'
    ];
    // Filter and sort outperformers
    const outperformers = data
      .filter((coin: CoinGeckoMarket) => {
        const change = typeof coin[changeKey] === 'number' ? coin[changeKey] as number : undefined;
        return typeof change === 'number' && change > btcChange && coin.id !== 'bitcoin';
      });
    // Preferred first, then others
    const preferredOutperformers = outperformers.filter(coin => preferredAlts.includes(coin.symbol.toUpperCase()));
    const otherOutperformers = outperformers.filter(coin => !preferredAlts.includes(coin.symbol.toUpperCase()));
    // Final list: preferred first, then others, max 10
    const finalOutperformers = [...preferredOutperformers, ...otherOutperformers].slice(0, 10);
    
    if (finalOutperformers.length === 0) {
      return {
        btcOutperformersTable: `No assets outperforming BTC (${label}: ${btcChange >= 0 ? '+' : ''}${btcChange.toFixed(2)}%)`,
        btcChange,
        label
      };
    }
    
    // Build comprehensive table with all columns
    let table = `**BTC Outperformers (${label})**\n\n`;
    table += `| Symbol | ${label} Change | vs BTC | Market Cap |\n`;
    table += `|--------|----------------|--------|------------|\n`;
    
    finalOutperformers.forEach((coin: CoinGeckoMarket) => {
      const change = typeof coin[changeKey] === 'number' ? coin[changeKey] as number : 0;
      const vsBTC = change - btcChange;
      const marketCap = coin.market_cap ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
      }).format(coin.market_cap) : 'N/A';
      
      const changeEmoji = change >= 0 ? '🟢' : '🔴';
      const vsBTCEmoji = vsBTC >= 0 ? '🟢' : '🔴';
      
      table += `| ${coin.symbol.toUpperCase()} | ${changeEmoji} ${change >= 0 ? '+' : ''}${change.toFixed(2)}% | ${vsBTCEmoji} ${vsBTC >= 0 ? '+' : ''}${vsBTC.toFixed(2)}% | ${marketCap} |\n`;
    });
    // Narrative: mention which preferred alts are outperforming
    const preferredWinners = preferredOutperformers.map(c => c.symbol.toUpperCase());
    let narrative = '';
    if (preferredWinners.length > 0) {
      narrative = `Your favorite alts outperforming BTC: ${preferredWinners.join(', ')}.`;
    } else {
      narrative = `None of your favorite alts are outperforming BTC right now, but here are the top movers.`;
    }
    
    return { btcOutperformersTable: `${narrative}\n\n${table}`, btcChange, label };
  } catch (error) {
    logger.error('Error fetching BTC outperformers:', error);
    return {
      btcOutperformersTable: 'Failed to fetch market data.',
      btcChange: 0,
      label: period === "24h" ? "24h" : period === "7d" ? "7d" : "YTD"
    };
  }
}

// Enhanced crypto stocks data with Yahoo Finance
export async function getCryptoStocksData(btcChange: number): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured');
      return '**📈 Crypto Stocks:**\n_Unable to fetch stock data - API key not configured_';
    }

    // Focus on prioritized stocks from @/stocks components
    const stocks = [
      'MSTR', 'COIN', 'HOOD', 'NVDA', 'TSLA', 'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'CRCL', 'BLOCK', 'PYPL',
      'IREN', 'CORZ', 'CIFR', 'RIOT', 'CLSK', 'WULF', 'HUT', 'MARA', 'GLXY',
      'QBTS', 'CRSP', 'RGTI', 'QUBT', 'KTOS', 'DRS', 'IONQ',
      'IBM', 'PLTR', 'VRTX', 'REGN', 'MRNA', 'LMT', 'RTX', 'NOC', 'GD', 'BA', 'TSM',
      'CCJ', 'CEG', 'ETR', 'UEC'
    ].slice(0, 12); // Limit to 12 for API efficiency
    
    logger.info('Fetching crypto stocks data for symbols:', stocks);

    // Fetch each stock individually (Finnhub free tier limitation)
    const stockPromises = stocks.map(async (symbol) => {
      try {
        const response = await fetchWithTimeout(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
          {},
          3000
        );
        if (!response.ok) {
          logger.warn(`Finnhub API error for ${symbol}:`, response.status, response.statusText);
          return null;
        }
        const data = await response.json();
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
      .filter((result): result is PromiseFulfilledResult<{ symbol: string; currentPrice: number; previousClose: number; change: number; changePercent: number; high: number; low: number; open: number; }> => 
        result.status === 'fulfilled' && result.value !== null
      )
      .map(result => result.value)
      .filter(stock => typeof stock.changePercent === 'number' && stock.changePercent > btcChange)
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, 10);

    if (validStocks.length === 0) {
      logger.info('No crypto stocks are outperforming BTC today');
      return '**📈 Crypto Stocks:**\n_No crypto stocks are outperforming BTC today_';
    }

    // --- Human, crypto-native narrative intro ---
    const openers = [
      "Wall Street's crypto darlings are making noise again.",
      "The degen stocks are back in the spotlight—here's who's flexing.",
      "If you thought only memecoins could moon, check out these equities.",
      "TradFi meets degen: these stocks are outpacing even the OG orange coin.",
      "When stocks start outperforming BTC, you know the market's getting spicy."
    ];
    const opener = openers[Math.floor(Math.random() * openers.length)];

    // Weave in key data points
    const top = validStocks[0];
    const topLine = top
      ? `Top performer: **${top.symbol}** up ${top.changePercent >= 0 ? '+' : ''}${top.changePercent.toFixed(2)}% in the last 24h—leaving BTC maxis scratching their heads.`
      : '';

    // Table intro
    const tableIntro = `Here's the leaderboard for crypto-native equities beating BTC today:`;

    // Table
    let table = '| Symbol | Price | 24h Change | vs BTC |\n|--------|-------|------------|--------|\n';
    validStocks.forEach((stock) => {
      const emoji = stock.changePercent >= 0 ? '🟢' : '🔴';
      const price = stock.currentPrice.toFixed(2);
      const changePercent = stock.changePercent >= 0 ? 
        `+${stock.changePercent.toFixed(2)}%` : 
        `${stock.changePercent.toFixed(2)}%`;
      const vsBTC = stock.changePercent - btcChange;
      const vsBTCFormatted = vsBTC >= 0 ? 
        `+${vsBTC.toFixed(2)}%` : 
        `${vsBTC.toFixed(2)}%`;
      table += `| ${emoji} ${stock.symbol} | $${price} | ${changePercent} | ${vsBTCFormatted} |\n`;
    });

    // Witty, opinionated closer
    const closers = [
      "Remember: in this market, conviction is good, but exit liquidity is better.",
      "If you're not outperforming BTC, at least outperform your own FOMO.",
      "Diamond hands or paper hands, these stocks are moving—just don't get rekt.",
      "Stay sharp, stay caffeinated, and don't get left holding the bag.",
      "The only thing more volatile than these stocks is the meme feed on X."
    ];
    const closer = closers[Math.floor(Math.random() * closers.length)];

    // Compose the final output
    const result = `**📈 Crypto Stocks:**\n\n${opener}\n${topLine}\n\n${tableIntro}\n${table}\n\n${closer}`;
    logger.info('Crypto stocks data successfully fetched from Finnhub:', {
      stockCount: validStocks.length,
      symbols: validStocks.map(s => s.symbol)
    });
    return result;
  } catch (error) {
    logger.error('Error fetching crypto stocks data from Finnhub:', error);
    return '**📈 Crypto Stocks:**\n_Unable to fetch stock data_';
  }
} 