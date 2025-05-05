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

interface CollectionPageProps {
  params: { slug: string };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const [collection, setCollection] = useState<(OpenSeaCollection & { stats?: OpenSeaCollectionStats }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`/api/collections/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setCollection(data.collection);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [params.slug]);

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
                label: 'Exhibition',
                content: (
                  <Suspense fallback={<div className="py-16 text-center text-white/60">Loading exhibition...</div>}>
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