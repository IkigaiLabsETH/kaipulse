'use client';

import { MSTYFreedomCalculator } from "@/components/MSTYFreedomCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white font-satoshi">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 font-epilogue">LIVE OFF MSTR OPTIONS</h1>
          <p className="text-xl text-yellow-100/80 font-satoshi max-w-3xl mx-auto">YieldMax™ MSTR Option Income Strategy ETF</p>
        </div>

        <div className="max-w-[1600px] mx-auto bg-zinc-900/50 rounded-xl shadow-2xl shadow-yellow-500/5 p-4 sm:p-6 lg:p-8 border border-yellow-500/20">
          <MSTYFreedomCalculator />
        </div>
      </div>
    </main>
  );
} 