"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Building2, Bitcoin, Users } from "lucide-react";

const MonacoPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is this research about?",
      answer: "This whitepaper explores the potential establishment of a Bitcoin-focused investment company in Monaco, structured as a Société Anonyme Monégasque (SAM). Our research examines the feasibility of creating a regulated Bitcoin-centric treasury and investment vehicle, following successful models like Japan&apos;s Metaplanet and Sweden&apos;s Bitcoin Treasury Capital AB. The proposed business plan outlines a structure that would offer investors secure, compliant Bitcoin exposure through corporate ownership rather than direct coin custody, with an initial target of $10 million in equity capital."
    },
    {
      question: "Why are we considering Monaco as the jurisdiction?",
      answer: "Our research indicates that Monaco provides an ideal jurisdiction for this venture due to its new cryptocurrency legal framework (Law No. 1.528 of July 7, 2022) that authorizes and regulates digital asset businesses. The Principality&apos;s attractive tax regime and high concentration of wealthy residents create a compelling market opportunity. This analysis explores how we could leverage Monaco&apos;s reputation for financial excellence and security to establish a premier Bitcoin investment company serving both local and international investors under a well-regulated, prestigious umbrella."
    },
    {
      question: "What is the investment strategy?",
      answer: "Ikigai will deploy the majority of its capital (up to 90% of raise) into Bitcoin acquisition and custody. The company strategically acquires and manages Bitcoin as its core corporate asset, with a long-term and disciplined approach. We maintain a &ldquo;Bitcoin per share&rdquo; growth strategy, aiming to increase the number of BTC backing each Ikigai share over time. Initial purchases are executed via reputable OTC desks or exchanges using dollar-cost averaging over 3-6 months to mitigate short-term price volatility risk. We maintain a fiat reserve buffer (~10% of assets) to fund operations for 18-24 months, avoiding forced BTC sales in downturns."
    },
    {
      question: "What are the key features of the business model?",
      answer: "Key features include: 1) Fully compliant with Monaco&apos;s digital assets laws and AML regulations, 2) Initial capitalization of $10M targeting AUM of $10M in BTC in Year 1, 3) Pure Bitcoin focus with no other assets diluting this strategy, 4) Professional management and custody solutions, 5) Clear 24-month execution plan from incorporation to scaling, 6) Strong governance structure with Board of Directors and top-tier auditors, and 7) Multi-signature custody solutions with institutional providers for maximum security."
    },
    {
      question: "What is the long-term vision?",
      answer: "Ikigai plans to become a leading Bitcoin treasury institution in Europe and a cornerstone of Monaco&apos;s crypto finance ecosystem. Our vision includes potential expansion into other digital assets or services in the future, while maintaining our core focus on Bitcoin as a treasury reserve asset. We aim to scale to ~$50M AUM within 3 years and potentially list on a public exchange in the future. In 5+ years, we may evolve into a broader asset manager, offering additional products like Bitcoin income funds or managed accounts for corporations."
    },
    {
      question: "How does Ikigai manage risk?",
      answer: "We maintain a comprehensive risk management framework: 1) Fiat reserve buffer (~10% of assets) to fund operations for 18-24 months, 2) No leverage on Bitcoin holdings to avoid margin call risk, 3) Multi-signature custody solutions with institutional providers, 4) Strict compliance with Monaco&apos;s regulatory framework, 5) Regular security audits and monitoring, 6) Contingency plans for market downturns or regulatory changes, 7) Insurance coverage for digital assets, and 8) Business continuity plans for disaster recovery."
    },
    {
      question: "What is the financial outlook?",
      answer: "Our financial model projects: 1) Initial capitalization of $10M in Year 1, 2) Revenue from 2% annual management fee on AUM, 3) Projected break-even by Year 3 as AUM grows, 4) Conservative expense management ensuring long operating runway, 5) Secondary raise of $10M planned in Year 2, and 6) Scaling to ~$50M AUM within 3 years through both capital raises and Bitcoin appreciation. We maintain a lean cost structure that scales with AUM, with expenses projected at $500k in Year 1, $600k in Year 2, and $750k in Year 3."
    },
    {
      question: "How does Ikigai handle custody and security?",
      answer: "We implement robust security measures: 1) Institutional custody solutions with insured providers, 2) Multi-signature cold storage with geographically distributed keys, 3) Strict protocols for BTC movements requiring board approval, 4) Regular security audits and penetration testing, 5) Insurance coverage for digital assets, and 6) Business continuity plans for disaster recovery. Our custody approach prioritizes security over convenience, with no single point of failure and multiple layers of protection."
    },
    {
      question: "What is the approach to compliance and regulation?",
      answer: "We maintain strict compliance with Monaco&apos;s regulatory framework: 1) Full licensing under Law No. 1.528 for digital asset services, 2) Comprehensive AML/KYC procedures for all investors, 3) Regular reporting to Monaco&apos;s financial authorities, 4) Internal compliance monitoring and training, 5) Engagement with regulators on policy developments, and 6) Proactive adaptation to new regulatory requirements. Our compliance officer has extensive experience with Monaco&apos;s financial regulations and ensures we exceed all regulatory expectations."
    },
    {
      question: "How does Ikigai plan to grow and scale?",
      answer: "Our growth strategy includes: 1) Initial $10M raise in Year 1, 2) Secondary $10M raise in Year 2, 3) Focus on Monaco-based investors initially, 4) Expansion to international investors in later phases, 5) Potential public listing in Year 3-5, 6) Geographic expansion to other key locations, and 7) Development of additional products/services while maintaining Bitcoin as core focus. We maintain a clear 24-month execution plan with specific milestones, from incorporation and licensing (Months 0-6), through capital raise and BTC deployment (Months 6-12), to scaling up investor outreach."
    },
    {
      question: "What is the governance structure?",
      answer: "Ikigai is led by a seasoned international team with backgrounds in crypto trading, institutional finance, and law. Our governance structure includes: 1) Board of Directors with independent oversight, 2) Monaco-based advisors with local expertise, 3) Top-tier auditors for financial verification, 4) Clear separation of duties and internal controls, 5) Regular board meetings and shareholder communications, and 6) Strong compliance and risk management frameworks. The team includes experienced professionals in finance, compliance, and technology, ensuring robust operations from day one."
    },
    {
      question: "What are the contingency plans?",
      answer: "We have comprehensive contingency plans for various scenarios: 1) Bitcoin market crash: Maintain sufficient cash reserves and avoid forced sales, 2) Regulatory changes: Proactive engagement with regulators and potential multi-jurisdictional licensing, 3) Operational crisis: Incident response protocols and emergency reserves, 4) Economic recession: Focus on long-term value and maintain operational stability, 5) Key personnel changes: Cross-training and succession planning, and 6) Custody security: Multi-signature arrangements and insurance coverage. Our plans ensure business continuity in all circumstances."
    },
    {
      question: "What is the approach to investor relations?",
      answer: "We maintain transparent and proactive investor relations: 1) Regular quarterly updates on performance and strategy, 2) Annual general meetings with detailed reporting, 3) Dedicated investor relations manager by Year 2, 4) Secure online portal for investor access to holdings and reports, 5) Responsive communication channels for investor inquiries, and 6) Educational content to help investors understand our strategy. We prioritize building long-term relationships with our investors and maintaining their trust through clear communication and consistent performance."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Section */}
      <div className="container mx-auto px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Wg7bxdav_k4"
            title="Monaco Bitcoin Treasury"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* Why Monaco Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Why Monaco?</h2>
          <div className="space-y-6">
            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Beyond Tax Benefits: A Strategic Vision</h3>
              <p className="text-gray-300">
                As we contemplate the next phase of our journey, Monaco emerges as more than just a tax-friendly jurisdiction. It represents a unique confluence of opportunities that align perfectly with our vision for both personal growth and business innovation. The Principality offers a dynamic environment where entrepreneurship, art, and technology converge to create unparalleled possibilities.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Entrepreneurial Ecosystem</h3>
              <p className="text-gray-300">
                Monaco&apos;s reputation extends far beyond its status as a wealthy enclave. The Principality has evolved into a thriving hub for entrepreneurial activity, supported by initiatives like MonacoTech&apos;s startup program. The country hosts prestigious events such as the Monaco Private Label, attracting global investors and innovators. This ecosystem, combined with political stability and strategic location, creates an ideal environment for innovative ventures like our Bitcoin treasury initiative.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Cultural Excellence & Art Scene</h3>
              <p className="text-gray-300">
                Monaco&apos;s rich cultural landscape, anchored by institutions like the Nouveau Musée National and the Oceanographic Museum, offers a sophisticated environment that blends tradition with innovation. The Principality&apos;s vibrant art scene, featuring events like Art Monte-Carlo and Monaco Art Week, creates a unique atmosphere where business and culture intersect. This cultural richness adds an invaluable dimension to our business venture, positioning us within a community that values both heritage and forward-thinking initiatives.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Innovation in Finance</h3>
              <p className="text-gray-300">
                Monaco&apos;s progressive stance on cryptocurrency and blockchain technology aligns perfectly with our vision. The Principality&apos;s recent regulatory framework (Law No. 1.528) demonstrates its commitment to embracing financial innovation while maintaining robust compliance standards. This forward-thinking approach to digital assets creates an ideal foundation for establishing a Bitcoin-focused investment vehicle.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Quality of Life & Security</h3>
              <p className="text-gray-300">
                The Principality offers an unmatched quality of life, combining world-class healthcare, education, and infrastructure with exceptional security. Monaco&apos;s Mediterranean setting, pristine environment, and vibrant social scene through establishments like the Monte-Carlo Société des Bains de Mer create an attractive environment for both business operations and personal life. This stability and high standard of living are crucial factors in attracting and retaining top talent for our venture.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Strategic Network Hub</h3>
              <p className="text-gray-300">
                Monaco&apos;s unique position as a nexus of international business, finance, and culture provides invaluable networking opportunities. The presence of sophisticated investors, forward-thinking entrepreneurs, and a community that understands both traditional finance and digital assets makes it an ideal location for our Bitcoin treasury initiative. This environment facilitates meaningful connections and partnerships that can drive our venture&apos;s success.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-16">
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

      {/* Investment Strategy */}
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

      {/* Financial Outlook */}
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

      {/* Implementation Roadmap */}
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

      {/* Bitcoin Standard Playbook */}
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

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Research & Analysis FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="cursor-pointer border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <span className="text-2xl text-yellow-500">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-300"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cultural Fit Outro */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Why Monaco is Our Perfect Cultural Fit</h2>
          <div className="space-y-6">
            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">European Heritage & Refinement</h3>
              <p className="text-gray-300">
                While Dubai offers a modern, dynamic environment, Monaco&apos;s deep European heritage and refined cultural landscape align perfectly with our vision. The Principality&apos;s blend of French sophistication and Mediterranean charm creates an environment where tradition meets innovation—a perfect backdrop for our Bitcoin treasury initiative. Unlike Dubai&apos;s rapid development, Monaco&apos;s established cultural institutions and long-standing financial traditions provide a more stable foundation for our long-term vision.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Intimate Business Environment</h3>
              <p className="text-gray-300">
                Monaco&apos;s compact size (39,000 residents) fosters a tight-knit business community where relationships matter. This intimate setting contrasts with Dubai&apos;s vast metropolis (3+ million people), allowing us to build deeper connections with key stakeholders. The Principality&apos;s concentrated network of sophisticated investors and financial professionals creates an ideal ecosystem for our Bitcoin treasury initiative, where trust and personal relationships are paramount.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Artistic & Cultural Excellence</h3>
              <p className="text-gray-300">
                Monaco&apos;s rich cultural scene, from the Nouveau Musée National to the Oceanographic Museum, reflects our commitment to excellence and innovation. The Principality&apos;s vibrant art scene and cultural events create an environment where business and creativity intersect—a perfect match for our forward-thinking approach to Bitcoin adoption. This cultural richness adds an invaluable dimension to our business venture, positioning us within a community that values both heritage and innovation.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Quality of Life & Work-Life Balance</h3>
              <p className="text-gray-300">
                Monaco&apos;s Mediterranean climate and compact layout offer an unmatched quality of life, with everything within walking distance. This contrasts with Dubai&apos;s sprawling landscape and extreme summer temperatures. The Principality&apos;s emphasis on work-life balance, combined with its world-class healthcare and education systems, creates an ideal environment for attracting and retaining top talent—crucial for our long-term success.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Strategic European Positioning</h3>
              <p className="text-gray-300">
                While Dubai offers global connectivity, Monaco&apos;s location in the heart of Europe provides strategic advantages for our Bitcoin treasury initiative. The Principality&apos;s proximity to major European financial centers and its integration with the European Union&apos;s regulatory framework creates a more natural fit for our European-focused growth strategy. This positioning allows us to serve both local and international investors while maintaining strong ties to European markets.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-bold mb-4">Long-Term Stability & Legacy</h3>
              <p className="text-gray-300">
                Monaco&apos;s centuries-old tradition of financial excellence and stability aligns with our vision of building a lasting Bitcoin treasury institution. Unlike Dubai&apos;s relatively recent emergence as a financial center, Monaco&apos;s established reputation for wealth preservation and financial innovation provides a more solid foundation for our long-term goals. The Principality&apos;s commitment to maintaining its status as a premier financial center ensures that our business will benefit from a stable, supportive environment for generations to come.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonacoPage; 