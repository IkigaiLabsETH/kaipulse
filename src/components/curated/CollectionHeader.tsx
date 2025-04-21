'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CollectionHeaderProps {
  name: string;
  description?: string;
  bannerUrl?: string;
  logoUrl?: string;
  verified?: boolean;
}

export const CollectionHeader: FC<CollectionHeaderProps> = ({
  name,
  description,
  bannerUrl,
  logoUrl,
  verified,
}) => {
  return (
    <div className="relative w-full">
      {/* Banner */}
      <div className="relative h-48 w-full overflow-hidden md:h-64">
        {bannerUrl ? (
          <Image
            src={bannerUrl}
            alt={`${name} banner`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gray-900" />
        )}
      </div>

      {/* Logo and Info */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center -mt-16 sm:flex-row sm:items-end sm:space-x-5">
          <div className="relative h-32 w-32 rounded-xl border-4 border-black bg-white shadow-lg">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={`${name} logo`}
                fill
                className="rounded-lg object-cover"
                priority
              />
            ) : (
              <div className="h-full w-full rounded-lg bg-gray-800" />
            )}
          </div>

          <div className="mt-6 sm:mt-0">
            <motion.h1 
              className="text-3xl font-bold text-white flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {name}
              {verified && (
                <svg
                  className="h-6 w-6 text-[#F7B500]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </motion.h1>
            {description && (
              <motion.p 
                className="mt-2 max-w-2xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader; 