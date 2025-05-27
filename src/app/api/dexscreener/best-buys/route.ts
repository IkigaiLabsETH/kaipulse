import { NextResponse } from 'next/server';

type BoostedToken = {
  tokenAddress: string;
  chainId: string;
  icon?: string;
  label?: string;
  symbol?: string;
};

type Pool = {
  liquidity?: { usd?: string | number };
  volume?: { h24?: string | number };
  priceUsd?: string;
  marketCap?: string | number;
  info?: { imageUrl?: string };
};

export async function GET(request: Request) {
  // 1. Fetch trending/boosted tokens
  const url = 'https://api.dexscreener.com/token-boosts/top/v1';
  try {
    const { searchParams } = new URL(request.url);
    const chainParam = searchParams.get('chain'); // e.g., 'solana,ethereum'
    const allowedChains = chainParam
      ? chainParam.split(',').map((c) => c.trim().toLowerCase())
      : ['solana']; // default

    const res = await fetch(url);
    if (!res.ok) throw new Error('DEXScreener API error');
    const topTokens: BoostedToken[] = await res.json();

    // 2. For each token, fetch pool data and aggregate metrics
    const enriched = await Promise.all(
      topTokens.slice(0, 50).map(async (token) => {
        const poolRes = await fetch(
          `https://api.dexscreener.com/token-pairs/v1/${token.chainId}/${token.tokenAddress}`
        );
        if (!poolRes.ok) return null;
        const pools: Pool[] = await poolRes.json();

        if (!pools.length) return null; // skip tokens with no pools

        const totalLiquidity = pools.reduce(
          (sum, pool) => sum + (Number(pool.liquidity?.usd) || 0),
          0
        );
        const totalVolume = pools.reduce(
          (sum, pool) => sum + (Number(pool.volume?.h24) || 0),
          0
        );
        const largestPool = pools.reduce(
          (max, pool) =>
            (Number(pool.liquidity?.usd) || 0) > (Number(max.liquidity?.usd) || 0)
              ? pool
              : max,
          pools[0] || {}
        );
        const priceUsd = largestPool.priceUsd ? Number(largestPool.priceUsd) : null;
        const marketCap = largestPool.marketCap ? Number(largestPool.marketCap) : null;
        const liquidityRatio =
          marketCap && marketCap > 0 ? totalLiquidity / marketCap : null;
        const icon = token.icon || (largestPool.info && largestPool.info.imageUrl) || '';

        // Only return tokens with at least one valid metric
        if (!priceUsd && !marketCap && !totalLiquidity && !totalVolume) return null;

        return {
          address: token.tokenAddress,
          chainId: token.chainId,
          image: icon,
          name: token.label || token.symbol || '',
          symbol: token.symbol || '',
          priceUsd,
          marketCap,
          totalLiquidity,
          totalVolume,
          poolsCount: pools.length,
          liquidityRatio,
        };
      })
    );

    // 3. Filter and rank tokens
    const filtered = enriched
      .filter((t): t is NonNullable<typeof t> => t !== null)
      .filter((t) => allowedChains.includes(t.chainId)) // Filter by allowed chains
      .filter(
        (t) =>
          t.totalLiquidity > 200_000 && // min $200k liquidity
          t.totalVolume > 50_000 &&     // min $50k 24h volume
          t.liquidityRatio && t.liquidityRatio > 0.02 && // min 2% liquidity/market cap
          t.marketCap && t.marketCap > 1_000_000 && t.marketCap < 50_000_000 && // $1M < MC < $50M
          t.poolsCount && t.poolsCount > 1 // at least 2 pools
      )
      .sort((a, b) => (b.liquidityRatio ?? 0) - (a.liquidityRatio ?? 0));

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch DEXScreener best buys' }, { status: 500 });
  }
} 