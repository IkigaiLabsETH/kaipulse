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
                In March 2021, a seismic shift rocked the art world when Mike Winkelmann—better known as Beeple—sold his digital collage <em>Everydays: The First 5000 Days</em> for $69.3 million at Christie&apos;s. This wasn&apos;t a physical canvas but a non-fungible token (NFT), a blockchain-based certificate proving ownership of a digital file. Overnight, Beeple became the third-most expensive living artist, and NFTs stormed into the high-end art market.
              </p>
              <p className="text-lg">
                Four years later, in 2025, digital art is no longer a curiosity but a nascent asset class with its own market dynamics, collector base, and investment potential. With parallels to historical art market booms, a volatile yet promising risk-return profile, and a growing infrastructure of platforms and indices, digital art is poised to redefine wealth allocation for ultra-high-net-worth (UHNW) collectors and crypto-native investors.
              </p>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Scale & Growth:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">$25B</div>
                    <p className="text-white/70 text-sm">Peak NFT sales (2021-22)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">97%</div>
                    <p className="text-white/70 text-sm">Market correction (2022-23)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">$200B+</div>
                    <p className="text-white/70 text-sm">Projected 2030 market</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Market Drivers:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provable digital scarcity through blockchain technology</li>
                  <li>24/7 global marketplace with unprecedented liquidity</li>
                  <li>Direct artist-to-collector relationships bypassing traditional gatekeepers</li>
                  <li>Generational wealth shift toward digital assets (Millennials and Gen Z inheriting trillions)</li>
                  <li>Integration with traditional art institutions and auction houses</li>
                  <li>Low correlation to traditional equity markets (early studies suggest independence from S&P 500)</li>
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
              Historical Parallels: Art Markets in Times of Disruption
            </h3>
            <div className="space-y-8">
              {/* Post-War Boom */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Post-WWII Art Surge (1945–1960s)</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Post-war prosperity fueled a surge in art collecting as millionaires sought cultural status. Visionaries like Peggy Guggenheim backed abstract artists when they were considered radical, reaping both cultural and financial rewards as their works became canonical. The lesson: new art forms can yield outsized gains for bold collectors who move early.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Parallels:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>New wealth (post-war prosperity) seeking cultural status</li>
                        <li>Investment in avant-garde movements (Abstract Expressionism)</li>
                        <li>Early adopters like Guggenheim reaping massive rewards</li>
                        <li>Art as innovation investment, not just decoration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Modern Equivalent:</h5>
                      <p className="text-white/80 font-satoshi">Crypto millionaires investing in NFT art, treating digital assets as the new avant-garde movement defining 21st-century culture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1970s Recession */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1970s Recession: Contrarian Opportunity</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The 1970s recession tested resolve. Many wealthy buyers pulled back amid stagflation and economic malaise. Yet contrarian collectors like Leo Castelli acquired undervalued masterpieces during the downturn, proving that economic crises can be buying opportunities for those with conviction and capital.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Strategy:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Contrarian buying during market downturns</li>
                        <li>Supporting quality artists through lean times</li>
                        <li>Long-term conviction over short-term sentiment</li>
                        <li>Building influential collections at discounted prices</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Today&apos;s Parallel:</h5>
                      <p className="text-white/80 font-satoshi">Current NFT bear market (50-80% below peaks) offers accumulation opportunities for blue-chip digital art, similar to 1970s traditional art buying</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1980s Boom and Bust */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1980s Boom and Early &apos;90s Correction</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Wall Street wealth and Japanese money flooded the art market in the 1980s, creating speculative fervor that pushed prices to dizzying heights. The inevitable 1990s crash disciplined the market, teaching that those who focused on long-term cultural value over short-term hype survived and prospered.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Lessons:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Speculative fervor creates unsustainable bubbles</li>
                        <li>Corrections are inevitable and healthy</li>
                        <li>Cultural value trumps short-term hype</li>
                        <li>Quality assets recover and exceed previous highs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">NFT Echo:</h5>
                      <p className="text-white/80 font-satoshi">2021-22 NFT boom (20x growth to $25B) followed by 97% correction mirrors this exact pattern—teaching identical lessons</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dot-Com Era */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Dot-Com Era: Tech Wealth Meets Art (1995-2005)</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Tech millionaires from the dot-com boom patronized edgy contemporary art, bringing digital sensibilities to collecting. This era introduced technology as both subject and medium in art, foreshadowing today&apos;s crypto magnates collecting NFTs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Innovation:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Technology entrepreneurs as art patrons</li>
                        <li>Digital media gaining artistic legitimacy</li>
                        <li>New collecting patterns and preferences</li>
                        <li>Technology as both medium and market</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Direct Lineage:</h5>
                      <p className="text-white/80 font-satoshi">Crypto entrepreneurs today directly mirror dot-com collectors, but with native digital assets instead of physical pieces about technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Comparison */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Digital vs Traditional Art: A New Investment Frontier
            </h3>
            <p className="text-white/80 font-satoshi mb-6">
              Comparing digital art (via NFTs) to traditional art reveals a high-octane cousin with unique strengths and risks. For UHNW investors, digital art offers growth and diversification, complementing traditional art&apos;s stability—akin to holding tech stocks alongside bonds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Digital Art */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Digital Art (NFTs)</h4>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Returns</h5>
                    <p className="text-white/80 font-satoshi text-sm">Venture-capital-like returns: Fidenza #313 went from $1,400 to $3.3M (200,000% return) in weeks. However, 96% of NFT collections are now defunct, underscoring the need for selective curation.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Volatility</h5>
                    <p className="text-white/80 font-satoshi text-sm">Extremely high - weekly swings of 20%+ common, dwarfing traditional art&apos;s gradual cycles. Market crashed 97% from 2022 peak but showing signs of recovery.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Liquidity</h5>
                    <p className="text-white/80 font-satoshi text-sm">Instant 24/7 trading on platforms like OpenSea. Fractionalization allows splitting NFTs into tradeable shares—impossible with physical art. Low marketplace fees (2.5%) vs traditional auction commissions (20-40%).</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Transparency</h5>
                    <p className="text-white/80 font-satoshi text-sm">Complete blockchain provenance eliminates forgery disputes. However, visible price drops can fuel panic-selling due to transparency.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Risks</h5>
                    <p className="text-white/80 font-satoshi text-sm">Cyber threats: $100M+ in NFTs stolen in 2022. Technology dependence. Platform/blockchain risks.</p>
                  </div>
                </div>
              </div>

              {/* Traditional Art */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Traditional Art</h4>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Returns</h5>
                    <p className="text-white/80 font-satoshi text-sm">Steady 5-7% annually per Mei Moses Index for broad market. Exceptional pieces (like Basquiat) can deliver significant gains but over decades, not weeks.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Volatility</h5>
                    <p className="text-white/80 font-satoshi text-sm">Lower volatility with gradual price movements tracking economic cycles. More predictable appreciation patterns.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Liquidity</h5>
                    <p className="text-white/80 font-satoshi text-sm">Highly illiquid - paintings may take months or years to sell. High transaction costs (15-25%) limit trading frequency.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Transparency</h5>
                    <p className="text-white/80 font-satoshi text-sm">Opaque pricing with many private sales. Complex provenance research required. Ongoing forgery risks despite expert authentication.</p>
                  </div>
                  <div className="bg-black/50 p-4 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Risks</h5>
                    <p className="text-white/80 font-satoshi text-sm">Physical damage, theft, forgery. Storage and insurance costs. Illiquidity during market downturns.</p>
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
                  <p className="text-white/60 font-satoshi text-sm">$69.3 Million • March 2021 • Christie&apos;s</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">A monumental collage of 5,000 daily digital artworks spanning 13 years, becoming a cultural landmark akin to Warhol&apos;s pop art. This watershed auction redefined art markets and made Beeple the third-most expensive living artist overnight.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Cultural Impact:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>91% new collectors to Christie&apos;s</li>
                      <li>First major auction house NFT sale</li>
                      <li>Legitimized digital art in traditional circles</li>
                      <li>Crypto payment accepted ($11M in ETH)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">CryptoPunks</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Peak: $23.7M (Alien Punk) • 2017-Present</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">10,000 unique pixelated avatars that became the first NFT collection, originally given away for free in 2017. Now digital status symbols with rare &quot;Alien&quot; Punks reaching astronomical prices, proving early-mover advantage in digital art.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Historical Significance:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>First NFT collection (pre-dates ERC-721)</li>
                      <li>Free mint → $23.7M (Alien #5822)</li>
                      <li>Started PFP movement and digital identity</li>
                      <li>36% weight in Bitwise NFT Index</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Fidenza #313 (&quot;The Tulip&quot;)</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">$3.3M • Art Blocks • 2021</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Tyler Hobbs&apos; generative art masterpiece from the 999-piece Fidenza series that epitomized algorithmic art&apos;s allure. Its on-chain scarcity and community-driven hype made it a blue-chip with floor prices still in mid-six figures.</p>
                  <div className="space-y-2">
                    <p className="text-yellow-400 text-sm font-bold">Performance:</p>
                    <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                      <li>Venture-capital-like returns: $1,400 → $3.3M</li>
                      <li>200,000% return in weeks (2,350x multiple)</li>
                      <li>Sparked generative art revolution</li>
                      <li>Floor price remains $500k+ (2025)</li>
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
              Benchmarking the Market: NFT Indices and Performance
            </h3>
            <p className="text-white/80 font-satoshi mb-6">
              New indices provide benchmarks for tracking digital art&apos;s performance, signaling market maturation and potential foundation for future ETF-like products by 2030.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Bitwise Blue-Chip NFT Index</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                                         The &quot;S&P 500&quot; of NFTs, launched in 2021, tracking 10 liquid collections including CryptoPunks (~36% weight) and Bored Ape Yacht Club (~30% weight). Captures the most established digital collectibles.
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-yellow-400 font-epilogue">Key Holdings:</h5>
                    <ul className="text-white/80 font-satoshi text-sm list-disc list-inside space-y-1">
                      <li>CryptoPunks (36% - Historical significance)</li>
                      <li>Bored Ape Yacht Club (30% - Cultural impact)</li>
                      <li>Art Blocks Curated (Fidenza, Chromie Squiggle)</li>
                      <li>Autoglyphs, Meebits, other blue-chips</li>
                    </ul>
                    <div className="mt-4 p-3 bg-black/30 border border-yellow-500/10">
                      <p className="text-yellow-400 text-sm font-bold">Performance Note:</p>
                      <p className="text-white/70 text-sm">Index down 35-65% from 2022 peaks but showing recent recovery momentum amid broader crypto rally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Grail Capital Digital Art Index</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                                         The &quot;fine art&quot; benchmark focusing on curated 1/1 artworks and limited series by notable crypto artists like Beeple, Pak, and XCOPY. Values the digital art segment at $5B in 2024.
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-yellow-400 font-epilogue">Performance Metrics:</h5>
                    <ul className="text-white/80 font-satoshi text-sm list-disc list-inside space-y-1">
                      <li>Peak valuation: $13.8B (early 2022)</li>
                      <li>Current valuation: ~$5B (2024)</li>
                      <li>Recent recovery: +47% (May 2025)</li>
                      <li>Volatility: ±20% monthly swings typical</li>
                    </ul>
                    <div className="mt-4 p-3 bg-black/30 border border-yellow-500/10">
                      <p className="text-yellow-400 text-sm font-bold">Comparison:</p>
                      <p className="text-white/70 text-sm">Traditional art indices show 5-7% annual returns vs NFT indices&apos; rollercoaster patterns—higher risk, higher potential reward</p>
                    </div>
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
              The Road to 2030: A $50 Billion Digital Art Market
            </h3>
            <p className="text-white/80 font-satoshi mb-6">
              By 2030, the NFT market could hit $200–230 billion, with digital art potentially rivaling traditional art&apos;s $65 billion scale. The current accumulation phase, with blue-chip NFTs at 50–80% discounts, mirrors historical buying opportunities.
            </p>
            <div className="space-y-6">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold mb-4">Market Projections</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">$200-230B</div>
                    <p className="text-white/80 font-satoshi text-sm">Projected global NFT market by 2030</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">$50-65B</div>
                    <p className="text-white/80 font-satoshi text-sm">Digital art segment (rivaling traditional art)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">5-10%</div>
                    <p className="text-white/80 font-satoshi text-sm">UHNW portfolio allocation target</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Accumulation Phase (2024-2026)</h4>
                  <div className="space-y-3">
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Historical Parallel</h5>
                      <p className="text-white/80 font-satoshi text-sm">Mirrors 1970s art market: contrarian collectors quietly accumulating blue-chips at 50-80% discounts while sentiment remains low</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Quality Focus</h5>
                      <p className="text-white/80 font-satoshi text-sm">First-movers with historical significance: CryptoPunks, Beeple&apos;s Everydays, Art Blocks Curated, early provenance pieces</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Supply Dynamics</h5>
                      <p className="text-white/80 font-satoshi text-sm">Top collections showing &lt;5% active listings as diamond hands accumulate, creating artificial scarcity for quality rebounds</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Infrastructure Professionalization</h4>
                  <div className="space-y-3">
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Regulatory Clarity</h5>
                      <p className="text-white/80 font-satoshi text-sm">Emerging frameworks potentially enabling NFT ETFs, institutional custody solutions, and pension fund allocations</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Traditional Integration</h5>
                      <p className="text-white/80 font-satoshi text-sm">Major galleries representing NFT artists, museum acquisitions (LACMA, Centre Pompidou), auction house platforms (Christie&apos;s 3.0)</p>
                    </div>
                    <div className="bg-black/50 p-4 border border-yellow-500/20">
                      <h5 className="text-yellow-400 font-epilogue mb-1">Technology Evolution</h5>
                      <p className="text-white/80 font-satoshi text-sm">Multi-chain interoperability, AR/VR display integration, metaverse utility, improved storage solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold mb-4">The 2030 Vision: A Blended Art World</h4>
                <p className="text-white/80 font-satoshi mb-4">
                  By 2030, digital and physical art will coexist seamlessly in a $50+ billion blended market. Leading digital artists of the 2020s will be established names comparable to Basquiat or Warhol, auction catalogs will routinely list both mediums side by side, and blue-chip NFTs may rival traditional masterpieces in cultural significance and market value. Millennials and Gen Z, inheriting trillions, will see NFTs as natural portfolio components.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🏛️</div>
                    <p className="text-yellow-400 font-bold mb-2">Museum Canon</p>
                    <p className="text-white/70 text-sm">Digital wings in major museums, permanent NFT collections, institutional recognition of crypto artists</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">💼</div>
                    <p className="text-yellow-400 font-bold mb-2">Portfolio Integration</p>
                    <p className="text-white/70 text-sm">5-10% standard allocation in UHNW portfolios, pension funds, endowments embracing digital art</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎨</div>
                    <p className="text-yellow-400 font-bold mb-2">Cultural Legacy</p>
                    <p className="text-white/70 text-sm">Established digital art canon, AR/VR exhibitions, metaverse galleries as standard cultural venues</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-black/30 border border-yellow-500/10">
                  <p className="text-yellow-400 text-sm font-bold mb-2">Key Catalyst:</p>
                  <p className="text-white/70 text-sm">
                    A new bull cycle, possibly tied to crypto adoption or metaverse integration, could propel blue-chip NFT prices to new highs while institutional infrastructure eliminates current barriers to entry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                Shaping the Digital Art Canon
              </h3>
              <p className="text-lg text-white/80 font-satoshi mb-6 leading-relaxed">
                Digital art is no fad—it&apos;s a transformative asset class, blending technology, culture, and investment. For UHNW collectors, the next five years offer a rare chance to acquire seminal works before institutionalization drives prices higher. Like the patrons who shaped 20th-century art, today&apos;s collectors can define the digital canon, leaving a legacy in code and culture.
              </p>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 mb-6">
                <h4 className="text-yellow-500 font-bold mb-3">The Renaissance is Just Beginning</h4>
                <p className="text-white/80 font-satoshi text-sm">
                  Those who act with vision will not only reap financial rewards but also etch their names into art history&apos;s next chapter. The convergence of crypto wealth, institutional adoption, and generational handoff creates a once-in-a-decade opportunity to acquire blue-chip digital art at accumulation prices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://www.livethelife.tv/collections" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                    Explore Digital Art Collections
                  </Button>
                </Link>
                <Link href="https://www.livethelife.tv/1on1" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-3 rounded-none hover:bg-yellow-500 hover:text-black transition-all duration-300 w-full">
                    Curated Blue-Chip NFTs
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
