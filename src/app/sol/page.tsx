"use client";

import { Header } from '@/components/Header';
import { motion } from 'framer-motion';
import SolEth from '@/components/SolEth';
import {
  PremiumLayout,
  PremiumHero,
  BoxyCard,
  MetricsGrid,
  ComparisonSection,
  EcosystemGrid,
  FinancialTable
} from '@/components/sol';

const growthMetrics = [
  {
    label: 'Starting Point',
    value: '0.3%',
    description: 'Initial App Revenue Share'
  },
  {
    label: 'Current Position',
    value: '50%',
    description: 'Of All Crypto App Revenue'
  },
  {
    label: 'Growth Multiple',
    value: '166x',
    description: 'Revenue Share Increase'
  }
];

const networkMetrics = [
  {
    label: 'Current Supply',
    value: '551M',
    description: 'SOL in circulation'
  },
  {
    label: 'Inflation Rate',
    value: '6.017%',
    description: 'Tapering 15% annually'
  },
  {
    label: 'Staking Rate',
    value: '88.9%',
    description: 'Of total supply staked'
  },
  {
    label: '60-Day Volume',
    value: '1.4B',
    description: 'Transactions processed'
  }
];

const platformComparison = [
  { Feature: 'Primary Asset', Solana: 'SOL' },
  { Feature: 'Consensus', Solana: 'Proof of History + Proof of Stake' },
  { Feature: 'Smart Contract Language', Solana: 'Rust, C, C++' },
  { Feature: 'Execution Model', Solana: 'Parallel, single-threaded' },
  { Feature: 'Transaction Fees', Solana: 'Ultra-low, sub-penny' },
  { Feature: 'Ecosystem Maturity', Solana: 'Highly developed' },
  { Feature: 'NFT/DeFi Support', Solana: 'Extensive, market-leading' },
  { Feature: 'Traditional Finance', Solana: 'Strong integration (Superstate)' }
];

const ethVsSolComparison = [
  {
    title: 'The Ethereum Odyssey',
    content: "Ethereum's rollup-centric roadmap aims for synchronous composability and lightning-fast confirmations through innovations like shared sequencing, preconfirmations, and real-time SNARKs. While ambitious, this vision faces challenges in resolving fundamental trade-offs, with a timeline extending potentially to 2028."
  },
  {
    title: 'The Solana Sprint',
    content: "Solana prioritizes speed and performance through centralized block production and ordering, aiming for a globally distributed network with multiple concurrent block producers. While offering impressive speed, this approach faces scrutiny regarding its preconfirmation process and economic security model."
  },
  {
    title: 'Philosophical Divergence',
    content: "Ethereum represents a vision with a business—prioritizing long-term security and scalability. Solana is a business with a vision—focusing on immediate performance and efficiency. Each platform serves different needs: Ethereum for trustless access and high security, Solana for high-performance execution and builder ecosystem."
  }
];

const xStocksComparison = [
  {
    title: 'Major Exchange Adoption',
    content: "Bybit, the world's second-largest cryptocurrency exchange, has joined the xStocks Alliance alongside Kraken, making tokenized equities available in over 190 countries."
  },
  {
    title: 'DeFi-Native Integration',
    content: "xStocks are fully integrated with Solana's leading DeFi protocols including Kamino Finance ($2B+ liquidity), Raydium ($1.6B liquidity), and Jupiter aggregation."
  },
  {
    title: 'Available Today',
    content: "Trade household names and crypto giants as tokenized assets: SPYx, APPLx, NVDAx, TSLAx, METAx, GOOGLx, COINx, QQQx, CRCLx, MSTRx—with many more coming soon."
  }
];

const defiProjects = [
  {
    name: 'Jupiter Exchange',
    symbol: '$JUP',
    description: 'Leading aggregator for Solana, offering the best prices for token swaps.',
    growth: 'Primary DEX aggregator on Solana, poised for ecosystem growth.'
  },
  {
    name: 'Jito',
    symbol: '$JITO',
    description: 'Optimizes Solana\'s validator performance through advanced MEV strategies.',
    growth: 'Enhancing validator rewards and network efficiency.'
  },
  {
    name: 'Raydium Protocol',
    symbol: '$RAY',
    description: 'Automated market maker and liquidity provider for Serum DEX.',
    growth: 'Cornerstone of Solana\'s DeFi landscape with first-mover advantage.'
  },
  {
    name: 'Orca',
    symbol: '$ORCA',
    description: 'User-friendly AMM known for simplicity and efficient token swaps.',
    growth: 'Focus on user experience driving mass adoption.'
  },
  {
    name: 'Drift Protocol',
    symbol: '$DRIFT',
    description: 'Decentralized perpetual swap exchange on Solana.',
    growth: 'Well-positioned in the lucrative perpetual swaps market.'
  },
  {
    name: 'Kamino Finance',
    symbol: '$KMNO',
    description: 'Yield optimizer automating farming strategies for users.',
    growth: 'Crucial tool for DeFi investors seeking maximum returns.'
  }
];

const infrastructureProjects = [
  {
    name: 'Pyth Network',
    symbol: '$PYTH',
    description: 'Next-generation oracle solution providing real-time market data.',
    growth: 'Essential for ecosystem integrity with high-fidelity data feeds.'
  },
  {
    name: 'Wormhole',
    symbol: '$W',
    description: 'Cross-chain bridge for asset and data transfer between blockchains.',
    growth: 'Critical infrastructure for blockchain interoperability.'
  },
  {
    name: 'Render Network',
    symbol: '$RENDER',
    description: 'Decentralized GPU rendering platform leveraging idle computing power.',
    growth: 'Growing demand for rendering services in AI and graphics.'
  }
];

const emergingProjects = [
  {
    name: 'Tensor',
    symbol: '$TNSR',
    description: 'Marketplace and toolset for NFT trading on Solana.',
    growth: 'Comprehensive platform for the growing NFT market.'
  },
  {
    name: 'Parcl',
    symbol: '$PARCL',
    description: 'Real estate tokenization platform for fractional property ownership.',
    growth: 'Revolutionizing property investment accessibility.'
  },
  {
    name: 'Whales Market',
    symbol: '$WHALES',
    description: 'Platform for trading loyalty points and rewards.',
    growth: 'Innovative approach to the vast loyalty points market.'
  }
];

const strengths = [
  {
    title: 'Institutional Adoption',
    highlight: 'ETF momentum building.',
    description: `With a 90% probability of ETF approval in 2025 and major institutions like Fidelity filing applications, Solana is becoming increasingly attractive to institutional investors.`,
    note: `Builder's Note: The ETF narrative is real—institutions are paying attention.`
  },
  {
    title: 'Traditional Finance Bridge',
    highlight: 'Superstate&apos;s Opening Bell platform.',
    description: `The launch of "Opening Bell" enables SEC-registered public equities trading on Solana, bridging traditional finance with blockchain technology.`,
    note: `Builder's Note: This is a game-changer for traditional finance integration.`
  },
  {
    title: 'Network Resilience',
    highlight: 'Proven under extreme conditions.',
    description: `Handling $10B+ in 24-hour trading volume during the memecoin frenzy demonstrated Solana's ability to maintain functionality under extreme network stress.`,
    note: `Builder's Note: The network held up impressively during peak activity.`
  },
  {
    title: 'Ecosystem Growth',
    highlight: 'Mature and expanding rapidly.',
    description: `Solana's ecosystem continues to grow with strong DeFi, NFT, and gaming projects, supported by low fees and high throughput.`,
    note: `Builder's Note: The developer community is thriving and building.`
  }
];

const flaws = [
  {
    title: 'Network Congestion',
    pain: `Despite improvements, network congestion can still occur during extreme activity spikes, affecting user experience.`,
    solution: `Continued infrastructure upgrades and optimization to handle increasing demand.`
  },
  {
    title: 'Regulatory Uncertainty',
    pain: `While ETF prospects are promising, regulatory clarity remains a key consideration for institutional adoption.`,
    solution: `Active engagement with regulators and compliance-focused development.`
  },
  {
    title: 'Competition in DeFi',
    pain: `Other chains are catching up with their own scaling solutions and ecosystem development.`,
    solution: `Focus on unique advantages like low fees and established ecosystem.`
  },
  {
    title: 'Technical Complexity',
    pain: `The technical sophistication of Solana can be challenging for new developers.`,
    solution: `Enhanced documentation and developer tooling to lower the entry barrier.`
  }
];

const pillars = [
  {
    title: "Institutional Investors",
    description: "With ETF prospects and traditional finance integration, Solana is becoming increasingly attractive to institutional players."
  },
  {
    title: "DeFi & NFT Builders",
    description: "Low fees and high throughput make Solana ideal for DeFi and NFT projects requiring scale and efficiency."
  },
  {
    title: "Traditional Finance",
    description: "Superstate's Opening Bell platform positions Solana as a bridge between traditional and decentralized finance."
  }
];

export default function SolanaHonestTake() {
  return (
    <>
      <Header />
      <PremiumLayout>
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PremiumHero
            title="Solana (SOL)"
            subtitle="Blockchain Platform • Institutional Finance"
            tagline="The Institutional Frontier"
          />
        </motion.div>

        {/* Growth Metrics Section */}
        <BoxyCard title="From Nothing to Everything">
          <p className="text-lg text-gray-300 mb-8">
            The Most Explosive Growth in Crypto
          </p>
          <MetricsGrid metrics={growthMetrics} />
          <p className="text-center text-lg text-gray-300 mt-8">
            For every $100 in crypto app revenue, $50 is now captured by Solana applications.
          </p>
        </BoxyCard>

        {/* SOL/ETH Chart */}
        <BoxyCard title="SOL/ETH Performance Comparison">
          <SolEth />
        </BoxyCard>

        {/* ETH vs SOL Comparison */}
        <BoxyCard title="Ethereum vs Solana">
          <ComparisonSection items={ethVsSolComparison} />
        </BoxyCard>

        {/* Network Metrics & Economic Model */}
        <BoxyCard title="Network Metrics & Economic Model">
          <MetricsGrid metrics={networkMetrics} columns={4} className="mb-8" />

          {/* Economic Model Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20">
              <h4 className="text-xl text-yellow-500 mb-4">Supply & Inflation</h4>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Projected to reach 720M SOL by 2030, with inflation stabilizing at 1.45% annually. Current burn rate of 0.067% per year against 6% inflation creates an interesting dynamic for long-term holders.
                </p>
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <p className="text-yellow-400/80 text-sm">
                    &quot;60-day fee collection: 122,975 SOL (50% burned)&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20">
              <h4 className="text-xl text-yellow-500 mb-4">Staking Dynamics</h4>
              <div className="space-y-4">
                <p className="text-gray-300">
                  With 88.9% of SOL staked, non-stakers face a 5.62% annual loss in network share, while stakers gain equivalently. This high staking rate ensures robust network security and validates the emission schedule.
                </p>
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <p className="text-yellow-400/80 text-sm">
                    &quot;Contrasts with ETH&apos;s 22.96% stake rate&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Note */}
          <div className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20">
            <h4 className="text-xl text-yellow-500 mb-4">Towards Sustainability</h4>
            <p className="text-gray-300">
              The path to becoming a deflationary asset requires increased network adoption, higher transaction volume, and strategic fee adjustments. The potential for dynamic and localized fee structures could enhance the economic model, making it more attractive for developers and users alike.
            </p>
          </div>
        </BoxyCard>

        {/* What Makes Solana Special */}
        <BoxyCard title="What Makes Solana Different?">
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-3">
                  {item.title}
                </h4>
                <div className="text-yellow-500 italic mb-3 border-l-4 border-yellow-500/60 pl-4">
                  {item.highlight}
                </div>
                <div className="text-gray-300 mb-3 leading-relaxed">
                  {item.description}
                </div>
                <div className="text-yellow-500/80 text-sm italic">{item.note}</div>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* xStocks: Tokenized Capital Markets */}
        <BoxyCard title="The Future is Here: xStocks">
          <p className="text-lg text-gray-300 mb-6">
            &quot;Tokenized capital markets are live. This is what investing looks like when it&apos;s designed for everyone.&quot;
          </p>
          <p className="text-gray-300 mb-8">
            Over 60 tokenized stocks are now available on Bybit, Kraken, and Solana—Apple, Amazon, Microsoft, and crypto companies like Coinbase and MicroStrategy, all accessible 24/7 with the speed of blockchain.
          </p>
          <ComparisonSection items={xStocksComparison} />
        </BoxyCard>

        {/* Platform Comparison */}
        <BoxyCard title="Solana at a Glance">
          <p className="text-lg text-gray-300 mb-8 text-center">
            Solana&apos;s features have matured significantly, making it a robust platform for both traditional and decentralized finance applications.
          </p>
          <FinancialTable 
            headers={['Feature', 'Solana']}
            rows={platformComparison}
          />
        </BoxyCard>

        {/* Who is Solana For Now? */}
        <BoxyCard title="Who Is Solana For Now?">
          <p className="text-lg text-gray-300 mb-8 text-center">
            Solana&apos;s next chapter is about:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-3">{pillar.title}</h4>
                <p className="text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* Honest Flaws & Solutions */}
        <BoxyCard title="What's Broken & How We Fix It">
          <div className="space-y-6">
            {flaws.map((item) => (
              <div
                key={item.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20 border-l-4 border-l-yellow-500"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-4">{item.title}</h4>
                <div className="mb-4">
                  <div className="text-yellow-500 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
                  <div className="text-gray-300 mb-4">{item.pain}</div>
                </div>
                <div>
                  <div className="text-yellow-500 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
                  <div className="text-gray-300">{item.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* Ecosystem Watchlist */}
        <BoxyCard title="Ecosystem Watchlist">
          <p className="text-lg text-gray-300 mb-8 text-center">
            The Solana ecosystem is thriving with innovative projects across multiple sectors. Here are the ones worth watching.
          </p>

          {/* DeFi Section */}
          <div className="mb-12">
            <h4 className="text-xl text-yellow-500 mb-6 border-l-4 border-yellow-500/60 pl-4">DeFi</h4>
            <EcosystemGrid projects={defiProjects} />
          </div>

          {/* Infrastructure Section */}
          <div className="mb-12">
            <h4 className="text-xl text-yellow-500 mb-6 border-l-4 border-yellow-500/60 pl-4">Infrastructure</h4>
            <EcosystemGrid projects={infrastructureProjects} />
          </div>

          {/* Emerging Sectors */}
          <div>
            <h4 className="text-xl text-yellow-500 mb-6 border-l-4 border-yellow-500/60 pl-4">Emerging Sectors</h4>
            <EcosystemGrid projects={emergingProjects} />
          </div>
        </BoxyCard>

        {/* Conclusion */}
        <BoxyCard title="The Future of Finance">
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Solana has positioned itself as the institutional bridge between traditional finance and blockchain technology.</strong> With ETF prospects, traditional finance integration through platforms like xStocks, and proven network resilience, Solana represents the next evolution of financial infrastructure.
            </p>
            <p>
              The combination of 24/7 tokenized markets, DeFi composability, and institutional-grade performance creates unprecedented opportunities for builders and investors. As traditional assets become blockchain-native and crypto companies mature, Solana&apos;s high-performance architecture provides the foundation for this convergence.
            </p>
            <p className="text-yellow-500 font-semibold">
              The institutional frontier is here, and Solana is leading the charge.
            </p>
          </div>
        </BoxyCard>
      </PremiumLayout>
    </>
  );
}
