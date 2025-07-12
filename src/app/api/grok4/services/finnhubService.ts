import { logger } from '@/lib/logger';

// Finnhub API rate limiting (30 calls/second)
const FINNHUB_RATE_LIMIT = 30; // calls per second
const FINNHUB_RATE_WINDOW = 1000; // 1 second window
const finnhubRateLimitCache = new Map<string, { count: number; resetTime: number }>();

function checkFinnhubRateLimit(): boolean {
  const now = Date.now();
  const key = 'finnhub_global';
  const entry = finnhubRateLimitCache.get(key);
  
  if (!entry || now > entry.resetTime) {
    finnhubRateLimitCache.set(key, {
      count: 1,
      resetTime: now + FINNHUB_RATE_WINDOW
    });
    return true;
  }
  
  if (entry.count >= FINNHUB_RATE_LIMIT) {
    return false;
  }
  
  entry.count++;
  return true;
}

// Wait for Finnhub rate limit if needed
export async function waitForFinnhubRateLimit(): Promise<void> {
  while (!checkFinnhubRateLimit()) {
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
  }
}

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

// Insider sentiment function using Finnhub API
export async function getInsiderSentiment(symbol: string, from?: string, to?: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for insider sentiment');
      return `Unable to fetch insider sentiment for ${symbol} - API key not configured`;
    }
    const fromDate = from || new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const toDate = to || new Date().toISOString().split('T')[0];
    
    await waitForFinnhubRateLimit();
    logger.info(`Fetching insider sentiment for ${symbol} from ${fromDate} to ${toDate}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub insider sentiment API error for ${symbol}:`, response.status, response.statusText);
      return `Unable to fetch insider sentiment data for ${symbol} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || !Array.isArray(data.data) || data.data.length === 0) {
      return `No insider sentiment data available for ${symbol} in the specified date range`;
    }
    const sentimentData = data.data as Array<{ symbol: string; year: number; month: number; mspr: number; change: number; }>;
    sentimentData.sort((a, b) => (a.year !== b.year ? b.year - a.year : b.month - a.month));
    const latest = sentimentData[0];
    let sentiment: 'bullish' | 'bearish' | 'neutral';
    let sentimentEmoji: string;
    if (latest.mspr > 0.5) { sentiment = 'bullish'; sentimentEmoji = '🟢'; }
    else if (latest.mspr < -0.5) { sentiment = 'bearish'; sentimentEmoji = '🔴'; }
    else { sentiment = 'neutral'; sentimentEmoji = '🟡'; }
    // --- Human, crypto-native narrative ---
    let result = '';
    if (sentiment === 'bullish') {
      result += `Insiders are quietly stacking—MSPR is ${latest.mspr.toFixed(2)}. The C-suite is showing conviction, and the smart money is watching. ${sentimentEmoji}\n`;
    } else if (sentiment === 'bearish') {
      result += `Insiders are heading for the exits—MSPR at ${latest.mspr.toFixed(2)}. Sometimes, execs know when to take chips off the table. ${sentimentEmoji}\n`;
    } else {
      result += `No big moves from the C-suite—MSPR is ${latest.mspr.toFixed(2)}. Sometimes, no news is good news. ${sentimentEmoji}\n`;
    }
    // Add a punchy, opinionated closer
    const closers = [
      `If you're front-running the suits, this is your signal.`,
      `Insider conviction is the ultimate edge.`,
      `Don't fade the C-suite—unless you like living dangerously.`,
      `Sometimes, the best alpha is just following the money.`,
      `Remember: execs buy for one reason—up only.`
    ];
    result += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching insider sentiment for ${symbol}:`, error);
    return `Error analyzing insider sentiment for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// Insider transactions function using Finnhub API
export async function getInsiderTransactions(symbol: string, from?: string, to?: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for insider transactions');
      return `Unable to fetch insider transactions for ${symbol} - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    const fromDate = from || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const toDate = to || new Date().toISOString().split('T')[0];
    logger.info(`Fetching insider transactions for ${symbol} from ${fromDate} to ${toDate}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/stock/insider-transactions?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub insider transactions API error for ${symbol}:`, response.status, response.statusText);
      return `Unable to fetch insider transactions data for ${symbol} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || !Array.isArray(data.data) || data.data.length === 0) {
      return `No insider transactions data available for ${symbol} in the specified date range`;
    }
    const transactions = data.data as Array<{ name: string; share: number; change: number; filingDate: string; transactionDate: string; transactionCode: string; transactionPrice: number; transactionValue: number; transactionType: string; }>; 
    const isValidNumber = (n: unknown) => typeof n === 'number' && !isNaN(n) && isFinite(n);
    transactions.sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
    const totalBuyValue = transactions.filter(t => t.transactionType === 'P' || t.change > 0).reduce((sum, t) => isValidNumber(t.transactionValue) ? sum + Math.abs(t.transactionValue) : sum, 0);
    const totalSellValue = transactions.filter(t => t.transactionType === 'S' || t.change < 0).reduce((sum, t) => isValidNumber(t.transactionValue) ? sum + Math.abs(t.transactionValue) : sum, 0);
    let netFlow: number | null = null;
    if (isValidNumber(totalBuyValue) && isValidNumber(totalSellValue)) {
      netFlow = totalBuyValue - totalSellValue;
    }
    const totalTransactions = transactions.length;
    const uniqueInsiders = new Set(transactions.map(t => t.name)).size;
    let sentiment: 'bullish' | 'bearish' | 'neutral';
    let sentimentEmoji: string;
    if (typeof netFlow === 'number' && isValidNumber(netFlow) && netFlow > 1000000) { sentiment = 'bullish'; sentimentEmoji = '🟢'; }
    else if (typeof netFlow === 'number' && isValidNumber(netFlow) && netFlow < -1000000) { sentiment = 'bearish'; sentimentEmoji = '🔴'; }
    else { sentiment = 'neutral'; sentimentEmoji = '🟡'; }
    // --- Human, crypto-native narrative ---
    const openers = [
      `Want to know what the smart money is doing? Watch the insider tape at ${symbol}.`,
      `Insider transactions are the market's tell—here's what ${symbol}'s execs are up to.`,
      `Forget the headlines—follow the money. Here's the latest from ${symbol}'s C-suite.`,
      `When insiders move size, the market pays attention. Let's break down ${symbol}.`,
      `The best alpha? Tracking who's buying and selling at ${symbol}.`
    ];
    const opener = openers[Math.floor(Math.random() * openers.length)];
    let result = `${opener}\n\n`;
    if (sentiment === 'bullish') {
      result += `Over the last month, ${uniqueInsiders} insiders have been net buyers, with a net flow of $${(netFlow! / 1_000_000).toFixed(2)}M. The C-suite is betting on upside.\n`;
    } else if (sentiment === 'bearish') {
      result += `Insiders have been net sellers (net flow: $${(netFlow! / 1_000_000).toFixed(2)}M). Sometimes, execs know when to take profits.\n`;
    } else {
      result += `Insider activity is balanced—no big buyers or sellers.\n`;
    }
    // Only show totals if at least one of buy/sell is > 0 and valid
    if ((isValidNumber(totalBuyValue) && totalBuyValue > 0) || (isValidNumber(totalSellValue) && totalSellValue > 0)) {
      result += `\nTotals: $${(totalBuyValue / 1_000_000).toFixed(2)}M bought, $${(totalSellValue / 1_000_000).toFixed(2)}M sold, across ${totalTransactions} transactions.\n`;
    } else {
      result += `\nNo notable insider buying or selling activity this period.\n`;
    }
    const validTransactions = transactions.filter(t => isValidNumber(t.transactionValue) && isValidNumber(t.change));
    if (validTransactions.length > 0) {
      const topMoves = validTransactions.slice(0, 3).map(t => {
        const type = t.transactionType === 'P' ? 'bought' : 'sold';
        const shares = Math.abs(t.change).toLocaleString();
        const value = isValidNumber(t.transactionValue) ? `$${(Math.abs(t.transactionValue) / 1000).toFixed(1)}K` : '';
        const date = new Date(t.transactionDate).toLocaleDateString();
        return `${t.name} ${type} ${shares} shares (${value}) on ${date}`;
      });
      result += `\nNotable moves: ${topMoves.join('; ')}.\n`;
    }
    const closers = [
      `Insiders are the original whales—don't fade their moves. ${sentimentEmoji}`,
      `If the C-suite is buying, maybe you should be too. ${sentimentEmoji}`,
      `Heavy selling? Might be time to tighten stops. ${sentimentEmoji}`,
      `Sometimes, patience pays—especially when insiders are on the sidelines. ${sentimentEmoji}`,
      `Smart money leaves a trail—follow it. ${sentimentEmoji}`
    ];
    result += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching insider transactions for ${symbol}:`, error);
    return `Error analyzing insider transactions for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// Company earnings function using Finnhub API
export async function getCompanyEarnings(symbol: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for company earnings');
      return `Unable to fetch earnings data for ${symbol} - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    logger.info(`Fetching earnings data for ${symbol}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/stock/earnings?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub earnings API error for ${symbol}:`, response.status, response.statusText);
      return `Unable to fetch earnings data for ${symbol} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || !Array.isArray(data) || data.length === 0) {
      return `No earnings data available for ${symbol}`;
    }
    const earnings = data as Array<{ actual: number; estimate: number; period: string; quarter: number; surprise: number; surprisePercent: number; symbol: string; year: number; }>;
    earnings.sort((a, b) => (a.year !== b.year ? b.year - a.year : b.quarter - a.quarter));
    const latest = earnings[0];
    const surprise = latest.surprisePercent;
    let surpriseEmoji: string;
    if (surprise > 10) { surpriseEmoji = '🚀'; }
    else if (surprise > 5) { surpriseEmoji = '🟢'; }
    else if (surprise < -10) { surpriseEmoji = '🔴'; }
    else if (surprise < -5) { surpriseEmoji = '🟡'; }
    else { surpriseEmoji = '⚪'; }
    // --- Human, crypto-native narrative ---
    const openers = [
      `${symbol} just dropped earnings—let's see if they beat, missed, or just kept the lights on.`,
      `Earnings season is the real meme war. Here's how ${symbol} stacked up.`,
      `Quarterly numbers are in for ${symbol}. Did they moon or get rekt?`,
      `The street was watching—here's how ${symbol} performed this quarter.`,
      `Earnings roulette: ${symbol} just spun the wheel. Let's check the result.`
    ];
    const opener = openers[Math.floor(Math.random() * openers.length)];
    // Main result sentence
    let result = `${opener}\n\n`;
    if (surprise > 10) {
      result += `Absolute monster quarter—EPS $${latest.actual.toFixed(2)} vs. $${latest.estimate.toFixed(2)} expected, beat by ${surprise.toFixed(1)}%. ${surpriseEmoji} Bulls are flexing, bears are coping.\n`;
    } else if (surprise > 5) {
      result += `Solid beat—EPS $${latest.actual.toFixed(2)} vs. $${latest.estimate.toFixed(2)}, up ${surprise.toFixed(1)}%. ${surpriseEmoji} The street is nodding in approval.\n`;
    } else if (surprise < -10) {
      result += `Big miss—EPS $${latest.actual.toFixed(2)} vs. $${latest.estimate.toFixed(2)}, missed by ${surprise.toFixed(1)}%. ${surpriseEmoji} CT is already posting memes and calling for a dead cat bounce.\n`;
    } else if (surprise < -5) {
      result += `Missed—EPS $${latest.actual.toFixed(2)} vs. $${latest.estimate.toFixed(2)}, off by ${surprise.toFixed(1)}%. ${surpriseEmoji} Not a rug, but not a win either.\n`;
    } else {
      result += `In line with expectations—EPS $${latest.actual.toFixed(2)} vs. $${latest.estimate.toFixed(2)}. ${surpriseEmoji} No fireworks, just chop.\n`;
    }
    // Summarize recent trend in a sentence
    const lastFew = earnings.slice(0, 4);
    const beats = lastFew.filter(e => e.surprisePercent > 0).length;
    const misses = lastFew.filter(e => e.surprisePercent < 0).length;
    let trend = '';
    if (beats === 0 && misses > 0) {
      trend = 'Mostly misses lately—momentum is lacking.';
    } else if (beats > 0 && misses === 0) {
      trend = 'Consistent beats—momentum is strong.';
    } else if (beats > misses) {
      trend = 'More beats than misses—trend is up.';
    } else if (misses > beats) {
      trend = 'More misses than beats—trend is down.';
    } else {
      trend = 'Mixed results—narrative is up for grabs.';
    }
    result += `\nLast few quarters: ${trend}\n`;
    // Strong, opinionated closer
    const closers = [
      `If you're trading this, expect fireworks—this isn't a "set it and forget it" stock.`,
      `Momentum traders are watching for follow-through, but don't get rekt chasing the move.`,
      `Earnings are the ultimate reality check—trade accordingly.`,
      `CT is already spinning the narrative—trade the price, not the hype.`,
      `If you like volatility, this one's for you. If not, maybe sit this out.`
    ];
    result += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching company earnings for ${symbol}:`, error);
    return `Error analyzing earnings for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// Company news function using Finnhub API
export async function getCompanyNews(symbol: string, from?: string, to?: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for company news');
      return `Unable to fetch news data for ${symbol} - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    const fromDate = from || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const toDate = to || new Date().toISOString().split('T')[0];
    logger.info(`Fetching news data for ${symbol} from ${fromDate} to ${toDate}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub news API error for ${symbol}:`, response.status, response.statusText);
      return `Unable to fetch news data for ${symbol} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || !Array.isArray(data) || data.length === 0) {
      return `No news data available for ${symbol} in the specified date range`;
    }
    const news = data as Array<{ category: string; datetime: number; headline: string; id: number; image: string; related: string; source: string; summary: string; url: string; }>;
    news.sort((a, b) => b.datetime - a.datetime);
    const topNews = news.slice(0, 5);
    // Synthesize the vibe and narrative
    const headlines = topNews.map(n => n.headline.toLowerCase());
    let vibe = '';
    if (headlines.some(h => h.includes('elon') || h.includes('musk') || h.includes('grok'))) {
      vibe = `It's Musk-mania—everyone's buzzing about the latest moves, and CT is memeing it to the moon.`;
    } else if (headlines.some(h => h.includes('lawsuit') || h.includes('regulation') || h.includes('probe'))) {
      vibe = `Regulatory FUD is in the air, and the bears are out in force.`;
    } else if (headlines.some(h => h.includes('record') || h.includes('beat') || h.includes('surge'))) {
      vibe = `Bullish headlines are driving the narrative—momentum traders are watching closely.`;
    } else if (headlines.some(h => h.includes('miss') || h.includes('drop') || h.includes('cut'))) {
      vibe = `The news is heavy—misses and downgrades are fueling the bears.`;
    } else {
      vibe = `It's a mixed bag—no single narrative is dominating, but volatility is high and the meme feed is moving fast.`;
    }
    // Add a punchy, human summary
    let summary = '';
    if (vibe.includes('Musk-mania')) {
      summary = `The news cycle is pure Musk-mania—memes are flying, and the hype machine is in overdrive. Bulls are loving it, bears are rolling their eyes, and the only thing moving faster than the headlines is the meme feed.`;
    } else if (vibe.includes('Regulatory FUD')) {
      summary = `Regulatory headlines are stirring up FUD, but the real story is how traders are positioning for the next move. If you're in, keep your stops tight—this could get spicy.`;
    } else if (vibe.includes('Bullish headlines')) {
      summary = `Momentum is building—bullish headlines are everywhere, and CT is calling for breakouts. Just remember: when everyone's bullish, it's time to watch for the rug.`;
    } else if (vibe.includes('heavy')) {
      summary = `It's a rough patch—misses and downgrades are fueling the bears, but that just means more volatility for the degens. If you like to trade the chop, this is your moment.`;
    } else {
      summary = `No clear narrative, but the market's restless. Stay nimble, watch the memes, and don't get caught on the wrong side of the next headline.`;
    }
    // Strong, opinionated closer
    const closers = [
      `If you're trading this, keep your finger on the pulse—narratives are shifting by the hour.`,
      `The only thing moving faster than the news is the meme cycle.`,
      `Trade the price, not the headline.`,
      `In this market, conviction is good, but exit liquidity is better.`,
      `Don't get rekt chasing the hype—wait for the real move.`
    ];
    summary += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return summary;
  } catch (error) {
    logger.error(`Error fetching company news for ${symbol}:`, error);
    return `Error analyzing news for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// Company profile function using Finnhub API
export async function getCompanyProfile(symbol: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for company profile');
      return `Unable to fetch company profile for ${symbol} - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    logger.info(`Fetching company profile for ${symbol}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub company profile API error for ${symbol}:`, response.status, response.statusText);
      return `Unable to fetch company profile for ${symbol} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || Object.keys(data).length === 0) {
      return `No company profile data available for ${symbol}`;
    }
    const profile = data as { country: string; currency: string; exchange: string; ipo: string; marketCapitalization: number; name: string; phone: string; shareOutstanding: number; ticker: string; weburl: string; logo: string; finnhubIndustry: string; cik?: string; isin?: string; lei?: string; };
    // --- Human, crypto-native narrative ---
    const openers = [
      `${profile.name} (${profile.ticker}) isn't just another ticker—it's a narrative in motion.`,
      `If you want to understand the story, start with the company. Here's the lowdown on ${profile.name}.`,
      `Every stock has a backstory—here's what makes ${profile.name} (${profile.ticker}) tick.`,
      `Before you ape in, know the fundamentals. Here's the 411 on ${profile.name}.`,
      `In a world of memecoins, ${profile.name} is playing the long game.`
    ];
    const opener = openers[Math.floor(Math.random() * openers.length)];
    let result = `${opener}\n\n`;
    // Build a narrative paragraph with only meaningful data
    const narrativeParts = [];
    if (profile.finnhubIndustry && profile.finnhubIndustry.toLowerCase() !== 'unknown') {
      narrativeParts.push(`Industry: ${profile.finnhubIndustry}`);
    }
    if (typeof profile.marketCapitalization === 'number' && profile.marketCapitalization > 0) {
      const marketCap = profile.marketCapitalization;
      const marketCapStr = marketCap >= 1_000_000_000
        ? `$${(marketCap / 1_000_000_000).toFixed(2)}B`
        : `$${(marketCap / 1_000_000).toFixed(2)}M`;
      narrativeParts.push(`Market Cap: ${marketCapStr}`);
    }
    if (profile.ipo && profile.ipo !== '0000-00-00') {
      narrativeParts.push(`IPO: ${profile.ipo}`);
    }
    if (profile.exchange && profile.exchange.toLowerCase() !== 'unknown') {
      narrativeParts.push(`Exchange: ${profile.exchange}`);
    }
    if (profile.weburl) {
      narrativeParts.push(`Website: [${profile.weburl.replace(/^https?:\/\//, '')}](${profile.weburl})`);
    }
    // Only show phone if it's not a generic or placeholder value
    if (profile.phone && profile.phone.length > 6 && !/^1?5{2,}/.test(profile.phone)) {
      narrativeParts.push(`Phone: ${profile.phone}`);
    }
    if (narrativeParts.length > 0) {
      result += narrativeParts.join(' | ') + '\n\n';
    }
    const quickTakes = [
      `If you're bullish on the sector, this is one to watch.`,
      `Volatility is always in play—know your risk.`,
      `The story is still being written—stay tuned.`,
      `In a market full of noise, fundamentals still matter.`,
      `Laser eyes or not, do your own research before you ape in.`
    ];
    result += `💡 **Quick Take:**\n${quickTakes[Math.floor(Math.random() * quickTakes.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching company profile for ${symbol}:`, error);
    return `Error analyzing company profile for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// IPO Calendar function using Finnhub API
export async function getIPOCalendar(from?: string, to?: string): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for IPO calendar');
      return `Unable to fetch IPO calendar data - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    const fromDate = from || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const toDate = to || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    logger.info(`Fetching IPO calendar from ${fromDate} to ${toDate}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/calendar/ipo?from=${fromDate}&to=${toDate}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub IPO calendar API error:`, response.status, response.statusText);
      return `Unable to fetch IPO calendar data - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || !Array.isArray(data.ipoCalendar) || data.ipoCalendar.length === 0) {
      return `No IPO calendar data available for the specified date range`;
    }
    const ipos = data.ipoCalendar as Array<{
      date: string;
      exchange: string;
      name: string;
      numberOfShares: number;
      price: string;
      status: string;
      symbol: string;
      totalSharesValue: number;
    }>;
    // --- Human, crypto-native narrative ---
    const openers = [
      `IPO season is heating up—new names are hitting the tape, but not all will moon.`,
      `The IPO window is open, but only the bold are stepping through.`,
      `Fresh listings, fresh narratives—here's what's coming to market.`,
      `Not every IPO is a winner, but the hype is real.`,
      `If you're looking for the next big thing, start with the IPO calendar.`
    ];
    const opener = openers[Math.floor(Math.random() * openers.length)];
    let result = `${opener}\n\n`;
    const upcoming = ipos.filter(ipo => ipo.status === 'expected' || ipo.status === 'filed');
    if (upcoming.length > 0) {
      const nextIpo = upcoming[0];
      result += `Next up: ${nextIpo.name} (${nextIpo.symbol}) on ${nextIpo.exchange}, expected at $${nextIpo.price || 'TBD'} per share.\n`;
    } else {
      result += `No major IPOs on deck in the immediate future.\n`;
    }
    const completed = ipos.filter(ipo => ipo.status === 'priced');
    if (completed.length > 0) {
      const lastIpo = completed[0];
      result += `Recent action: ${lastIpo.name} (${lastIpo.symbol}) priced at $${lastIpo.price || 'N/A'} on ${lastIpo.exchange}.\n`;
    }
    const closers = [
      `DYOR before you ape into the next hot listing.`,
      `Remember: not every IPO is a moonshot.`,
      `If you're chasing hype, know when to take profits.`,
      `The best opportunities are sometimes the quietest listings.`,
      `In IPO season, FOMO is real—trade smart.`
    ];
    result += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching IPO calendar:`, error);
    return `Error analyzing IPO calendar: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

// Market status function using Finnhub API
export async function getMarketStatus(exchange: string = 'US'): Promise<string> {
  try {
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    if (!FINNHUB_API_KEY) {
      logger.warn('Finnhub API key not configured for market status');
      return `Unable to fetch market status - API key not configured`;
    }
    await waitForFinnhubRateLimit();
    logger.info(`Fetching market status for ${exchange}`);
    const response = await fetchWithTimeout(
      `https://finnhub.io/api/v1/market/status?exchange=${exchange}&token=${FINNHUB_API_KEY}`,
      {},
      5000
    );
    if (!response.ok) {
      logger.warn(`Finnhub market status API error for ${exchange}:`, response.status, response.statusText);
      return `Unable to fetch market status for ${exchange} - API error ${response.status}`;
    }
    const data = await response.json();
    if (!data || typeof data !== 'object') {
      return `No market status data available for ${exchange}`;
    }
    // --- Human, crypto-native narrative ---
    let result = '';
    if (data.isOpen) {
      result += `The market is open and the tape is moving—traders are hunting for alpha. 🟢\n`;
    } else {
      result += `The market is closed—time to catch up on memes, research, and maybe touch grass. 🔴\n`;
    }
    if (data.session) {
      result += `Current session: ${data.session}.`;
    }
    if (data.nextOpen) {
      result += ` Next open: ${new Date(data.nextOpen).toLocaleString()}.`;
    }
    if (data.nextClose) {
      result += ` Next close: ${new Date(data.nextClose).toLocaleString()}.`;
    }
    const closers = [
      `Remember: the best trades are sometimes made when the market is closed.`,
      `If you're waiting for a clear signal, you'll be waiting with the rest of CT.`,
      `In this market, timing is everything—don't get caught sleeping.`,
      `The only thing more relentless than the market is the meme cycle.`,
      `Stay sharp, stay caffeinated, and be ready for the next open.`
    ];
    result += `\n${closers[Math.floor(Math.random() * closers.length)]}`;
    return result;
  } catch (error) {
    logger.error(`Error fetching market status for ${exchange}:`, error);
    return `Error analyzing market status for ${exchange}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
} 