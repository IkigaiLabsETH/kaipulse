import { Suspense } from 'react';
import { openSeaService } from '@/services/opensea';
import { notFound } from 'next/navigation';
import { logger } from '@/lib/logger';
import { featuredNFTs } from '@/config/featured-nfts-2';
import { NFTMasonryGrid } from '@/components/NFTMasonryGrid';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore More | Digital Art Gallery',
  description: 'Explore an extended selection of curated digital artworks from our featured collection.',
  openGraph: {
    title: 'Explore More | Digital Art Gallery',
    description: 'Explore an extended selection of curated digital artworks from our featured collection.',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Explore More',
  description: 'An extended selection of curated digital artworks',
  about: {
    '@type': 'Thing',
    name: 'Digital Art',
    description: 'A collection of unique digital artworks'
  }
};

function Skeleton() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#F3CC3E] mb-4">
            Explore More
          </h1>
          <p className="text-[#F3CC3E]/60 font-serif text-lg md:text-xl max-w-2xl mx-auto">
            An extended selection of curated digital artworks
          </p>
        </div>
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
    const sortedNFTs = [...featuredNFTs].sort((a, b) => 
      (a.priority || Infinity) - (b.priority || Infinity)
    );

    const nfts = await Promise.all(
      sortedNFTs.map(async ({ contract, tokenId, title }) => {
        const maxRetries = 3;
        let retryCount = 0;
        let lastError: Error | null = null;

        while (retryCount < maxRetries) {
          try {
            if (retryCount > 0) {
              await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
            }

            const nft = await openSeaService.nft.getNFT({
              address: contract,
              tokenId,
              chain: 'ethereum'
            });

            if (!nft) {
              logger.warn(`NFT not found: ${contract}/${tokenId}`);
              return null;
            }

            if (!nft.image_url) {
              logger.warn(`NFT missing image_url: ${contract}/${tokenId}`);
              return null;
            }

            return {
              name: title || nft.name || 'Untitled',
              description: nft.description || '',
              image_url: nft.image_url,
              contract_address: contract,
              token_id: tokenId,
              blurhash: nft.blurhash || undefined,
            };
          } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
            retryCount++;
            if (retryCount === maxRetries) {
              logger.error(`Failed to fetch NFT after ${maxRetries} attempts: ${contract}/${tokenId}`, {
                error: lastError.message,
                stack: lastError.stack
              });
              return null;
            }
          }
        }
        return null;
      })
    );

    const validNFTs = nfts.filter((nft): nft is NonNullable<typeof nft> => nft !== null);

    if (validNFTs.length === 0) {
      logger.error('No valid NFTs found after fetching', {
        totalAttempted: sortedNFTs.length,
        failedNFTs: sortedNFTs.filter((_, i) => nfts[i] === null).map(nft => ({
          contract: nft.contract,
          tokenId: nft.tokenId
        }))
      });
      return notFound();
    }

    const preloadImages = validNFTs.slice(0, 4).map(nft => nft.image_url).filter(Boolean);

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://opensea.io" />
          <link rel="preconnect" href="https://storage.googleapis.com" />
          {preloadImages.map((url, i) => (
            <link key={i} rel="preload" as="image" href={url} />
          ))}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-16 relative z-10 text-center">
              <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Art • Gen Art</p>
              <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  Explore More
                </span>
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-24 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">An extended selection of curated digital artworks</p>
                <div className="h-px w-24 bg-yellow-500/30"></div>
              </div>
            </div>
            <NFTMasonryGrid nfts={validNFTs.map(nft => ({ ...nft, placeholderColor: '#181818' }))} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    logger.error('Error in NFTGallery:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-[#F3CC3E] font-serif text-xl">Failed to load gallery</p>
      </div>
    );
  }
}

export default function ArtExplorePage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <NFTGallery />
    </Suspense>
  );
} 