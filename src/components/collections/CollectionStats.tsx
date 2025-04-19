'use client';

import type { OpenSeaCollectionStats } from '@/services/opensea/types';
import { useEffect } from 'react';
import { logger } from '@/lib/logger';

interface CollectionStatsProps {
  stats: Partial<OpenSeaCollectionStats>;
}

export function CollectionStats({ stats }: CollectionStatsProps) {
  useEffect(() => {
    logger.info('Collection stats received:', { stats });
  }, [stats]);

  const formatNumber = (num: number | string | undefined) => {
    if (num === undefined || num === null) return 'N/A';
    const value = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(value)) return 'N/A';
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toFixed(2);
  };

  const formatEth = (num: number | string | undefined) => {
    if (num === undefined || num === null) return 'N/A';
    const value = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(value)) return 'N/A';
    return `${value.toFixed(2)} ETH`;
  };

  const stats_items = [
    {
      label: 'Floor Price',
      value: formatEth(stats.floor_price),
      isEth: true,
    },
    {
      label: 'Total Volume',
      value: formatEth(stats.total_volume),
      isEth: true,
    },
    {
      label: 'Items',
      value: formatNumber(stats.total_supply),
    },
    {
      label: 'Owners',
      value: formatNumber(stats.num_owners),
    },
    {
      label: '24h Volume',
      value: formatEth(stats.one_day_volume),
      isEth: true,
    },
    {
      label: '7d Volume',
      value: formatEth(stats.seven_day_volume),
      isEth: true,
    },
    {
      label: '30d Volume',
      value: formatEth(stats.thirty_day_volume),
      isEth: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {stats_items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg bg-white/5 p-4 text-center hover:bg-white/10 transition-colors"
        >
          <div className="text-sm text-white/60">{item.label}</div>
          <div className="text-lg font-semibold text-white mt-1">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
} 