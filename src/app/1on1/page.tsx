import { Suspense } from 'react';
import { openSeaService } from '@/services/opensea';
import { notFound } from 'next/navigation';
import { logger } from '@/lib/logger';
import { oneononeNFTs } from '@/config/one-on-one';
import { NFTMasonryGrid } from '@/components/NFTMasonryGrid';
import Head from 'next/head';

function Skeleton() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#F3CC3E] mb-4">
            One-on-One Collection
          </h1>
          <p className="text-[#F3CC3E]/60 font-serif text-lg md:text-xl max-w-2xl mx-auto">
            A curated selection of unique one-on-one digital artworks
          </p>
        </div>

        {/* Loading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-gradient-to-b from-[#F3CC3E]/5 to-transparent" />
          ))}
        </div>
      </div>
    </div>
  );
}

async function NFTGallery() {
  try {
    // Sort NFTs by priority if specified
    const sortedNFTs = [...oneononeNFTs].sort((a, b) => 
      (a.priority || Infinity) - (b.priority || Infinity)
    );

    // Fetch all NFTs in parallel
    const nfts = await Promise.all(
      sortedNFTs.map(async ({ contract, tokenId, title }) => {
        try {
          const nft = await openSeaService.nft.getNFT({
            address: contract,
            tokenId,
            chain: 'ethereum'
          });

          if (!nft) return null;

          return {
            name: title || nft.name || 'Untitled',
            description: nft.description || '',
            image_url: nft.image_url || '',
            contract_address: contract,
            token_id: tokenId,
          };
        } catch (error) {
          logger.error(`Error fetching NFT ${contract}/${tokenId}:`, error);
          return null;
        }
      })
    );

    // Filter out failed fetches and null values
    const validNFTs = nfts.filter((nft): nft is NonNullable<typeof nft> => nft !== null);

    if (validNFTs.length === 0) {
      return notFound();
    }

    // Preload first 4 images for LCP
    const preloadImages = validNFTs.slice(0, 4).map(nft => nft.image_url).filter(Boolean);

    return (
      <>
        <Head>
          {preloadImages.map((url, i) => (
            <link key={i} rel="preload" as="image" href={url} />
          ))}
        </Head>
        <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
          {/* Art Magazine Header Element */}
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

            {/* Gallery */}
            <NFTMasonryGrid nfts={validNFTs} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    logger.error('Error in NFTGallery:', error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-[#F3CC3E] font-serif text-xl">Failed to load gallery</p>
      </div>
    );
  }
}

export default function OneOnOnePage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <NFTGallery />
    </Suspense>
  );
}
