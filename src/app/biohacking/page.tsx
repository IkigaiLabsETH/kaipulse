'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-yellow-500/20">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-white">{title}</span>
        <ChevronDown
          className={cn('h-6 w-6 transition-transform text-yellow-500', {
            '-rotate-180': isOpen,
          })}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-white/80">
          {children}
        </div>
      )}
    </div>
  );
};

export default function BiohackingPage() {
  const biohackingMethods = [
    {
      title: "Hydrogen Gas Therapy",
      content: (
        <div className="space-y-4">
          <p>
            Hydrogen gas therapy involves inhaling molecular hydrogen (H2) gas, which acts as a selective antioxidant and anti-inflammatory agent. It has shown promise in reducing oxidative stress and inflammation in various conditions.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Key Benefits:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduces oxidative stress</li>
              <li>Anti-inflammatory effects</li>
              <li>Neuroprotective properties</li>
              <li>May improve athletic performance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Dopamine Optimization",
      content: (
        <div className="space-y-4">
          <p>
            Dopamine optimization focuses on naturally enhancing dopamine levels through lifestyle modifications, dietary changes, and targeted supplementation to improve motivation, focus, and overall well-being.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Strategies:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Regular exercise</li>
              <li>Sunlight exposure</li>
              <li>Cold exposure</li>
              <li>Meditation and mindfulness</li>
              <li>Strategic supplementation</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Hyperbaric Oxygen Therapy",
      content: (
        <div className="space-y-4">
          <p>
            Hyperbaric Oxygen Therapy (HBOT) involves breathing pure oxygen in a pressurized chamber, which increases oxygen delivery to tissues and promotes healing and recovery.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Applications:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Wound healing</li>
              <li>Brain injury recovery</li>
              <li>Sports performance enhancement</li>
              <li>Anti-aging effects</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Personalized Supplementation via Methylation Testing",
      content: (
        <div className="space-y-4">
          <p>
            Methylation testing helps identify genetic variations that affect nutrient metabolism, allowing for personalized supplementation strategies to optimize health and performance.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Key Nutrients:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>B vitamins</li>
              <li>Folate</li>
              <li>Choline</li>
              <li>Methyl donors</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Morning Electrolyte & Amino Cocktail",
      content: (
        <div className="space-y-4">
          <p>
            A carefully balanced morning cocktail of electrolytes and amino acids can optimize hydration, energy levels, and cognitive function throughout the day.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Typical Components:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Electrolytes (sodium, potassium, magnesium)</li>
              <li>Essential amino acids</li>
              <li>Adaptogens</li>
              <li>Nootropics</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Whole Food Over Processed Nutrition",
      content: (
        <div className="space-y-4">
          <p>
            Prioritizing whole, nutrient-dense foods over processed alternatives provides superior nutrition and supports optimal health and performance.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Key Principles:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Focus on nutrient density</li>
              <li>Minimize processed foods</li>
              <li>Prioritize quality protein sources</li>
              <li>Include diverse plant foods</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Cold Plunge and Shock Protein Response",
      content: (
        <div className="space-y-4">
          <p>
            Cold exposure through cold plunges activates shock proteins and other beneficial physiological responses that enhance recovery, resilience, and overall health.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-yellow-500 font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Enhanced recovery</li>
              <li>Improved immune function</li>
              <li>Increased brown fat activation</li>
              <li>Stress resilience</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
            Biohacking Methods
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore various biohacking techniques and their applications for optimizing health, performance, and longevity.
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 mb-6">
                Biohacking Methods FAQ
              </h2>
              <div className="space-y-4">
                {biohackingMethods.map((method, index) => (
                  <AccordionItem key={index} title={method.title}>
                    {method.content}
                  </AccordionItem>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 