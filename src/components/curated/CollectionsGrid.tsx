import Link from 'next/link';
import Image from 'next/image';

interface CollectionWithStats {
  collection: string;
  name: string;
  description?: string;
  image_url?: string;
  stats?: {
    floor_price?: number;
    total_volume?: number;
  };
}

interface CollectionsGridProps {
  collections: CollectionWithStats[];
}

export function CollectionsGrid({ collections }: CollectionsGridProps) {
  if (!collections.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No collections available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {collections.map((collection) => (
        <Link
          key={collection.collection}
          href={`/collections/${collection.collection}`}
          className="group"
        >
          <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-300 group-hover:border-yellow-500/50">
            <div className="relative aspect-square">
              <Image
                src={collection.image_url || '/images/placeholder.png'}
                alt={collection.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-yellow-500">
                {collection.name}
              </h3>
              <p className="text-sm text-neutral-400 line-clamp-2">
                {collection.description}
              </p>
              {collection.stats && (
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div>
                    <p className="text-neutral-400">Floor</p>
                    <p className="font-medium text-white">
                      {collection.stats.floor_price
                        ? `${collection.stats.floor_price} ETH`
                        : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-400">Total Volume</p>
                    <p className="font-medium text-white">
                      {collection.stats.total_volume
                        ? `${Math.round(collection.stats.total_volume)} ETH`
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 