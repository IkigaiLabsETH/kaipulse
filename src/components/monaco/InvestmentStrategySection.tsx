"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const InvestmentStrategySection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Proposed Investment Strategy</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Bitcoin Treasury Analysis</h3>
            <p className="text-gray-300">
              Our research suggests deploying up to 90% of capital into Bitcoin acquisition and custody, focusing on long-term appreciation. The proposed strategy includes strategic accumulation tactics through reputable OTC desks or exchanges, using dollar-cost averaging over 3-6 months to mitigate short-term price volatility risk.
            </p>
          </Card>
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Value per Share Growth</h3>
            <p className="text-gray-300">
              Aiming to increase the number of BTC backing each Ikigai share over time through strategic capital moves and careful treasury management. Performance metric is Bitcoin per share growth, achieved by using future profits or new capital to acquire additional BTC without proportionally diluting shares.
            </p>
          </Card>
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Risk Management</h3>
            <p className="text-gray-300">
              Maintaining a fiat reserve buffer (~10% of assets) to fund operations for 18-24 months, avoiding forced BTC sales in downturns. Implementing multi-signature custody solutions and ensuring robust compliance with Monaco&apos;s regulatory framework. No leverage on Bitcoin holdings to avoid margin call risk.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default InvestmentStrategySection; 