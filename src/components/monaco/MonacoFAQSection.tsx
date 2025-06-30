"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const MonacoFAQSection = () => {
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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Research & Analysis FAQ</h2>
      <div className="max-w-4xl mx-auto space-y-4">
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
  );
};

export default MonacoFAQSection; 