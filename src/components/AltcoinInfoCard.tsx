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
    current_price?: { usd?: number };
    market_cap?: { usd?: number };
    price_change_percentage_7d_in_currency?: { usd?: number };
    price_change_percentage_30d_in_currency?: { usd?: number };
    price_change_percentage_1y_in_currency?: { usd?: number };
  };
  developer_data?: {
    stars?: number;
    forks?: number;
    subscribers?: number;
    total_issues?: number;
    pull_requests_merged?: number;
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
  }, [id, platform, contract]);

  if (loading) {
    return <Card className="bg-[#1c1f26] border-2 border-yellow-500"><CardContent className="p-4 text-yellow-500">Loading...</CardContent></Card>;
  }
  // Type guard for error response
  const isError = (d: unknown): d is { error: string } => typeof d === 'object' && d !== null && 'error' in d;
  if (error || (data && isError(data))) {
    return <Card className="bg-[#1c1f26] border-2 border-red-500"><CardContent className="p-4 text-red-500">{error || (isError(data) ? data.error : undefined)}</CardContent></Card>;
  }
  if (!data) return null;

  return (
    <Card className="bg-[#1c1f26] border-2 border-yellow-500 max-w-md mx-auto my-4">
      <CardContent className="p-6 flex flex-col items-center gap-4">
        <Image
          src={data.image?.large || data.image?.thumb || '/placeholder.png'}
          alt={data.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full bg-black border border-yellow-500"
          unoptimized
        />
        <h2 className="text-2xl font-bold text-yellow-500">{data.name} <span className="text-white text-lg">({data.symbol?.toUpperCase()})</span></h2>
        <div className="text-lg text-white font-semibold">Price: ${data.market_data?.current_price?.usd?.toLocaleString() ?? 'N/A'}</div>
        <div className="text-white/80">Market Cap: ${data.market_data?.market_cap?.usd?.toLocaleString() ?? 'N/A'}</div>
        {/* Price changes */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full text-sm">
            <span className="text-white/60">7d Change</span>
            <span className={
              typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_7d_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_7d_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-sm">
            <span className="text-white/60">30d Change</span>
            <span className={
              typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_30d_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number' && data.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_30d_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between w-full text-sm">
            <span className="text-white/60">1y Change</span>
            <span className={
              typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number' && data.market_data.price_change_percentage_1y_in_currency.usd > 0 ? 'text-green-500' : typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number' && data.market_data.price_change_percentage_1y_in_currency.usd < 0 ? 'text-red-500' : 'text-white/80'
            }>
              {typeof data.market_data?.price_change_percentage_1y_in_currency?.usd === 'number'
                ? data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2) + '%'
                : 'N/A'}
            </span>
          </div>
        </div>
        {/* Developer data */}
        {data.developer_data && (
          <div className="flex flex-col gap-1 w-full mt-2">
            <div className="flex justify-between w-full text-xs text-white/60">
              <span>Stars</span>
              <span className="text-white/90">{data.developer_data.stars ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between w-full text-xs text-white/60">
              <span>Forks</span>
              <span className="text-white/90">{data.developer_data.forks ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between w-full text-xs text-white/60">
              <span>Subscribers</span>
              <span className="text-white/90">{data.developer_data.subscribers ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between w-full text-xs text-white/60">
              <span>Issues</span>
              <span className="text-white/90">{data.developer_data.total_issues ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between w-full text-xs text-white/60">
              <span>Pull Requests</span>
              <span className="text-white/90">{data.developer_data.pull_requests_merged ?? 'N/A'}</span>
            </div>
          </div>
        )}
        {/* Liquidity/Trust score */}
        {(typeof data.liquidity_score === 'number' || typeof data.tickers?.[0]?.trust_score === 'string') && (
          <div className="flex flex-col gap-1 w-full mt-2">
            {typeof data.liquidity_score === 'number' && (
              <div className="flex justify-between w-full text-xs text-white/60">
                <span>Liquidity Score</span>
                <span className="text-white/90">{data.liquidity_score.toFixed(2)}</span>
              </div>
            )}
            {typeof data.tickers?.[0]?.trust_score === 'string' && (
              <div className="flex justify-between w-full text-xs text-white/60">
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