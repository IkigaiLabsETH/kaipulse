import { Suspense } from 'react';
import Image from 'next/image';
import { OpenSeaAPI, OpenSeaAPIError } from '@/services/opensea/api';
import { NFTCard } from '@/components/nft/NFTCard';
import { NFTLayout } from '@/components/nft/NFTLayout';
import { formatEther } from 'viem';
import Link from 'next/link';
import { ActivityTab } from '@/components/nft/ActivityTab';
import CollectionPageClient from './CollectionPageClient';

// Initialize API instance
const openSeaApi = new OpenSeaAPI();

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'boredapeyachtclub' },
    { slug: 'doodles-official' },
    { slug: 'azuki' }
  ];
}

// Server actions for data fetching
async function fetchCollectionData(slugOrContract: string) {
  try {
    // If it's a contract address, use the contract endpoint
    const isContract = /^0x[a-fA-F0-9]{40}$/i.test(slugOrContract);
    
    if (isContract) {
      const [collection, stats] = await Promise.all([
        openSeaApi.getCollectionByContract(slugOrContract),
        openSeaApi.getCollectionStatsByContract(slugOrContract).catch(() => null),
      ]);
      return { collection, stats };
    }

    // Otherwise use the collection endpoint
    const [collection, stats] = await Promise.all([
      openSeaApi.getCollection(slugOrContract),
      openSeaApi.getCollectionStats(slugOrContract).catch(() => null),
    ]);
    return { collection, stats };
  } catch (error) {
    console.error('Error fetching collection:', error);
    return null;
  }
}

async function fetchCollectionNFTs(slug: string) {
  try {
    console.log('Fetching NFTs for collection:', slug);
    const response = await openSeaApi.getCollectionNFTs(slug, { 
      limit: 20,
      order_by: 'sale_price',
      order_direction: 'desc'
    });
    
    console.log('OpenSea API Response:', JSON.stringify(response, null, 2));
    
    // More detailed validation
    if (!response) {
      console.error('Response is null or undefined');
      throw new Error('No response from OpenSea API');
    }

    if (!response.results) {
      console.error('Response has no results array:', response);
      throw new Error('Invalid response format from OpenSea API');
    }

    if (!Array.isArray(response.results)) {
      console.error('Results is not an array:', response.results);
      throw new Error('Invalid results format from OpenSea API');
    }

    if (response.results.length === 0) {
      console.error('Results array is empty');
      throw new Error('No NFTs found in collection');
    }
    
    // Map the response to include default values for null fields
    return response.results.map(nft => ({
      ...nft,
      name: nft.name || `#${nft.identifier}`,
      description: nft.description || 'No description available'
    }));
  } catch (error: unknown) {
    console.error('Error fetching NFTs:', error);
    if (error instanceof OpenSeaAPIError) {
      console.error('OpenSea API Error:', {
        message: error.message,
        status: error.status,
        code: error.code
      });
    }
    throw error;
  }
}

async function fetchCollectionEvents(slug: string) {
  try {
    const events = await openSeaApi.getCollectionEvents(slug, { limit: 20 });
    return events.results;
  } catch (error) {
    console.error('Error fetching events:', error);
    return null;
  }
}

export async function CollectionHeader({ slug }: { slug: string }) {
  const data = await fetchCollectionData(slug);
  
  if (!data) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] p-8 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] text-center">
          <h2 className="text-xl font-bold text-white mb-4">Collection Not Found</h2>
          <p className="text-gray-400 mb-6">
            The collection you're looking for could not be found.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  const { collection, stats } = data;

  return (
    <div className="relative bg-[#111111] overflow-hidden">
      {/* Banner Image with parallax effect */}
      <div className="absolute inset-0 w-full h-[500px] overflow-hidden">
        <Image
          src={collection.banner_image_url || collection.image_url}
          alt=""
          fill
          className="object-cover scale-110 origin-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#111111]/90 to-[#111111]" />
        {/* Animated grain overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/grain.png')] animate-grain" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-40 pb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Collection Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl border-[3px] border-yellow-500 overflow-hidden bg-[#111111] shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] relative">
              <div className="relative w-full h-full group">
                <Image
                  src={collection.image_url}
                  alt={collection.name}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Collection Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span className="text-yellow-500 text-sm font-medium">Verified Collection</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-sm font-medium">Top Trending</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {collection.name}
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed font-light">
              {collection.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  label: "Floor Price",
                  value: stats?.floor_price ? `${formatEther(BigInt(Math.round(stats.floor_price * 1e18)))} Ξ` : '—',
                  change: "+12.5%",
                  isPositive: true
                },
                {
                  label: "Items",
                  value: stats?.total_supply?.toLocaleString() || '—',
                },
                {
                  label: "Owners",
                  value: stats?.num_owners?.toLocaleString() || '—',
                },
                {
                  label: "Total Volume",
                  value: stats?.total_volume ? `${formatEther(BigInt(Math.round(stats.total_volume * 1e18)))} Ξ` : '—',
                  change: "+24.8%",
                  isPositive: true
                }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group rounded-2xl border-[3px] border-yellow-500 bg-[#111111]/80 backdrop-blur-sm p-5 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-yellow-500 text-sm font-medium uppercase tracking-wider mb-2 group-hover:text-yellow-400 transition-colors">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    {stat.change && (
                      <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function NFTGrid({ slug }: { slug: string }) {
  const nfts = await fetchCollectionNFTs(slug);
  
  if (!nfts) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">
          Unable to load NFTs. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {nfts.map((nft, index) => (
        <Link
          href={`/collections/${slug}/${nft.identifier}`}
          key={nft.identifier}
          className="group relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] animate-fadeIn"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          
          <div className="relative aspect-square w-full bg-[#111111] group-hover:bg-[#161616] transition-colors duration-300">
            <Image
              src={nft.image_url || ''}
              alt={nft.name || ''}
              fill
              className="object-contain p-2 transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="relative p-4">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
              {nft.name || `#${nft.identifier}`}
            </h3>
            <div className="flex items-baseline gap-2 text-gray-400">
              <span className="font-mono">Ξ</span>
              <span className="text-xl font-bold text-white">1.55</span>
              <span className="text-sm">${'2461'}</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-4">
              <div className="text-sm text-gray-400">
                Last sale: <span className="font-mono text-white">0.78 Ξ</span>
              </div>
              <div className="text-yellow-500 transform group-hover:translate-x-2 transition-transform duration-300">→</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function CollectionActivity({ slug }: { slug: string }) {
  const events = await fetchCollectionEvents(slug);
  
  if (!events) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">
          Unable to load activity. Please try again later.
        </p>
      </div>
    );
  }

  const mappedEvents = events.map(event => ({
    type: event.type as 'listing' | 'offer' | 'sale' | 'transfer' | 'mint',
    price: event.price?.current.value,
    from: event.from_address,
    to: event.to_address || event.from_address,
    timestamp: new Date(event.created_date),
    tokenId: event.transaction?.transaction_hash || '',
    image: undefined
  }));
  
  return <ActivityTab events={mappedEvents} />;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  return <CollectionPageClient params={params} />;
} 