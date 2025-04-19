'use client';

import Image from 'next/image';
import type { OpenSeaCollection } from '@/services/opensea/types';
import { useState, useEffect } from 'react';
import { logger } from '@/lib/logger';

interface CollectionHeaderProps {
  collection: OpenSeaCollection;
}

export function CollectionHeader({ collection }: CollectionHeaderProps) {
  const [bannerError, setBannerError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Log collection data for debugging
  useEffect(() => {
    logger.info('Collection header data:', {
      name: collection.name,
      slug: collection.collection,
      imageUrl: collection.image_url,
      bannerUrl: collection.banner_image_url
    });
  }, [collection]);

  const bannerUrl = !bannerError && collection.banner_image_url 
    ? collection.banner_image_url 
    : '/images/placeholder-banner.svg';
  
  const logoUrl = !logoError && collection.image_url 
    ? collection.image_url 
    : '/images/placeholder-logo.svg';

  // Handle image loading errors
  const handleImageError = (type: 'banner' | 'logo', url: string) => {
    logger.warn(`Failed to load ${type} image in header:`, { url });
    if (type === 'banner') {
      setBannerError(true);
    } else {
      setLogoError(true);
    }
  };

  return (
    <div className="relative bg-[#111111] overflow-hidden">
      {/* Banner Image with parallax effect */}
      <div className="absolute inset-0 w-full h-[500px] overflow-hidden">
        <Image
          src={bannerUrl}
          alt={collection.name}
          fill
          className="object-cover scale-110 origin-center"
          priority
          quality={90}
          onError={() => handleImageError('banner', bannerUrl)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#111111]/90 to-[#111111]" />
        <div className="absolute inset-0 opacity-20 bg-[url('/grain.png')] animate-grain" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-40 pb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Collection Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl border-[3px] border-yellow-500 overflow-hidden bg-[#111111] shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] relative">
              <div className="relative w-full h-full group">
                <Image
                  src={logoUrl}
                  alt={collection.name}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                  quality={90}
                  onError={() => handleImageError('logo', logoUrl)}
                />
              </div>
            </div>
          </div>

          {/* Collection Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-wrap gap-3 mb-6">
              {collection.safelist_status === 'verified' && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  <span className="text-yellow-500 text-sm font-medium">Verified Collection</span>
                </div>
              )}
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {collection.name}
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed font-light">
              {collection.description}
            </p>

            {/* Social Links */}
            {(collection.discord_url || collection.external_url || collection.twitter_username) && (
              <div className="flex gap-4 mt-8">
                {collection.discord_url && (
                  <a
                    href={collection.discord_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Discord
                  </a>
                )}
                {collection.external_url && (
                  <a
                    href={collection.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Website
                  </a>
                )}
                {collection.twitter_username && (
                  <a
                    href={`https://twitter.com/${collection.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 