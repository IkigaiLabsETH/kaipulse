'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/ui';
import Image from 'next/image';

type NFT = {
  identifier: string;
  name: string;
  image_url?: string;
  description?: string;
};

export default function TestNFTsPage() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestNFTs() {
      try {
        setLoading(true);
        const response = await fetch('/api/test/nfts');
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        //         console.log('TEST NFT DATA:', {
        //           isArray: Array.isArray(data),
        //           length: Array.isArray(data) ? data.length : 'not an array',
        //           sample: Array.isArray(data) && data.length > 0 ? data[0].name : 'no items'
        //         });
        
        if (!Array.isArray(data)) {
          throw new Error('API did not return an array');
        }
        
        setNfts(data);
      } catch (err) {
        //         console.error('Error fetching test NFTs:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    
    fetchTestNFTs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Test NFTs</h1>
          <p>Loading NFTs...</p>
        </div>
      </Layout>
    );
  }
  
  if (error) {
    return (
      <Layout>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Test NFTs</h1>
          <p className="text-red-500">Error: {error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Test NFTs</h1>
        
        <p className="mb-4">Found {nfts.length} NFTs</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <div key={nft.identifier} className="border border-gray-300 p-4 rounded">
              <h2 className="text-xl font-bold mb-2">{nft.name}</h2>
              {nft.image_url && (
                <Image
                  src={nft.image_url}
                  alt={nft.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover mb-2"
                />
              )}
              <p className="text-sm">{nft.description?.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 