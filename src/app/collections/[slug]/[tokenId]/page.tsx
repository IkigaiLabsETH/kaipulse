import { Suspense } from 'react';
import Link from 'next/link';
import { OpenSeaAPI } from '@/services/opensea/api';
import { ArrowLeft, Tag, Heart, Share2, ImageIcon } from 'lucide-react';
import { NFTActions } from '@/components/nft/NFTActions';
import { NFTDetails } from '@/components/nft/NFTDetails';
import { NFTActivity } from '@/components/nft/NFTActivity';
import { NFTTraits } from '@/components/nft/NFTTraits';
import { RelatedNFTs } from '@/components/nft/RelatedNFTs';
import { PriceHistory } from '@/components/nft/PriceHistory';
import { NFTImage } from '@/components/nft/NFTImage';

// Initialize API instance
const openSeaApi = new OpenSeaAPI();

interface NFTPageProps {
  params: {
    slug: string;
    tokenId: string;
  };
}

async function NFTContent({ slug, tokenId }: { slug: string; tokenId: string }) {
  try {
    console.log('Fetching NFT data for:', { slug, tokenId });
    
    const nftPromise = openSeaApi.getNFT(slug, tokenId);
    const eventsPromise = openSeaApi.getNFTEvents(slug, tokenId, {
      limit: 100,
      event_type: 'sale'
    });

    const [nft, events] = await Promise.all([
      nftPromise.catch(error => {
        console.error('Error fetching NFT:', error);
        throw error;
      }),
      eventsPromise.catch(error => {
        console.error('Error fetching events:', error);
        return { results: [] };
      })
    ]);

    if (!nft) {
      console.error('NFT data is null or undefined');
      throw new Error('NFT not found');
    }

    console.log('NFT data received:', nft);

    // Get the latest sale price from events
    const latestSale = events.results
      .filter(event => event.type === 'sale' && event.price?.current)
      .sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())[0];

    // Get the latest listing price from events
    const latestListing = events.results
      .filter(event => event.type === 'listing' && event.price?.current)
      .sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())[0];

    // Get the contract address from our known contracts mapping
    const KNOWN_CONTRACTS: Record<string, string> = {
      'boredapeyachtclub': '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
      'doodles-official': '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
      'azuki': '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
    };

    const contractAddress = KNOWN_CONTRACTS[slug];

    const mockTraits = [
      { trait_type: 'Background', value: 'Blue', rarity: 15 },
      { trait_type: 'Eyes', value: 'Laser', rarity: 8 },
      { trait_type: 'Mouth', value: 'Smile', rarity: 25 },
      { trait_type: 'Clothing', value: 'Gold Suit', rarity: 12 },
      { trait_type: 'Accessory', value: 'Crown', rarity: 5 },
    ];

    // Transform OpenSea traits to our format
    const transformedTraits = nft.traits?.map(trait => ({
      trait_type: trait.trait_type,
      value: trait.value,
      rarity: trait.trait_count ? (trait.trait_count / 10000) * 100 : 50 // Assuming 10k collection size
    })) || mockTraits;

    // Convert events to the format expected by NFTActivity
    const activityEvents = events.results
      .filter(event => ['sale', 'listing', 'transfer', 'mint'].includes(event.type))
      .map(event => ({
        type: (event.type === 'listing' ? 'list' : event.type) as 'sale' | 'transfer' | 'mint' | 'list',
        price: event.price?.current.value?.toString(),
        from: event.from_address,
        to: event.to_address || event.from_address,
        timestamp: event.created_date,
        tokenId: tokenId,
        image: nft.image_url
      }));

    // Generate mock price history data
    const mockPriceHistory = Array.from({ length: 30 }, (_, i) => ({
      price: Math.random() * 3 + 1,
      timestamp: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toISOString()
    }));

    const mockRelatedNFTs = [
      { id: '1', name: 'NFT #1', image_url: nft.image_url, price: '1.2' },
      { id: '2', name: 'NFT #2', image_url: nft.image_url, price: '1.5' },
      { id: '3', name: 'NFT #3', image_url: nft.image_url, price: '0.8' },
      { id: '4', name: 'NFT #4', image_url: nft.image_url, price: '2.0' },
    ];

    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white pb-20">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href={`/collections/${slug}`}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to collection</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 mb-12">
            {/* Left Column - NFT Image */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-black/20 p-4 sm:p-6 rounded-2xl border-[3px] border-yellow-500 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] transition-all duration-300">
                <NFTImage
                  imageUrl={nft.image_url}
                  name={nft.name || `#${nft.identifier}`}
                  identifier={nft.identifier}
                  collection={nft.collection}
                />
              </div>
            </div>

            {/* Right Column - NFT Details and Actions */}
            <div>
              <div className="space-y-4">
                <NFTDetails
                  contractAddress={contractAddress}
                  tokenId={nft.identifier}
                  name={nft.name || `#${nft.identifier}`}
                  description={nft.description}
                  tokenStandard={nft.token_standard}
                  createdAt={nft.created_at}
                  metadataUrl={nft.metadata_url}
                />

                <NFTActions
                  contractAddress={contractAddress}
                  tokenId={nft.identifier}
                  price={latestListing?.price?.current.value.toString() || "—"}
                  currency={latestListing?.payment_token?.symbol || "ETH"}
                  lastSalePrice={latestSale?.price?.current.value.toString()}
                />
              </div>
            </div>
          </div>

          {/* Data Section */}
          <div className="space-y-12">
            {/* Properties */}
            <NFTTraits traits={transformedTraits} />

            {/* Price History */}
            <PriceHistory data={mockPriceHistory} />

            {/* Activity */}
            <NFTActivity events={activityEvents} />

            {/* Related NFTs */}
            <RelatedNFTs collectionSlug={slug} nfts={mockRelatedNFTs} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in NFTContent:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading NFT</h1>
          <p className="text-neutral-400">Failed to load NFT details. Please try again later.</p>
          <p className="text-sm text-neutral-500 mt-2">{error instanceof Error ? error.message : 'Unknown error'}</p>
          <Link
            href={`/collections/${slug}`}
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors mt-6"
          >
            <ArrowLeft size={20} />
            <span>Back to collection</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default function NFTPage({ params }: NFTPageProps) {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Suspense 
        fallback={
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-6 w-32 bg-yellow-500/10 rounded-full" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square w-full rounded-2xl bg-yellow-500/10" />
                  <div className="h-16 mt-6 bg-yellow-500/10 rounded-xl" />
                </div>
                <div className="space-y-6">
                  <div className="h-64 rounded-2xl bg-yellow-500/10" />
                  <div className="h-48 rounded-2xl bg-yellow-500/10" />
                  <div className="h-32 rounded-2xl bg-yellow-500/10" />
                </div>
              </div>
              <div className="h-64 rounded-2xl bg-yellow-500/10" />
            </div>
          </div>
        }
      >
        <NFTContent slug={params.slug} tokenId={params.tokenId} />
      </Suspense>
    </main>
  );
} 