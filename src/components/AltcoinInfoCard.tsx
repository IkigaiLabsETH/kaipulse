import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

interface AltcoinInfoCardProps {
  id: string;
  platform?: string;
  contract?: string;
}

interface CoinGeckoCoinData {
  name: string;
  symbol: string;
  image?: { large?: string; thumb?: string };
  market_data?: {
    current_price?: { 
      usd?: number;
      btc?: number;
    };
    market_cap?: { usd?: number };
    price_change_percentage_7d_in_currency?: { 
      usd?: number;
      btc?: number;
    };
    price_change_percentage_30d_in_currency?: { 
      usd?: number;
      btc?: number;
    };
    price_change_percentage_1y_in_currency?: { 
      usd?: number;
      btc?: number;
    };
  };
  liquidity_score?: number;
  tickers?: { trust_score?: string }[];
}

/**
 * Displays rich info for an altcoin using CoinGecko data.
 * Uses /api/coin-by-id for native coins, /api/coin-by-contract for tokens.
 */
export default function AltcoinInfoCard({ id, platform, contract }: AltcoinInfoCardProps) {
  const [data, setData] = useState<CoinGeckoCoinData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let url = '';
    if (platform && contract) {
      url = `/api/coin-by-contract?id=${id}&platform=${platform}&contract=${contract}`;
    } else {
      url = `/api/coin-by-id?id=${id}`;
    }
    setLoading(true);
    setError(null);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load altcoin data');
        setLoading(false);
      });
  }, [id, platform, contract, retry]);

  if (loading) {
    return (
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <CardContent className="p-3 sm:p-4 text-yellow-500 text-sm sm:text-base">
          Loading...
        </CardContent>
      </Card>
    );
  }

  const isError = (d: unknown): d is { error: string } => typeof d === 'object' && d !== null && 'error' in d;
  if (error || (data && isError(data))) {
    let msg = error || (isError(data) ? data.error : undefined);
    if (typeof msg === 'string' && msg.toLowerCase().includes('rate limit')) {
      msg = 'API rate limit reached. Please wait a minute and try again.';
    }
    return (
      <Card className="bg-[#1c1f26] border-2 border-red-500">
        <CardContent className="p-3 sm:p-4 text-red-500 flex flex-col items-center gap-2">
          <span className="text-sm sm:text-base text-center">{msg}</span>
          <button
            className="mt-2 px-3 py-1.5 bg-yellow-500 text-black rounded hover:bg-yellow-400 font-semibold text-xs sm:text-sm transition-colors"
            onClick={() => setRetry(r => r + 1)}
          >
            Retry
          </button>
        </CardContent>
      </Card>
    );
  }
  if (!data) return null;

  return (
    <Card className="bg-[#1c1f26] border-2 border-yellow-500 w-full mx-0 sm:max-w-md sm:mx-auto my-3 sm:my-4">
      <CardContent className="p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16">
          <Image
            src={data.image?.large || data.image?.thumb || '/placeholder.png'}
            alt={data.name}
            fill
            className="rounded-full bg-black border border-yellow-500 object-cover"
            unoptimized
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-500 text-center">
          {data.name} <span className="text-white text-base sm:text-lg">({data.symbol?.toUpperCase()})</span>
        </h2>
        <div className="text-base sm:text-lg text-white font-semibold">
          Price: ${data.market_data?.current_price?.usd?.toLocaleString() ?? 'N/A'}
        </div>
        <div className="text-sm sm:text-base text-white/80">
          BTC Price: {data.market_data?.current_price?.btc?.toFixed(8) ?? 'N/A'} BTC
        </div>
        <div className="text-sm sm:text-base text-white/80">
          Market Cap: ${data.market_data?.market_cap?.usd?.toLocaleString() ?? 'N/A'}
        </div>
        {/* Price changes */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">7d Change (USD)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_7d_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">7d Change (BTC)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_7d_in_currency?.btc === 'number' && data.market_data.price_change_percentage_7d_in_currency.btc > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_7d_in_currency?.btc === 'number' && data.market_data.price_change_percentage_7d_in_currency.btc < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_7d_in_currency?.btc === 'number'
                ? data.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">30d Change (USD)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_30d_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">30d Change (BTC)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_30d_in_currency?.btc === 'number' && data.market_data.price_change_percentage_30d_in_currency.btc > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_30d_in_currency?.btc === 'number' && data.market_data.price_change_percentage_30d_in_currency.btc < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_30d_in_currency?.btc === 'number'
                ? data.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">1y Change (USD)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number' && data.market_data.price_change_percentage_1y_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number' && data.market_data.price_change_percentage_1y_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm">
            <span className="text-white/60">1y Change (BTC)</span>
            <span className={
              typeof data.market_data?.price_change_percentage_1y_in_currency?.btc === 'number' && data.market_data.price_change_percentage_1y_in_currency.btc > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_1y_in_currency?.btc === 'number' && data.market_data.price_change_percentage_1y_in_currency.btc < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_1y_in_currency?.btc === 'number'
                ? data.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
        </div>
        {/* Liquidity/Trust score */}
        {(typeof data.liquidity_score === 'number' || typeof data.tickers?.[0]?.trust_score === 'string') && (
          <div className="flex flex-col gap-1.5 w-full mt-1 sm:mt-2">
            {typeof data.liquidity_score === 'number' && (
              <div className="flex justify-between w-full text-[10px] sm:text-xs text-white/60">
                <span>Liquidity Score</span>
                <span className="text-white/90">{data.liquidity_score.toFixed(2)}</span>
              </div>
            )}
            {typeof data.tickers?.[0]?.trust_score === 'string' && (
              <div className="flex justify-between w-full text-[10px] sm:text-xs text-white/60">
                <span>Trust Score</span>
                <span className="text-white/90">{data.tickers[0].trust_score}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 