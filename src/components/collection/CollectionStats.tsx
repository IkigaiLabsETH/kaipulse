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

  const formatNumber = (num: number | string | undefined | null) => {
    if (num === undefined || num === null) return '—';
    const value = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(value)) return '—';
    if (value === 0) return '—';
    return value.toLocaleString();
  };

  const formatEth = (num: number | string | undefined | null) => {
    if (num === undefined || num === null) return '—';
    const value = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(value)) return '—';
    if (value === 0) return '—';
    return value.toFixed(2);
  };

  const stats_items = [
    {
      label: 'Floor',
      value: formatEth(stats.floor_price),
      prefix: 'Ξ',
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
      label: 'Top Bid',
      value: '—',
      prefix: 'Ξ',
    },
    {
      label: 'Volume',
      value: formatEth(stats.total_volume),
      prefix: 'Ξ',
    },
    {
      label: 'Created On',
      value: '—',
    },
  ];

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 py-4">
          {stats_items.map((item) => (
            <div key={item.label} className="text-left">
              <div className="text-xs text-white/40 mb-1">{item.label}</div>
              <div className="text-sm text-white">
                {item.prefix}{item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 