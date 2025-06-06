import Link from 'next/link';

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Education • Life Balance • Financial Freedom</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                LiveTheLifeTV
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Your Gateway to Bitcoin Education & Life Balance</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🎯 Our Mission
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                We believe in &quot;Fix Money, Fix The World.&quot; Life isn&apos;t about accumulating the biggest stack - it&apos;s about living your best life with Bitcoin. Our platform provides educational resources and tools to help you achieve financial freedom while embracing life&apos;s true value.
              </p>
              <p className="text-lg">
                If you&apos;re new here, start with our <Link href="/docu" className="text-yellow-500 hover:text-yellow-400 transition-colors">featured Bitcoin documentary</Link> and the <Link href="/platforms/msty/bitcoin" className="text-yellow-500 hover:text-yellow-400 transition-colors">Bitcoin page</Link>. Our core focus is Bitcoin, and everything else is research to help you live the life you want. We&apos;re leveraging AI through vibe coding to create content that will help fine-tune our bespoke model.
              </p>
              <p className="text-lg">
                Yes, this app might feel like a hot mess - because it is! We&apos;re exploring the intersection of Bitcoin, AI, and lifestyle. For crypto veterans: while most altcoins are going to zero, we dive deep into the few dozen projects actually shipping innovative solutions. We trade them hoping for short-term outperformance against Bitcoin, but always swap back to our core Bitcoin stack. Check out our <Link href="https://www.livethelife.tv/col" className="text-yellow-500 hover:text-yellow-400 transition-colors">cost of living analysis</Link> to see how we measure everything in Bitcoin and satoshis.
              </p>
              <p className="text-lg">
                Our daily routine? Check Mando Minutes for news, monitor Bitcoin price, and review our <Link href="https://www.livethelife.tv/crypto" className="text-yellow-500 hover:text-yellow-400 transition-colors">watchlist</Link> for potential <Link href="https://www.livethelife.tv/crypto" className="text-yellow-500 hover:text-yellow-400 transition-colors">outperformers</Link>. We write deep dives on projects that could impact our industry - from <Link href="https://www.livethelife.tv/altcoins" className="text-yellow-500 hover:text-yellow-400 transition-colors">HyperLiquid and Sui to Solana, Ethereum, and OG memes like DOGE</Link>. We track traditional finance&apos;s embrace of Bitcoin after a decade of resistance, focusing on major players like MicroStrategy by Saylor and 21 by Jack, plus innovative products like MSTY, Stride, and Strike.
              </p>
              <p className="text-lg">
                Beyond trading, we&apos;re passionate about digital art - creating, curating, and collecting. Our lifestyle thesis in the About section shares insights from our 20+ years in travel and real estate, documenting our journey through the past, present, and future of this space.
              </p>
              <p className="text-lg">
                Above all, <Link href="/assets" className="text-yellow-500 hover:text-yellow-400 transition-colors">stay hungry, stay curious</Link>. Use our <Link href="/voice" className="text-yellow-500 hover:text-yellow-400 transition-colors">voice AI</Link> to ask questions and explore. Our platform is your gateway to understanding Bitcoin, leveraging AI, and living life on your own terms.
              </p>
              <p className="text-lg">
                If Bitcoin seems too good to be true, that&apos;s because it is - but not in the way you might think. It&apos;s not a <Link href="https://www.livethelife.tv/zero" className="text-yellow-500 hover:text-yellow-400 transition-colors">get-rich-quick scheme or a magical solution</Link>. It&apos;s a fundamental shift in how we think about money, value, and freedom. The system isn&apos;t broken - it&apos;s working exactly as designed to extract value from your labor. Bitcoin isn&apos;t trying to sell you something or pump your bags. It just... is. A mathematical truth, a monetary rebellion, and your final protest vote against a system that turned your hard work into &quot;clown coupons.&quot; You won&apos;t &quot;buy Bitcoin someday&quot; - you&apos;ll buy Bitcoin, or you&apos;ll own nothing. The choice is yours. <Link href="https://www.livethelife.tv/downbad" className="text-yellow-500 hover:text-yellow-400 transition-colors">Learn more about why we&apos;re down bad</Link> and <Link href="https://www.livethelife.tv/maxpain" className="text-yellow-500 hover:text-yellow-400 transition-colors">understand Bitcoin&apos;s market cycles</Link>.
              </p>
            </div>
          </div>

          {/* Bitcoin Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🚀 Bitcoin Strategy
            </h3>
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg">
                Master the fundamentals of Bitcoin and build a robust strategy for long-term success. From understanding the core principles to implementing advanced mining and investment strategies, we provide comprehensive resources to help you navigate the Bitcoin ecosystem with confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Core Bitcoin</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/platforms/msty/bitcoin" className="hover:text-yellow-500 transition-colors">Bitcoin</Link></li>
                  <li><Link href="/whitepaper" className="hover:text-yellow-500 transition-colors">Whitepaper</Link></li>
                  <li><Link href="/platforms/msty/mstr" className="hover:text-yellow-500 transition-colors">Microstrategy</Link></li>
                  <li><Link href="/bitbonds" className="hover:text-yellow-500 transition-colors">Bit Bonds</Link></li>
                  <li><Link href="/twentyone" className="hover:text-yellow-500 transition-colors">TwentyOne</Link></li>
                  <li><Link href="/platforms/msty/" className="hover:text-yellow-500 transition-colors">MSTY</Link></li>
                  <li><Link href="/strf" className="hover:text-yellow-500 transition-colors">Strife</Link></li>
                  <li><Link href="/strd" className="hover:text-yellow-500 transition-colors">Stride</Link></li>
                  <li><Link href="/strike" className="hover:text-yellow-500 transition-colors">Strike Strategy</Link></li>
                  <li><Link href="/nakamoto" className="hover:text-yellow-500 transition-colors">Nakamoto</Link></li>
                  <li><Link href="/altbg" className="hover:text-yellow-500 transition-colors">The Blockchain Group</Link></li>
                  <li><Link href="/btcab" className="hover:text-yellow-500 transition-colors">Treasury Capital AB</Link></li>
                  <li><Link href="/metaplanet" className="hover:text-yellow-500 transition-colors">MetaPlanet</Link></li>
                  <li><Link href="/tbs" className="hover:text-yellow-500 transition-colors">Bitcoin Holdings</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Mining & Infrastructure</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/s9pro" className="hover:text-yellow-500 transition-colors">S9 Pro</Link></li>
                  <li><Link href="/bitaxe" className="hover:text-yellow-500 transition-colors">Bitaxe</Link></li>
                  <li><Link href="/node" className="hover:text-yellow-500 transition-colors">Node Setup</Link></li>
                  <li><Link href="/mara" className="hover:text-yellow-500 transition-colors">MARA</Link></li>
                  <li><Link href="/doge" className="hover:text-yellow-500 transition-colors">DOGE</Link></li>
                  <li><Link href="/ln" className="hover:text-yellow-500 transition-colors">Lightning Network</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Investment Tools</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/col" className="hover:text-yellow-500 transition-colors">Cost Of Living</Link></li>
                  <li><Link href="/maxpain" className="hover:text-yellow-500 transition-colors">Max Pain</Link></li>
                  <li><Link href="/downbad" className="hover:text-yellow-500 transition-colors">Down Bad</Link></li>
                  <li><Link href="/calculator" className="hover:text-yellow-500 transition-colors">Calculator</Link></li>
                  <li><Link href="/liquidity" className="hover:text-yellow-500 transition-colors">Liquidity</Link></li>
                  <li><Link href="/altcoins" className="hover:text-yellow-500 transition-colors">Altcoins</Link></li>
                  <li><Link href="/platforms/bitwise" className="hover:text-yellow-500 transition-colors">Bitwise</Link></li>
                  <li><Link href="/platforms/msty/brokers" className="hover:text-yellow-500 transition-colors">Brokers</Link></li>
                  <li><Link href="/assets" className="hover:text-yellow-500 transition-colors">Assets</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* DeFi & Web3 Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              💡 DeFi & Web3
            </h3>
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg">
                Explore the expanding universe of decentralized finance and Web3 technologies. Our curated selection of DeFi platforms, NFT collections, and Web3 tools helps you navigate this innovative space while maintaining a Bitcoin-first approach to digital assets.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">DeFi Platforms</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/defi" className="hover:text-yellow-500 transition-colors">DeFi Overview</Link></li>
                  <li><Link href="/eth" className="hover:text-yellow-500 transition-colors">Ethereum</Link></li>
                  <li><Link href="/hype" className="hover:text-yellow-500 transition-colors">HyperLiquid</Link></li>
                  <li><Link href="/aave" className="hover:text-yellow-500 transition-colors">Aave</Link></li>
                  <li><Link href="/sol" className="hover:text-yellow-500 transition-colors">Solana</Link></li>
                  <li><Link href="/sui" className="hover:text-yellow-500 transition-colors">Sui</Link></li>
                  <li><Link href="/etherfi" className="hover:text-yellow-500 transition-colors">EtherFi</Link></li>
                  <li><Link href="/holyheld" className="hover:text-yellow-500 transition-colors">Holyheld</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">NFTs & Collections</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/collections" className="hover:text-yellow-500 transition-colors">Collections</Link></li>
                  <li><Link href="/pfp" className="hover:text-yellow-500 transition-colors">PFP</Link></li>
                  <li><Link href="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link></li>
                  <li><Link href="/1on1" className="hover:text-yellow-500 transition-colors">1-on-1</Link></li>
                  <li><Link href="/art" className="hover:text-yellow-500 transition-colors">Art</Link></li>
                  <li><Link href="/print" className="hover:text-yellow-500 transition-colors">Prints</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Web3 Tools</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/fairmint" className="hover:text-yellow-500 transition-colors">Fairmint</Link></li>
                  <li><Link href="/otonomos" className="hover:text-yellow-500 transition-colors">Otonomos</Link></li>
                  <li><Link href="/abra" className="hover:text-yellow-500 transition-colors">Abra</Link></li>
                  <li><Link href="/firefish" className="hover:text-yellow-500 transition-colors">FireFish</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lifestyle & Travel Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🌟 Lifestyle & Travel
            </h3>
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg">
                Discover how to live a Bitcoin lifestyle while exploring the world. From European digital nomad hotspots to alternative living arrangements and luxury destinations, we help you find the perfect balance between financial freedom and life experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">European Destinations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/portugal" className="hover:text-yellow-500 transition-colors">Portugal</Link></li>
                  <li><Link href="/spain" className="hover:text-yellow-500 transition-colors">Spain</Link></li>
                  <li><Link href="/france" className="hover:text-yellow-500 transition-colors">France</Link></li>
                  <li><Link href="/italy" className="hover:text-yellow-500 transition-colors">Italy</Link></li>
                  <li><Link href="/swiss" className="hover:text-yellow-500 transition-colors">Switzerland</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Alternative Living</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/realestate" className="hover:text-yellow-500 transition-colors">Real Estate</Link></li>
                  <li><Link href="/mobilehome" className="hover:text-yellow-500 transition-colors">Mobile Homes</Link></li>
                  <li><Link href="/airstream" className="hover:text-yellow-500 transition-colors">Airstream</Link></li>
                  <li><Link href="/catamaran" className="hover:text-yellow-500 transition-colors">Catamaran</Link></li>
                  <li><Link href="/smarthome" className="hover:text-yellow-500 transition-colors">Smart Home</Link></li>
                  <li><Link href="/land" className="hover:text-yellow-500 transition-colors">Land</Link></li>
                  <li><Link href="/ecoflow" className="hover:text-yellow-500 transition-colors">EcoFlow</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Luxury Destinations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/dubai" className="hover:text-yellow-500 transition-colors">Dubai</Link></li>
                  <li><Link href="/maldives" className="hover:text-yellow-500 transition-colors">Maldives</Link></li>
                  <li><Link href="/biarritz" className="hover:text-yellow-500 transition-colors">Biarritz</Link></li>
                  <li><Link href="/cirrus" className="hover:text-yellow-500 transition-colors">Private Jet</Link></li>
                  <li><Link href="/hx50" className="hover:text-yellow-500 transition-colors">Helicopter</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools & Resources Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🛠️ Tools & Resources
            </h3>
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg">
                Access our comprehensive suite of tools and resources designed to enhance your Bitcoin journey. From hardware security solutions to advanced analytics and educational materials, we provide everything you need to succeed in the digital asset space.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Hardware & Security</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/ledger" className="hover:text-yellow-500 transition-colors">Ledger</Link></li>
                  <li><Link href="/platforms/coinbase" className="hover:text-yellow-500 transition-colors">Coinbase</Link></li>
                  <li><Link href="/sparrow" className="hover:text-yellow-500 transition-colors">Sparrow</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Analytics & Research</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/sonar" className="hover:text-yellow-500 transition-colors">Sonar</Link></li>
                  <li><Link href="/quality" className="hover:text-yellow-500 transition-colors">Quality</Link></li>
                  <li><Link href="/monaco" className="hover:text-yellow-500 transition-colors">Monaco</Link></li>
                  <li><Link href="/sharplink" className="hover:text-yellow-500 transition-colors">SharpLink</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Degens Guide</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/pumpnotfun" className="hover:text-yellow-500 transition-colors">Pump Not Fun</Link></li>
                  <li><Link href="/grind" className="hover:text-yellow-500 transition-colors">Grind</Link></li>
                  <li><Link href="/7fig" className="hover:text-yellow-500 transition-colors">6fig hell</Link></li>
                  <li><Link href="/fire" className="hover:text-yellow-500 transition-colors">Fire</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community & Culture Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              👥 Community & Culture
            </h3>
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg">
                Join our vibrant community of Bitcoin enthusiasts and digital nomads. From exclusive club access to AI-powered voice experiences, we foster a culture of learning, sharing, and growth in the Bitcoin ecosystem.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Lifestyle & Health</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/tesla" className="hover:text-yellow-500 transition-colors">Tesla</Link></li>
                  <li><Link href="/train" className="hover:text-yellow-500 transition-colors">Training</Link></li>
                  <li><Link href="/wine" className="hover:text-yellow-500 transition-colors">Wine Tasting</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Content & Media</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/docu" className="hover:text-yellow-500 transition-colors">Bitcoin Docu</Link></li>
                  <li><Link href="/zero" className="hover:text-yellow-500 transition-colors">Zero</Link></li>
                  <li><Link href="/naval" className="hover:text-yellow-500 transition-colors">Naval</Link></li>
                  <li><Link href="/time" className="hover:text-yellow-500 transition-colors">Time</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Voice & AI</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><Link href="/voice" className="hover:text-yellow-500 transition-colors">Voice Experience</Link></li>
                  <li><Link href="/ai" className="hover:text-yellow-500 transition-colors">AI Tools</Link></li>
                  <li><Link href="/vibecode" className="hover:text-yellow-500 transition-colors">VibeCode</Link></li>
                  <li><Link href="/cursor" className="hover:text-yellow-500 transition-colors">Cursor</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🔒 Important Notice
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                All content and tools provided are for educational purposes only. We do not provide financial advice. Always do your own research and consult with qualified professionals before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
