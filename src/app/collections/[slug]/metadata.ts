import type { Metadata } from "next";
import type { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';

// Server-side fetch for metadata
async function fetchCollection(slug: string): Promise<(OpenSeaCollection & { stats?: OpenSeaCollectionStats }) | null> {
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
          url: collection.banner_image_url || collection.image_url || "https://livethelife.tv/background_helo.jpeg",
          width: 1200,
          height: 630,
          alt: collection.name,
        },
      ],
      type: "website",
      siteName: "LiveTheLifeTV",
    },
    twitter: {
      card: "summary_large_image",
      title: collection.name,
      description: collection.description || "",
      images: [collection.banner_image_url || collection.image_url || "https://livethelife.tv/background_helo.jpeg"],
    },
    alternates: {
      canonical: `https://livethelife.tv/collections/${params.slug}`,
    },
  };
}

export { fetchCollection }; 