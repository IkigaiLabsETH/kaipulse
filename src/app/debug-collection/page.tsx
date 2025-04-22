'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface NFT {
  tokenId: string;
  name: string;
  image: string;
}

export default function DebugCollectionPage() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState(new Date().toISOString());
  
  const fetchNFTs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fetching NFTs from debug endpoint...');
      const timestamp = new Date().getTime(); // Add timestamp to prevent caching
      const response = await axios.get(`/api/debug-nfts?slug=boredapeyachtclub&t=${timestamp}`);
      console.log('Debug API response:', response);
      
      if (response.status === 200 && Array.isArray(response.data)) {
        console.log(`Received ${response.data.length} NFTs`);
        setNfts(response.data as NFT[]);
      } else {
        console.error('Unexpected response format:', response);
        setError('Unexpected response format');
      }
    } catch (err: unknown) {
      console.error('Error fetching NFTs:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch NFTs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const refreshData = () => {
    setTimestamp(new Date().toISOString());
    fetchNFTs();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Debug NFT Collection</h1>
        <button 
          onClick={refreshData}
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          Refresh Data
        </button>
      </div>
      
      <div className="bg-slate-800 p-4 rounded mb-6">
        <p className="text-white font-mono">Last fetched: {timestamp}</p>
        <p className="text-white font-mono">NFTs found: {nfts.length}</p>
        {error && <p className="text-red-500 font-mono">Error: {error}</p>}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading NFTs...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.tokenId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{nft.name}</h3>
                  <p className="text-sm text-gray-500">#{nft.tokenId}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
} 