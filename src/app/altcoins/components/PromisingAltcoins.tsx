import { ExternalLink, TrendingUp, Zap, Database, Brain, Cog, Network, BarChart3, Building, LucideIcon } from 'lucide-react';

interface AltcoinData {
  name: string;
  symbol: string;
  description: string;
  pmfReason: string;
  traction: string;
  marketCap?: string;
  category: string;
  icon: LucideIcon;
  website?: string;
}

const altcoinsData: AltcoinData[] = [
  {
    name: "Qubetics",
    symbol: "TICS",
    description: "Decentralized VPN (dVPN) for privacy and censorship resistance, with cross-chain interoperability and Web3 aggregator",
    pmfReason: "Addresses privacy and censorship, used by journalists and corporate teams",
    traction: "Presale raised $17M, 26,400+ holders, mainnet launch Q2 2025",
    category: "Privacy & Infrastructure",
    icon: Network,
  },
  {
    name: "Arweave",
    symbol: "AR",
    description: "Permanent, immutable data storage (permaweb) for applications like academic publishing and decentralized identity",
    pmfReason: "Solves long-term data storage needs with profit-sharing token mechanism",
    traction: "Used in real-world applications, growing ecosystem of projects relying on storage",
    category: "Data Storage",
    icon: Database,
  },
  {
    name: "Kaspa",
    symbol: "KAS",
    description: "Scalable blockchain protocol focused on high throughput and security, gaining attention for technical advancements",
    pmfReason: "Addresses scalability trilemma, potential for high-transaction environments",
    traction: "Gaining community attention for technical advancements, part of promising coin lists",
    category: "Scalability",
    icon: TrendingUp,
  },
  {
    name: "Bittensor",
    symbol: "TAO",
    description: "Decentralized AI network running large language models, focusing on AI innovation and integration",
    pmfReason: "Crypto needs AI, provides platform for decentralized AI development",
    traction: "Community-driven, significant interest in AI-focused ecosystem",
    category: "Artificial Intelligence",
    icon: Brain,
  },
  {
    name: "PEAQ",
    symbol: "PEAQ",
    description: "Targets the machine economy, enabling applications like electric car charging and smart home devices",
    pmfReason: "Focuses on emerging IoT and M2M economies, no direct competitors yet",
    traction: "Seen as future player in dystopic tech, applications in geoinformatics",
    category: "IoT & Machine Economy",
    icon: Cog,
  },
  {
    name: "Radix",
    symbol: "XRD",
    description: "Hyperscale blockchain with linear scaling and no upper TPS limits, addressing scalability challenges",
    pmfReason: "Solves scalability issues, EVM interoperability, trusted bridges",
    traction: "Recent hyperscale test completed, needs better marketing for wider adoption",
    category: "Scalability",
    icon: Zap,
  },
  {
    name: "Nervos Network",
    symbol: "CKB",
    description: "Layer 1 blockchain addressing storage and layer 2 solutions, with strong community support",
    pmfReason: "Provides comprehensive solution for blockchain's storage and scalability problems",
    traction: "Strong community support, recognized as foundational project",
    category: "Infrastructure",
    icon: Network,
  },
  {
    name: "Ocean Protocol",
    symbol: "OCEAN",
    description: "Decentralized data exchange protocol for secure data sharing and monetization, with AI integration",
    pmfReason: "Data monetization is a growing need, integration with AI models like DeepSeek",
    traction: "Used by enterprises and developers, growing ecosystem of data providers",
    category: "Data & AI",
    icon: BarChart3,
  },
  {
    name: "Fetch.ai",
    symbol: "FET",
    description: "AI-focused blockchain enabling decentralized machine learning and autonomous agents",
    pmfReason: "AI is transforming industries, provides tools for decentralized AI applications",
    traction: "Gaining traction as AI integrates with blockchain, significant community interest",
    category: "Artificial Intelligence",
    icon: Brain,
  },
  {
    name: "Rexas Finance",
    symbol: "RXS",
    description: "Pioneers real-world asset (RWA) tokenization with tools for DeFi and real-world investors",
    pmfReason: "Bridges traditional finance with blockchain, serves DeFi and real-world investors",
    traction: "Presale raised $49M, 566% price increase, tools used for tokenizing real-world assets",
    category: "RWA Tokenization",
    icon: Building,
  },
];

const categoryColors = {
  "Privacy & Infrastructure": "bg-purple-900/30 border-purple-500/50",
  "Data Storage": "bg-blue-900/30 border-blue-500/50",
  "Scalability": "bg-green-900/30 border-green-500/50",
  "Artificial Intelligence": "bg-orange-900/30 border-orange-500/50",
  "IoT & Machine Economy": "bg-indigo-900/30 border-indigo-500/50",
  "Infrastructure": "bg-cyan-900/30 border-cyan-500/50",
  "Data & AI": "bg-pink-900/30 border-pink-500/50",
  "RWA Tokenization": "bg-emerald-900/30 border-emerald-500/50",
};

export function PromisingAltcoins() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-yellow-500" />
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Promising Altcoins to Watch</h3>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Based on comprehensive research focusing on <span className="text-yellow-400 font-semibold">Product-Market Fit (PMF)</span>, 
          these altcoins solve real-world problems, demonstrate traction, and show strong adoption potential. 
          Unlike speculative tokens, these projects address specific market needs with clear use cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {altcoinsData.map((altcoin, index) => {
          const IconComponent = altcoin.icon;
          const categoryColorClass = categoryColors[altcoin.category as keyof typeof categoryColors] || "bg-gray-900/30 border-gray-500/50";
          
          return (
            <div 
              key={index}
              className="bg-black/30 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:bg-black/40"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <IconComponent className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold text-yellow-400">{altcoin.name}</h4>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      ${altcoin.symbol}
                    </span>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${categoryColorClass}`}>
                    {altcoin.category}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {altcoin.description}
              </p>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-bold text-yellow-500/90 mb-1">Why It Matters (PMF)</h5>
                  <p className="text-gray-400 text-sm">{altcoin.pmfReason}</p>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-yellow-500/90 mb-1">Traction & Adoption</h5>
                  <p className="text-gray-400 text-sm">{altcoin.traction}</p>
                </div>
              </div>

              {altcoin.website && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a 
                    href={altcoin.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
        <h4 className="text-lg font-bold text-yellow-400 mb-3">Research Methodology & PMF Focus</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-yellow-500/90 mb-2">PMF Criteria</h5>
            <ul className="text-gray-400 space-y-1">
              <li>• Real-world problem solving</li>
              <li>• Clear use cases</li>
              <li>• Demonstrated adoption</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-500/90 mb-2">Market Context</h5>
            <ul className="text-gray-400 space-y-1">
              <li>• Bitcoin surpassing $100K</li>
              <li>• Institutional crypto adoption</li>
              <li>• Focus on utility over speculation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-500/90 mb-2">Risk Disclaimer</h5>
            <ul className="text-gray-400 space-y-1">
              <li>• Crypto markets are volatile</li>
              <li>• DYOR always applies</li>
              <li>• Consider risk tolerance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Analysis based on July 2025 research from Bitcoin.com, TronWeekly, Reddit communities, and Analytics Insight
        </p>
      </div>
    </div>
  );
} 