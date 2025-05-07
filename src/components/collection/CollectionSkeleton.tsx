'use client';

import { motion } from 'framer-motion';

export function CollectionSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      {/* Hero Banner Skeleton */}
      <div className="relative h-[400px] bg-gradient-to-b from-[#1A1A1A] to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* Collection Info Skeleton */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Collection Logo */}
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#F3CC3E]/10 to-transparent animate-pulse" />
            <div className="absolute inset-0 rounded-2xl border border-[#F3CC3E]/20" />
          </div>

          {/* Collection Details */}
          <div className="flex-1 space-y-6 pt-4">
            <div className="space-y-4">
              <div className="h-12 w-64 bg-gradient-to-r from-[#F3CC3E]/10 to-transparent rounded-lg animate-pulse" />
              <div className="h-6 w-full max-w-2xl bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <div className="h-10 w-32 bg-gradient-to-r from-[#F3CC3E]/10 to-transparent rounded-lg animate-pulse" />
              <div className="h-10 w-32 bg-gradient-to-r from-[#F3CC3E]/10 to-transparent rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-black rounded-2xl p-8 border border-[#F3CC3E]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 w-24 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-full animate-pulse" />
                <div className="h-8 w-32 bg-gradient-to-r from-[#F3CC3E]/10 to-transparent rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NFT Grid Skeleton */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-[#F3CC3E]/5 to-transparent rounded-xl animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
                <div className="h-4 w-1/2 bg-gradient-to-r from-[#F3CC3E]/5 to-transparent rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 