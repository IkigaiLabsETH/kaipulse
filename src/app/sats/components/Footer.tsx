'use client';

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-black/50 backdrop-blur-sm border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-satoshi text-xl text-zinc-300 leading-relaxed">
            Support creators instantly with Bitcoin Lightning —
            <span className="text-yellow-500"> no middlemen, no delays</span>.
            Photographers own their earnings, audience, and artistic destiny.
            <span className="text-yellow-500"> No fake likes. No shadowbans</span>.
            Just genuine connections.
          </p>
          
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full">
            <Image
              src="/bitcoin/bitcoin-circle-filled.svg"
              alt="Bitcoin"
              width={16}
              height={16}
              className="opacity-75"
            />
            <span className="font-satoshi text-sm text-zinc-400">
              Powered by Bitcoin Lightning Network
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 