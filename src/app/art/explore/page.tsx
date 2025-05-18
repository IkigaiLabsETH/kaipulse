import { Metadata } from 'next';
import { fetchNFTs } from '@/lib/nft';
import { NFTGallery } from '../../../components/NFTGallery';

export const metadata: Metadata = {
  title: 'Explore NFTs | Art Gallery',
  description: 'Discover a curated collection of unique NFTs from various artists and collections.',
};

// Increase revalidation time to reduce build load
export const revalidate = 86400; // 24 hours

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'NFT Art Gallery',
  description: 'Explore our curated collection of unique NFTs from various artists and collections.',
  url: 'https://yourdomain.com/art/explore',
};

// Split NFT configs into smaller chunks for better build performance
const nftConfigs = [
  // First batch - high priority NFTs
  {
    contract: "0x4e1f41613c9084fdb9e34e11fae9412427480e56",
    tokenId: "8246",
    priority: 1
  },
  {
    contract: "0x2559bf029b4981c0701149ac7fde65170c82b449",
    tokenId: "5",
    priority: 2
  },
  // ... rest of your NFT configs with priorities
].slice(0, 10); // Limit initial build to 10 NFTs

export default async function ExplorePage() {
  const nfts = await fetchNFTs(nftConfigs);

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <h1 className="text-4xl font-bold mb-8">Explore NFTs</h1>
      <NFTGallery nfts={nfts} />
    </div>
  );
} 