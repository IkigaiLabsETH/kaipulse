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
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = TOKENS_PER_PAGE;

    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h`,
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
    const formattedData: TokenData[] = data.map((token: CoinGeckoToken) => ({
      id: token.id,
      symbol: token.symbol.toUpperCase(),
      name: token.name,
      market_cap: token.market_cap,
      total_liquidity: token.total_volume,
      liquidity_ratio: token.total_volume / (token.market_cap || 1),
      image: token.image,
      current_price: token.current_price,
      price_change_percentage_24h: token.price_change_percentage_24h
    }));

    // Sort by liquidity ratio
    const sortedData = formattedData
      .filter(token => token.liquidity_ratio > 0)
      .sort((a, b) => b.liquidity_ratio - a.liquidity_ratio);

    return NextResponse.json({
      tokens: sortedData,
      hasMore: data.length === perPage
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch token data' },
      { status: 500 }
    );
  }
} 