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
import { Metadata } from "next";

interface CollectionPageProps {
  params: { slug: string };
}

// Server-side fetch for metadata
async function fetchCollection(slug: string): Promise<OpenSeaCollection | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "https://livethelife.tv"}/api/collections/${slug}`, { cache: "no-store" });
    const data = await res.json();
    return data.collection || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const collection = await fetchCollection(params.slug);

  if (!collection) {
    return {
      title: "Collection Not Found | LiveTheLifeTV",
      description: "Sorry, this collection does not exist.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: `${collection.name} | NFT Collection | LiveTheLifeTV`,
    description: collection.description || `Explore the ${collection.name} NFT collection on LiveTheLifeTV.`,
    openGraph: {
      title: collection.name,
      description: collection.description || "",
      images: [
        {
          url: collection.image_url || "https://livethelife.tv/background_helo.jpeg",
          width: 1200,
          height: 630,
          alt: collection.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: collection.name,
      description: collection.description || "",
      images: [collection.image_url || "https://livethelife.tv/background_helo.jpeg"],
    },
    alternates: {
      canonical: `https://livethelife.tv/collections/${params.slug}`,
    },
  };
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