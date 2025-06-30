"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const FinancialOutlookSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Financial Projections</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Projected Growth Model</h3>
            <p className="text-gray-300">
              Based on our market research and financial modeling, we project an initial capitalization requirement of $10M targeting AUM of $10M in BTC in Year 1. The model suggests potential scaling to ~$50M within 3 years, with revenue based on a 2% annual management fee on AUM. Break-even analysis indicates sustainability by Year 3.
            </p>
          </Card>
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Growth Strategy</h3>
            <p className="text-gray-300">
              Clear 24-month execution plan from incorporation and licensing (Months 0-6), through capital raise and BTC deployment (Months 6-12), to scaling up investor outreach and potentially listing or expanding product offerings by Year 2. Secondary raise of $10M planned in Year 2 to accelerate growth.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialOutlookSection; 