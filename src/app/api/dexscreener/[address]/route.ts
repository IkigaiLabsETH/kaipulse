import { NextResponse } from 'next/server';

type Pool = {
  priceUsd?: string;
  liquidity?: { usd?: string | number };
  volume?: { h24?: string | number };
  marketCap?: string | number;
};

export async function GET(
  req: Request,
  { params }: { params: { address: string } }
) {
  const { address } = params;
  const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('DEXScreener API error');
    const data = await res.json();

    const pools: Pool[] = data.pairs;

    // Aggregate metrics
    const totalLiquidity = pools.reduce(
      (sum, pool) => sum + (Number(pool.liquidity?.usd) || 0),
      0
    );
    const totalVolume = pools.reduce(
      (sum, pool) => sum + (Number(pool.volume?.h24) || 0),
      0
    );
    // Use the largest pool's price as the reference price
    const largestPool = pools.reduce(
      (max, pool) =>
        (Number(pool.liquidity?.usd) || 0) > (Number(max.liquidity?.usd) || 0)
          ? pool
          : max,
      pools[0] || {}
    );
    const priceUsd = largestPool.priceUsd ? Number(largestPool.priceUsd) : null;
    // Use the largest pool's market cap if available
    const marketCap = largestPool.marketCap ? Number(largestPool.marketCap) : null;
    const liquidityRatio =
      marketCap && marketCap > 0 ? totalLiquidity / marketCap : null;

    return NextResponse.json({
      priceUsd,
      marketCap,
      totalLiquidity,
      totalVolume,
      poolsCount: pools.length,
      liquidityRatio,
      pools,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch DEX liquidity' }, { status: 500 });
  }
} 