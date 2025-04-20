import Image from 'next/image';
import Link from 'next/link';
import { OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import { formatEther } from 'viem';

interface NFTCollectionCardProps {
  collection: OpenSeaCollection;
  stats?: OpenSeaCollectionStats;
}

export function NFTCollectionCard({ collection, stats }: NFTCollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`}>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-yellow-500 bg-[#1c1f26] shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
        {/* Banner Image */}
        <div className="relative h-48 w-full overflow-hidden bg-neutral-800">
          <Image
            src={collection.banner_image_url || collection.image_url}
            alt={collection.name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        
        {/* Collection Info */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="relative -mt-10 h-20 w-20 overflow-hidden rounded-full border-4 border-[#1c1f26] bg-neutral-800">
            <Image
              src={collection.image_url}
              alt={collection.name}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-white font-epilogue">
            {collection.name}
          </h3>
          
          <p className="mt-2 text-sm text-gray-400 line-clamp-2 font-satoshi">
            {collection.description}
          </p>

          {stats && (
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-700/50 pt-4">
              <div>
                <p className="text-sm text-gray-400 font-satoshi">Floor Price</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-lg font-medium text-white font-epilogue">
                    Ξ {stats.floor_price ? formatEther(BigInt(Math.round(stats.floor_price * 1e18))) : '—'}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-satoshi">Total Volume</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-lg font-medium text-white font-epilogue">
                    Ξ {stats.total_volume ? formatEther(BigInt(Math.round(stats.total_volume * 1e18))) : '—'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 