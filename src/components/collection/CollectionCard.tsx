'use client';

import Link from 'next/link';
import { Users } from 'lucide-react';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';

// Define our own collection type for this component
interface CuratedCollection {
  collection: string;
  name: string;
  description?: string;
  image_url?: string;
  banner_image_url?: string;
  safelist_status?: string;
  stats?: {
    floor_price?: number;
    total_volume?: number;
    num_owners?: number;
  };
}

interface CollectionCardProps {
  collection: CuratedCollection;
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  const isUnoptimized = (url?: string) =>
    !!url && (url.includes('ipfs') || url.includes('arweave') || /\.gif($|\?)/i.test(url) || /\.webp($|\?)/i.test(url));
  return (
    <Link
      href={`/collections/${collection.collection}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Banner Image or Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-[#1A1A1A]">
        {collection.banner_image_url ? (
          <>
            <Image
              src={collection.banner_image_url}
              alt={collection.name}
              fill
              className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              priority={index < 4}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={isUnoptimized(collection.banner_image_url)}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQoU2NkYGD4z0AEYBxVSFJgFIwC0QwMDAwMDAwMDAwAAAwA4nQn2QAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-[#2A2A2A]" />
        )}
      </div>

      {/* Collection Logo or Placeholder */}
      <div className="absolute top-32 left-6">
        <div className="relative group/logo">
          <div className="absolute inset-0 bg-yellow-500 rounded-xl blur-lg opacity-0 group-hover/logo:opacity-30 transition-opacity duration-500" />
          <div className="relative h-24 w-24 rounded-xl border-[3px] border-yellow-500 overflow-hidden bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:-translate-y-1 group-hover/logo:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)]">
            {collection.image_url ? (
              <Image
                src={collection.image_url}
                alt={collection.name}
                fill
                className="object-cover"
                quality={85}
                sizes="96px"
                unoptimized={isUnoptimized(collection.image_url)}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQoU2NkYGD4z0AEYBxVSFJgFIwC0QwMDAwMDAwMDAwAAAwA4nQn2QAAAABJRU5ErkJggg=="
                placeholder="blur"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#2A2A2A] text-yellow-500 text-2xl font-bold">
                {collection.name ? collection.name.charAt(0) : '?'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Collection Info */}
      <div className="relative flex-1 p-6 pt-16">
        {/* Collection Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{collection.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {collection.description || 'No description available'}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800">
          <div>
            <p className="text-sm text-gray-400">Floor Price</p>
            <p className="text-white font-semibold">
              {collection.stats?.floor_price ? `${collection.stats.floor_price} ETH` : '—'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Volume</p>
            <p className="text-white font-semibold">
              {collection.stats?.total_volume ? `${formatNumber(collection.stats.total_volume)} ETH` : '—'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Owners</p>
            <p className="text-white font-semibold">
              {collection.stats?.num_owners ? formatNumber(collection.stats.num_owners) : '—'}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {collection.safelist_status === 'verified' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-yellow-500 text-xs font-medium">Verified</span>
            </div>
          )}
          {collection.stats?.num_owners && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Users size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">
                {formatNumber(collection.stats.num_owners)} Owners
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 