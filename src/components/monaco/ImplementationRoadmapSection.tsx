"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ImplementationRoadmapSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Implementation Roadmap</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Phase 1: Establishment (Months 0-5)</h3>
            <p className="text-gray-300">
              Our research outlines a clear path to establishing operations in Monaco. Initial steps include incorporating as a Société Anonyme Monégasque (SAM), securing necessary licenses under Law No. 1.528, and building our core team. We will engage with local regulators, establish banking relationships, and prepare our operational infrastructure for Bitcoin custody and management.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Phase 2: Capital Formation (Months 6-8)</h3>
            <p className="text-gray-300">
              Following regulatory approval, we will execute our initial capital raise targeting $10M from qualified investors. This phase includes implementing our Bitcoin acquisition strategy, establishing secure custody solutions, and beginning strategic BTC accumulation. Our research indicates a methodical approach to building our Bitcoin treasury position while maintaining necessary operational reserves.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Phase 3: Operational Excellence (Months 9-12)</h3>
            <p className="text-gray-300">
              This phase focuses on stabilizing operations, implementing robust reporting systems, and conducting our first security audits. We will establish relationships with Monaco&apos;s financial community, begin regular investor communications, and potentially explore yield strategies for our treasury. The goal is to demonstrate professional management and governance while building trust with stakeholders.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Phase 4: Growth & Expansion (Year 2)</h3>
            <p className="text-gray-300">
              Our research projects scaling to approximately $50M in assets under management within three years. Year 2 initiatives include a second capital raise, expanding our team with key hires in risk management and investor relations, and potentially exploring additional services or products. We will maintain our core focus on Bitcoin while building towards our vision of becoming a leading digital asset institution in Europe.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Risk Management & Compliance</h3>
            <p className="text-gray-300">
              Our research details comprehensive risk management protocols, including maintaining significant cash reserves, implementing multi-signature custody solutions, and ensuring strict compliance with Monaco&apos;s regulatory framework. We will adhere to all AML/KYC requirements under Law No. 1.528 and maintain robust security measures to protect our Bitcoin treasury.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Long-Term Vision</h3>
            <p className="text-gray-300">
              Beyond initial operations, our research outlines potential paths for evolution, including possible public listing, geographic expansion, and development of additional digital asset services. We aim to become a cornerstone of Monaco&apos;s crypto finance ecosystem while maintaining our core mission of providing secure, regulated Bitcoin exposure through professional treasury management.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ImplementationRoadmapSection; 