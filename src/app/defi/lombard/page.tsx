'use client';
import React, { useState } from 'react';
import { getLBTCExchangeRate } from '@lombard.finance/sdk';
import { motion } from 'framer-motion';

const CHAIN_ID = 1; // Ethereum testnet for MVP
const ENV = 'testnet';

const lombardInfo = `Turn BTC from a passive store of value into a productive asset. With LBTC, a secure liquid staked token built on Babylon, you can earn native yield and access DeFi.`;

export default function LombardMVPPage() {
  const [btcAmount, setBtcAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [minAmountBtc, setMinAmountBtc] = useState<number | null>(null);
  const [lbtcOutput, setLbtcOutput] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchExchangeRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const { exchangeRate, minAmount } = await getLBTCExchangeRate({
        chainId: CHAIN_ID,
        env: ENV,
      });
      setExchangeRate(exchangeRate);
      const minBtc = minAmount / 1e8;
      setMinAmountBtc(minBtc);
      if (btcAmount) {
        const btc = parseFloat(btcAmount);
        if (btc < minBtc) {
          setError(`Minimum deposit is ${minBtc} BTC.`);
          setLbtcOutput(null);
        } else {
          setLbtcOutput(btc * exchangeRate);
        }
      }
    } catch {
      setError('Failed to fetch exchange rate.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-foreground relative overflow-x-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20 pointer-events-none" />
      <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 relative z-10 pt-16">
        {/* Animated protocol info */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-12 text-center mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-yellow-500/90 text-xs md:text-sm mb-3 font-light font-satoshi">Bitcoin DeFi • Liquid Staking • Babylon Security</p>
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-boska mb-4">Lombard Protocol</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Unlocking Bitcoin&apos;s Productive Power</p>
            <div className="h-px w-20 bg-yellow-500/30"></div>
          </div>
          <p className="font-satoshi text-lg md:text-xl text-white/80 leading-relaxed mb-2 max-w-lg mx-auto">
            {lombardInfo}
          </p>
          <a
            href="https://docs.lombard.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-epilogue text-yellow-400 underline hover:text-yellow-300 transition"
          >
            Learn more in the docs
          </a>
        </motion.div>
        {/* Animated yellow frame with shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-lg"
        >
          {/* Iconic yellow frame */}
          <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-[0_0_40px_10px_rgba(234,179,8,0.15)] z-0" />
          <div className="absolute -inset-0.5 bg-yellow-500 rounded-xl blur-sm opacity-60 z-0" />
          {/* Main card */}
          <div className="relative bg-[#18191c] border-2 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(234,179,8,0.15)] p-8 md:p-10 z-10">
            <h1 className="font-boska text-4xl md:text-5xl text-yellow-500 mb-6 text-center drop-shadow">Lombard BTC Staking</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="mb-6">
                <label className="block mb-2 font-epilogue text-lg text-white/90">BTC Amount</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={btcAmount}
                  onChange={e => setBtcAmount(e.target.value)}
                  className="w-full border border-yellow-500/30 bg-black/40 text-white font-satoshi px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  placeholder="Enter BTC amount"
                />
              </div>
              <button
                onClick={fetchExchangeRate}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg font-epilogue text-lg transition mb-4 shadow-[0_2px_8px_rgba(247,181,0,0.10)]"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Get LBTC Output'}
              </button>
              {error && <div className="text-red-500 font-epilogue mb-2 text-center">{error}</div>}
              {exchangeRate !== null && minAmountBtc !== null && (
                <div className="mb-2 text-sm text-zinc-300 font-satoshi text-center">
                  <div>Exchange Rate: <b className="text-yellow-400 font-epilogue">{exchangeRate}</b></div>
                  <div>Minimum Deposit: <b className="text-yellow-400 font-epilogue">{minAmountBtc} BTC</b></div>
                </div>
              )}
              {lbtcOutput !== null && !error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-6 p-4 bg-black/60 rounded-lg border border-yellow-500/30 text-center"
                >
                  <div className="text-2xl font-bold font-boska text-yellow-400 drop-shadow">You will receive:</div>
                  <div className="text-3xl font-boska text-yellow-500 mt-2">{lbtcOutput} LBTC</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Lombard Berachain Footer */}
      <footer className="w-full bg-black/80 border-t border-yellow-500/20 py-10 mt-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-epilogue text-2xl md:text-3xl text-yellow-500 mb-2">Lombard x Berachain</h3>
          <p className="font-satoshi text-white/80 text-lg mb-4">Explore how Lombard brings native Bitcoin yield and DeFi to the Berachain ecosystem, unlocking new opportunities for BTC holders.</p>
          <a
            href="https://www.lombard.finance/berachain/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-epilogue text-yellow-400 underline hover:text-yellow-300 transition text-lg"
          >
            Learn more about Lombard on Berachain
          </a>
        </div>
      </footer>
    </main>
  );
}
// Styled MVP page for Lombard SDK integration. See https://docs.lombard.finance/developers/lombard-sdk-v2-pre-release 