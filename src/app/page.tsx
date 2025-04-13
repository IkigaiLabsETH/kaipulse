"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MSTY Freedom Calculator</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Calculate your path to financial freedom</p>
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

        {/* Calculator form will go here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Connect your wallet to start calculating your path to freedom
          </p>
        </div>
      </div>
    </main>
  );
}
