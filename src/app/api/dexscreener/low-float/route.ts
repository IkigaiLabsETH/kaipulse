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

export async function GET(_request: Request) {
  // 1. Fetch trending/boosted tokens
  const url = 'https://api.dexscreener.com/token-boosts/top/v1';
  try {
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

    // 3. Filter for low-float meme coins
    const filtered = enriched
      .filter((t): t is NonNullable<typeof t> => t !== null)
      .filter((t) => t.chainId === 'solana')
      .filter(
        (t) =>
          t.marketCap &&
          t.marketCap > 100_000 &&
          t.marketCap < 2_000_000 && // $100k–$2M market cap
          t.totalLiquidity > 10_000 &&
          t.totalLiquidity < 100_000 && // $10k–$100k liquidity
          t.poolsCount && t.poolsCount > 0
      )
      .sort((a, b) => (a.marketCap ?? 0) - (b.marketCap ?? 0)) // Sort by lowest market cap
      .slice(0, 4); // Top 4

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch low-float tokens' }, { status: 500 });
  }
} 