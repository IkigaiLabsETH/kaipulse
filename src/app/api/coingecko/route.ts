import { NextResponse } from 'next/server';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';
const CACHE_DURATION = 5 * 60; // 5 minutes in seconds
const TOKENS_PER_PAGE = 50;

interface TokenData {
  id: string;
  symbol: string;
  name: string;
  market_cap: number;
  total_liquidity: number;
  liquidity_ratio: number;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap_rank: number;
  total_value_locked?: {
    usd: number;
  };
  watchlist_portfolio_users: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
}

interface CoinGeckoToken {
  id: string;
  symbol: string;
  name: string;
  market_cap: number;
  total_volume: number;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  total_value_locked?: {
    usd: number;
  };
  watchlist_portfolio_users: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = TOKENS_PER_PAGE;
    const minLiquidity = parseFloat(searchParams.get('minLiquidity') || '1000000'); // Default 1M USD
    const minMarketCap = parseFloat(searchParams.get('minMarketCap') || '10000000'); // Default 10M USD

    // Fetch detailed market data
    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h&total_value_locked=true`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: {
          revalidate: CACHE_DURATION
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();

    // Calculate liquidity ratio and format data
    const formattedData: TokenData[] = data
      .map((token: CoinGeckoToken): TokenData => {
        // Calculate liquidity metrics
        const totalLiquidity = token.total_value_locked?.usd || token.total_volume;
        const liquidityRatio = totalLiquidity / (token.market_cap || 1);
        
        return {
          id: token.id,
          symbol: token.symbol.toUpperCase(),
          name: token.name,
          market_cap: token.market_cap,
          total_liquidity: totalLiquidity,
          liquidity_ratio: liquidityRatio,
          image: token.image,
          current_price: token.current_price,
          price_change_percentage_24h: token.price_change_percentage_24h,
          total_volume: token.total_volume,
          market_cap_rank: token.market_cap_rank,
          total_value_locked: token.total_value_locked,
          watchlist_portfolio_users: token.watchlist_portfolio_users,
          market_cap_change_percentage_24h: token.market_cap_change_percentage_24h,
          circulating_supply: token.circulating_supply,
          total_supply: token.total_supply,
          max_supply: token.max_supply
        };
      })
      .filter((token: TokenData) => 
        token.total_liquidity >= minLiquidity && 
        token.market_cap >= minMarketCap &&
        token.liquidity_ratio > 0
      )
      .sort((a: TokenData, b: TokenData) => b.liquidity_ratio - a.liquidity_ratio);

    return NextResponse.json({
      tokens: formattedData,
      hasMore: data.length === perPage,
      stats: {
        totalFiltered: formattedData.length,
        minLiquidity,
        minMarketCap
      }
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch token data' },
      { status: 500 }
    );
  }
} 