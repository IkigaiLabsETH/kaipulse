import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export const revalidate = 3600; // Revalidate every hour

interface CoinGeckoData {
  prices: [number, number][];
}

interface ChartData {
  date: string;
  price: number;
  twoYearMA: number | null;
  twoYearMAx5: number | null;
}

const MOVING_AVERAGE_DAYS = 365 * 2;

// The historical data is now assumed to be an array of objects: { time, open, high, low, close }
// We convert it to [timestamp_ms, price] for consistency and filter out bad data.
function processHistoricalData(data: { time: number; close: number }[]): [number, number][] {
    return data
        .filter(item => item && typeof item.time === 'number' && typeof item.close === 'number')
        .map(({ time, close }) => {
            return [time * 1000, close]; // convert timestamp to ms and take close price
        });
}

async function calculateMovingAverage(prices: [number, number][]): Promise<ChartData[]> {
  const chartData: ChartData[] = [];

  for (let i = 0; i < prices.length; i++) {
    const [date, price] = prices[i];
    
    let twoYearMA: number | null = null;
    let twoYearMAx5: number | null = null;

    if (i >= MOVING_AVERAGE_DAYS - 1) {
      const sum = prices
        .slice(i - (MOVING_AVERAGE_DAYS - 1), i + 1)
        .reduce((acc, [, p]) => acc + p, 0);
      twoYearMA = sum / MOVING_AVERAGE_DAYS;
      twoYearMAx5 = twoYearMA * 5;
    }

    chartData.push({
      date: new Date(date).toISOString().split('T')[0],
      price,
      twoYearMA,
      twoYearMAx5,
    });
  }

  return chartData;
}

export async function GET() {
  try {
    // 1. Load local historical data
    const filePath = path.join(process.cwd(), 'public', 'prices.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const rawHistoricalData: { time: number; close: number }[] = JSON.parse(fileContents);
    const historicalPrices = processHistoricalData(rawHistoricalData);

    // 2. Fetch recent data from CoinGecko
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`CoinGecko API request failed with status ${response.status}. Body: ${errorBody}`);
    }

    const recentData: CoinGeckoData = await response.json();
    if (!recentData || !recentData.prices) {
      throw new Error('Invalid data structure from CoinGecko API.');
    }

    // 3. Merge historical and recent data
    const combinedPricesMap = new Map<number, number>();
    
    const normalizeTimestamp = (ts: number) => {
        const d = new Date(ts);
        d.setUTCHours(0, 0, 0, 0);
        return d.getTime();
    };

    historicalPrices.forEach(([timestamp, price]) => {
        combinedPricesMap.set(normalizeTimestamp(timestamp), price);
    });

    recentData.prices
        .filter(p => p && typeof p[0] === 'number' && typeof p[1] === 'number')
        .forEach(([timestamp, price]) => {
            combinedPricesMap.set(normalizeTimestamp(timestamp), price);
        });
    
    const combinedPrices = Array.from(combinedPricesMap.entries()).sort((a, b) => a[0] - b[0]);

    // 4. Calculate moving averages on the full dataset
    const chartData = await calculateMovingAverage(combinedPrices);

    return NextResponse.json(chartData);

  } catch (error: any) {
    return NextResponse.json({ 
        error: 'Failed to process request.', 
        details: error.message 
    }, { status: 500 });
  }
} 