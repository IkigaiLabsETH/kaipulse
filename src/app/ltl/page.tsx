import { Suspense } from 'react';
import { openSeaService } from '@/services/opensea';
import { notFound } from 'next/navigation';
import { logger } from '@/lib/logger';
import { livethelifetvNFTs } from '@/config/livethelifetv';
import { NFTMasonryGrid } from '@/components/NFTMasonryGrid';

function Skeleton() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#F3CC3E] mb-4">
            AI ART by LTL
          </h1>
          <p className="text-[#F3CC3E]/60 font-serif text-lg md:text-xl max-w-2xl mx-auto">
            A curated selection of AI-generated art by LiveTheLifeTV
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
    const sortedNFTs = [...livethelifetvNFTs].sort((a, b) => 
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

    return (
      <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
        {/* Art Magazine Header Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-16 relative z-10 text-center">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI Art • LTL</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                AI ART by LTL
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A curated selection of AI-generated art by LiveTheLifeTV</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>
          {/* Gallery */}
          <NFTMasonryGrid nfts={validNFTs} />
          
          {/* Brand Coin Section */}
          <section className="mt-32 py-16 relative">
            {/* Yellow Frame Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            
            <div className="px-8 md:px-12">
              <h2 className="text-5xl md:text-6xl text-yellow-500 mb-12 font-boska">The Future of LTL: Brand Coins & Culture</h2>
              
              <div className="text-white/90 font-epilogue text-lg leading-relaxed">
                <h3 className="text-3xl md:text-4xl text-yellow-500 mt-12 mb-6 font-boska">💥 WTF is a Brand Coin? And why it matters for LTL?</h3>
                <p className="text-xl">
                  A brand coin like $REKT is not just a memecoin, it&apos;s a culture asset. It&apos;s the on-chain identity layer of a brand, 
                  giving power and upside to the community without needing traditional equity or revenue share. 
                  It&apos;s loyalty + speculation + culture, all in one token.
                </p>
                
                <p className="text-xl mt-6">
                  So what is $REKT? $REKT = proof of belief in a lifestyle brand. No IP ownership. No profit share. 
                  Just vibes, memes, and massive upside if the brand wins. It&apos;s the &ldquo;I was here first&rdquo; token for believers 
                  in a brand&apos;s journey from zero to cult status.
                </p>

                <h3 className="text-3xl md:text-4xl text-yellow-500 mt-12 mb-6 font-boska">🌊 What this means for LiveTheLifeTV</h3>
                <p className="text-xl">
                  Let&apos;s now reframe that in the world of LiveTheLifeTV, where we&apos;ve been storytelling around surf, 
                  fine art, photography, design, travel, and crypto for decades. You&apos;ve always curated culture. 
                  But now, culture can be tokenized.
                </p>

                <p className="text-xl mt-6 font-satoshi font-medium">So imagine:</p>
                <ul className="list-disc pl-8 space-y-3 text-xl mt-4">
                  <li>$LTL is launched as the first ever &ldquo;lifestyle coin&rdquo;</li>
                  <li>It&apos;s not just a memecoin. It&apos;s a vibes coin for the global lifestyle heads who&apos;ve followed LTL since the WebTV days</li>
                  <li>It doesn&apos;t promise equity in IkigAI Labs XYZ or LiveTheLifeTV</li>
                  <li>It&apos;s not a financial instrument. It&apos;s proof of alignment with the vision</li>
                </ul>

                <p className="text-xl mt-8 font-satoshi font-medium">But:</p>
                <ul className="list-disc pl-8 space-y-3 text-xl mt-4">
                  <li>When LTL drops the next IRL residency, NFT collection, drink collab, or mini-doc with a legendary artist—people who were early get rewarded because they held the coin</li>
                  <li>As the cultural relevance grows, so does demand for the coin</li>
                  <li>As the brand wins, holders flex. Not just merch or clout—on-chain bragging rights</li>
                </ul>

                <h3 className="text-3xl md:text-4xl text-yellow-500 mt-12 mb-6 font-boska">🚀 TL;DR: $REKT and the Blueprint for $LTL</h3>
                <div className="overflow-x-auto">
                  <table className="w-full my-8 border-collapse text-lg">
                    <thead>
                      <tr className="border-b border-yellow-500/10">
                        <th className="py-6 px-6 text-left text-yellow-500 font-satoshi font-medium text-xl">Feature</th>
                        <th className="py-6 px-6 text-left text-yellow-500 font-satoshi font-medium text-xl">$REKT</th>
                        <th className="py-6 px-6 text-left text-yellow-500 font-satoshi font-medium text-xl">$LTL (potential)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Community Entry</td>
                        <td className="py-6 px-6">NFT mint, drink buyers</td>
                        <td className="py-6 px-6">Artist collectors, surf + hotel explorers</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Real World Product</td>
                        <td className="py-6 px-6">Sparkling water (REKT Drinks)</td>
                        <td className="py-6 px-6">LTL Residencies, curated experiences</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Brand Flywheel</td>
                        <td className="py-6 px-6">Token ↔ Product ↔ Culture</td>
                        <td className="py-6 px-6">Token ↔ Culture ↔ IRL / URL drops</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Buyback Engine</td>
                        <td className="py-6 px-6">Drink revenue → $REKT</td>
                        <td className="py-6 px-6">Art + Travel revenue → $LTL</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Ownership?</td>
                        <td className="py-6 px-6">No equity, no IP rights</td>
                        <td className="py-6 px-6">Same: just the upside of belief</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-6 px-6">Narrative</td>
                        <td className="py-6 px-6">From degens to redemption</td>
                        <td className="py-6 px-6">From luxury wanderers to sovereigns</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-3xl md:text-4xl text-yellow-500 mt-12 mb-6 font-boska">🧠 Closing Thought</h3>
                <p className="text-xl">
                  A brand coin is a cultural call option. It rewards belief before the world catches up. 
                  If Red Bull launched $RED in 1998 or Supreme dropped $HYPE in 2005—you&apos;d want to be holding. 
                  REKT is proving it works. LTL has all the ingredients to go next.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
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

export default function LTLArtPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <NFTGallery />
    </Suspense>
  );
}
