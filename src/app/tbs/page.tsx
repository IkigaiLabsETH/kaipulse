'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, Variants } from "framer-motion";

interface CompanyHolding {
  name: string;
  symbol: string;
  total_holdings: number;
  total_value_usd: number;
  country: string;
}

interface TreasuryData {
  companies: CompanyHolding[];
  total_holdings: number;
  total_value_usd: number;
  market_cap_dominance: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const StatCard = ({ title, value, variants }: { title: string; value: string; variants?: Variants }) => (
  <motion.div
    className="p-6 sm:p-8 bg-black rounded-lg"
    variants={variants}
  >
    <p className="text-xs sm:text-sm text-[#FFD700]/80 mb-2 sm:mb-3 font-epilogue">{title}</p>
    <p className="text-2xl sm:text-4xl font-boska text-[#FFD700]">{value}</p>
  </motion.div>
);

export default function PublicTreasuryPage() {
  const [btcData, setBtcData] = useState<TreasuryData | null>(null);
  const [ethData, setEthData] = useState<TreasuryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [btcResponse, ethResponse] = await Promise.all([
          fetch('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin'),
          fetch('https://api.coingecko.com/api/v3/companies/public_treasury/ethereum')
        ]);

        if (!btcResponse.ok || !ethResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const btcData = await btcResponse.json();
        const ethData = await ethResponse.json();

        setBtcData(btcData);
        setEthData(ethData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div 
          className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div 
          className="text-[#FFD700] text-xl font-epilogue"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Error: {error}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-24 px-4">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.4em] text-[#FFD700]/90 text-sm mb-4 font-light font-satoshi">CORPORATE TREASURIES • ON-CHAIN DATA • TRANSPARENCY</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-[#FFD700] tracking-tight [text-shadow:_0_1px_20px_rgba(255,215,0,0.3)] font-satoshi">
              The Bitcoin Treasury
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-[#FFD700]/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
              Real-time tracking of Bitcoin and Ethereum holdings by public companies
            </p>
            <div className="h-px w-24 bg-[#FFD700]/30"></div>
          </div>
        </motion.div>
        
        <Tabs defaultValue="bitcoin" className="w-full space-y-12 mb-20">
          <TabsList className="grid w-full grid-cols-2 rounded-none">
            <TabsTrigger
              value="bitcoin"
              className="flex-1 items-center justify-center gap-3 rounded-none bg-[#1c1f26] px-8 py-4 font-boska text-base sm:text-lg font-semibold text-white transition-all duration-300 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <span className="text-xl sm:text-2xl" style={{ color: 'inherit' }}>₿</span>
              <span>Bitcoin Holdings</span>
            </TabsTrigger>
            <TabsTrigger
              value="ethereum"
              className="flex-1 items-center justify-center gap-3 rounded-none bg-[#1c1f26] px-8 py-4 font-boska text-base sm:text-lg font-semibold text-white transition-all duration-300 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <span className="text-xl sm:text-2xl" style={{ color: 'inherit' }}>Ξ</span>
              <span>Ethereum Holdings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bitcoin">
            <Card className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardHeader>
                <CardTitle className="text-3xl font-boska text-[#FFD700]">Bitcoin Holdings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {btcData && (
                  <div className="space-y-8">
                    <motion.div 
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <StatCard
                        title="Total Holdings"
                        value={`${btcData.total_holdings.toLocaleString()} BTC`}
                        variants={itemVariants}
                      />
                      <StatCard
                        title="Market Cap Dominance"
                        value={`${btcData.market_cap_dominance.toFixed(2)}%`}
                        variants={itemVariants}
                      />
                    </motion.div>
                    <motion.div 
                      variants={itemVariants}
                      className="overflow-x-auto"
                      initial="hidden"
                      animate="visible"
                    >
                      <table className="w-full min-w-[500px] sm:min-w-0">
                        <thead>
                          <tr className="border-b border-[#FFD700]/20">
                            <th className="text-left py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Company</th>
                            <th className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Holdings</th>
                            <th className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          {btcData.companies.map((company, index) => (
                            <motion.tr 
                              key={company.symbol} 
                              className="border-b border-[#FFD700]/10 last:border-b-0 hover:bg-[#FFD700]/5 transition-colors"
                              variants={itemVariants}
                              custom={index}
                            >
                              <td className="py-4 sm:py-6 px-4 sm:px-8">
                                <div>
                                  <p className="font-epilogue text-base sm:text-lg text-white">{company.name}</p>
                                  <p className="text-xs sm:text-sm text-[#FFD700]/60 font-satoshi">{company.symbol}</p>
                                </div>
                              </td>
                              <td className="text-right py-4 sm:py-6 px-4 sm:px-8">
                                <span className="font-boska text-[#FFD700] text-base sm:text-lg">{company.total_holdings.toLocaleString()} BTC</span>
                              </td>
                              <td className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm">{company.country}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ethereum">
            <Card className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardHeader>
                <CardTitle className="text-3xl font-boska text-[#FFD700]">Ethereum Holdings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {ethData && (
                  <div className="space-y-8">
                    <motion.div 
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <StatCard
                        title="Total Holdings"
                        value={`${ethData.total_holdings.toLocaleString()} ETH`}
                        variants={itemVariants}
                      />
                      <StatCard
                        title="Market Cap Dominance"
                        value={`${ethData.market_cap_dominance.toFixed(2)}%`}
                        variants={itemVariants}
                      />
                    </motion.div>
                    <motion.div 
                      variants={itemVariants}
                      className="overflow-x-auto"
                      initial="hidden"
                      animate="visible"
                    >
                      <table className="w-full min-w-[500px] sm:min-w-0">
                        <thead>
                          <tr className="border-b border-[#FFD700]/20">
                            <th className="text-left py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Company</th>
                            <th className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Holdings</th>
                            <th className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm uppercase tracking-wider">Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ethData.companies.map((company, index) => (
                            <motion.tr 
                              key={company.symbol} 
                              className="border-b border-[#FFD700]/10 last:border-b-0 hover:bg-[#FFD700]/5 transition-colors"
                              variants={itemVariants}
                              custom={index}
                            >
                              <td className="py-4 sm:py-6 px-4 sm:px-8">
                                <div>
                                  <p className="font-epilogue text-base sm:text-lg text-white">{company.name}</p>
                                  <p className="text-xs sm:text-sm text-[#FFD700]/60 font-satoshi">{company.symbol}</p>
                                </div>
                              </td>
                              <td className="text-right py-4 sm:py-6 px-4 sm:px-8">
                                <span className="font-boska text-[#FFD700] text-base sm:text-lg">{company.total_holdings.toLocaleString()} ETH</span>
                              </td>
                              <td className="text-right py-4 sm:py-6 px-4 sm:px-8 text-[#FFD700]/80 font-epilogue text-xs sm:text-sm">{company.country}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="relative aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1kiD8eLq4uI"
                title="Institutional Bitcoin Adoption"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          <Card className="bg-[#1c1f26] rounded-none border-2 border-[#FFD700] shadow-[5px_5px_0px_0px_rgba(255,215,0,1)]">
            <CardHeader>
              <CardTitle className="text-3xl font-boska text-[#FFD700] text-center">
                2026 Institutional Bitcoin Adoption Projection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <StatCard title="🔵 Nation-States" value="$161.7B" variants={itemVariants} />
                  <StatCard title="🟡 Wealth Management" value="$120.0B" variants={itemVariants} />
                  <StatCard title="🔴 Public Companies" value="$117.8B" variants={itemVariants} />
                </div>
                <div className="space-y-6">
                  <StatCard title="🟢 U.S. States" value="$19.6B" variants={itemVariants} />
                  <StatCard title="🟣 Sovereign Wealth Funds" value="$7.8B" variants={itemVariants} />
                  <StatCard title="🧠 Total Forecast" value="$426.9B" variants={itemVariants} />
                </div>
              </div>

              <motion.div
                className="mt-12 p-6 bg-black rounded-lg"
                variants={itemVariants}
              >
                <h3 className="text-[#FFD700] text-xl font-boska mb-4">🧩 Key Insight</h3>
                <p className="text-white/80 font-epilogue">
                  With Bitcoin already trading above $100K, these projections become even more compelling. The institutional demand outlined here could create a significant supply shock, as the available Bitcoin supply becomes increasingly scarce. This structural scarcity, combined with institutional FOMO, could drive prices significantly higher than current levels.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
