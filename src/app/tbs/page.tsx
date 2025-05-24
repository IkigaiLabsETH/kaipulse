'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

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
          <h1 className="text-6xl font-boska mb-6 text-[#FFD700]">
            Public Companies Crypto Holdings
          </h1>
          <p className="text-gray-400 text-lg font-epilogue">
            Real-time tracking of Bitcoin and Ethereum holdings by public companies
          </p>
        </motion.div>
        
        <Tabs defaultValue="bitcoin" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList
              className="grid w-full grid-cols-2 bg-black p-1 sm:p-2 rounded-2xl mb-8 sm:mb-12 shadow-[0_0_40px_0_rgba(255,215,0,0.10)]"
              style={{ boxShadow: '0 0 40px 0 rgba(255,215,0,0.10)' }}
            >
              <TabsTrigger
                value="bitcoin"
                className="
                  font-boska text-base sm:text-lg py-3 sm:py-4 rounded-xl transition-all duration-300
                  data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:font-bold
                  data-[state=active]:shadow-[0_0_24px_0_rgba(255,215,0,0.7)]
                  bg-transparent text-white font-normal
                  hover:bg-[#FFD700]/10 hover:text-[#FFD700]
                  flex items-center justify-center gap-2
                  border-none outline-none
                "
                style={{ boxShadow: undefined }}
              >
                <span className="text-xl sm:text-2xl" style={{ color: 'inherit' }}>₿</span>
                <span>Bitcoin Holdings</span>
              </TabsTrigger>
              <TabsTrigger
                value="ethereum"
                className="
                  font-boska text-base sm:text-lg py-3 sm:py-4 rounded-xl transition-all duration-300
                  data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:font-bold
                  data-[state=active]:shadow-[0_0_24px_0_rgba(255,215,0,0.7)]
                  bg-transparent text-white font-normal
                  hover:bg-[#FFD700]/10 hover:text-[#FFD700]
                  flex items-center justify-center gap-2
                  border-none outline-none
                "
                style={{ boxShadow: undefined }}
              >
                <span className="text-xl sm:text-2xl" style={{ color: 'inherit' }}>Ξ</span>
                <span>Ethereum Holdings</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="bitcoin">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="bg-black border border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <CardHeader>
                  <CardTitle className="text-3xl font-boska text-[#FFD700]">Bitcoin Holdings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  {btcData && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mb-8 sm:mb-12">
                        <motion.div 
                          variants={itemVariants}
                          className="p-6 sm:p-8 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300"
                        >
                          <p className="text-xs sm:text-sm text-[#FFD700]/80 mb-2 sm:mb-3 font-epilogue">Total Holdings</p>
                          <p className="text-2xl sm:text-4xl font-boska text-[#FFD700]">{btcData.total_holdings.toLocaleString()} BTC</p>
                        </motion.div>
                        <motion.div 
                          variants={itemVariants}
                          className="p-6 sm:p-8 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300"
                        >
                          <p className="text-xs sm:text-sm text-[#FFD700]/80 mb-2 sm:mb-3 font-epilogue">Market Cap Dominance</p>
                          <p className="text-2xl sm:text-4xl font-boska text-[#FFD700]">{btcData.market_cap_dominance.toFixed(2)}%</p>
                        </motion.div>
                      </div>
                      <motion.div 
                        variants={itemVariants}
                        className="overflow-x-auto rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.15)]"
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
                                className="border-b border-[#FFD700]/10 hover:bg-[#FFD700]/5 transition-colors"
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
            </motion.div>
          </TabsContent>

          <TabsContent value="ethereum">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="bg-black border border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <CardHeader>
                  <CardTitle className="text-3xl font-boska text-[#FFD700]">Ethereum Holdings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  {ethData && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mb-8 sm:mb-12">
                        <motion.div 
                          variants={itemVariants}
                          className="p-6 sm:p-8 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300"
                        >
                          <p className="text-xs sm:text-sm text-[#FFD700]/80 mb-2 sm:mb-3 font-epilogue">Total Holdings</p>
                          <p className="text-2xl sm:text-4xl font-boska text-[#FFD700]">{ethData.total_holdings.toLocaleString()} ETH</p>
                        </motion.div>
                        <motion.div 
                          variants={itemVariants}
                          className="p-6 sm:p-8 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300"
                        >
                          <p className="text-xs sm:text-sm text-[#FFD700]/80 mb-2 sm:mb-3 font-epilogue">Market Cap Dominance</p>
                          <p className="text-2xl sm:text-4xl font-boska text-[#FFD700]">{ethData.market_cap_dominance.toFixed(2)}%</p>
                        </motion.div>
                      </div>
                      <motion.div 
                        variants={itemVariants}
                        className="overflow-x-auto rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.15)]"
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
                                className="border-b border-[#FFD700]/10 hover:bg-[#FFD700]/5 transition-colors"
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
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="container mx-auto py-24 px-4">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-boska mb-6 text-[#FFD700]">
            2026 Institutional Bitcoin Adoption Projection
          </h2>
          <p className="text-gray-400 text-lg font-epilogue mb-12">
            A bold projection for institutional Bitcoin adoption by the end of 2026, estimating $426.9 billion in inflows
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Card className="bg-black border border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🔵 Nation-States</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$161.7B</p>
                    <p className="text-white/80 font-epilogue">1,617,000 BTC (7.70%)</p>
                  </div>
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🟡 Wealth Management</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$120.0B</p>
                    <p className="text-white/80 font-epilogue">1,200,000 BTC (5.71%)</p>
                  </div>
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🔴 Public Companies</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$117.8B</p>
                    <p className="text-white/80 font-epilogue">1,178,000 BTC (5.61%)</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🟢 U.S. States</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$19.6B</p>
                    <p className="text-white/80 font-epilogue">196,000 BTC (0.93%)</p>
                  </div>
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🟣 Sovereign Wealth Funds</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$7.8B</p>
                    <p className="text-white/80 font-epilogue">78,000 BTC (0.37%)</p>
                  </div>
                  <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                    <h3 className="text-[#FFD700] text-xl font-boska mb-4">🧠 Total Forecast</h3>
                    <p className="text-[#FFD700] text-2xl font-boska mb-2">$426.9B</p>
                    <p className="text-white/80 font-epilogue">4,269,000 BTC (20.32%)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                <h3 className="text-[#FFD700] text-xl font-boska mb-4">🧩 Key Insight</h3>
                <p className="text-white/80 font-epilogue">
                  With Bitcoin already trading above $100K, these projections become even more compelling. The institutional demand outlined here could create a significant supply shock, as the available Bitcoin supply becomes increasingly scarce. This structural scarcity, combined with institutional FOMO, could drive prices significantly higher than current levels.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
