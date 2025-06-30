"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Home, Building2, Euro, TrendingUp, Target } from "lucide-react";

const FrenchRentalStrategy = () => {

  const strategySections = [
    {
      title: "Market Opportunity Analysis",
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
      content: "The Aquitaine region offers strong potential for holiday rentals. Market data shows coastal Arcachon averaging 52% occupancy at €105/day, while Bayonne achieves ~70% at €81/day. Even Bordeaux maintains 77% year-round occupancy. Your week-long rental strategy can capitalize on wine tourism in fall, city visitors in winter, and peak summer demand."
    },
    {
      title: "Tax Optimization Benefits",
      icon: <Euro className="w-6 h-6 text-yellow-500" />,
      content: "Operating through an SCI with corporate tax status enables significant deductions: renovations, furnishing, marketing, management fees, and property depreciation. This can be more beneficial than the 30% flat rate on personal rental income. VAT reclaim on large renovation expenses may also apply for classified tourist accommodation."
    },
    {
      title: "Cash Flow Projections",
      icon: <Building2 className="w-6 h-6 text-yellow-500" />,
      content: "A well-managed 3-4 bedroom house in Aquitaine can command €1,000–€2,000 per week in peak season. With ~50% annual occupancy, this translates to €25,000–€40,000 yearly revenue. Adding two developed gîte cottages could contribute another €20,000–€30,000 annually, creating substantial cash flow for Monaco residency support."
    }
  ];

  const implementationSteps = [
    {
      phase: "Phase 1: SCI Establishment",
      timeline: "Q1 2025",
      description: "Form SCI, transfer property, and establish legal structure. Engage notary for statutes drafting, property valuation, and transfer documentation. Budget €15,000 for setup and transfer costs."
    },
    {
      phase: "Phase 2: Holiday Rental Launch", 
      timeline: "Mid-2025",
      description: "Transform main residence into fully operational holiday rental. Complete furnishing upgrades, local registration, insurance setup, and platform listings. Target first bookings and guest reviews."
    },
    {
      phase: "Phase 3: Plot Development",
      timeline: "2025-2027", 
      description: "Develop attached building plots into rental cottages. Secure permits, manage construction, and launch additional rental units. Budget €250,000 for two cottage development."
    },
    {
      phase: "Phase 4: Monaco Transition",
      timeline: "2028",
      description: "Complete Monaco residency application with proven SCI income streams. Secure Monaco apartment lease and establish new tax residency while maintaining French rental operations."
    }
  ];

  const financialProjection = {
    grossRevenue: "€70,000/year",
    operatingExpenses: "€20,000/year", 
    corporateTax: "€10,500/year",
    netCashFlow: "€39,500/year",
    monacoContribution: "50-70% of Monaco living costs"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">
          French Rental Business Strategy for Monaco Residency
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
          A comprehensive feasibility analysis for transforming your debt-free Nouvelle-Aquitaine property 
          into a profitable SCI-managed holiday rental business, funding your Monaco residency goals by 2028.
        </p>
      </motion.div>

      {/* Strategic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strategySections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-full">
              <div className="flex items-center gap-4 mb-4">
                {section.icon}
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <p className="text-gray-300">{section.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Why This Strategy Makes Sense */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Why This Strategy Makes Sense
        </h3>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Home className="w-6 h-6 text-yellow-500" />
              Debt-Free Property Advantage
            </h4>
            <p className="text-gray-300">
              Starting with a mortgage-free home means all rental income flows directly to operations and profit, 
              not debt service. This accelerates reaching positive cash flow and simplifies the SCI transfer process 
              without bank permissions or prepayment penalties. The equity provides potential borrowing capacity 
              for plot development if needed.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-yellow-500" />
              Monaco Residency Synergy
            </h4>
            <p className="text-gray-300">
                             As Belgian passport holders, establishing Monaco residency is legally straightforward. The SCI income 
               serves as proof of financial means for residency applications, while Monaco&apos;s zero personal income tax 
               means the rental profits can largely accrue without additional taxation once you&apos;re residents.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-yellow-500" />
              Value Creation Through Development
            </h4>
            <p className="text-gray-300">
              Developing the attached building plots transforms underutilized land into income-generating assets. 
                             Building gîte cottages creates multiple revenue streams, diversifies risk, and significantly increases 
               the overall property value while capturing the developer&apos;s profit margin.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Implementation Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Implementation Roadmap
        </h3>
        <div className="space-y-6">
          {implementationSteps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                  {step.timeline}
                </div>
                <h4 className="text-xl font-bold">{step.phase}</h4>
              </div>
              <p className="text-gray-300">{step.description}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Financial Projections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Financial Projections (Fully Operational)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-2">{financialProjection.grossRevenue}</div>
            <p className="text-gray-300">Total Gross Revenue</p>
            <p className="text-sm text-gray-400 mt-2">Main house + 2 cottages</p>
          </Card>
          
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-2">{financialProjection.operatingExpenses}</div>
            <p className="text-gray-300">Operating Expenses</p>
            <p className="text-sm text-gray-400 mt-2">Maintenance, utilities, management</p>
          </Card>
          
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-2">{financialProjection.netCashFlow}</div>
            <p className="text-gray-300">Net Cash Flow</p>
            <p className="text-sm text-gray-400 mt-2">After tax available for Monaco</p>
          </Card>
        </div>
      </motion.div>

      {/* SCI Structure Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Why Use a Société Civile Immobilière (SCI)
        </h3>
        <div className="space-y-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4">Professional Structure & Tax Efficiency</h4>
            <p className="text-gray-300">
              The SCI formalizes your rental business with corporate tax benefits, enabling deductions for expenses 
              and depreciation. At 25% corporate tax rate, this often results in lower effective taxation than 
              personal rental income rates, especially for non-residents.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4">Estate Planning & Succession</h4>
            <p className="text-gray-300">
              French succession law can be restrictive, but an SCI provides flexibility for inheritance planning. 
              You can gradually gift shares to children using tax allowances (€100k per parent per child every 15 years), 
              reducing taxable estate and ensuring business continuity.
            </p>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4">Multi-Property Management</h4>
            <p className="text-gray-300">
              The SCI can hold multiple properties under one umbrella, simplifying management of your main house 
              and new cottage developments. This structure supports future expansion and can accommodate investors 
              or family members through share issuance.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Key Considerations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Critical Considerations & Risk Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Regulatory Compliance</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Local tourism registration requirements</li>
              <li>• Building permits for plot development</li>
              <li>• Zoning compliance and PLU restrictions</li>
              <li>• Tourist tax collection obligations</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Financial Planning</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• €500k Monaco bank deposit requirement</li>
              <li>• Construction financing for cottage development</li>
              <li>• Property transfer costs (2-5% of value)</li>
              <li>• Ongoing SCI administrative expenses</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Operational Risks</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Seasonal occupancy fluctuations</li>
              <li>• Competition from other holiday rentals</li>
              <li>• Remote management complexity</li>
              <li>• Higher maintenance from guest turnover</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Tax Optimization</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Primary residence exemption timing</li>
              <li>• Corporate vs. transparent taxation choice</li>
              <li>• Monaco-France tax treaty implications</li>
              <li>• Dividend withholding considerations</li>
            </ul>
          </Card>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
          Immediate Next Steps
        </h3>
        <div className="space-y-4">
          {[
            "Engage French notary and cross-border tax advisor for SCI setup guidance",
            "Conduct detailed market research on Aquitaine holiday rental comparables", 
            "Contact architect for building plot development feasibility and costs",
            "Explore financing options for construction phase if needed",
            "Begin Monaco residency preparation and bank relationship development",
            "Create detailed timeline with milestones for 2025-2028 execution"
          ].map((step, index) => (
            <Card 
              key={index}
              className="p-4 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Card className="p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <h3 className="text-2xl font-bold mb-6 text-yellow-500">Target Success Metrics by 2028</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-yellow-500">€70k</div>
              <p className="text-gray-300">Annual Revenue</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">3</div>
              <p className="text-gray-300">Rental Units</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">60%+</div>
              <p className="text-gray-300">Monaco Costs Covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">✓</div>
              <p className="text-gray-300">Residency Achieved</p>
            </div>
          </div>
          <p className="text-gray-300 mt-6">
            Transform your French asset into a profitable business funding your Monaco lifestyle dreams.
          </p>
        </Card>
      </motion.div>
      </div>
    </div>
  );
};

export default FrenchRentalStrategy; 