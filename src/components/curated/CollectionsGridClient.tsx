'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ImageIcon } from 'lucide-react';

interface Collection {
  address: string;
  name: string;
  image_url: string;
}

export function CollectionsGridClient() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('/api/collections')
      .then(res => res.json())
      .then(data => setCollections(data.collections || []))
      .finally(() => setLoading(false));
  }, []);

  const handleImageError = (address: string) => {
    setImageErrorMap((prev) => ({ ...prev, [address]: true }));
  };

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <span className="text-white/60 text-xl">Loading collections...</span>
      </div>
    );
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16"
    >
      {collections.map((collection) => (
        <motion.div
          key={collection.address}
          variants={itemVariants}
        >
          <Link href={`/collections/${collection.address}`} className="block group">
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
                  priority
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
  );
} 