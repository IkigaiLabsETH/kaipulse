'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Collection {
  address: string;
  name: string;
  image_url: string;
  description?: string;
}

export function CollectionsGridClient() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/collections')
      .then(res => res.json())
      .then(data => setCollections(data.collections || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-white text-center text-xl">Loading collections...</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <Link
            href={`/collections/${collection.address}`}
            key={collection.address}
            className="group relative aspect-[4/5] block overflow-hidden rounded-2xl bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(247,181,0,0.15)]"
          >
            <div className="absolute inset-0">
              <Image
                src={collection.image_url || '/images/placeholder-banner.png'}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="absolute top-4 left-4">
              <div className="h-16 w-16 rounded-lg overflow-hidden border-2 border-white/10 shadow-lg">
                <Image
                  src={collection.image_url || '/images/placeholder-logo.png'}
                  alt={`${collection.name} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                {collection.name}
              </h3>
              {collection.description && (
                <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-lg">
                  {collection.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 