"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const BitcoinStandardPlaybookSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">The Bitcoin Standard Playbook</h2>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">The Four-Pillar Treasury Approach</h3>
            <p className="text-gray-300">
              Our research has identified a comprehensive four-pillar approach to running a company on a Bitcoin standard. This framework solves the core operational challenges of protecting coins, moving value instantly, unlocking fiat liquidity, and satisfying auditors—all while maintaining sovereignty. We&apos;ve identified key specialist providers that will enable this stack: Theya for custody, Sovreign for governance, River for payments, and Ledn for liquidity.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Secure Custody: Theya and Sovreign</h3>
            <p className="text-gray-300">
              We will implement Theya&apos;s enterprise vault solution that enables CFOs to create 2-of-3 multisig setups with SaaS-grade usability. This removes the last excuse for storing company bitcoin on exchanges while maintaining security. Paired with Sovreign&apos;s consultancy services, we&apos;ll create bespoke treasury playbooks and governance workshops to ensure our board understands multisig quorum rules, signature rotation, and proper accounting under IFRS.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Payment Rails: River Lightning Services</h3>
            <p className="text-gray-300">
              Our operational infrastructure will utilize River&apos;s Lightning Network services, providing flat-fee, unlimited-volume payments without requiring node operations. River&apos;s transparent financial disclosures ($60.9M corporate treasury at year-end 2024) enable us to treat them as a trusted banking partner. Our working capital strategy will maintain minimal hot wallet balances while enabling instant Lightning payments for operational needs.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Liquidity Without Sales: Ledn</h3>
            <p className="text-gray-300">
              To maintain our Bitcoin treasury while meeting fiat obligations, we&apos;ll leverage Ledn&apos;s Bitcoin-backed loans which provide USD liquidity without triggering taxable events. With 50% LTV and approximately 10% APR, we can access operational cash flow for payroll and expenses while preserving our Bitcoin position. Ledn&apos;s bi-annual proof-of-reserves and segregated retail loan structure provide necessary transparency and security.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Implementation Stack</h3>
            <p className="text-gray-300">
              Our strategy segments treasury management into distinct layers: Cold Treasury (≥80% via Theya Vaults), Operating Wallet (River Lightning for daily operations), Short-Term Liquidity (10% via Ledn), and Advisory & Governance (Sovreign). Each layer has defined policy guard-rails, including quarterly key-rotation, daily sweeps to cold storage, auto-liquidation alerts at specific LTV thresholds, and annual governance re-certification.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Risk Mitigation Framework</h3>
            <p className="text-gray-300">
              Our comprehensive risk management approach addresses custody concentration (offline nuclear backup), liquidity shocks (automatic top-ups at 55% LTV), regulatory flux (geofencing API layer), and vendor failure (quarterly provider risk reviews). These protocols ensure business continuity even in challenging market conditions or operational disruptions.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl font-bold mb-4">Playbook Rollout Timeline</h3>
            <p className="text-gray-300">
              Our implementation timeline includes: Q2 2025 (Theya enterprise vault pilot with 50 BTC migration), Q3 2025 (River Lightning API integration for billing and supplier payouts), Q4 2025 (first Ledn loan for payroll with IFRS compliance), and 2026 (voluntary proof-of-reserves publication). Success metrics include zero custodial exchange balances, 90% of invoices settled under 5 seconds, less than 1% treasury sold for fiat, and achieving an unqualified external audit opinion.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default BitcoinStandardPlaybookSection; 