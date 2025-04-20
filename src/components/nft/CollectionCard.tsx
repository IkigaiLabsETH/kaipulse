import Image from 'next/image';
import Link from 'next/link';
import { OpenSeaCollection } from '@/services/opensea/types';
import { Users, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { logger } from '@/lib/logger';

// SafeImage component that falls back to regular img tag for problematic URLs
function SafeImage({ src, alt, className, fill = false, priority = false, onError }: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  onError?: () => void;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      priority={priority}
      onError={onError}
      unoptimized={src.includes('stream.mux.com')}
    />
  );
}

interface CollectionCardProps {
  collection: OpenSeaCollection & { 
    stats?: { 
      total_supply?: number | null;
      num_owners?: number | null;
    } | null;
  };
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  const [bannerError, setBannerError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Debug log for collection data
  useEffect(() => {
    logger.info('Collection data:', {
      name: collection.name,
      collection: collection.collection,
      slug: collection.slug,
      imageUrl: collection.image_url,
      bannerUrl: collection.banner_image_url
    });
  }, [collection]);

  // Default images if not provided or on error
  const bannerUrl = !bannerError && collection.banner_image_url 
    ? collection.banner_image_url.replace(/^http:/, 'https:')
    : '/images/placeholder-banner.jpg';
  
  const logoUrl = !logoError && collection.image_url 
    ? collection.image_url.replace(/^http:/, 'https:')
    : '/images/placeholder-logo.jpg';

  // Format numbers for display
  const formatNumber = (num: number | null | undefined) => {
    if (num === undefined || num === null) return '—';
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  // Handle image loading errors
  const handleImageError = (type: 'banner' | 'logo', url: string) => {
    logger.error(`Failed to load ${type} image:`, { url });
    if (type === 'banner') {
      setBannerError(true);
    } else {
      setLogoError(true);
    }
  };

  return (
    <Link
      href={`/collections/${collection.collection}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Banner Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[#1A1A1A]">
        <SafeImage
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
            <SafeImage
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
          {collection.stats?.num_owners && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Users size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">
                {formatNumber(collection.stats.num_owners)} Owners
              </span>
            </div>
          )}
          {collection.stats?.total_supply && (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Users size={12} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-medium">
                {formatNumber(collection.stats.total_supply)} Items
              </span>
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-yellow-500 transition-colors">
          {collection.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {collection.description || 'No description available'}
        </p>

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