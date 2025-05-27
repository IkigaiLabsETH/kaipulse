'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

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
  total_volume: number;
  market_cap_rank: number;
  total_value_locked?: {
    usd: number;
  };
  watchlist_portfolio_users: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  platforms?: { [key: string]: string };
}

type DexscreenerToken = {
  address: string;
  name: string;
  symbol: string;
  image: string;
  totalLiquidity: number;
  pools: unknown[];
  current_price?: number;
  market_cap?: number;
  total_liquidity?: number;
  liquidity_ratio?: number;
  market_cap_rank?: number;
  priceUsd?: number;
  marketCap?: number;
  totalVolume?: number;
  poolsCount?: number;
  liquidityRatio?: number;
  chainId?: string;
};

export default function LiquidityPage() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [useDexscreener, setUseDexscreener] = useState(false);
  const [dexscreenerData, setDexscreenerData] = useState<DexscreenerToken[]>([]);
  const [dexLoading, setDexLoading] = useState(false);
  const [selectedChain, setSelectedChain] = useState('solana');
  const supportedChains = [
    { id: 'solana', label: 'Solana' },
  ];

  const fetchData = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/coingecko?page=${pageNum}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (pageNum === 1) {
        setTokens(data.tokens);
      } else {
        setTokens(prev => [...prev, ...data.tokens]);
      }
      setHasMore(data.hasMore);
    } catch {
      setError('An error occurred');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  // Fetch CoinGecko data on mount
  useEffect(() => {
    if (!useDexscreener) fetchData(1);
  }, [fetchData, useDexscreener]);

  // Fetch DEXScreener best buys when toggled or chain changes
  useEffect(() => {
    if (!useDexscreener) return;
    setDexLoading(true);
    setError(null);
    fetch(`/api/dexscreener/best-buys?chain=${selectedChain}`)
      .then(res => res.json())
      .then((tokens) => {
        if (!Array.isArray(tokens)) {
          setDexscreenerData([]);
          setDexLoading(false);
          return;
        }
        setDexscreenerData(tokens as DexscreenerToken[]);
        setDexLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch DEXScreener data');
        setDexLoading(false);
      });
  }, [useDexscreener, selectedChain]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(num);
  };

  function isDexscreenerToken(token: DexscreenerToken | TokenData): token is DexscreenerToken {
    return (token as DexscreenerToken).address !== undefined;
  }

  function shortenAddress(address: string) {
    return address.slice(0, 6) + '...' + address.slice(-4);
  }

  const renderCards = (data: DexscreenerToken[] | TokenData[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((token) => {
        let displayName: string = '';
        if ('symbol' in token && typeof token.symbol === 'string' && token.symbol) {
          displayName = token.symbol;
        } else if ('label' in token && typeof token.label === 'string' && token.label) {
          displayName = token.label;
        } else if ('address' in token && typeof token.address === 'string' && token.address) {
          displayName = shortenAddress(token.address);
        } else {
          displayName = '';
        }
        // Only use valid image URLs for next/image
        const isValidImage = typeof token.image === 'string' && (token.image.startsWith('http://') || token.image.startsWith('https://'));
        const fallbackImage = '/default-token.png'; // Place a default image in your public/ directory
        const imageSrc = isValidImage ? token.image : fallbackImage;
        // DEXScreener link (only for DEXScreener tokens)
        let cardHref: string | undefined = undefined;
        if (
          isDexscreenerToken(token) &&
          typeof token.address === 'string' &&
          typeof token.chainId === 'string'
        ) {
          cardHref = `https://dexscreener.com/${token.chainId}/${token.address}`;
        }
        const cardContent = (
          <>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={imageSrc}
                alt={token.name}
                width={40}
                height={40}
                className="rounded-full border-2 border-yellow-500"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-yellow-500">{displayName}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{token.symbol}</span>
                  {'market_cap_rank' in token && token.market_cap_rank && (
                    <span className="text-gray-500 text-xs">#{token.market_cap_rank}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="text-gray-400">
                Price:{' '}
                <span className="text-white font-medium">
                  {isDexscreenerToken(token)
                    ? token.priceUsd !== null && token.priceUsd !== undefined
                      ? formatNumber(token.priceUsd)
                      : 'N/A'
                    : 'current_price' in token && token.current_price !== undefined
                    ? formatNumber(token.current_price)
                    : 'N/A'}
                </span>
              </div>
              <div className="text-gray-400">
                Market Cap:{' '}
                <span className="text-white font-medium">
                  {isDexscreenerToken(token)
                    ? token.marketCap !== null && token.marketCap !== undefined
                      ? formatNumber(token.marketCap)
                      : 'N/A'
                    : 'market_cap' in token && token.market_cap !== undefined
                    ? formatNumber(token.market_cap)
                    : 'N/A'}
                </span>
              </div>
              <div className="text-gray-400">
                24h Volume:{' '}
                <span className="text-white font-medium">
                  {isDexscreenerToken(token)
                    ? token.totalVolume !== undefined
                      ? formatNumber(token.totalVolume)
                      : 'N/A'
                    : 'total_liquidity' in token && token.total_liquidity !== undefined
                    ? formatNumber(token.total_liquidity)
                    : 'N/A'}
                </span>
              </div>
              <div className="text-gray-400">
                Liquidity (TVL):{' '}
                <span className="text-white font-medium">
                  {isDexscreenerToken(token)
                    ? token.totalLiquidity !== undefined
                      ? formatNumber(token.totalLiquidity)
                      : 'N/A'
                    : 'total_liquidity' in token && token.total_liquidity !== undefined
                    ? formatNumber(token.total_liquidity)
                    : 'N/A'}
                </span>
              </div>
              <div className="text-gray-400">
                Pools:{' '}
                <span className="text-white font-medium">
                  {isDexscreenerToken(token)
                    ? token.poolsCount !== undefined
                      ? token.poolsCount
                      : 'N/A'
                    : 'N/A'}
                </span>
              </div>
              <div className="text-gray-400">
                Liquidity Ratio:{' '}
                <span className="text-yellow-500 font-medium">
                  {isDexscreenerToken(token)
                    ? token.liquidityRatio !== undefined && token.liquidityRatio !== null
                      ? (token.liquidityRatio * 100).toFixed(2) + '%'
                      : 'N/A'
                    : 'liquidity_ratio' in token && token.liquidity_ratio !== undefined && token.liquidity_ratio !== null
                    ? (token.liquidity_ratio * 100).toFixed(2) + '%'
                    : 'N/A'}
                </span>
              </div>
            </div>
          </>
        );
        return (
          <div key={isDexscreenerToken(token) ? token.address : token.id}>
            {cardHref ? (
              <a
                href={cardHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1c1f26] border-2 border-yellow-500 rounded-none p-6 transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:-translate-x-[3px] hover:-translate-y-[3px] block"
              >
                {cardContent}
              </a>
            ) : (
              <div
                className="bg-[#1c1f26] border-2 border-yellow-500 rounded-none p-6 transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:-translate-x-[3px] hover:-translate-y-[3px]"
              >
                {cardContent}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  if (loading || dexLoading) {
    return (
      <div className="min-h-screen bg-black text-white p-8 font-mono">
        <div className="flex justify-center items-center min-h-[200px] text-yellow-400">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8 font-mono">
        <div className="text-center text-red-500 p-8">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Toggle Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setUseDexscreener(false)}
              className={`px-6 py-2 font-bold border-2 rounded-none transition-all duration-200 mr-2 ${!useDexscreener ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]' : 'bg-black text-yellow-500 border-yellow-500'}`}
            >
              CoinGecko
            </button>
            <button
              onClick={() => setUseDexscreener(true)}
              className={`px-6 py-2 font-bold border-2 rounded-none transition-all duration-200 ${useDexscreener ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]' : 'bg-black text-yellow-500 border-yellow-500'}`}
            >
              DEXScreener
            </button>
          </div>

          {/* Chain Button Group (DEXScreener only) */}
          {useDexscreener && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {supportedChains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => setSelectedChain(chain.id)}
                  className={`px-5 py-2 font-bold border-2 rounded-none transition-all duration-200 uppercase tracking-wide text-sm
                    ${selectedChain === chain.id
                      ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]'
                      : 'bg-black text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-black'}
                  `}
                >
                  {chain.label}
                </button>
              ))}
            </div>
          )}

          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light">Token Analysis • Market Liquidity • Trading Metrics</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                Token Liquidity Analysis
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic">Top tokens by liquidity ratio</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Cards */}
          {useDexscreener ? renderCards(dexscreenerData) : renderCards(tokens)}

          {/* Load More Button (CoinGecko only) */}
          {!useDexscreener && hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="px-8 py-3 bg-yellow-500 text-black font-bold border-2 border-yellow-500 rounded-none transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:-translate-x-[3px] hover:-translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingMore ? 'Loading...' : 'Load More Tokens'}
              </button>
            </div>
          )}

          {/* Educational Section */}
          <div className="space-y-12">
            <div className="bg-[#1c1f26] border-2 border-yellow-500 rounded-none p-8 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">Understanding Liquidity Metrics</h2>
              <div className="mb-6 text-yellow-400 text-sm">
                <strong>Note:</strong> For true on-chain liquidity (pool reserves), use DEX analytics platforms like
                {' '}
                <a href="https://www.geckoterminal.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">GeckoTerminal</a>
                {' '}or{' '}
                <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">DEXScreener</a>.
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">Why Liquidity/Market Cap Ratio Matters</h3>
                  <p className="text-white/90 leading-relaxed">
                    The liquidity to market cap ratio is a crucial metric that reveals the true trading efficiency of a token. A high ratio indicates that a token has substantial liquidity relative to its market cap, suggesting:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-white/90">
                    <li>Lower price impact for large trades</li>
                    <li>Better price stability during market volatility</li>
                    <li>Higher confidence from institutional investors</li>
                    <li>Reduced risk of price manipulation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">Types of Liquidity Pools</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-yellow-500/90">Locked Liquidity Pools</h4>
                      <p className="text-white/90 leading-relaxed">
                        Locked liquidity pools are a security feature where liquidity providers&apos; tokens are locked in a smart contract for a predetermined period. This prevents:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-white/90">
                        <li>Rug pulls and sudden liquidity removal</li>
                        <li>Price manipulation through liquidity withdrawal</li>
                        <li>Short-term speculation by liquidity providers</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-yellow-500/90">Uniswap V3 vs V2 Pools</h4>
                      <p className="text-white/90 leading-relaxed">
                        Uniswap V3 introduced concentrated liquidity, a significant improvement over V2:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-white/90">
                        <li>V2: Liquidity spread across all prices (0 to ∞)</li>
                        <li>V3: Liquidity concentrated in specific price ranges</li>
                        <li>V3: Up to 4000x more capital efficiency</li>
                        <li>V3: Better price discovery and reduced slippage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">Best Practices for Liquidity Analysis</h3>
                  <ul className="list-disc list-inside space-y-2 text-white/90">
                    <li>Look for tokens with liquidity locked for extended periods (6+ months)</li>
                    <li>Prefer V3 pools for major tokens due to better capital efficiency</li>
                    <li>Consider the distribution of liquidity across different DEXs</li>
                    <li>Monitor liquidity depth at different price levels</li>
                    <li>Check for liquidity concentration in specific price ranges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
