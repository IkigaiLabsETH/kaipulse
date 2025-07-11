import { NextResponse } from 'next/server';

type StaticData = {
    [key: string]: {
        ivRank: number;
        earningsDate: string;
    };
};

// Mock data for fields not available in Yahoo Finance
const staticData: StaticData = {
  TSLA: {
    ivRank: 27,
    earningsDate: "2025-07-23",
  },
  MSTR: {
    ivRank: 2,
    earningsDate: "2025-07-29",
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker')?.toUpperCase();

  if (!ticker) {
    return NextResponse.json({ error: 'Ticker is required' }, { status: 400 });
  }

  try {
    // Yahoo Finance public API endpoint (no API key required)
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`;
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ error: `Yahoo Finance API error: ${response.status}` }, { status: 502 });
    }
    const data = await response.json();
    const quote = data?.quoteResponse?.result?.[0];
    if (!quote) {
      return NextResponse.json({ error: `No data found for ticker: ${ticker}` }, { status: 404 });
    }

    const spotPrice = typeof quote.regularMarketPrice === 'number' ? quote.regularMarketPrice : null;

    const finalData = {
      spotPrice,
      ...staticData[ticker] // Merge with static data for IV Rank and earnings
    };

    return NextResponse.json(finalData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch market data', details: String(error) }, { status: 500 });
  }
} 