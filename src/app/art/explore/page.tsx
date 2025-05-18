import { Metadata } from 'next';
import { fetchNFTs } from '@/lib/nft';
import { NFTGallery } from '../../../components/NFTGallery';

export const metadata: Metadata = {
  title: 'Explore NFTs | Art Gallery',
  description: 'Discover a curated collection of unique NFTs from various artists and collections.',
};

export const revalidate = 3600; // Revalidate every hour

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'NFT Art Gallery',
  description: 'Explore our curated collection of unique NFTs from various artists and collections.',
  url: 'https://yourdomain.com/art/explore',
};

export default async function ExplorePage() {
  const nftConfigs = [
    {
      contract: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      tokenId: '1234',
      priority: 1
    },
    // Add more NFT configurations here
  ];

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