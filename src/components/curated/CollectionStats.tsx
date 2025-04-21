'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface CollectionStatsProps {
  floorPrice?: number;
  volume24h?: number;
  totalVolume?: number;
  totalSupply?: number;
  owners?: number;
}

export const CollectionStats: FC<CollectionStatsProps> = ({
  floorPrice,
  volume24h,
  totalVolume,
  totalSupply,
  owners,
}) => {
  const formatNumber = (num?: number) => {
    if (num === undefined) return '—';
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(num);
  };

  const formatEth = (num?: number) => {
    if (num === undefined) return '—';
    return `${formatNumber(num)} ETH`;
  };

  const stats = [
    { label: 'Floor Price', value: formatEth(floorPrice) },
    { label: '24h Volume', value: formatEth(volume24h) },
    { label: 'Total Volume', value: formatEth(totalVolume) },
    { label: 'Items', value: formatNumber(totalSupply) },
    { label: 'Owners', value: formatNumber(owners) },
  ];

  return (
    <div className="mt-6 border-t border-gray-800">
      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="px-4 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <dt className="text-sm font-medium text-gray-400">{stat.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
};

export default CollectionStats; 