import Image from 'next/image';
import Link from 'next/link';
import { OpenSeaCollection } from '@/services/opensea/types';
import { TrendingUp, Users, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { logger } from '@/lib/logger';

interface CollectionCardProps {
  collection: OpenSeaCollection & { stats?: any };
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  const [bannerError, setBannerError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Log collection data for debugging
  useEffect(() => {
    logger.info('Collection data:', {
      name: collection.name,
      slug: collection.collection,
      imageUrl: collection.image_url,
      bannerUrl: collection.banner_image_url,
      stats: collection.stats
    });
  }, [collection]);

  // Default images if not provided or on error
  const bannerUrl = !bannerError && collection.banner_image_url 
    ? collection.banner_image_url 
    : '/images/placeholder-banner.svg';
  
  const logoUrl = !logoError && collection.image_url 
    ? collection.image_url 
    : '/images/placeholder-logo.svg';
  
  // Format stats - ensure we handle undefined values
  const floorPrice = collection.stats?.floor_price ? Number(collection.stats.floor_price) : undefined;
  const totalVolume = collection.stats?.total_volume ? Number(collection.stats.total_volume) : undefined;
  const totalSupply = collection.total_supply || collection.stats?.total_supply;

  // Format numbers for display
  const formatNumber = (num: number | undefined) => {
    if (num === undefined) return '—';
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(num < 1 ? 3 : 1);
  };

  // Handle image loading errors
  const handleImageError = (type: 'banner' | 'logo', url: string) => {
    logger.warn(`Failed to load ${type} image:`, { url });
    if (type === 'banner') {
      setBannerError(true);
    } else {
      setLogoError(true);
    }
  };

  return (
    <Link
      href={`/collections/${collection.collection}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Banner Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[#1A1A1A]">
        <Image
          src={bannerUrl}
          alt={collection.name}
          fill
          className="object-cover transform transition-transform duration-700 group-hover:scale-110"
          priority={index < 6}
          onError={() => handleImageError('banner', bannerUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
      </div>

      {/* Collection Logo */}
      <div className="absolute top-32 left-6">
        <div className="relative group/logo">
          <div className="absolute inset-0 bg-yellow-500 rounded-xl blur-lg opacity-0 group-hover/logo:opacity-30 transition-opacity duration-500" />
          <div className="relative h-24 w-24 rounded-xl border-[3px] border-yellow-500 overflow-hidden bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:-translate-y-1 group-hover/logo:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)]">
            <Image
              src={logoUrl}
              alt={collection.name}
              fill
              className="object-cover"
              onError={() => handleImageError('logo', logoUrl)}
            />
          </div>
        </div>
      </div>

      {/* Collection Info */}
      <div className="relative flex-1 p-6 pt-16">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {collection.safelist_status === 'verified' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-yellow-500 text-xs font-medium">Verified</span>
            </div>
          )}
          {totalSupply && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Users size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">
                {formatNumber(Number(totalSupply))} Items
              </span>
            </div>
          )}
          {floorPrice && floorPrice > 1 && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <TrendingUp size={12} className="text-green-400" />
              <span className="text-green-400 text-xs font-medium">High Value</span>
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-yellow-500 transition-colors">
          {collection.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {collection.description || 'No description available'}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
          <div className="space-y-1">
            <p className="text-xs text-gray-500">Floor Price</p>
            <p className="font-mono text-white">
              {floorPrice !== undefined ? (
                <>
                  <span className="text-lg font-bold">
                    {formatNumber(floorPrice)}
                  </span>
                  <span className="text-sm ml-1">Ξ</span>
                </>
              ) : (
                '—'
              )}
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-xs text-gray-500">Total Volume</p>
            <p className="font-mono text-white">
              {totalVolume !== undefined ? (
                <>
                  <span className="text-lg font-bold">
                    {formatNumber(totalVolume)}
                  </span>
                  <span className="text-sm ml-1">Ξ</span>
                </>
              ) : (
                '—'
              )}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          {collection.external_url && (
            <a
              href={collection.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
          <div className="text-yellow-500 transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </div>
        </div>
      </div>
    </Link>
  );
} 