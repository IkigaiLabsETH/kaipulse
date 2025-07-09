"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function FYMPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Crypto Culture • Bitcoin Maximalism • Gen X Rebellion</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                FYM
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Stack of the Century</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-black flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">₿</div>
                  <h2 className="text-3xl font-bold text-yellow-500">21 BTC</h2>
                  <p className="text-white/80 text-lg">A Gen X Tech Founder&apos;s Wild Ride</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Story Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Stackmaster&apos;s Tale
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In the neon-lit crucible of 2025, Austin pulses with the fever of digital dreams. X is a coliseum—memecoin prophets, AI stampedes, a thousand voices howling for “100x alpha.” But Costa and Rica move to a different rhythm.
              </p>
              <p className="text-lg">
                Costa—fifty years shaped by sun, salt, and code, hair sun-bleached from endless summers, eyes bright with the spark of a thousand adventures. Rica, his partner in crime and the love of his life, is the hippy to his yuppie: yoga at dawn, mindfulness at dusk, a spirit untamed. Together, they are pura vida incarnate—bohemian chic, wild at heart, living offline in the sun and surf, not in the scroll. TikTok? Not their scene. Sixty-nine minutes a year on Instagram, by choice.
              </p>
              <p className="text-lg">
                They were Web2 visionaries, their travel startup a comet—100 million eyes, a million hearts, bidding wars for luxury surf properties against the world’s real estate titans, even Airbnb and Booking.com. Broke but unbowed, they urged friends to buy Tesla, Nvidia, Google, Facebook. They sold all their Bitcoin at $200 to fund another round-the-world odyssey, believing the journey was worth more than the stack. But life, like the ocean, comes full circle: today, Costa and Rica are Bitcoin maxis, their conviction forged by every wild turn.
              </p>
              <p className="text-lg">
                But his cold wallet tells a legend: <span className="text-yellow-500 font-bold">21 Bitcoin.</span> A digital citadel. A defiant anthem to the system that tried to break him. The war cry of a Gen X survivor in a world ruled by algorithms and noise.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔥</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Memecoin Inferno
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                From SPX6900 to Virtual
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Orange Dawn
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                The Bitcoin Awakening
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Code of Freedom
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Stacking for Retirement
              </p>
            </div>
          </div>

          {/* Chapter 1: The Memecoin Inferno */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter 1: The Memecoin Inferno
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  Flashback: 2024. Costa, unmoored, drifting through Austin’s neon nights, the ghost of a DeFi dream clinging to his skin. His last startup—rugged by shadows, his sweat and soul erased in a 48-hour Telegram inferno. The city pulsed, but Costa felt only the ache of almost.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  The memecoin wars? For Costa, a graveyard of could-have-beens. He faded $PEPE, $MOG, $POPCAT, $TURBO—sold most before they soared, pocketed scraps while others minted legends. $SPX6900, $VIRTUAL, $GIGA—he watched them moon from the sidelines or exited too soon. The only meme win? A few crumbs from ai16z, barely enough for a steak dinner. The real pain: a hundred moonshots missed, the 8-figure HYPE airdrop lost to a signature never given. In the end, the music stopped, and Costa’s Cybertruck gathered dust—a $100K monument to vanished euphoria, and none of it his.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Misses:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside">
                      <li>Sold $PEPE, $MOG, $POPCAT, $TURBO before the 100x</li>
                      <li>Missed $GIGA, $SPX6900, $VIRTUAL pumps</li>
                      <li>Faded 8-figure HYPE airdrop (T&Cs unsigned)</li>
                      <li>Pocket money from ai16z, nothing life-changing</li>
                      <li>Watched others print, stayed on the sidelines</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Reality:</h5>
                    <p className="text-white/80 font-satoshi">By mid-2025, the music stopped. SPX flatlined. VIRTUAL crashed. GIGA’s Telegram went silent. Costa’s Cybertruck, gathering dust, a $100K monument to vanished euphoria—and none of it his.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 2: The Orange Dawn */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter 2: The Orange Dawn
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  Costa was no born Bitcoiner. In 2011, he’d laughed off BTC at $10—&quot;a libertarian fever dream.&quot; He YOLO’d into Ethereum in 2017, only to be wrecked in the winter of 2018. Years as an ETH maxi, all-in on DeFi, chasing yield and governance, never selling the top. Early to NFTs, he minted a BAYC and—miracle of miracles—sold it at the pico top, his one legendary exit. The Uniswap airdrop? Diamond-handed, doubled down, and watched the next cycle pass him by. Art was his true love—he collected, curated, but never sold the top, except for that monkey picture. Signed prints, not floor flips, were his trophies.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  By 2024, hollowed and hungry, he stumbled on a maxi’s thread. This wasn’t hype. It was mathematics, destiny coded in scarcity. Bitcoin’s immutable law, the sacred 21 million, the relentless drumbeat of NGU. It rebooted his circuitry. He started small—sold his $MOG at a loss, bought 1 BTC at $47K. Then another. Every memecoin pump became a ritual: sell, stack, repeat. But the real stack was built on conviction, not luck.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Stack:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside">
                      <li>Minted BAYC, sold at the top—his one perfect trade</li>
                      <li>Never sold his big Uniswap airdrop, doubled down</li>
                      <li>ETH maxi years: all-in DeFi, never sold the top</li>
                      <li>Art collector: only wants signed prints, not floor flips</li>
                      <li>Faded countless 100x and 1000x opportunities</li>
                      <li>By July 2025: 21 BTC, built on conviction</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Manifesto:</h5>
                    <p className="text-white/80 font-satoshi">&quot;21 BTC. Burned out, cashed out. Stack sats, stay free.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3: The Code of Freedom */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter 3: The Code of Freedom
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  One sleepless night, Costa unearthed Smitty’s Bitcoin Retirement Guide, buried deep in the noise. Pure signal: a 5th percentile power regression, inflation-adjusted at 7%. The chart was gospel—how much Bitcoin you’d need, at any age, to retire on $500,000 a year. The curve fell like a comet: for a 45-year-old, 21 BTC was not just a fortress, it was generational. For a 35-year-old, the number was 12. For the youngest, the bar dropped to single digits. The future belonged to those who stacked early, and stacked hard. No hopium, just the cold geometry of freedom.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Math:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside">
                      <li>$100K/year by 2030: 4.41 BTC</li>
                      <li>$250K/year, living large: 10.34 BTC</li>
                      <li>21 BTC: the cheat code for $500K/year</li>
                      <li>By 2030: $500K/year, per the 5th percentile model</li>
                      <li>Inflation-proof, no VCs, no DAOs</li>
                      <li>Just a cold wallet and freedom</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Plan:</h5>
                    <p className="text-white/80 font-satoshi">Stack 1 BTC per year until 2030. Cold store in multisig vault. Live lean, maybe buy a ranch outside Austin. By then, his stack would be a fortress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 4: The Cathedral in the Noise */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter 4: The Cathedral in the Noise
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  Costa’s loft became a Bitcoin sanctum. A neon &quot;In Code We Trust&quot; sign flickered above his desk. Pitch decks, once sacred, now shredded. In their place: a 3D-printed node humming, a shrine to sovereignty. He preached to anyone who’d listen—usually his bartender, Jake. Rica’s incense and yoga mat in the corner, a reminder that freedom is both code and breath.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  &quot;Memes are just dot-com 2.0—sugar highs and hard crashes. Bitcoin is the lighthouse. No CEO, no rugpulls, just code and time.&quot;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Philosophy:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside">
                      <li>Memecoins = Red Bull shots</li>
                      <li>Quick highs, brutal lows</li>
                      <li>Bitcoin = Steel vault</li>
                      <li>Built on 16 years of uptime</li>
                      <li>Use meme pumps to stack sats</li>
                      <li>Become the house, not the player</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Setup:</h5>
                    <p className="text-white/80 font-satoshi">Neon &quot;In Code We Trust&quot; sign, 3D-printed node, shredded pitch decks, Rica’s incense, and a mission to break the fiat chains.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 5: The Burned-Out Founder&apos;s Last Hack */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter 5: The Burned-Out Founder&apos;s Last Hack
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  At fifty, Costa was a ghost in the Valley’s machine. He’d coded for Zuck’s rivals, pitched to Andreessen, watched his dreams diluted by Series B sharks. But his 21 BTC was the final hack—a backdoor out of the fiat labyrinth, a lighthouse in the storm.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  On X, Costa became a prophet. His threads blazed: &quot;Memes are for flips. Bitcoin’s for freedom.&quot; &quot;Dot-coms died. Web3 rugpulled. BTC endures.&quot; &quot;21 BTC isn’t a stack—it’s a revolution.&quot; Rica, always nearby, reminded him that the best revolutions are lived, not just tweeted.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Wisdom:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside">
                      <li>&quot;Memes are for flips. Bitcoin’s for freedom.&quot;</li>
                      <li>&quot;Dot-coms died. Web3 rugpulled. BTC endures.&quot;</li>
                      <li>&quot;21 BTC isn’t a stack—it’s a revolution.&quot;</li>
                      <li>&quot;Fireworks fade. Lighthouses remain.&quot;</li>
                      <li>60K followers: maxis, burned founders, Gen Z</li>
                      <li>When SPX pumped again, he sold top, bought 0.7 BTC</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">The Legacy:</h5>
                    <p className="text-white/80 font-satoshi">Not a billionaire, but unshackled. Free from VC leashes. Free from the burnout grind. Free to code his own legend. The Stackmaster, keeper of the flame, stacking through the storm, outlasting the noise—with Rica, always, at his side.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Epilogue */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Epilogue: The Stackmaster&apos;s Horizon
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="text-white/80 font-satoshi mb-4">
                  3 AM, July 2025. Costa and Rica on their balcony, mezcal and moonlight, Austin’s skyline glittering like a blockchain. The phone buzzes—another memecoin siren, another “100x gem.” They silence the noise, together.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  In recent years, paranoia became their shadow. Security is everything—Ledgers and seed phrases now sleep in a Monaco bank vault, guarded by steel and silence. The digital world is wild, but their fortress is real.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  In their safe, 21 BTC—fortress, final stand. Not billionaires, but sovereign. Free from the old games. Free to write their own code, their own fate.
                </p>
                <p className="text-white/80 font-satoshi mb-4">
                  Lately, Costa and Rica dream of returning to their roots: travel and real estate. But not just any homes—smart sanctuaries, injected with high tech, French flair, and Italian design. A new chapter, where art meets code, every lock is unbreakable, and every morning starts with Rica’s yoga and Costa’s espresso, the pura vida way.
                </p>
                <p className="text-white/80 font-satoshi">
                  They raise their glasses to the stars. &quot;To Satoshi,&quot; they murmur. &quot;To breaking the game.&quot;
                </p>
                <p className="text-white/80 font-satoshi">
                  Somewhere in the neon wilds, a degen chases the next $GIGA. But Costa and Rica? They’re the Stackmasters, lighthouse keepers, stacking through the storm. Memecoin cults will crash. Bitcoin will rise. And Costa and Rica, burned but unbroken, will be there, holding the keys.
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Stackmaster&apos;s Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">21 BTC</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Total Stack</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">A memetic fortress. A nod to Satoshi’s cap. A legend in Austin’s crypto dives.</p>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">$2.1M+</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Current Value</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">Costa’s stack is more than wealth—it’s freedom, hard-won and unyielding.</p>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">2100</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">X Followers</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">A mix of maxis, burned-out founders, and curious Gen Z degens following the sage.</p>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">$210K/year</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">2025 Retirement</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi">By selling small fractions of his stack, Costa will retire with inflation-proof income.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                Join the Stack
              </h3>
              <p className="text-lg text-white/80 font-satoshi">
                While Costa guards his lighthouse, your journey begins. Stack sats, stay free, and remember: memes are for flips, Bitcoin’s for freedom.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300">
                  Stack Sats
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white/60 text-sm mt-8">
        <a href="https://www.livethelife.tv/platforms/msty/bitcoin" target="_blank" rel="noopener noreferrer" className="underline text-yellow-500 hover:text-yellow-400 transition">Learn more about the Bitcoin philosophy and MSTY platform</a>
      </div>
    </div>
  );
}
