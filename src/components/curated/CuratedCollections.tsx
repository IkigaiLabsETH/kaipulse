import { logger } from '@/lib/logger';
import { Collection } from '@/types/opensea';
import { CURATED_COLLECTIONS } from '@/config/collections';
import Link from 'next/link';
import Image from 'next/image';

// Define a minimal collection type for initial data
interface MinimalCollection {
  address: string;
  name: string;
  image_url: string;
  description?: string;
}

interface CollectionStats {
  total_supply: number;
  total_listings: number;
  total_volume: number;
  floor_price: number;
  market_cap: number;
  num_owners: number;
  one_day_volume?: number;
  seven_day_volume?: number;
  thirty_day_volume?: number;
}

const mockStats = {
  total_supply: 10000,
  total_listings: 0,
  total_volume: 1234.56,
  total_sales: 789,
  floor_price: 1.23,
  market_cap: 12300,
  num_owners: 4567,
  average_price: 1.56
};

// Create default values for required Collection fields
const defaultCollectionValues: Partial<Collection> = {
  name: '',
  description: null,
  image_url: null,
  external_url: null,
  banner_image_url: null,
  safelist_status: 'not_requested',
  category: 'unknown',
  contract_address: '',
  is_disabled: false,
  is_nsfw: false,
  trait_offers_enabled: false,
  collection_offers_enabled: false,
  opensea_url: '',
  stats: {
    total_supply: 0,
    total_listings: 0,
    total_volume: 0,
    floor_price: 0,
    market_cap: 0,
    num_owners: 0,
    one_day_volume: 0,
    seven_day_volume: 0,
    thirty_day_volume: 0
  },
  slug: ''
};

// Initialize collections with minimal required data
const initialCollections = CURATED_COLLECTIONS.map((collection) => ({
  ...defaultCollectionValues,
  ...collection,
  // Ensure required Collection fields are present
  contract_address: collection.address,
  slug: collection.address.toLowerCase(),
}));

export async function CuratedCollections() {
  try {
    const collections = await Promise.all(
      initialCollections.map(async (collection) => {
        try {
          const response = await fetch(`/api/opensea/collection/${collection.address}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch collection ${collection.address}`);
          }
          const data = await response.json();
          return {
            ...collection,
            ...data,
          };
        } catch (error) {
          logger.error('Error fetching collection details:', {
            collection: collection.address,
            error
          });
          return collection;
        }
      })
    );

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
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={collection.banner_image_url || collection.image_url || '/images/placeholder-banner.png'}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Collection Logo */}
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

              {/* Collection Info */}
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
  } catch (error) {
    logger.error('Error in CuratedCollections component:', error);
    return null;
  }
} 