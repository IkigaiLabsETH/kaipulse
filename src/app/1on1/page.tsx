import { fetchNFTs } from '@/lib/nft';
import { NFTGallery } from '@/components/NFTGallery';
import { Metadata } from 'next';
import { oneononeNFTs } from '@/config/one-on-one';

// Increase revalidation time to reduce build load
export const revalidate = 86400; // 24 hours

export const metadata: Metadata = {
  title: 'One-on-One Collection | Digital Art Gallery',
  description: 'A curated selection of unique one-on-one digital artworks.',
  openGraph: {
    title: 'One-on-One Collection | Digital Art Gallery',
    description: 'A curated selection of unique one-on-one digital artworks.',
    type: 'website',
  },
};

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'One-on-One Collection',
  description: 'A curated selection of unique one-on-one digital artworks',
  about: {
    '@type': 'Thing',
    name: 'Digital Art',
    description: 'A collection of unique one-on-one digital artworks'
  }
};

// Use all one-on-one NFTs
const nftConfigs = oneononeNFTs;

export default async function OneOnOnePage() {
  const nfts = await fetchNFTs(nftConfigs);

  return (
    <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Art • One-on-One</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              One-on-One Collection
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A curated selection of unique one-on-one digital artworks</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
        <NFTGallery nfts={nfts} />
      </div>
    </div>
  );
}
