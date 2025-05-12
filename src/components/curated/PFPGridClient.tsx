'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ImageIcon, AlertTriangle } from 'lucide-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface PFPCollection {
  address: string;
  name: string;
  image_url: string;
  slug: string;
}

function PFPSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_5px_20px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-neutral-800 rounded" />
          </div>
          <div className="py-4 px-1">
            <div className="h-5 w-2/3 bg-neutral-800 rounded mb-2" />
            <div className="h-3 w-1/2 bg-neutral-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function PFPErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-16 text-center bg-gradient-to-br from-[#111] to-[#222] rounded-xl border border-yellow-400/20 shadow-2xl">
      <AlertTriangle size={64} className="text-yellow-400 mb-6 animate-pulse" />
      <h2 className="text-3xl font-bold text-yellow-400 mb-4 font-serif tracking-tight">Something went wrong</h2>
      <p className="text-lg text-white/80 mb-8 max-w-xl font-light">We couldn&apos;t load the PFP collections. This might be a network issue or a temporary glitch. Please try again in a moment.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-lg hover:bg-yellow-300 transition-all duration-200 uppercase tracking-widest"
      >
        Try Again
      </button>
    </div>
  );
}

export function PFPGridClient() {
  const [collections, setCollections] = useState<PFPCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('/api/pfp')
      .then(res => res.json())
      .then(data => setCollections(data.collections || []))
      .finally(() => setLoading(false));
  }, []);

  const handleImageError = (address: string) => {
    setImageErrorMap((prev) => ({ ...prev, [address]: true }));
  };

  if (loading) {
    return <PFPSkeleton />;
  }

  // Animation for each card as it appears
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <ErrorBoundary fallback={<PFPErrorFallback />}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16"
      >
        {collections.map((collection, index) => (
          <motion.div
            key={collection.address}
            variants={itemVariants}
          >
            <Link href={`/pfp/${collection.slug}`} className="block group">
              <div className="relative aspect-square overflow-hidden bg-black border border-white/10 shadow-[0_5px_20px_0_rgba(0,0,0,0.25)]">
                {imageErrorMap[collection.address] ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/30">
                    <ImageIcon size={48} className="text-white/40" />
                  </div>
                ) : (
                  <Image
                    src={collection.image_url || '/images/nft-placeholder.png'}
                    alt={collection.name}
                    fill
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                    onError={() => handleImageError(collection.address)}
                    priority={index < 4}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={collection.image_url.includes('ipfs') || collection.image_url.includes('arweave')}
                  />
                )}
                {/* Elegant hover state */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="border-b border-white/50 px-3 py-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <span className="uppercase tracking-wider text-sm font-light text-white">View</span>
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="py-4 px-1">
                <h3 className="text-base font-light text-white/80 group-hover:text-yellow-400 transition-colors duration-300" title={collection.name}>
                  {collection.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </ErrorBoundary>
  );
}
