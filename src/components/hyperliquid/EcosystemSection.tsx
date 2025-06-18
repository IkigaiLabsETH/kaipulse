"use client";

export default function EcosystemSection() {
  const ecosystemData = {
    defi: {
      lending: [
        'HyperLend - Native lending platform with multiple pool types',
        'PrimeFi - Omnichain money-market protocol',
        'Keiko Finance - Permissionless CDP protocol',
        'Sentiment - Portfolio-based borrowing'
      ],
      dex: [
        'KittenSwap - ve(3,3) model DEX',
        'Sunder Finance - Meta-DEX with vote-escrow',
        'Valantis - Modular DEX with custom pools',
        'Laminar - Liquidity aggregator'
      ],
      stablecoins: [
        'Felix - Over-collateralized feUSD',
        'Resolv (USR) - Delta-neutral yield stablecoin',
        'Lambda - BTC-collateralized btcUSD',
        'USDT0 - Omnichain USDT integration'
      ],
      yield: [
        'StakedHYPE - Official liquid staking',
        'Kinetiq - Advanced validator selection',
        'LoopedHYPE - Automated yield optimization',
        'HyperYield - Next-gen yield aggregator'
      ]
    },
    infrastructure: {
      bridges: [
        'HyBridge - Native cross-chain bridge aggregator',
        'Wormhole - Cross-chain messaging',
        'LayerZero - Omnichain interoperability',
        'Nitro Router - Cross-VM bridge'
      ],
      oracles: [
        'RedStone - High-frequency price feeds',
        'Pyth Network - Institutional-grade data',
        'Stork Oracle - Flexible data feeds',
        'HypeRPC - Premier node service'
      ]
    },
    trading: {
      tools: [
        'Silhouette - Private trading platform',
        'Insilico Terminal - Professional EMS',
        'Katoshi - Automated trading layer',
        'Tealstreet - Modern trading software'
      ],
      analytics: [
        'HyperTerminal - All-in-one analytics',
        'HyperStats - Network statistics',
        'Hypervisor - Custom dashboards',
        'Nansen Integration - On-chain analytics'
      ]
    },
    wallets: {
      payments: [
        'Leap Wallet - Multi-chain integration',
        'Tholos - Multi-sig platform',
        'Cypher - Crypto payments',
        'BasedApp - Visa card integration'
      ],
      mobile: [
        'Mercury - Mobile trading app',
        'Lootbase - Mobile DeFi app',
        'Liquid Start - Project incubation',
        '.hl Domains - Native identity'
      ]
    }
  };

  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        The Hyperliquid Ecosystem
      </h3>
      <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
        A comprehensive financial ecosystem built on Hyperliquid high-performance infrastructure
      </p>

      {/* DeFi Protocols */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">DeFi Protocols</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Lending & Borrowing</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.defi.lending.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">DEX & Trading</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.defi.dex.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Stablecoins</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.defi.stablecoins.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Yield & Staking</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.defi.yield.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Infrastructure & Tools */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Infrastructure & Tools</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Bridges & Interoperability</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.infrastructure.bridges.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Oracles & Data</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.infrastructure.oracles.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trading & Analytics */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Trading & Analytics</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Trading Tools</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.trading.tools.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Analytics & Monitoring</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.trading.analytics.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wallets & Identity */}
      <div>
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Wallets & Identity</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Wallets & Payments</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.wallets.payments.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Mobile & Identity</h5>
            <ul className="space-y-2 text-white/80">
              {ecosystemData.wallets.mobile.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 