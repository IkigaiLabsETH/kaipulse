"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Bitcoin, Users } from "lucide-react";

const KeyFeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-4">
              <Building2 className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-bold">Proposed Monaco Structure</h3>
            </div>
            <p className="text-gray-300">
              Our analysis of Monaco&apos;s 2022 crypto asset framework (Law No. 1.528) reveals significant opportunities for a regulated Bitcoin treasury company. The Principality&apos;s attractive tax regime and high concentration of wealthy residents create a strong potential market for this venture.
            </p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-4">
              <Bitcoin className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-bold">Investment Strategy Research</h3>
            </div>
            <p className="text-gray-300">
              Our proposed strategy involves strategic Bitcoin acquisition and management as the core corporate asset, with a disciplined approach to growing Bitcoin per share. Initial research suggests a target capitalization of $10M with potential AUM of $10M in BTC in Year 1, scaling to ~$50M within 3 years.
            </p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-bold">Governance Framework</h3>
            </div>
            <p className="text-gray-300">
              The proposed governance structure would require a seasoned international team with backgrounds in crypto trading, institutional finance, and law. Our research outlines the necessary compliance, risk management, and custody solutions, including a Board of Directors structure and top-tier auditor.
            </p>
          </Card>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection; 