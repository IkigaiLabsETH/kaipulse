"use client";

import { Badge } from '@/components/ui/badge';

export default function CautionaryTale() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
        <h5 className="font-epilogue text-2xl text-yellow-400 mb-4">⚠️ A Massive Risk on the Horizon</h5>
        <p className="text-white/80 text-lg mb-4">
          Despite all its strengths, Hyperliquid faces a challenge that could seriously affect its volume, TVL, and ultimately, price. A significant portion of its core, high-volume users are U.S.-based, and they may soon have compelling alternatives.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/20 p-4 border border-white/10 rounded-none">
            <h6 className="font-bold text-white">The U.S. User Dilemma</h6>
            <div className="text-white/70 mt-2">
              A core group of <Badge variant="destructive">20K-30K</Badge> users, largely from the U.S., generate nearly <Badge variant="destructive">$1 billion</Badge> in revenue. They are the backbone of the platform, but their loyalty is about to be tested.
            </div>
          </div>
          <div className="bg-black/20 p-4 border border-white/10 rounded-none">
            <h6 className="font-bold text-white">The Coming Competition</h6>
            <p className="text-white/70 mt-2">
              Coinbase and Robinhood are launching perpetual futures in the U.S. This changes everything, offering a safer, regulated, and easier-to-use alternative for American traders.
            </p>
          </div>
        </div>

        <p className="text-white/80 text-lg mb-4">
          Most traders prioritize ease of use and regulation over decentralization. When given the choice, many will likely migrate to these established, compliant platforms. Hyperliquid already struggles to gain market share against Binance; adding Coinbase to the mix will intensify the pressure.
        </p>

        <h6 className="font-epilogue text-xl text-yellow-400 mt-6 mb-3">Hyperliquid&apos;s Path Forward: Innovate or Perish</h6>
        <p className="text-white/80 text-lg mb-4">
          In the short to medium term, both Hyperliquid and the <span className="font-bold text-yellow-400">$HYPE</span> token will likely take a hit. However, the platform&apos;s long-term survival depends on its core advantages:
        </p>
        <ul className="text-white/80 text-lg mb-4 space-y-2 list-disc list-inside">
          <li><span className="font-bold">Decentralization:</span> True ownership and control.</li>
          <li><span className="font-bold">Exotic Markets:</span> Community-driven listings that CEXs won&apos;t touch.</li>
          <li><span className="font-bold">Superior Terms:</span> Higher leverage and potentially lower fees.</li>
        </ul>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-6 rounded-none">
          <h6 className="font-bold text-yellow-300">The HIP-3 Game-Changer</h6>
          <p className="text-yellow-200/80 mt-2">
            The upcoming HIP-3 upgrade is pivotal. It will allow anyone to permissionlessly launch a perp market, unlocking a long tail of trading opportunities on assets unavailable on centralized exchanges. This is where Hyperliquid can build its defensible moat.
          </p>
        </div>

        <p className="text-white/80 text-lg mt-6">
          This is a critical moment. Hyperliquid must double down on what makes it unique—innovation, openness, and speed. While short-term pressure is inevitable, its ability to innovate with features like HIP-3 and the HyperEVM ecosystem will determine if it can bounce back and reclaim market share.
        </p>
      </div>
    </div>
  );
} 