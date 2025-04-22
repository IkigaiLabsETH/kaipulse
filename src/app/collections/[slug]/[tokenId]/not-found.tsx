import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/ui';

export default function NFTNotFound() {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors tracking-wider text-sm uppercase"
          >
            <ArrowLeft size={16} className="text-yellow-400" />
            <span>Back to Collections</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 mb-8 opacity-50 relative">
            <Image 
              src="/images/nft-placeholder.png" 
              alt="NFT Not Found" 
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-light mb-4 text-white uppercase tracking-widest">
            NFT Not Found
          </h1>
          <p className="text-white/70 mb-6 max-w-lg">
            We couldn&apos;t find the NFT you&apos;re looking for. It may have been removed or never existed.
          </p>
          
          <Link
            href="/collections" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </Layout>
  );
} 