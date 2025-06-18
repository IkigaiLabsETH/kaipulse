"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CautionaryTale() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 mb-6">
        <h5 className="font-epilogue text-xl text-yellow-400 mb-3">⚠️ A Cautionary Tale</h5>
        <p className="text-white/80 text-lg mb-4">
          James Wynn (@JamesWynnReal) made headlines on Hyperliquid with an incredible trading journey:
        </p>
        <ul className="text-white/80 text-lg mb-4 space-y-2">
          <li>• 70 days to build $87M+ in profit</li>
          <li>• Lost almost all profits in just 5 days</li>
        </ul>
        <p className="text-white/80 text-lg mb-4">
          This serves as a stark reminder of the risks of excessive leverage. Even the most successful traders can face devastating losses when market conditions change rapidly. This is why you need to watch out and not be degen on leverage.
        </p>
        <div className="mt-4">
          <Link href="https://hyperdash.info/trader/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank">
            <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300">
              View Trading History <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 