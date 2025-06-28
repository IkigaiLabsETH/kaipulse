import { NextResponse } from 'next/server';

type StaticData = {
    [key: string]: {
        ivRank: number;
        earningsDate: string;
    };
};

// Mock data for fields not available in Alpha Vantage Free Tier
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
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!apiKey) {
      return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  if (!ticker) {
    return NextResponse.json({ error: 'Ticker is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=QUOTE&symbol=${ticker}&apikey=${apiKey}`);
    const data = await response.json();

    const quote = data['Global Quote'];
    if (!quote || Object.keys(quote).length === 0) {
      if (data['Information']) {
        // This will catch rate-limit errors or invalid key messages from Alpha Vantage
        return NextResponse.json({ error: `Alpha Vantage Error: ${data['Information']}` }, { status: 400 });
      }
      return NextResponse.json({ error: 'No data found for this ticker from Alpha Vantage.' }, { status: 404 });
    }

    const spotPrice = parseFloat(quote['05. price']);

    const finalData = {
      spotPrice,
      ...staticData[ticker] // Merge with static data for IV Rank and earnings
    };

    return NextResponse.json(finalData);

  } catch {
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
} 