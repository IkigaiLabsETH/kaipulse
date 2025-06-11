"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function MitochondriaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Cellular Health • Energy Production • Longevity</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Mitochondria
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Powerhouses of Your Cells</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/background_helo.jpeg"
                alt="Mitochondria Structure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Research suggests exercise and a nutrient-rich diet can improve mitochondrial function, potentially boosting energy and health.</li>
                <li>It seems likely that intermittent fasting and stress management also support mitochondria, though evidence varies.</li>
                <li>The evidence leans toward supplements like CoQ10 and resveratrol helping, but consult a healthcare provider first due to individual needs.</li>
                <li>Controversy exists around some supplements&apos; effectiveness, so focus on lifestyle changes for broader benefits.</li>
              </ul>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Understanding Mitochondrial Health
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Improving mitochondrial function, often called the &quot;powerhouses&quot; of your cells, can enhance energy production and overall well-being, potentially transforming your life. Here, we outline simple, evidence-based tips to support your mitochondria, focusing on lifestyle, diet, and cautious supplementation. Always consider consulting a healthcare provider for personalized advice, especially for supplements.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Increased energy levels and vitality</li>
                  <li>Enhanced physical performance</li>
                  <li>Improved cognitive function</li>
                  <li>Reduced risk of age-related diseases</li>
                  <li>Better overall cellular health</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏃</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Exercise
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Boost Mitochondrial Function
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🥗</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Nutrition
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Optimal Cellular Fuel
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Supplements
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Targeted Support
              </p>
            </div>
          </div>

          {/* Background Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Background and Importance
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Mitochondria play a fundamental role in cellular energy production, metabolism, and signaling. Dysfunction is linked to conditions like metabolic syndrome, cardiovascular disease, and neurodegeneration, making mitochondrial health a cornerstone of overall well-being. Research suggests that lifestyle, diet, and targeted interventions can optimize mitochondrial function, potentially leading to significant health benefits.
              </p>
            </div>
          </div>

          {/* Detailed Guide */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Comprehensive Guide
            </h3>
            <div className="space-y-8">
              {/* Lifestyle Changes */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Lifestyle Changes</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Regular exercise, particularly endurance activities like running, cycling, or swimming, stimulates mitochondrial biogenesis and enhances efficiency. Studies show exercise increases mitochondrial enzymes and ATP production, improving performance and delaying age-related decline.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Practices:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Regular exercise</li>
                        <li>Intermittent fasting (16:8 method)</li>
                        <li>Stress management (meditation, yoga)</li>
                        <li>Quality sleep (7-9 hours)</li>
                        <li>Moderate sun exposure</li>
                        <li>Temperature therapy (cold/hot)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Benefits:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Increased energy</li>
                        <li>Better metabolism</li>
                        <li>Reduced inflammation</li>
                        <li>Enhanced recovery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dietary Adjustments */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Dietary Adjustments</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    A nutrient-rich diet plays a critical role in supporting mitochondrial function. Focus on foods high in antioxidants, healthy fats, and mitochondrial-supporting nutrients to optimize cellular energy production.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Recommended Foods:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Berries and leafy greens</li>
                        <li>Fatty fish and olive oil</li>
                        <li>Nuts and seeds</li>
                        <li>Organ meats</li>
                        <li>Eggs and dairy</li>
                        <li>Whole grains</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Avoid:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Processed foods</li>
                        <li>Excess sugar</li>
                        <li>Trans fats</li>
                        <li>Alcohol</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supplementation */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Supplementation</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    While supplements can support mitochondrial health, always consult a healthcare provider before starting any regimen. Here are some evidence-based options that may help optimize mitochondrial function.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Supplements:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>CoQ10 (100mg daily)</li>
                        <li>Alpha-Lipoic Acid (200mg BID)</li>
                        <li>Acetyl-L-Carnitine (500mg BID)</li>
                        <li>Resveratrol (150mg daily)</li>
                        <li>N-Acetyl Cysteine (500mg BID)</li>
                        <li>Vitamin E (500 IU daily)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Considerations:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Individual needs vary</li>
                        <li>Quality matters</li>
                        <li>Start low, go slow</li>
                        <li>Monitor effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Summary of Key Strategies
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/20">
                    <th className="py-4 px-6 text-yellow-500">Category</th>
                    <th className="py-4 px-6 text-yellow-500">Strategy</th>
                    <th className="py-4 px-6 text-yellow-500">Details/Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-500/20">
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Lifestyle</td>
                    <td className="py-4 px-6">Exercise Regularly</td>
                    <td className="py-4 px-6">Endurance exercises (running, cycling), strength training for muscle mass</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Lifestyle</td>
                    <td className="py-4 px-6">Intermittent Fasting</td>
                    <td className="py-4 px-6">16:8 method, shifts to ketone metabolism, reduces oxidative stress</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Lifestyle</td>
                    <td className="py-4 px-6">Stress Management</td>
                    <td className="py-4 px-6">Meditation, yoga, tai chi to reduce oxidative stress</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Diet</td>
                    <td className="py-4 px-6">Nutrient-Rich Diet</td>
                    <td className="py-4 px-6">Antioxidants (berries, nuts), healthy fats (fish, olive oil), B vitamins, CoQ10</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Diet</td>
                    <td className="py-4 px-6">Reduce Toxin Exposure</td>
                    <td className="py-4 px-6">Choose organic, avoid pesticides, heavy metals</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Supplements</td>
                    <td className="py-4 px-6">CoQ10</td>
                    <td className="py-4 px-6">100 mg daily, antioxidant, supports energy production</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-yellow-400">Supplements</td>
                    <td className="py-4 px-6">Alpha-Lipoic Acid + Acetyl-L-Carnitine</td>
                    <td className="py-4 px-6">200 mg + 500 mg BID, increases ATP, protects mitochondria</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
