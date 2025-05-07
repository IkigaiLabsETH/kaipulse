'use client';

import { motion } from 'framer-motion';

export function CollectionSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black p-4"
    >
      {/* Header */}
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-white/5 rounded-lg animate-pulse" />
          <div className="h-8 w-48 bg-white/5 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-square bg-white/5 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 