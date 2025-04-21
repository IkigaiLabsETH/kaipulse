'use client';

import type { OpenSeaCollectionStats } from '@/services/opensea/types';
import { useEffect } from 'react';
import { logger } from '@/lib/logger';
import { Coins, Tag, Users, Award, BarChart, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Safely get growth values
  const getGrowthValue = (key: string): number => {
    const value = (stats as any)[key];
    if (value === undefined || value === null) return 0;
    
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(numValue) ? 0 : numValue;
  };

  const stats_items = [
    {
      label: 'Floor',
      value: formatEth(stats.floor_price),
      prefix: 'Ξ',
      icon: Tag,
      color: 'text-yellow-400',
      growValue: getGrowthValue('floor_price_change_7d')
    },
    {
      label: 'Items',
      value: formatNumber(stats.total_supply),
      icon: Coins,
      color: 'text-yellow-400',
      growValue: 0
    },
    {
      label: 'Owners',
      value: formatNumber(stats.num_owners),
      icon: Users,
      color: 'text-yellow-400',
      growValue: 0
    },
    {
      label: 'Top Bid',
      value: '—',
      prefix: 'Ξ',
      icon: Award,
      color: 'text-yellow-400',
      growValue: 0
    },
    {
      label: 'Volume',
      value: formatEth(stats.total_volume),
      prefix: 'Ξ',
      icon: BarChart,
      color: 'text-yellow-400',
      growValue: getGrowthValue('total_volume_change_7d')
    },
    {
      label: 'Created On',
      value: '—',
      icon: Calendar,
      color: 'text-yellow-400',
      growValue: 0
    },
  ];

  return (
    <div className="bg-[#1c1f26]/60 backdrop-blur-sm py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {stats_items.map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full">
                <div className="flex items-center justify-center gap-1">
                  <item.icon size={14} className={`${item.color}`} />
                  <div className="text-xs text-white/60 font-medium tracking-wide">{item.label}</div>
                </div>
                
                <div className="text-lg text-white font-light mt-1">
                  {item.prefix}<span className="text-yellow-400">{item.value}</span>
                </div>
                
                {/* Growth/change indicator */}
                {item.growValue !== 0 && item.growValue != null && (
                  <div className={`text-xs font-medium flex items-center justify-center gap-1 ${item.growValue > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {item.growValue > 0 ? (
                      <TrendingUp size={10} />
                    ) : (
                      <TrendingUp size={10} className="rotate-180" />
                    )}
                    {Math.abs(item.growValue).toFixed(2)}%
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 