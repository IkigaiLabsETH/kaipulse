'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { CollectionHeader, NFTGrid, CollectionActivity } from './page';
import { ActivityTab } from '@/components/nft/ActivityTab';

interface CollectionPageClientProps {
  params: {
    slug: string;
  };
}

function CollectionTabs({ 
  activeTab,
  onTabChange 
}: { 
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
      <div className="flex gap-8">
        <button 
          onClick={() => onTabChange('collection')}
          className={`font-bold relative group ${
            activeTab === 'collection' ? 'text-white' : 'text-gray-400 hover:text-white'
          } transition-colors`}
        >
          <span className="relative z-10">Collection</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${
            activeTab === 'collection' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </button>
        <button 
          onClick={() => onTabChange('activity')}
          className={`font-bold relative group ${
            activeTab === 'activity' ? 'text-white' : 'text-gray-400 hover:text-white'
          } transition-colors`}
        >
          <span className="relative z-10">Activity</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${
            activeTab === 'activity' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </button>
      </div>
      {activeTab === 'collection' && (
        <div className="relative">
          <select className="appearance-none bg-[#1A1A1A] text-white border-[3px] border-yellow-500 rounded-xl px-4 py-2 pr-10 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] focus:outline-none focus:border-yellow-400">
            <option>Floor: Low to high</option>
            <option>Floor: High to low</option>
            <option>Recently Listed</option>
            <option>Recently Sold</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
            ↓
          </div>
        </div>
      )}
    </div>
  );
}

export default function CollectionPageClient({ params }: CollectionPageClientProps) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'collection';
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    router.push(`/collections/${params.slug}?tab=${tab}`);
  };

  return (
    <main className="min-h-screen bg-[#111111]">
      <Suspense 
        fallback={
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-lg mx-auto rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] p-8 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] text-center">
              <div className="animate-pulse space-y-4">
                <div className="h-8 w-48 bg-yellow-500/20 rounded-full mx-auto"></div>
                <div className="h-4 w-full bg-yellow-500/10 rounded-full"></div>
                <div className="h-4 w-2/3 bg-yellow-500/10 rounded-full"></div>
              </div>
            </div>
          </div>
        }
      >
        <CollectionHeader slug={params.slug} />
      </Suspense>

      <div className="container mx-auto px-4 py-12">
        <CollectionTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <Suspense 
          fallback={
            activeTab === 'collection' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl border-[3px] border-yellow-500/50 bg-[#1A1A1A] overflow-hidden">
                    <div className="aspect-square bg-yellow-500/10"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-yellow-500/10 rounded-full w-2/3"></div>
                      <div className="h-4 bg-yellow-500/10 rounded-full w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ActivityTab isLoading />
            )
          }
        >
          {activeTab === 'collection' ? (
            <NFTGrid slug={params.slug} />
          ) : (
            <CollectionActivity slug={params.slug} />
          )}
        </Suspense>
      </div>
    </main>
  );
} 