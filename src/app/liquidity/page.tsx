'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRef } from 'react';

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

// Add DexscreenerPool type for pool data
type DexscreenerPool = {
  dexId?: string;
  baseToken?: { symbol?: string };
  quoteToken?: { symbol?: string };
  liquidity?: { usd?: string | number };
  volume?: { h24?: string | number };
  priceUsd?: string | number;
};

// Add Raydium and Jupiter SVG icons
const RaydiumIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#19D4FA"/>
    <path d="M16 7L25 25H7L16 7Z" fill="#fff"/>
  </svg>
);
const JupiterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#FFD166"/>
    <circle cx="16" cy="16" r="10" fill="#073763"/>
    <circle cx="16" cy="16" r="6" fill="#FFD166"/>
  </svg>
);

// Accordion component
function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-2 border-b border-yellow-700">
      <button
        className="w-full text-left py-3 px-2 font-bold text-yellow-400 flex items-center justify-between focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4 text-yellow-100 text-base">{children}</div>}
    </div>
  );
}

type MoonpigData = {
  name: string;
  symbol: string;
  address: string;
  price: { usd: number; change24h: number };
  liquidity: { usd: number };
  volume: { h24: number };
  dex: string;
  pair: { base: string; quote: string };
  timestamp: string;
};

export default function LiquidityPage() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [useDexscreener, setUseDexscreener] = useState(true);
  const [showPools, setShowPools] = useState(false);
  const [poolAddress, setPoolAddress] = useState('');
  const [poolData, setPoolData] = useState<DexscreenerPool[] | null>(null);
  const [poolLoading, setPoolLoading] = useState(false);
  const [poolError, setPoolError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [trendingTokens, setTrendingTokens] = useState<DexscreenerToken[]>([]);
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [trendingError, setTrendingError] = useState<string | null>(null);
  const [moonpigData, setMoonpigData] = useState<MoonpigData | null>(null);
  const [moonpigLoading, setMoonpigLoading] = useState(false);
  const [moonpigError, setMoonpigError] = useState<string | null>(null);

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

  // Fetch trending tokens when DEXScreener is selected
  useEffect(() => {
    if (!useDexscreener) return;
    setTrendingLoading(true);
    setTrendingError(null);
    fetch('/api/dexscreener/trending')
      .then(res => res.json())
      .then((tokens) => {
        if (!Array.isArray(tokens)) {
          setTrendingTokens([]);
          setTrendingLoading(false);
          return;
        }
        setTrendingTokens(tokens as DexscreenerToken[]);
        setTrendingLoading(false);
      })
      .catch(() => {
        setTrendingError('Failed to fetch trending tokens');
        setTrendingLoading(false);
      });
  }, [useDexscreener]);

  // Fetch Moonpig data
  useEffect(() => {
    if (!useDexscreener) return;
    
    const fetchMoonpigData = async () => {
      setMoonpigLoading(true);
      setMoonpigError(null);
      try {
        const response = await fetch('/api/dexscreener/moonpig');
        if (!response.ok) throw new Error('Failed to fetch Moonpig data');
        const data = await response.json();
        setMoonpigData(data);
      } catch {
        setMoonpigError('Failed to fetch Moonpig data');
        // Optionally log error to a logging service
      } finally {
        setMoonpigLoading(false);
      }
    };

    fetchMoonpigData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchMoonpigData, 30000);
    return () => clearInterval(interval);
  }, [useDexscreener]);

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

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => setCopiedAddress(null), 1500);
  };

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
        // For CoinGecko tokens, link to CoinGecko
        if (!isDexscreenerToken(token) && 'id' in token && typeof token.id === 'string') {
          cardHref = `https://www.coingecko.com/en/coins/${token.id}`;
        }
        // For DEXScreener tokens, show copy address button
        const showCopy = isDexscreenerToken(token) && typeof token.address === 'string';
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
                <h3 className="text-lg font-medium text-yellow-500 flex items-center gap-2">
                  {displayName}
                  {showCopy && (
                    <button
                      onClick={e => { e.stopPropagation(); e.preventDefault(); handleCopyAddress(token.address as string); }}
                      className="ml-2 px-2 py-1 text-xs bg-yellow-500 text-black rounded hover:bg-yellow-400 focus:outline-none border border-yellow-700"
                      title="Copy address"
                    >
                      {copiedAddress === token.address ? 'Copied!' : 'Copy'}
                    </button>
                  )}
                  {/* Raydium & Jupiter icons for Solana tokens */}
                  {isDexscreenerToken(token) && token.chainId === 'solana' && token.address && (
                    <span className="flex gap-1 ml-2">
                      <a
                        href={`https://raydium.io/swap/?inputCurrency=SOL&outputCurrency=${token.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Swap on Raydium"
                        className="hover:scale-110 transition-transform"
                      >
                        <RaydiumIcon />
                      </a>
                      <a
                        href={`https://jup.ag/swap/SOL-${token.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Swap on Jupiter"
                        className="hover:scale-110 transition-transform"
                      >
                        <JupiterIcon />
                      </a>
                    </span>
                  )}
                </h3>
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
              {/* Market Cap: Only show for CoinGecko tokens */}
              {!isDexscreenerToken(token) && (
                <div className="text-gray-400">
                  Market Cap:{' '}
                  <span className="text-white font-medium">
                    {'market_cap' in token && token.market_cap !== undefined
                      ? formatNumber(token.market_cap)
                      : 'N/A'}
                  </span>
                </div>
              )}
              {/* For DEXScreener tokens, show both TVL and 24h Volume. For CoinGecko, show TVL if available, else 24h Volume. */}
              {isDexscreenerToken(token) ? (
                <>
                  <div className="text-gray-400 font-bold">
                    Liquidity (TVL):{' '}
                    <span className="text-yellow-500 font-bold">
                      {token.totalLiquidity !== undefined
                        ? formatNumber(token.totalLiquidity)
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="text-gray-400 font-bold">
                    24h Volume:{' '}
                    <span className="text-yellow-500 font-bold">
                      {token.totalVolume !== undefined
                        ? formatNumber(token.totalVolume)
                        : 'N/A'}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {'total_value_locked' in token && token.total_value_locked && token.total_value_locked.usd ? (
                    <div className="text-gray-400 font-bold">
                      Liquidity (TVL):{' '}
                      <span className="text-yellow-500 font-bold">
                        {formatNumber(token.total_value_locked.usd)}
                      </span>
                    </div>
                  ) : (
                    <div className="text-gray-400 font-bold">
                      24h Volume:{' '}
                      <span className="text-yellow-500 font-bold">
                        {'total_volume' in token && token.total_volume !== undefined
                          ? formatNumber(token.total_volume)
                          : 'N/A'}
                      </span>
                    </div>
                  )}
                </>
              )}
              {/* Pools: Only for DEXScreener tokens */}
              {isDexscreenerToken(token) && (
                <div className="text-gray-400">
                  Pools:{' '}
                  <span className="text-white font-medium">
                    {token.poolsCount !== undefined
                      ? token.poolsCount
                      : 'N/A'}
                  </span>
                </div>
              )}
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

  // Handler for fetching pool data
  const handleFetchPools = async () => {
    setPoolLoading(true);
    setPoolError(null);
    setPoolData(null);
    try {
      const res = await fetch(`/api/dexscreener/pools?chain=solana&address=${poolAddress}`);
      const data = await res.json();
      if (data.error) {
        setPoolError(data.error);
      } else {
        setPoolData(data.pools);
      }
    } catch {
      setPoolError('Failed to fetch pool data');
    } finally {
      setPoolLoading(false);
    }
  };

  if ((!useDexscreener && loading) || (useDexscreener && trendingLoading)) {
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
          <div className="flex justify-center mb-8 gap-2">
            <button
              onClick={() => { setUseDexscreener(false); setShowPools(false); }}
              className={`px-6 py-2 font-bold border-2 rounded-none transition-all duration-200 mr-2 ${!useDexscreener && !showPools ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]' : 'bg-black text-yellow-500 border-yellow-500'}`}
            >
              CoinGecko
            </button>
            <button
              onClick={() => { setUseDexscreener(true); setShowPools(false); }}
              className={`px-6 py-2 font-bold border-2 rounded-none transition-all duration-200 mr-2 ${useDexscreener && !showPools ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]' : 'bg-black text-yellow-500 border-yellow-500'}`}
            >
              DEXScreener
            </button>
            <button
              onClick={() => { setShowPools(true); setUseDexscreener(false); }}
              className={`px-6 py-2 font-bold border-2 rounded-none transition-all duration-200 ${showPools ? 'bg-yellow-500 text-black border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]' : 'bg-black text-yellow-500 border-yellow-500'}`}
            >
              Pools
            </button>
          </div>

          {/* Pools UI */}
          {showPools && (
            <div className="max-w-xl mx-auto bg-[#181a20] border-2 border-yellow-500 rounded p-8 mb-12">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Track Token Pools (Solana)</h2>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter token address..."
                  value={poolAddress}
                  onChange={e => setPoolAddress(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-none border-2 border-yellow-500 bg-black text-white focus:outline-none"
                />
                <button
                  onClick={handleFetchPools}
                  className="px-6 py-2 bg-yellow-500 text-black font-bold border-2 border-yellow-500 rounded-none transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:-translate-x-[3px] hover:-translate-y-[3px]"
                  disabled={poolLoading || !poolAddress}
                >
                  {poolLoading ? 'Loading...' : 'Fetch Pools'}
                </button>
              </div>
              {poolError && <div className="text-red-500 mb-2">{poolError}</div>}
              {poolData && Array.isArray(poolData) && poolData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-yellow-100">
                    <thead>
                      <tr className="bg-[#232323] text-yellow-400">
                        <th className="px-4 py-2">DEX</th>
                        <th className="px-4 py-2">Pair</th>
                        <th className="px-4 py-2">Liquidity (USD)</th>
                        <th className="px-4 py-2">24h Volume</th>
                        <th className="px-4 py-2">Price (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {poolData.map((pool: DexscreenerPool, idx: number) => (
                        <tr key={idx} className="border-b border-yellow-900">
                          <td className="px-4 py-2">{pool.dexId || '-'}</td>
                          <td className="px-4 py-2">{pool.baseToken?.symbol} / {pool.quoteToken?.symbol}</td>
                          <td className="px-4 py-2">{pool.liquidity?.usd ? Number(pool.liquidity.usd).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : '-'}</td>
                          <td className="px-4 py-2">{pool.volume?.h24 ? Number(pool.volume.h24).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : '-'}</td>
                          <td className="px-4 py-2">{pool.priceUsd ? Number(pool.priceUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 6 }) : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : poolData && Array.isArray(poolData) && poolData.length === 0 ? (
                <div className="text-yellow-400">No pools found for this address.</div>
              ) : null}
            </div>
          )}

          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light">Token Analysis • Market Liquidity • Trading Metrics</p>
            <h1 className="text-center">
              <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                liquidity-first token explorer
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic">Top tokens by real liquidity, not fake market cap</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Cards */}
          {!useDexscreener && renderCards(tokens)}

          {/* Featured Meme Coin Section */}
          {useDexscreener && (
            <div className="mt-20 mb-20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Featured Meme Coin</h2>
              <div className="bg-[#1c1f26] border-2 border-yellow-500 rounded-none p-8 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <div className="flex items-center gap-6 mb-6">
                  <Image
                    src="/moonpig.jpg"
                    alt="Moonpig"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-yellow-500"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-500 flex items-center gap-3">
                      Moonpig
                      <button
                        onClick={() => handleCopyAddress('Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump')}
                        className="px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 focus:outline-none border border-yellow-700"
                        title="Copy address"
                      >
                        {copiedAddress === 'Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump' ? 'Copied!' : 'Copy Address'}
                      </button>
                      <span className="flex gap-2">
                        <a
                          href="https://raydium.io/swap/?inputCurrency=SOL&outputCurrency=Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Swap on Raydium"
                          className="hover:scale-110 transition-transform"
                        >
                          <RaydiumIcon />
                        </a>
                        <a
                          href="https://jup.ag/swap/SOL-Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Swap on Jupiter"
                          className="hover:scale-110 transition-transform"
                        >
                          <JupiterIcon />
                        </a>
                      </span>
                    </h3>
                    <p className="text-gray-400 mt-1">The most oinktastic meme coin on Solana</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Live Price Data</h4>
                    {moonpigLoading ? (
                      <p className="text-gray-400">Loading...</p>
                    ) : moonpigError ? (
                      <p className="text-red-500">{moonpigError}</p>
                    ) : moonpigData ? (
                      <div className="space-y-2">
                        <p className="text-white">
                          Price: <span className="text-yellow-500 font-bold">{formatNumber(moonpigData.price.usd)}</span>
                        </p>
                        <p className="text-white">
                          24h Change: <span className={`font-bold ${moonpigData.price.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {moonpigData.price.change24h >= 0 ? '+' : ''}{moonpigData.price.change24h?.toFixed(2)}%
                          </span>
                        </p>
                        <p className="text-white">
                          24h Volume: <span className="text-yellow-500 font-bold">{formatNumber(moonpigData.volume.h24)}</span>
                        </p>
                        <p className="text-white">
                          Liquidity: <span className="text-yellow-500 font-bold">{formatNumber(moonpigData.liquidity.usd)}</span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400">No data available</p>
                    )}
                  </div>
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Quick Links</h4>
                    <div className="flex flex-col gap-2">
                      <a href="https://dexscreener.com/solana/Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">View on DEXScreener</a>
                      <a href="https://solscan.io/token/Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">View on Solscan</a>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Trading Pairs</h4>
                    <div className="flex flex-col gap-2">
                      <a href="https://raydium.io/swap/?inputCurrency=SOL&outputCurrency=Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">SOL/MOONPIG on Raydium</a>
                      <a href="https://jup.ag/swap/SOL-Ai3eKAWjzKMV8wRwd41nVP83yqfbAVJykhvJVPxspump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">SOL/MOONPIG on Jupiter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trending Section (DEXScreener only) */}
          {useDexscreener && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Trending Solana Tokens</h2>
              <div className="mb-4 text-yellow-300 text-base font-semibold">
                These tokens have strong recent momentum but may not meet all safety criteria. Trending tokens are higher risk and may be more volatile.
              </div>
              {trendingLoading ? (
                <div className="text-yellow-400">Loading trending tokens...</div>
              ) : trendingError ? (
                <div className="text-red-500">{trendingError}</div>
              ) : trendingTokens.length === 0 ? (
                <div className="text-yellow-400">No trending tokens found right now. Check back soon as new tokens gain momentum!</div>
              ) : (
                renderCards(trendingTokens)
              )}
            </div>
          )}

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
              <AccordionSection title="What is the Liquidity Ratio?" defaultOpen>
                The liquidity ratio is calculated as <span className="text-yellow-300">total liquidity divided by market cap</span>. A higher liquidity ratio means a larger portion of the token&apos;s market cap is actually backed by real, tradable liquidity. This makes it much harder for prices to be manipulated and allows for safer, larger trades with less slippage. Tokens with a low liquidity ratio are more vulnerable to price manipulation and illiquidity risk.
              </AccordionSection>
              <AccordionSection title="How do we rank tokens?">
                We rank tokens by their liquidity ratio, after filtering for real on-chain liquidity, active trading, and pool count. This approach helps surface tokens that are safer and more tradeable. However, it&apos;s important to note that this method is not foolproof: market cap can be manipulated, and some tokens may game their pools to appear more liquid than they are. For even stronger curation, we recommend also checking for locked liquidity, token age, and suspicious pool structures. Always do your own research and be aware of the risks.
              </AccordionSection>
              <AccordionSection title="How We Select Tokens for This List">
                <ul className="list-disc list-inside mb-2">
                  <li><strong>Solana Only:</strong> Only tokens on the Solana blockchain are included.</li>
                  <li><strong>Liquidity (TVL):</strong> More than <span className="text-yellow-300">$100,000</span> in total on-chain liquidity.</li>
                  <li><strong>24h Volume:</strong> At least <span className="text-yellow-300">$20,000</span> in trading volume in the last 24 hours.</li>
                  <li><strong>Pools Count:</strong> Liquidity in at least <span className="text-yellow-300">1 pool</span>.</li>
                  <li><strong>Ranking:</strong> Tokens are ranked by <span className="text-yellow-300">liquidity ratio</span>, not market cap.</li>
                </ul>
                These filters are hardcoded to ensure that only tokens with real, substantial liquidity and active trading are displayed. This approach helps protect users from illiquid, risky, or manipulated tokens and ensures the list is focused on quality opportunities.
              </AccordionSection>
              <AccordionSection title="Types of Liquidity Pools">
                <div className="mb-4">
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
                    <span className="text-yellow-300 font-semibold">Note:</span> The Uniswap V2 vs V3 pool model is primarily relevant for Ethereum and other EVM chains. Most Solana tokens use different DEX pool models (such as Raydium and Orca), which may not have the same concentrated liquidity features. The principles of liquidity depth and distribution still apply, but the technical details differ on Solana.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-white/90">
                    <li>V2/V3: Applies to Ethereum and EVM chains</li>
                    <li>Solana: Uses AMMs like Raydium, Orca, Phoenix, etc.</li>
                    <li>Focus on total liquidity and pool health for Solana tokens</li>
                  </ul>
                </div>
              </AccordionSection>
              <AccordionSection title="Best Practices for Liquidity Analysis">
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>Look for tokens with liquidity locked for extended periods (6+ months)</li>
                  <li>Prefer V3 pools for major tokens due to better capital efficiency (on EVM chains)</li>
                  <li>Consider the distribution of liquidity across different DEXs</li>
                  <li>Monitor liquidity depth at different price levels</li>
                  <li>Check for liquidity concentration in specific price ranges</li>
                </ul>
              </AccordionSection>
              <AccordionSection title="Important Disclaimers & API Limitations">
                <p className="text-yellow-300 font-semibold">
                  <strong>Note:</strong> While our core philosophy is Bitcoin-centric, we remain fascinated by the creativity and cultural impact of memetic tokens. However, it&apos;s important to recognize that these assets are highly speculative and carry significant risk—many will ultimately go to zero. If you choose to trade them, consider limiting your exposure to a small, single-digit percentage of your overall portfolio. Always conduct your own research and never invest more than you can afford to lose.
                </p>
                <p className="mt-4 text-yellow-200">
                  <strong>API Limitations:</strong> The free CoinGecko API does <span className="text-yellow-300">not</span> provide reliable pool-level or locked liquidity data for most tokens, especially memecoins. It also cannot detect pool manipulation or show how liquidity is distributed across pools. For advanced liquidity analysis, DEX analytics platforms (like DEXScreener) or direct on-chain data are required.
                </p>
              </AccordionSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
