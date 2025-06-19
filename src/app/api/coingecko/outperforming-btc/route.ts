import { NextResponse } from 'next/server';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

interface CoinGeckoMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null;
  last_updated: string;
  price_change_percentage_7d_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
}

export async function GET() {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d,30d`
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API request failed with status ${response.status}`);
    }

    const data: CoinGeckoMarket[] = await response.json();

    const bitcoin = data.find((coin) => coin.id === 'bitcoin');
    if (!bitcoin) {
      throw new Error('Bitcoin data not found in the top 100');
    }

    const btcPerformance = bitcoin.price_change_percentage_24h;

    const outperformingAltcoins = data.filter(
      (coin) =>
        coin.id !== 'bitcoin' &&
        coin.price_change_percentage_24h > btcPerformance
    ).map(coin => ({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      market_cap_rank: coin.market_cap_rank,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      price_change_percentage_7d_in_currency: coin.price_change_percentage_7d_in_currency,
      price_change_percentage_30d_in_currency: coin.price_change_percentage_30d_in_currency,
    }));

    return NextResponse.json(outperformingAltcoins);
  } catch (error) {
    // In a real app, you'd use a logging service.
    // console.error('Error fetching outperforming altcoins:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 