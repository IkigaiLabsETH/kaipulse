'use client';

import { Sparkles } from 'lucide-react';
import type { OpenSeaCollection } from '@/services/opensea/types';
import Image from 'next/image';

interface CategorySectionProps {
  category: {
    id: string;
    name: string;
    description: string;
    collections: OpenSeaCollection[];
  };
  viewMode: 'grid' | 'list';
}

export function CategorySection({ category, viewMode }: CategorySectionProps) {
  if (!category.collections.length) return null;

  return (
    <section className="mb-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white">{category.name}</h2>
        </div>
        <p className="text-gray-400 max-w-3xl">{category.description}</p>
      </div>
      
      {viewMode === 'grid' ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.collections.map((collection) => (
            <div 
              key={collection.collection} 
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <Image
                  src={collection.banner_image_url || collection.image_url || '/images/placeholder-banner.png'}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = '/images/placeholder-banner.png';
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-800 group-hover:border-yellow-500/50 transition-colors duration-300">
                    <Image
                      src={collection.image_url || '/images/placeholder-logo.png'}
                      alt={`${collection.name} logo`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = '/images/placeholder-logo.png';
                      }}
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                      {collection.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{collection.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Floor Price</p>
                    <p className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {collection.stats?.floor_price?.toFixed(2) || '—'} ETH
                    </p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Total Volume</p>
                    <p className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {collection.stats?.total_volume?.toLocaleString(undefined, { maximumFractionDigits: 0 }) || '—'} ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-4">
          {category.collections.map((collection) => (
            <div 
              key={collection.collection} 
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="flex items-center p-6">
                <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-800 group-hover:border-yellow-500/50 transition-colors duration-300">
                  <Image
                    src={collection.image_url || '/images/placeholder-logo.png'}
                    alt={`${collection.name} logo`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = '/images/placeholder-logo.png';
                    }}
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 ml-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{collection.description}</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Floor Price</p>
                      <p className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                        {collection.stats?.floor_price?.toFixed(2) || '—'} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Total Volume</p>
                      <p className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                        {collection.stats?.total_volume?.toLocaleString(undefined, { maximumFractionDigits: 0 }) || '—'} ETH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 