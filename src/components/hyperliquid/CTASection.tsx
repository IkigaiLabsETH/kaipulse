"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
      <h2 className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
        The Path Forward
      </h2>
      <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
        &quot;Hyperliquid today is like buying NASDAQ at launch, or owning the trading infrastructure of the future.&quot;
      </p>
      <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
        The story is just getting started. With token launch, ecosystem growth, and autonomous trading on the horizon, Hyperliquid is building the infrastructure for the next generation of onchain trading. If you&apos;re here, you&apos;re early. Let&apos;s build the future together.
      </p>
      <Link href="https://hyperliquid.xyz/" target="_blank">
        <Button className="bg-yellow-500 text-black font-bold px-12 py-6 rounded-none hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          Hyperliquid Docs <ArrowRight className="ml-4 w-7 h-7" />
        </Button>
      </Link>
    </div>
  );
} 