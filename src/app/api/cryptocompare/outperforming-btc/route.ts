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

export const revalidate = 600; // Revalidate every 10 minutes

export async function GET() {
  try {
    // Step 1: Fetch top 100 coins against BTC to find outperformers and their performance vs BTC.
    const btcMarketResponse = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d,30d`
    );
    if (!btcMarketResponse.ok) {
      throw new Error(`CoinGecko API request (BTC) failed with status ${btcMarketResponse.status}`);
    }
    const btcMarketData: CoinGeckoMarket[] = await btcMarketResponse.json();

    // Step 2: Filter for coins that are outperforming BTC in the last 24 hours.
    const outperformingVsBtc = btcMarketData.filter(
      (coin) => coin.price_change_percentage_24h > 0
    );

    if (outperformingVsBtc.length === 0) {
      return NextResponse.json([]);
    }

    // Step 3: Get the USD prices for these specific coins.
    const coinIds = outperformingVsBtc.map((coin) => coin.id).join(',');
    const usdPriceResponse = await fetch(
      `${COINGECKO_API_URL}/simple/price?ids=${coinIds}&vs_currencies=usd`
    );
    if (!usdPriceResponse.ok) {
      throw new Error(`CoinGecko simple price API request failed with status ${usdPriceResponse.status}`);
    }
    const usdPrices: { [key: string]: { usd: number } } = await usdPriceResponse.json();

    // Step 4: Combine the BTC-denominated performance data with USD prices.
    const result = outperformingVsBtc.map((coin) => ({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: coin.image,
      // Use the fetched USD price for display
      current_price: usdPrices[coin.id]?.usd ?? 0,
      market_cap_rank: coin.market_cap_rank,
      // The percentage changes are correctly denominated in BTC from the first call
      price_change_percentage_24h: coin.price_change_percentage_24h,
      price_change_percentage_7d_in_currency: coin.price_change_percentage_7d_in_currency,
      price_change_percentage_30d_in_currency: coin.price_change_percentage_30d_in_currency,
    }));

    return NextResponse.json(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in /api/cryptocompare/outperforming-btc:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: "Failed to fetch cryptocurrency data.", details: errorMessage },
      { status: 500 }
    );
  }
} 