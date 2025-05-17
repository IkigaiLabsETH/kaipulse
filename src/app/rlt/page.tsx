'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function RLTPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Red Light Therapy?",
      a: (
        <span>
          Red light therapy (also known as photobiomodulation, or PBM) works by delivering specific wavelengths of red (typically 660nm) and near-infrared (usually 850nm) light directly to your skin and deeper tissues. These wavelengths penetrate the skin and are absorbed by your mitochondria—the energy centers of your cells.
          <br /><br />
          This process stimulates the production of adenosine triphosphate (ATP), the energy currency of the cell, enhancing cellular repair, collagen production, blood flow, and more.
        </span>
      ),
    },
    {
      q: "How does Red Light Therapy compare to Infrared Saunas?",
      a: (
        <span>
          While both are often grouped under &quot;infrared wellness,&quot; they work very differently:
          <br /><br />
          • Red Light Therapy: Non-thermal, cellular intervention focused on precision
          <br />
          • Infrared Saunas: Whole-body thermal stress that raises core body temperature
          <br /><br />
          They can be used together but should be used separately for optimal results.
        </span>
      ),
    },
    {
      q: "What are the benefits of Red Light Therapy?",
      a: (
        <span>
          Red light therapy offers numerous benefits including:
          <br /><br />
          • Cellular repair & optimization
          <br />
          • Collagen production
          <br />
          • Improved blood flow
          <br />
          • Reduced oxidative stress & inflammation
          <br />
          • Pain relief
          <br />
          • Faster muscle recovery
          <br />
          • Improved sleep and circadian rhythm support
        </span>
      ),
    },
    {
      q: "What makes Joovv different from other red light therapy devices?",
      a: (
        <span>
          Joovv stands out through:
          <br /><br />
          • Custom Light Engines: Precision-engineered LEDs
          <br />
          • Medical Certifications: IEC 60601-1 and ISO 13485 compliance
          <br />
          • Modular, Expandable Design
          <br />
          • Bluetooth + App Control
          <br />
          • Wavelength Purity: Focus on clinically validated 660nm and 850nm
        </span>
      ),
    },
    {
      q: "Can I use Red Light Therapy with a sauna?",
      a: (
        <span>
          Yes, but not together. The recommended sequence is:
          <br /><br />
          1. Use the sauna first to detox, boost circulation, and activate heat shock proteins
          <br />
          2. Follow with red light therapy to repair, recover, and recharge at a cellular level
          <br /><br />
          This sequencing provides optimal benefits for stress relief, immune modulation, and performance enhancement.
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-red-500/90 text-sm mb-4 font-light font-satoshi">Photobiomodulation • Cellular Health • Recovery</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-red-500 tracking-tight [text-shadow:_0_1px_20px_rgba(239,68,68,0.3)] font-satoshi">
                Red Light Therapy
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-red-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">vs Infrared Saunas</p>
              <div className="h-px w-24 bg-red-500/30"></div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔬</span>
                <h3 className="text-2xl md:text-3xl font-bold text-red-500">
                  Science-Backed
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                1,000+ Clinical Studies
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-red-500">
                  Cellular Energy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                ATP Production
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-red-500">
                  Precision
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Targeted Therapy
              </p>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
              Therapy Comparison
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-red-500">Red Light Therapy</h4>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>Non-thermal cellular intervention</li>
                  <li>Targeted mitochondrial support</li>
                  <li>Precise wavelength delivery</li>
                  <li>Enhanced cellular repair</li>
                  <li>Improved skin health</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-red-500">Infrared Saunas</h4>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>Whole-body thermal stress</li>
                  <li>Systemic heat adaptation</li>
                  <li>Enhanced detoxification</li>
                  <li>Cardiovascular conditioning</li>
                  <li>Heat shock protein activation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-red-500/20">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-xl font-medium text-white">{item.q}</span>
                    <ChevronDown
                      className={cn('h-6 w-6 transition-transform text-red-500', {
                        '-rotate-180': open === i,
                      })}
                    />
                  </button>
                  {open === i && (
                    <div className="pb-4 text-gray-300">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
              Important Note
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                While red light therapy and infrared saunas can be powerful wellness tools, they should be used as part of a comprehensive health strategy. Always consult with healthcare professionals before starting any new therapy, especially if you have underlying health conditions.
              </p>
              <p className="text-lg">
                The information provided is for educational purposes only and should not be considered medical advice. Individual results may vary based on factors such as usage frequency, duration, and personal health status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
