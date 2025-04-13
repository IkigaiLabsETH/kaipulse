'use client';

import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import { MSTYFreedomCalculator } from "@/components/MSTYFreedomCalculator";

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">MSTY Freedom Calculator</h1>
          <p className="text-xl text-yellow-100/80">Calculate your path to financial freedom</p>
        </div>

        <div className="flex justify-center mb-8">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "MSTY Freedom Calculator",
              url: "https://msty.finance",
            }}
          />
        </div>

        <div className="bg-zinc-900 rounded-lg shadow-lg shadow-yellow-500/10 p-6 border border-yellow-500/20">
          <MSTYFreedomCalculator />
        </div>
      </div>
    </main>
  );
} 