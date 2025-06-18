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
  const [error, setError] = useState<string | null>(null);
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
  const [fartcoinData, setFartcoinData] = useState<MoonpigData | null>(null);
  const [fartcoinLoading, setFartcoinLoading] = useState(false);
  const [fartcoinError, setFartcoinError] = useState<string | null>(null);
  const [lowFloatTokens, setLowFloatTokens] = useState<DexscreenerToken[]>([]);
  const [lowFloatLoading, setLowFloatLoading] = useState(false);
  const [lowFloatError, setLowFloatError] = useState<string | null>(null);

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
    } catch {
      setError('An error occurred');
    } finally {
      setLoading(false);
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
    
    const fetchFartcoinData = async () => {
      setFartcoinLoading(true);
      setFartcoinError(null);
      try {
        const response = await fetch('/api/dexscreener/fartcoin');
        if (!response.ok) throw new Error('Failed to fetch Fartcoin data');
        const data = await response.json();
        setFartcoinData(data);
      } catch {
        setFartcoinError('Failed to fetch Fartcoin data');
        // Optionally log error to a logging service
      } finally {
        setFartcoinLoading(false);
      }
    };

    fetchFartcoinData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchFartcoinData, 30000);
    return () => clearInterval(interval);
  }, [useDexscreener]);

  // Fetch low-float meme coins
  useEffect(() => {
    setLowFloatLoading(true);
    setLowFloatError(null);
    fetch('/api/dexscreener/low-float')
      .then(res => res.json())
      .then((tokens) => {
        if (!Array.isArray(tokens)) {
          setLowFloatTokens([]);
          setLowFloatLoading(false);
          return;
        }
        setLowFloatTokens(tokens as DexscreenerToken[]);
        setLowFloatLoading(false);
      })
      .catch(() => {
        setLowFloatError('Failed to fetch low-float meme coins');
        setLowFloatLoading(false);
      });
  }, []);

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
                    src="/fartcoin.png"
                    alt="Fartcoin"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-yellow-500"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-500 flex items-center gap-3">
                      Fartcoin
                      <button
                        onClick={() => handleCopyAddress('9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump')}
                        className="px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 focus:outline-none border border-yellow-700"
                        title="Copy address"
                      >
                        {copiedAddress === '9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump' ? 'Copied!' : 'Copy Address'}
                      </button>
                      <span className="flex gap-2">
                        <a
                          href="https://raydium.io/swap/?inputCurrency=SOL&outputCurrency=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Swap on Raydium"
                          className="hover:scale-110 transition-transform"
                        >
                          <RaydiumIcon />
                        </a>
                        <a
                          href="https://jup.ag/swap/SOL-9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Swap on Jupiter"
                          className="hover:scale-110 transition-transform"
                        >
                          <JupiterIcon />
                        </a>
                      </span>
                    </h3>
                    <p className="text-gray-400 mt-1">Devised by an AI chatbot called Truth Terminal</p>
                  </div>
                </div>
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Live Price Data</h4>
                    {fartcoinLoading ? (
                      <p className="text-gray-400">Loading...</p>
                    ) : fartcoinError ? (
                      <p className="text-red-500">{fartcoinError}</p>
                    ) : fartcoinData ? (
                      <div className="space-y-2">
                        <p className="text-white">
                          Price: <span className="text-yellow-500 font-bold">{formatNumber(fartcoinData.price.usd)}</span>
                        </p>
                        <p className="text-white">
                          24h Change: <span className={`font-bold ${fartcoinData.price.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {fartcoinData.price.change24h >= 0 ? '+' : ''}{fartcoinData.price.change24h?.toFixed(2)}%
                          </span>
                        </p>
                        <p className="text-white">
                          24h Volume: <span className="text-yellow-500 font-bold">{formatNumber(fartcoinData.volume.h24)}</span>
                        </p>
                        <p className="text-white">
                          Liquidity: <span className="text-yellow-500 font-bold">{formatNumber(fartcoinData.liquidity.usd)}</span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400">No data available</p>
                    )}
                  </div>
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Quick Links</h4>
                    <div className="flex flex-col gap-2">
                      <a href="https://dexscreener.com/solana/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">View on DEXScreener</a>
                      <a href="https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">View on Solscan</a>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Trading Pairs</h4>
                    <div className="flex flex-col gap-2">
                      <a href="https://raydium.io/swap/?inputCurrency=SOL&outputCurrency=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">SOL/FART on Raydium</a>
                      <a href="https://jup.ag/swap/SOL-9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">SOL/FART on Jupiter</a>
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

          {/* Low-Float Meme Coins Section */}
          {useDexscreener && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Low-Float Meme Coins</h2>
              <div className="mb-4 text-yellow-300 text-base font-semibold">
                These are fresh, low-float meme coins with $100k–$2M market cap and $10k–$100k liquidity. Always DYOR and manage risk.
              </div>
              {lowFloatLoading ? (
                <div className="text-yellow-400">Loading low-float coins...</div>
              ) : lowFloatError ? (
                <div className="text-red-500">{lowFloatError}</div>
              ) : lowFloatTokens.length === 0 ? (
                <div className="text-yellow-400">No low-float meme coins found right now.</div>
              ) : (
                renderCards(lowFloatTokens)
              )}
              <div className="mt-4 text-yellow-200 text-xs">
                <a href="https://dexscreener.com/solana" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">See more on Dexscreener</a>
              </div>
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
              <AccordionSection title="Turn an LP into a Self-Driving DCA Exit">
                <div className="space-y-6">
                  <p className="text-white/90 leading-relaxed">
                    Low-float memes moon hard but their order books are razor-thin—one market-sell nukes the chart, therefore you need a way to drip out inventory while hype does the heavy lifting. Meteora&apos;s Dynamic AMM v2 (DAMM v2) was built for exactly this moment.
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90 mb-4">1. Why DAMM v2 is a meme-coin exit machine</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-white/90 border border-yellow-500/30">
                        <thead>
                          <tr className="bg-black/30">
                            <th className="px-4 py-2 text-yellow-400">DAMM v2 feature</th>
                            <th className="px-4 py-2 text-yellow-400">What it does</th>
                            <th className="px-4 py-2 text-yellow-400">Why memes benefit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Single-sided deposits</td>
                            <td className="px-4 py-2">Launch a pool with only your token—no USDC/SOL up-front.</td>
                            <td className="px-4 py-2">You start 100% long; the pool auto-sells as buyers FOMO in.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Custom min-max price band</td>
                            <td className="px-4 py-2">Pin liquidity, e.g. +10% above spot ➜ 3× spot.</td>
                            <td className="px-4 py-2">Acts like a stack of limit-sells that fill from $1.10 to $3 without manual orders.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Dynamic / decaying fees + anti-sniper schedule</td>
                            <td className="px-4 py-2">Open with high fees that taper or spike on volatility.</td>
                            <td className="px-4 py-2">Early bots pay you extra; later, lower fees keep retail flow humming.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Built-in farming module</td>
                            <td className="px-4 py-2">Stake the LP-NFT for bonus rewards.</td>
                            <td className="px-4 py-2">Incentives offset impermanent loss (IL) if price chops.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">SPL & Token-2022 support</td>
                            <td className="px-4 py-2">Handles transfer-fee or metadata memes out-of-the-box.</td>
                            <td className="px-4 py-2">Future-proof for spicy new standards.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90 mb-4">2. Step-by-step: auto-selling 1M $FART into USDC</h4>
                    <ol className="list-decimal list-inside space-y-2 text-white/90">
                      <li>Spin up a FART/USDC DAMM v2 pool.</li>
                      <li>Deposit 1M $FART only—no USDC needed.</li>
                      <li>Price band: FART trades at $0.001 → place liquidity from $0.0011 to $0.003.</li>
                      <li>Fee curve: start 1% ➜ linearly decay to 0.25% over seven days.</li>
                      <li>Stake LP-NFT in the farming tab to capture incentives.</li>
                      <li>Monitor: when ≥80% of your liquidity sits in USDC, withdraw or widen the band.</li>
                    </ol>
                    <p className="mt-4 text-white/90">
                      Outcome: the community buys FART between $0.0011–$0.003, you bank swap fees + farming rewards, and never wreck the chart.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90 mb-4">3. Risk toggles & pro tips</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-white/90 border border-yellow-500/30">
                        <thead>
                          <tr className="bg-black/30">
                            <th className="px-4 py-2 text-yellow-400">Risk</th>
                            <th className="px-4 py-2 text-yellow-400">Mitigation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Big early dip</td>
                            <td className="px-4 py-2">Keep lower band close to spot; pool holds mostly FART until price recovers.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">Price leaves range</td>
                            <td className="px-4 py-2">Add a tiny [0, ∞) fallback pool so liquidity never goes idle.</td>
                          </tr>
                          <tr className="border-t border-yellow-500/30">
                            <td className="px-4 py-2">MEV snipers</td>
                            <td className="px-4 py-2">High opening fee + Meteora&apos;s anti-sniper lock defend the first blocks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90 mb-4">4. Launch-day checklist</h4>
                    <ul className="list-disc list-inside space-y-2 text-white/90">
                      <li>Pool created from team multisig.</li>
                      <li>Price band sized to expected hype window.</li>
                      <li>Fee schedule uploaded.</li>
                      <li>Farming incentives funded for ≥14 days.</li>
                      <li>Alerts set for price exiting band or utilisation &gt;90%.</li>
                    </ul>
                    <p className="mt-4 text-white/90">
                      Deploy once, let FART auto-convert into USDC while buyers chase candles—and collect a steady fee stream the whole way. That&apos;s a self-driving DCA exit, meme-coin edition.
                    </p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionSection title="Important Disclaimers & API Limitations">
                <p className="text-yellow-300 font-semibold">
                  <strong>Note:</strong> While our core philosophy is Bitcoin-centric, we remain fascinated by the creativity and cultural impact of memetic tokens. However, it&apos;s important to recognize that these assets are highly speculative and carry significant risk—many will ultimately go to zero. If you choose to trade them, consider limiting your exposure to a small, single-digit percentage of your overall portfolio. Always conduct your own research and never invest more than you can afford to lose.
                </p>
                <p className="mt-4 text-yellow-200">
                  <strong>API Limitations:</strong> The free CoinGecko API does <span className="text-yellow-300">not</span> provide reliable pool-level or locked liquidity data for most tokens, especially memecoins. It also cannot detect pool manipulation or show how liquidity is distributed across pools. For advanced liquidity analysis, DEX analytics platforms (like DEXScreener) or direct on-chain data are required.
                </p>
              </AccordionSection>
              <AccordionSection title="The Moonpig Story: Meme Coin by J. Wynn">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">Overview</h4>
                    <p className="text-white/90 leading-relaxed">
                      Moonpig emerged as a decentralized meme coin that has captured significant attention in the crypto space, particularly for its community-driven approach and organic growth. What sets Moonpig apart is its anti-cabal nature - growing without heavy influence from centralized groups or paid influencers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">Market Performance</h4>
                    <p className="text-white/90 leading-relaxed">
                      Moonpig has demonstrated remarkable market activity, reaching a peak market cap of $120 million through purely organic growth. Despite experiencing a -62% retracement from its all-time high, the project maintains strong technical indicators, including rising On-Balance Volume (OBV) and a falling wedge pattern, suggesting potential for recovery.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">Community Strength</h4>
                    <p className="text-white/90 leading-relaxed">
                      The Moonpig community has shown exceptional resilience, boasting over 17,000 holders with continued growth even during market dips. The project has gained listings on major exchanges including HTX, Mexc, and LBank, with active efforts to expand to additional platforms.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">Key Developments</h4>
                    <ul className="list-disc list-inside space-y-2 text-white/90">
                      <li>Active development of MOONRUSH mobile game (currently navigating regulatory requirements)</li>
                      <li>Strong presence on X (formerly Twitter) with active community engagement</li>
                      <li>Regular updates and transparency from the team</li>
                      <li>Growing exchange listings and liquidity pools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">Notable Figures</h4>
                    <p className="text-white/90 leading-relaxed">
                      James Wynn, a prominent figure in the crypto space, has been a key supporter of Moonpig, emphasizing its potential as a community-driven project. The official @moonpigmeme account maintains active engagement with the community, sharing updates and fostering growth.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-yellow-500/90">The James Wynn Saga</h4>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        James Wynn&apos;s journey with Moonpig reads like a crypto legend. A former hedge fund analyst turned crypto degen, Wynn had already amassed a fortune through early Ethereum bets and memecoin plays. But Moonpig became his defining moment.
                      </p>
                      
                      <p>
                        In June 2025, Wynn made a bold statement that would etch his name into crypto history. He announced a $100 million leveraged position on Moonpig, posting on X: &quot;To the sty and beyond! 🐷🚀&quot; The market went wild, and Moonpig&apos;s price surged from $0.75 to $2.25 in just 48 hours.
                      </p>

                      <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                        <h5 className="text-yellow-400 font-semibold mb-2">The Hyperliquid Gamble</h5>
                        <p>
                          Wynn&apos;s position on Hyperliquid&apos;s perpetual futures market was legendary—$100 million at 50x leverage. When a rival project&apos;s whale dumped 50 million tokens, causing a market crash, Wynn faced a critical decision. Instead of panicking, he rallied the community with a now-famous post: &quot;Dips are for buying. $MOONPIG to $20. HODL.&quot;
                        </p>
                      </div>

                      <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                        <h5 className="text-yellow-400 font-semibold mb-2">The $20 Miracle</h5>
                        <p>
                          On June 2, 2025, Wynn faced his most dramatic moment yet. His Bitcoin position was just $20 away from liquidation—a razor-thin margin in the high-stakes world of leveraged trading. The market dipped to $106,614, dangerously close to his $106,594 liquidation level. In a now-famous X post, he credited his survival to &quot;the people&quot; and &quot;the good guys,&quot; suggesting his community rallied to support him.
                        </p>
                        <p className="mt-2">
                          This wasn&apos;t Wynn&apos;s first brush with liquidation. In May 2025, he had already experienced a $60 million loss over seven days, cycling through positions in PEPE, ETH, SUI, TRUMP, and even FARTCOIN. Yet, his response to these setbacks remained characteristically defiant: &quot;I&apos;ll run it back, I always do. And I&apos;ll enjoy doing it.&quot;
                        </p>
                      </div>

                      <p>
                        Despite losing his leveraged position in a market crash triggered by a fake security breach announcement, Wynn&apos;s story didn&apos;t end there. He still held 100 million Moonpig tokens and used his influence to expose the whale&apos;s wallet, rallying the community to &quot;punish the paper hands.&quot;
                      </p>

                      <div className="bg-black/30 p-4 rounded border border-yellow-500/30">
                        <h5 className="text-yellow-400 font-semibold mb-2">The Aftermath</h5>
                        <p>
                          The community&apos;s response was unprecedented. Moonpig&apos;s price surged to $2.50, and Wynn&apos;s strategic token sales helped him recoup $50 million. While he never reached his $10 billion target, he walked away with $130 million and something more valuable—a place in crypto folklore.
                        </p>
                      </div>

                      <p>
                        Wynn&apos;s final post on the matter became iconic: &quot;Lost $100M, gained a legend. Moonpig lives. 🐷&quot; His story embodies the high-stakes nature of crypto trading and the power of community in the memecoin space.
                      </p>
                    </div>
                  </div>

                  {/* Critical Warning Section */}
                  <div className="bg-red-900/20 border-2 border-red-500 rounded-none p-6 mt-8">
                    <h4 className="text-red-400 font-bold mb-4 text-xl">⚠️ CRITICAL UPDATE: Recent Developments</h4>
                    <div className="space-y-4">
                      <p className="text-red-300 text-sm leading-relaxed">
                        James Wynn has recently moved away from $MOONPIG after one of his side wallets dumped massive supply, causing a 50% drop in token value. He initially claimed he was de-risking his portfolio due to war news, but has since deleted that post. He has also been involved in another coin scam and has completely stopped posting about Moonpig.
                      </p>
                      <p className="text-red-200 text-sm font-semibold">
                        This appears to be a classic pump-and-dump scenario. Exercise extreme caution with any tokens associated with James Wynn or similar influencers who have a history of abandoning projects after profiting from them.
                      </p>
                      
                      <div className="bg-black/30 p-4 rounded border border-red-500/30 mt-4">
                        <h5 className="text-red-300 font-semibold mb-2">Notable Wallet Activity:</h5>
                        <p className="text-red-200 text-sm leading-relaxed mb-2">
                          <strong>Wallet:</strong> 8f5yZ7QdfDitcbXw7KW9dd3dzMnu1VkcTKpKbbfyWkoH
                        </p>
                        <p className="text-red-200 text-sm leading-relaxed">
                          2 months ago, this wallet scooped up 34.1M $MOONPIG at a $50K market cap for just $1.8K. Today, they sold everything for $287.94K. That&apos;s a <span className="text-yellow-300 font-bold">160x profit</span> in the books.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-white/90 space-y-4 mt-6">
                    <h4 className="text-yellow-400 font-semibold text-lg">Red Flags to Watch For:</h4>
                    <ul className="list-disc list-inside space-y-2 text-white/90">
                      <li>Influencers suddenly changing their narrative or deleting posts</li>
                      <li>Large wallet dumps coinciding with influencer announcements</li>
                      <li>Claims of &quot;de-risking&quot; or &quot;portfolio management&quot; as excuses for selling</li>
                      <li>Abandonment of projects after initial promotion</li>
                      <li>History of involvement in multiple failed or scam projects</li>
                    </ul>
                    <p className="text-yellow-300 font-semibold mt-4">
                      Always verify wallet addresses, check transaction history, and be skeptical of influencers who have a track record of abandoning projects.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 p-4 rounded border border-yellow-500/30">
                    <p className="text-yellow-300 font-semibold">
                      <strong>Important Note:</strong> While Moonpig shows promising community engagement and organic growth, it remains a highly speculative asset. The project&apos;s success depends on continued community support and market conditions. Always conduct thorough research and invest responsibly.
                    </p>
                  </div>
                </div>
              </AccordionSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
