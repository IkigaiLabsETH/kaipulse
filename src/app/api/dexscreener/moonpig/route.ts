import { NextResponse } from 'next/server';

const MOONPIG_ADDRESS = 'Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump';

export async function GET() {
  try {
    // Fetch token data from DEXScreener
    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${MOONPIG_ADDRESS}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from DEXScreener');
    }

    const data = await response.json();
    
    // Extract the first pair (usually the most liquid one)
    const pair = data.pairs?.[0];
    
    if (!pair) {
      return NextResponse.json({ error: 'No trading pairs found' }, { status: 404 });
    }

    // Format the response with relevant data
    const formattedData = {
      name: pair.baseToken?.name || 'Moonpig',
      symbol: pair.baseToken?.symbol || 'MOONPIG',
      address: MOONPIG_ADDRESS,
      price: {
        usd: pair.priceUsd,
        change24h: pair.priceChange?.h24,
      },
      liquidity: {
        usd: pair.liquidity?.usd,
      },
      volume: {
        h24: pair.volume?.h24,
      },
      dex: pair.dexId,
      pair: {
        base: pair.baseToken?.symbol,
        quote: pair.quoteToken?.symbol,
      },
      timestamp: new Date().toISOString(),
    };

    // Set cache control headers for 30 seconds
    return NextResponse.json(formattedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=59',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch Moonpig data' },
      { status: 500 }
    );
  }
} 