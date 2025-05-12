'use client';

import { useEffect, useState, Suspense } from 'react';
import {
  CollectionGrid,
  CollectionTabs,
  CollectionSkeleton,
  CollectionError,
} from '@/components/collection';
import { Layout } from '@/components/ui';
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import { useRouter } from 'next/navigation';
import { PFP_COLLECTION_SLUGS_OR_ADDRESSES } from '@/config/pfp';

interface CollectionPageProps {
  params: { slug: string };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<(OpenSeaCollection & { stats?: OpenSeaCollectionStats }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Check if the slug is in our PFP collections list
    const isPFPCollection = PFP_COLLECTION_SLUGS_OR_ADDRESSES.includes(params.slug);
    if (!isPFPCollection) {
      setError('This is not a valid PFP collection');
      setIsLoading(false);
      return;
    }

    // Use the PFP-specific API endpoint
    fetch(`/api/pfp/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.redirectTo) {
          router.replace(data.redirectTo);
          return;
        }
        if (data.error) throw new Error(data.error);
        setCollection(data.collection);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [params.slug, router]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-black">
          <CollectionSkeleton />
        </div>
      </Layout>
    );
  }

  if (error || !collection) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-black">
          <CollectionError error={error || 'Collection not found'} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-black py-8">
        <div className="px-4">
          <CollectionTabs
            defaultTab="items"
            tabs={[
              {
                id: 'items',
                label: 'Collection',
                content: (
                  <Suspense fallback={<div className="py-16 text-center text-white/60">Loading PFP collection...</div>}>
                    <div className="mb-8">
                      <h1 className="text-4xl font-bold text-yellow-400 mb-4 tracking-tight font-epilogue">
                        {collection.name}
                      </h1>
                      {collection.description && (
                        <p className="text-white/80 text-lg max-w-3xl">
                          {collection.description}
                        </p>
                      )}
                    </div>
                    <CollectionGrid collectionSlug={collection.slug} />
                  </Suspense>
                ),
              }
            ]}
          />
        </div>
      </section>
    </Layout>
  );
} 