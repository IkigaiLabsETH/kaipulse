"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NFTPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Art • NFTs • Investment Strategy</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Digital Art
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Emergence of a New Asset Class</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              {/* Blurred Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm scale-110"
                style={{
                  backgroundImage: 'url(/beeple.jpg)',
                }}
              ></div>
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Text Content Overlay */}
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎨</div>
                  <p className="text-2xl font-bold text-yellow-500 drop-shadow-lg">Beeple&apos;s Everydays: The First 5000 Days</p>
                  <p className="text-lg text-white drop-shadow-lg">$69.3 Million • March 2021 • Christie&apos;s</p>
                </div>
              </div>
              
              {/* Bottom gradient for additional depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Market Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Digital Art Revolution
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In March 2021, a digital artwork by Mike Winkelmann—better known as Beeple—hammered at Christie&apos;s for over $69 million, making him the third-most expensive living artist overnight. The buyer received not a canvas but a non-fungible token (NFT): a unique blockchain certificate validating ownership of the piece. This watershed auction announced digital art as a contender in high-end collecting, igniting debate and speculation across both the traditional art world and the crypto community.
              </p>
              <p className="text-lg">
                                 Now in 2025, digital art is coalescing into a new asset class—one with its own market structure, risk/return profile, and collector base. This represents a market at an inflection point: volatile and nascent, yet maturing rapidly into what some have dubbed a &quot;next $1 trillion asset class.&quot;
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Market Drivers:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provable digital scarcity through blockchain technology</li>
                  <li>24/7 global marketplace with unprecedented liquidity</li>
                  <li>Direct artist-to-collector relationships</li>
                  <li>Generational wealth shift toward digital assets</li>
                  <li>Integration with traditional art institutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚀</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  High Returns
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Venture-Capital-Like Returns
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌐</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Liquidity
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                24/7 Worldwide Markets
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔗</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Transparency
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Blockchain Provenance
              </p>
            </div>
          </div>

          {/* Historical Parallels */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Historical Parallels in Art Markets
            </h3>
            <div className="space-y-8">
              {/* Post-War Boom */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Post-WWII Surge (1945–1960s)</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    In the prosperous post-war decades, art sales surged as economies rebuilt and new wealth sought cultural cachet. Collectors like Peggy Guggenheim and Sidney Janis championed then-radical abstract and modern artists, treating art not just as decoration but as an investment in innovation. The lesson: new art forms can yield outsized gains for bold collectors who move early.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Parallels:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>New wealth seeking cultural status</li>
                        <li>Investment in avant-garde movements</li>
                        <li>Early adopters reaping rewards</li>
                        <li>Art as innovation investment</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Modern Equivalent:</h5>
                      <p className="text-white/80 font-satoshi">Crypto millionaires investing in NFT art, treating digital assets as the new avant-garde</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1970s Recession */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1970s Recession (Stagflation and Opportunity)</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The 1973–75 recession tested the art market. Many wealthy buyers pulled back amidst inflation and economic malaise. Yet a savvy few saw the downturn as a buying opportunity. Collectors like Leo Castelli and Robert Scull scooped up high-quality works at depressed prices, actively supporting emerging artists during lean times. This era proved that patience and contrarian confidence can uncover value even when overall sentiment is low.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Strategy:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Contrarian buying during downturns</li>
                        <li>Supporting emerging artists</li>
                        <li>Long-term conviction</li>
                        <li>Building influential collections</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Today&apos;s Opportunity:</h5>
                      <p className="text-white/80 font-satoshi">Post-2021 NFT bear market offers accumulation opportunities for quality digital art</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1980s Boom and Bust */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1980s Boom and Early &apos;90s Bust</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    A dramatic influx of new money hit the art scene in the booming 1980s. Art became a playground for Wall Street financiers and international buyers. Prices for trophy works skyrocketed in an atmosphere of feverish speculation. But as with many bubbles, a correction came: the art market crashed in the early 1990s, leaving overleveraged galleries shuttered and speculators stuck with over-priced inventory. The survivors were those who diversified and focused on art&apos;s long-term cultural value rather than short-term hype.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Lessons:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Beware of over-speculation</li>
                        <li>Maintain diversification</li>
                        <li>Focus on cultural value</li>
                        <li>Avoid overleveraging</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">NFT Parallel:</h5>
                      <p className="text-white/80 font-satoshi">2021-22 NFT boom-bust cycle mirrors this pattern exactly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Comparison */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Digital vs Traditional Art as Investments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Digital Art */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Digital Art (NFTs)</h4>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Returns</h5>
                    <p className="text-white/80 font-satoshi text-sm">Venture-capital-like returns possible (100x-1000x in months), but highly concentrated in top projects</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Volatility</h5>
                    <p className="text-white/80 font-satoshi text-sm">Extremely high - monthly swings of ±20% or more common</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Liquidity</h5>
                    <p className="text-white/80 font-satoshi text-sm">24/7 global markets, instant settlements, high liquidity for blue-chips</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Transparency</h5>
                    <p className="text-white/80 font-satoshi text-sm">Complete on-chain provenance, public pricing data, no forgery risk</p>
                  </div>
                </div>
              </div>

              {/* Traditional Art */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Traditional Art</h4>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Returns</h5>
                    <p className="text-white/80 font-satoshi text-sm">Steady 5-7% annually for broad indexes, exceptional pieces can do much better</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Volatility</h5>
                    <p className="text-white/80 font-satoshi text-sm">Lower volatility, gradual price movements tracking economic cycles</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Liquidity</h5>
                    <p className="text-white/80 font-satoshi text-sm">Illiquid - months or years to sell, high transaction costs (15-25%)</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Transparency</h5>
                    <p className="text-white/80 font-satoshi text-sm">Opaque pricing, private sales, forgery risks, complex provenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blue-Chip Case Studies */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Blue-Chip NFT Art Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Beeple&apos;s Everydays</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">$69.3 Million • March 2021</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A collage of 5,000 daily digital artworks that became the third-most expensive artwork by a living artist, legitimizing NFTs in the traditional art world.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Impact:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>91% new collectors to Christie&apos;s</li>
                      <li>First major auction house NFT sale</li>
                      <li>Crypto payment accepted</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">CryptoPunks</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Peak: $23.7M • 2017-Present</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">10,000 unique pixel art characters that started the PFP (Profile Picture) NFT movement. Originally given away for free, now worth millions.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Significance:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>First NFT collection</li>
                      <li>Digital status symbols</li>
                      <li>Historic importance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Fidenza #313</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">$3.3M • Art Blocks</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Tyler Hobbs&apos; generative art masterpiece that sold for 1,000 ETH, demonstrating the value of algorithmic art and on-chain generation.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Returns:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>2,350x return in 8 weeks</li>
                      <li>$1,400 to $3.3M</li>
                      <li>Generative art revolution</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Bored Ape Yacht Club</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Peak: $400k+ Floor • 2021</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">10,000 cartoon apes that became the ultimate crypto status symbol, onboarding celebrities and creating a global community brand.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Innovation:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>Commercial IP rights</li>
                      <li>Celebrity adoption</li>
                      <li>Community building</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">The Goose (Ringers #879)</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">$6.2M • Sotheby&apos;s 2023</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Dmitri Cherniak&apos;s generative masterpiece that achieved the second-highest auction result for generative art, showing institutional validation.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Milestone:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>Traditional auction success</li>
                      <li>Beat estimate by 2x</li>
                      <li>Institutional recognition</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Pak&apos;s &quot;The Merge&quot;</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">$91.8M • December 2021</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A revolutionary multi-edition NFT that generated the largest art sale by revenue, purchased by 28,000 collectors collectively.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Innovation:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>Fractional ownership</li>
                      <li>Largest art sale ever</li>
                      <li>Conceptual breakthrough</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Market Structure */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Structure & Segments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Platforms */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Trading Platforms</h4>
                <div className="space-y-3">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">Decentralized Marketplaces</h5>
                    <p className="text-white/80 font-satoshi text-sm">OpenSea, Blur, Rarible - 24/7 global trading</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">Curated Platforms</h5>
                    <p className="text-white/80 font-satoshi text-sm">SuperRare, Foundation - Quality-focused curation</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">Traditional Auctions</h5>
                    <p className="text-white/80 font-satoshi text-sm">Christie&apos;s 3.0, Sotheby&apos;s Metaverse - Institutional bridge</p>
                  </div>
                </div>
              </div>

              {/* Segments */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Segments</h4>
                <div className="space-y-3">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">Profile Picture (PFP) Collections</h5>
                    <p className="text-white/80 font-satoshi text-sm">5k-10k sets, community-driven, high liquidity</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">1/1 Digital Art</h5>
                    <p className="text-white/80 font-satoshi text-sm">Unique pieces, artist reputation-driven</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue">Generative Art Series</h5>
                    <p className="text-white/80 font-satoshi text-sm">Algorithmic creation, Art Blocks, on-chain storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Benchmarks */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Performance Benchmarks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Bitwise Blue-Chip NFT Index</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    First institutional NFT index tracking 10 blue-chip collections including CryptoPunks (~36% weight) and Bored Ape Yacht Club (~30% weight).
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-yellow-400 font-epilogue">Key Holdings:</h5>
                    <ul className="text-white/80 font-satoshi text-sm list-disc list-inside space-y-1">
                      <li>CryptoPunks (36%)</li>
                      <li>Bored Ape Yacht Club (30%)</li>
                      <li>Art Blocks Curated (Fidenza, etc.)</li>
                      <li>Autoglyphs, Meebits, others</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Grail Capital Digital Art Index</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Focused on curated digital art, particularly 1/1 artworks and limited series by notable crypto artists. Valued around $5B in mid-2024.
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-yellow-400 font-epilogue">Performance:</h5>
                    <ul className="text-white/80 font-satoshi text-sm list-disc list-inside space-y-1">
                      <li>-35% decline in 12 months through 2024</li>
                      <li>+65% recovery from 2023 lows</li>
                      <li>High volatility: ±20% monthly swings</li>
                      <li>Peak valuation: $13.8B (early 2022)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Adoption */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Institutional Adoption & Infrastructure
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/50 p-4 border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-epilogue mb-2">Museums</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• LACMA (22 NFTs from Punk6529)</li>
                    <li>• Centre Pompidou (18 NFTs)</li>
                    <li>• ICA Miami exhibitions</li>
                    <li>• Buffalo AKG acquisitions</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-4 border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-epilogue mb-2">Auction Houses</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• Christie&apos;s 3.0 platform</li>
                    <li>• Sotheby&apos;s Metaverse</li>
                    <li>• Regular NFT sales</li>
                    <li>• 70%+ new clients</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-4 border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-epilogue mb-2">Financial Services</h5>
                  <ul className="text-white/80 font-satoshi text-sm space-y-1">
                    <li>• Bank of America reports</li>
                    <li>• J.P. Morgan analysis</li>
                    <li>• Swiss private banks</li>
                    <li>• NFT lending platforms</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold mb-3">Key Infrastructure Developments</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Custody & Security</h5>
                    <p className="text-white/80 font-satoshi text-sm mb-2">
                      Institutional-grade custody solutions from Fireblocks, Ledger, and traditional banks enabling secure storage of high-value NFTs.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Analytics & Valuation</h5>
                    <p className="text-white/80 font-satoshi text-sm">
                      Professional-grade tools tracking provenance, market depth, price history, and risk metrics for portfolio management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2025-2030 Outlook */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Outlook 2025–2030: Road to a Mature Market
            </h3>
            <div className="space-y-6">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold mb-4">Market Projections</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">$200-230B</div>
                    <p className="text-white/80 font-satoshi text-sm">Projected global NFT market by 2030</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">~34%</div>
                    <p className="text-white/80 font-satoshi text-sm">Compound Annual Growth Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">$50B+</div>
                    <p className="text-white/80 font-satoshi text-sm">Estimated digital art segment</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Accumulation Phase</h4>
                  <div className="space-y-3">
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Opportunity</h5>
                      <p className="text-white/80 font-satoshi text-sm">Blue-chip NFTs trading 50-80% below peaks, similar to 1970s art market downturn</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Strategy</h5>
                      <p className="text-white/80 font-satoshi text-sm">Focus on historically significant pieces: CryptoPunks, Beeple, Art Blocks, early provenance</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Supply Scarcity</h5>
                      <p className="text-white/80 font-satoshi text-sm">Top 20 collections showing &lt;5% availability as strong holders accumulate</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Infrastructure Maturation</h4>
                  <div className="space-y-3">
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Regulation</h5>
                      <p className="text-white/80 font-satoshi text-sm">Clearer frameworks emerging, potentially enabling NFT ETFs and institutional products</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Integration</h5>
                      <p className="text-white/80 font-satoshi text-sm">Traditional art world convergence - galleries representing NFT artists, museum exhibitions</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Technology</h5>
                      <p className="text-white/80 font-satoshi text-sm">Multi-chain interoperability, improved display tech, metaverse integration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold mb-4">The 2030 Vision</h4>
                <p className="text-white/80 font-satoshi mb-4">
                  By 2030, we envision a blended art world where digital and physical art coexist seamlessly. Leading digital artists of the 2020s will be established names, auction catalogs will routinely list both mediums side by side, and the top NFTs may rival traditional masterpieces in value.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏛️</div>
                    <p className="text-yellow-400 font-bold">Museum Integration</p>
                    <p className="text-white/70 text-sm">Digital wings in major museums</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-yellow-400 font-bold">Portfolio Standard</p>
                    <p className="text-white/70 text-sm">5-10% allocation in family offices</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-yellow-400 font-bold">Cultural Legacy</p>
                    <p className="text-white/70 text-sm">Digital art canon established</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                The Dawn of a New Asset Class
              </h3>
              <p className="text-lg text-white/80 font-satoshi mb-6 leading-relaxed">
                Digital art is transitioning from its turbulent adolescence into a more mature early adulthood. For sophisticated collectors and crypto investors willing to navigate the volatility and novelty, the next few years represent a prime window to accumulate seminal pieces before full institutionalization drives valuations to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://www.livethelife.tv/collections" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                    Explore Digital Art
                  </Button>
                </Link>
                <Link href="https://www.livethelife.tv/1on1" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-3 rounded-none hover:bg-yellow-500 hover:text-black transition-all duration-300 w-full">
                    Curated One-on-One NFTs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
