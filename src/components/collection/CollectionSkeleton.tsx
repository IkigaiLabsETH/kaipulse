'use client';

import { motion } from 'framer-motion';

export function CollectionSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="animate-pulse"
    >
      {/* Hero Banner Skeleton */}
      <div className="relative h-[400px] bg-[#1A1A1A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
      </div>

      {/* Collection Info Skeleton */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-48 rounded-2xl bg-[#1A1A1A] shadow-[5px_5px_0px_0px_rgba(234,179,8,0.5)]" />
          <div className="flex-1 space-y-4 pt-4">
            <div className="h-12 w-64 bg-[#1A1A1A] rounded-lg" />
            <div className="h-6 w-full max-w-2xl bg-[#1A1A1A] rounded-lg" />
            <div className="flex gap-4 pt-4">
              <div className="h-10 w-32 bg-[#1A1A1A] rounded-lg" />
              <div className="h-10 w-32 bg-[#1A1A1A] rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-[#1A1A1A] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-[#252525] rounded-full" />
                <div className="h-8 w-32 bg-[#252525] rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 