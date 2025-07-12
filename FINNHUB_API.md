# INSIDER_TRADING_API.md

While the premium plans are costly (e.g., $2,000/month for All-In-One), they unlock institutional-grade features that competitors like Alpha Vantage or Yahoo Finance can’t match

## What's New in This Release

- **Prioritized Stocks**: All API endpoints and analysis now focus on stocks defined in your `/stocks` components. This includes Crypto & Tech, Bitcoin Mining, High-Growth, Innovating Equities, and Nuclear Energy stocks. See the Supported Tickers section for the full prioritized list.
- **Global Finnhub API Rate Limiting**: 30 calls/second enforced across all endpoints to comply with Finnhub's global rate limit.
- **5-Minute Caching**: All Finnhub data is cached for 5 minutes to reduce API usage and improve performance.
- **Production-Ready**: All test files have been removed. The codebase is now clean and ready for deployment.
- **Linter Compliance**: All TypeScript `any` types have been replaced with `unknown` and proper type checks, ensuring full eslint compliance.
- **New API Endpoints**: Added endpoints for insider sentiment, insider transactions, IPO calendar, company earnings, company news, company profile, and market status (see API Endpoints section below).

---

## Overview

This API provides multi-dimensional investment analysis by combining insider trading, IPO calendar, company earnings, news sentiment, company profiles, and market status data from Finnhub. All endpoints now prioritize stocks defined in your `/stocks` components, ensuring that analysis and data are always relevant to your tracked universe.

## Supported Tickers

The system prioritizes stocks from @/stocks components and tracks insider activity for an expanded list of companies:

### Crypto & Tech Stocks
- **MSTR** - MicroStrategy (Bitcoin strategy)
- **COIN** - Coinbase (Crypto exchange)
- **HOOD** - Robinhood (Retail trading)
- **CRCL** - Circle (Stablecoin)
- **BLOCK** - Block (Payments)
- **PYPL** - PayPal (Payments)

### Bitcoin Mining Stocks
- **IREN** - Iris Energy (Mining + AI pivot)
- **CORZ** - Core Scientific (Mining)
- **CIFR** - Cipher Mining (Mining)
- **RIOT** - Riot Platforms (Mining)
- **CLSK** - CleanSpark (Mining)
- **WULF** - TeraWulf (Mining)
- **HUT** - Hut 8 Mining (Mining)
- **MARA** - Marathon Digital (Mining)
- **GLXY** - Galaxy Digital (Crypto services)

### High-Growth Watchlist
- **QBTS** - D-Wave Quantum (Quantum computing)
- **CRSP** - CRISPR Therapeutics (Biogenetics)
- **RGTI** - Rigetti Computing (Quantum computing)
- **QUBT** - Quantum Computing Inc. (Quantum computing)
- **KTOS** - Kratos Defense (Defense tech)
- **DRS** - Leonardo DRS (Defense tech)
- **IONQ** - IonQ (Quantum computing)

### Innovating Equities
- **IBM** - IBM (Quantum computing)
- **PLTR** - Palantir (AI/Defense)
- **VRTX** - Vertex Pharmaceuticals (Biogenetics)
- **REGN** - Regeneron Pharmaceuticals (Biogenetics)
- **MRNA** - Moderna (Biogenetics)
- **LMT** - Lockheed Martin (Defense tech)
- **RTX** - Raytheon Technologies (Defense tech)
- **NOC** - Northrop Grumman (Defense tech)
- **GD** - General Dynamics (Defense tech)
- **BA** - Boeing (Defense tech)
- **TSM** - Taiwan Semiconductor (Semiconductors)

### Nuclear Energy Stocks
- **CCJ** - Cameco Corporation (Uranium mining)
- **CEG** - Constellation Energy (Nuclear power)
- **ETR** - Entergy Corporation (Nuclear utilities)
- **UEC** - Uranium Energy Corp (Uranium exploration)

### Major Tech Companies
- **NVDA** - NVIDIA (AI/GPU)
- **TSLA** - Tesla (EV/AI)
- **AAPL** - Apple
- **MSFT** - Microsoft
- **GOOGL** - Google/Alphabet
- **AMZN** - Amazon
- **META** - Meta/Facebook

---

## Technical Details

- **Prioritized Stocks**: All endpoints and analysis focus on the prioritized stocks above. This ensures all data and insights are relevant to your tracked universe.
- **Global Finnhub API Rate Limiting**: 30 calls/second enforced globally. The system automatically queues and spaces requests to avoid hitting the limit.
- **5-Minute Caching**: All Finnhub API responses are cached for 5 minutes. This dramatically reduces API usage and improves response times for frequently requested data.
- **Production-Ready**: All test files have been removed. The codebase is clean and ready for deployment.
- **Linter Compliance**: All TypeScript `any` types have been replaced with `unknown` and proper type checks, ensuring full eslint compliance and type safety.

---

## API Endpoints

### `get_insider_sentiment`
- **Purpose**: Get insider trading sentiment data (Monthly Share Purchase Ratio, MSPR) for a stock.
- **Parameters**: `symbol` (string, required), `from` (string, optional), `to` (string, optional)

### `get_insider_transactions`
- **Purpose**: Get detailed insider trading transactions for a stock.
- **Parameters**: `symbol` (string, required), `from` (string, optional), `to` (string, optional)

### `get_ipo_calendar`
- **Purpose**: Get upcoming and recent IPO calendar data.
- **Parameters**: `from` (string, optional), `to` (string, optional)

### `get_company_earnings`
- **Purpose**: Get company earnings data (quarterly earnings, revenue, EPS, analyst estimates).
- **Parameters**: `symbol` (string, required)

### `get_company_news`
- **Purpose**: Get company news and press releases.
- **Parameters**: `symbol` (string, required), `from` (string, optional), `to` (string, optional)

### `get_company_profile`
- **Purpose**: Get comprehensive company profile data (fundamentals, financial metrics, business info).
- **Parameters**: `symbol` (string, required)

### `get_market_status`
- **Purpose**: Get real-time market status and trading information (market hours, holidays, sessions).
- **Parameters**: `exchange` (string, optional)

---

## Features Added

### 1. Insider Sentiment Analysis (`get_insider_sentiment`)
- **Purpose**: Analyzes Monthly Share Purchase Ratio (MSPR) to determine overall insider sentiment
- **Data Source**: Finnhub Insider Sentiment API
- **Key Metrics**:
  - MSPR (Monthly Share Purchase Ratio)
  - Price change correlation
  - Historical context and averages
  - Sentiment classification (bullish/bearish/neutral)

### 2. Insider Transactions Analysis (`get_insider_transactions`)
- **Purpose**: Provides detailed transaction-level data about insider trading activities
- **Data Source**: Finnhub Insider Transactions API
- **Key Metrics**:
  - Net flow (buy vs sell)
  - Total transaction values
  - Individual transaction details
  - Transaction types and codes
  - Unique insider count

### 3. IPO Calendar Analysis (`get_ipo_calendar`)
- **Purpose**: Tracks upcoming and recent IPOs to identify new investment opportunities
- **Data Source**: Finnhub IPO Calendar API
- **Key Metrics**:
  - Upcoming IPOs with expected pricing
  - Recent completed IPOs and their performance
  - Total IPO value and average size
  - Tech sector IPO trends
  - Market sentiment analysis

### 4. Company Earnings Analysis (`get_company_earnings`)
- **Purpose**: Analyzes quarterly earnings performance and analyst estimates
- **Data Source**: Finnhub Company Earnings API
- **Key Metrics**:
  - EPS vs analyst estimates
  - Earnings surprise percentages
  - Historical earnings trends
  - Beat/miss consistency
  - Performance insights

### 5. Company News Analysis (`get_company_news`)
- **Purpose**: Tracks recent news and press releases for sentiment analysis
- **Data Source**: Finnhub Company News API
- **Key Metrics**:
  - News sentiment classification
  - Recent headlines and summaries
  - Source credibility tracking
  - Market impact analysis
  - Investment considerations

### 6. Company Profile Analysis (`get_company_profile`)
- **Purpose**: Provides comprehensive company fundamentals and business information
- **Data Source**: Finnhub Company Profile API
- **Key Metrics**:
  - Company basic information and identifiers
  - Financial metrics (market cap, shares outstanding)
  - Industry classification and exchange details
  - Contact information and website
  - Investment insights and risk assessment

### 7. Market Status Analysis (`get_market_status`)
- **Purpose**: Tracks real-time market hours and trading sessions
- **Data Source**: Finnhub Market Status API
- **Key Metrics**:
  - Market open/closed status
  - Trading hours and timezone information
  - Holiday schedules and market closures
  - Trading insights and timing considerations

## API Endpoints

### Enhanced Tools Available

Both functions are available as enhanced tools in the Grok4 API:

```typescript
// Insider Sentiment Tool
{
  name: 'get_insider_sentiment',
  description: 'Get insider trading sentiment data from Finnhub API...',
  parameters: {
    symbol: string,      // Stock symbol (e.g., MSTR, COIN, NVDA)
    from?: string,       // Start date (YYYY-MM-DD)
    to?: string          // End date (YYYY-MM-DD)
  }
}

// Insider Transactions Tool
{
  name: 'get_insider_transactions',
  description: 'Get detailed insider trading transactions from Finnhub API...',
  parameters: {
    symbol: string,      // Stock symbol (e.g., MSTR, COIN, NVDA)
    from?: string,       // Start date (YYYY-MM-DD)
    to?: string          // End date (YYYY-MM-DD)
  }
}

// IPO Calendar Tool
{
  name: 'get_ipo_calendar',
  description: 'Get upcoming and recent IPO calendar data from Finnhub API...',
  parameters: {
    from?: string,       // Start date (YYYY-MM-DD)
    to?: string          // End date (YYYY-MM-DD)
  }
}

// Company Earnings Tool
{
  name: 'get_company_earnings',
  description: 'Get company earnings data from Finnhub API...',
  parameters: {
    symbol: string       // Stock symbol (e.g., MSTR, COIN, NVDA)
  }
}

// Company News Tool
{
  name: 'get_company_news',
  description: 'Get company news and press releases from Finnhub API...',
  parameters: {
    symbol: string,      // Stock symbol (e.g., MSTR, COIN, NVDA)
    from?: string,       // Start date (YYYY-MM-DD)
    to?: string          // End date (YYYY-MM-DD)
  }
}

// Company Profile Tool
{
  name: 'get_company_profile',
  description: 'Get comprehensive company profile data from Finnhub API...',
  parameters: {
    symbol: string       // Stock symbol (e.g., MSTR, COIN, NVDA)
  }
}

// Market Status Tool
{
  name: 'get_market_status',
  description: 'Get real-time market status and trading information from Finnhub API...',
  parameters: {
    exchange?: string    // Exchange to check (default: US)
  }
}
```

## Data Analysis

### MSPR Interpretation
- **MSPR > 0.5**: Strong insider buying (bullish signal)
- **MSPR < -0.5**: Strong insider selling (bearish signal)
- **MSPR near 0**: Neutral or mixed activity

### Transaction Flow Analysis
- **Net Flow > $1M**: Bullish sentiment
- **Net Flow < -$1M**: Bearish sentiment
- **Net Flow near 0**: Neutral activity

### IPO Calendar Analysis
- **Upcoming IPOs**: Track expected listings and pricing
- **Completed IPOs**: Monitor recent performance and market reception
- **Tech Sector Focus**: Identify AI, software, and digital IPOs
- **Market Trends**: Analyze IPO volume and average size

### Company Earnings Analysis
- **EPS Performance**: Compare actual vs estimated earnings
- **Surprise Analysis**: Track earnings beats and misses
- **Historical Trends**: Analyze consistency over time
- **Beat Rate**: Calculate percentage of quarters beating estimates

### Company News Analysis
- **Sentiment Classification**: Positive, negative, or neutral news
- **Recent Headlines**: Top news items with summaries
- **Source Tracking**: Monitor news source credibility
- **Market Impact**: Assess potential price impact

### Company Profile Analysis
- **Basic Information**: Company name, ticker, exchange, country
- **Financial Metrics**: Market cap, shares outstanding, IPO date
- **Industry Classification**: Sector analysis and business focus
- **Risk Assessment**: Market cap categories and company maturity

### Market Status Analysis
- **Real-time Status**: Open/closed market indicators
- **Trading Hours**: Session times and timezone information
- **Holiday Tracking**: Market closures and special schedules
- **Trading Insights**: Timing considerations and opportunities

## Example Usage

### Via Grok4 API
```bash
curl -X POST http://localhost:3000/api/grok4 \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the insider sentiment for MSTR?",
    "stream": false
  }'
```

### Direct Function Calls
```typescript
// Get insider sentiment
const sentiment = await getInsiderSentiment('MSTR', '2024-01-01', '2024-12-31');

// Get insider transactions
const transactions = await getInsiderTransactions('MSTR', '2024-01-01', '2024-12-31');

// Get IPO calendar
const ipoCalendar = await getIPOCalendar('2024-01-01', '2024-12-31');

// Get company earnings
const earnings = await getCompanyEarnings('NVDA');

// Get company news
const news = await getCompanyNews('TSLA', '2024-01-01', '2024-12-31');

// Get company profile
const profile = await getCompanyProfile('AAPL');

// Get market status
const marketStatus = await getMarketStatus('US');

## Error Handling

- **API Key Missing**: Graceful fallback with informative message
- **No Data Available**: Clear indication when no insider data exists
- **API Errors**: Proper error logging and user-friendly messages
- **Rate Limiting**: Built-in timeout handling (5 seconds per request)

## Implementation Details

### Files Modified
- `src/app/api/grok4/route.ts` - Main API route with enhanced tools
- Added `getInsiderSentiment()` function
- Added `getInsiderTransactions()` function
- Added `getIPOCalendar()` function
- Added `getCompanyEarnings()` function
- Added `getCompanyNews()` function
- Added `getCompanyProfile()` function
- Added `getMarketStatus()` function
- Updated tool call handlers for both streaming and non-streaming responses

### Dependencies
- Finnhub API key required (`FINNHUB_API_KEY` environment variable)
- Existing fetch utilities and error handling patterns

## Testing

Test scripts are included to verify the Finnhub API integration:

```bash
# Test insider trading APIs
node test-insider-api.js

# Test IPO calendar API
node test-ipo-api.js

# Test company earnings API
node test-earnings-api.js

# Test company news API
node test-news-api.js

# Test company profile API
node test-profile-api.js

# Test market status API
node test-market-status-api.js
```

## Future Enhancements

1. **Caching**: Implement Redis caching for frequently requested data
2. **Alerts**: Real-time alerts for significant insider moves, new IPOs, and earnings surprises
3. **Historical Analysis**: Longer-term trend analysis for insider activity, IPO performance, and earnings consistency
4. **Cross-Reference**: Combine with other market data sources for comprehensive analysis
5. **Portfolio Integration**: Track insider activity, IPO opportunities, and earnings across user portfolios
6. **IPO Performance Tracking**: Monitor post-IPO performance and lock-up expirations
7. **Sector Analysis**: Deeper analysis of tech vs non-tech trends across all data types
8. **Earnings Calendar**: Track upcoming earnings dates and analyst estimates
9. **News Sentiment**: Advanced sentiment analysis using NLP for more accurate classification
10. **Correlation Analysis**: Identify relationships between insider activity, earnings, and news sentiment
11. **Company Fundamentals**: Track company profiles and market status for comprehensive analysis
12. **Market Timing**: Use market status data for optimal trading timing

## Rate Limiting & Performance

### Finnhub API Limits
- **Global Rate Limit**: 30 API calls per second across all endpoints
- **Plan Limits**: Additional limits based on subscription tier
- **Caching Strategy**: 5-minute cache for frequently requested data
- **Rate Limit Handling**: Automatic queuing and retry logic

### Optimization Strategies
- **Request Batching**: Group multiple requests where possible
- **Cache First**: Check cache before making API calls
- **Smart Rate Limiting**: Global rate limit tracking across all functions
- **Timeout Handling**: 5-second timeout per request with fallbacks

### Implementation Details
```typescript
// Global rate limiting (30 calls/second)
const FINNHUB_RATE_LIMIT = 30;
const FINNHUB_RATE_WINDOW = 1000; // 1 second

// Caching (5 minute TTL)
const FINNHUB_CACHE_TTL = 5 * 60 * 1000;

// Automatic rate limit waiting
await waitForFinnhubRateLimit();
```

## Security Considerations

- API keys are stored in environment variables
- Input validation for all parameters
- Rate limiting to prevent API abuse
- Error messages don't expose sensitive information
- Request queuing to respect API limits 