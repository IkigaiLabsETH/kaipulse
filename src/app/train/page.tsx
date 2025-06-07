'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function TrainPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the core philosophy of this training approach?",
      a: (
        <span>
          The approach emphasizes consistent daily movement and low-impact, high-resistance exercises. It focuses on integrating fitness into daily life through practical activities like walking, taking stairs, and outdoor exercises. The goal is to make fitness sustainable and enjoyable rather than a chore.
        </span>
      ),
    },
    {
      q: "What types of exercises are recommended?",
      a: (
        <span>
          The program includes:
          <br /><br />
          • Low-impact, high-resistance exercises (rowing, weight lifting)
          <br />
          • Bodyweight exercises (squats, planks, push-ups)
          <br />
          • Outdoor activities (hiking, kayaking, cycling)
          <br />
          • Daily movement integration (walking, stairs, active breaks)
        </span>
      ),
    },
    {
      q: "How should I structure my nutrition?",
      a: (
        <span>
          Focus on a balanced diet rich in:
          <br /><br />
          • High-quality proteins (lean meats, fish, eggs)
          <br />
          • Healthy fats (avocados, nuts, olive oil)
          <br />
          • Whole foods and minimal processed items
          <br />
          • Proper hydration throughout the day
        </span>
      ),
    },
    {
      q: "What's the importance of sleep in this program?",
      a: (
        <span>
          Sleep is crucial for:
          <br /><br />
          • Recovery and muscle repair
          <br />
          • Hormone regulation
          <br />
          • Cognitive function
          <br />
          • Overall performance
          <br /><br />
          Aim for 7-9 hours of quality sleep per night.
        </span>
      ),
    },
    {
      q: "How can I integrate this into a busy schedule?",
      a: (
        <span>
          The program is designed for busy lifestyles:
          <br /><br />
          • Start with 10-minute morning workouts
          <br />
          • Take active breaks during work
          <br />
          • Use weekends for longer activities
          <br />
          • Make movement part of daily routines
          <br />
          • Focus on consistency over intensity
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Daily Movement • Sustainable Fitness • Holistic Health</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Training
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Building Strength Through Sustainable Movement</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/seadoo.jpg"
                alt="Sustainable Fitness Training"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Introduction
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Wesley Okerson&apos;s training protocol, renowned for transforming high-profile clients like Jeff Bezos and Tom Cruise, offers a sustainable, holistic approach to fitness that prioritizes consistent daily movement, low-impact high-resistance exercises, outdoor activities, nutrition, and sleep. Unlike fad diets or grueling workout regimens, Okerson&apos;s method integrates seamlessly into busy lifestyles, making it accessible for anyone seeking long-term health and strength.
              </p>
              <p className="text-lg leading-relaxed">
                To effectively implement and track this protocol, leveraging advanced tech tools like the Apple Watch and Oura Ring is essential, providing precise metrics to monitor progress in exercise, recovery, and sleep quality. This guide synthesizes Okerson&apos;s principles with a detailed weekly training plan and device-specific tracking strategies, empowering you to apply his approach day-to-day with actionable steps and data-driven insights.
              </p>
            </div>
          </div>

          {/* Core Principles Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Sustainable Fitness Approach
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                This training protocol focuses on building sustainable fitness habits through consistent movement and balanced nutrition. By integrating exercise into daily life and focusing on low-impact, high-resistance activities, we create a foundation for long-term health and strength.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Principles:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Daily movement integration</li>
                  <li>Low-impact, high-resistance exercises</li>
                  <li>Balanced nutrition and proper sleep</li>
                  <li>Outdoor activities for functional fitness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exercise Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Exercise & Movement Strategy
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Nature-Based Training</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hill runs and beach dashes</li>
                    <li>Barefoot training for stronger arches</li>
                    <li>Outdoor sprint protocols</li>
                    <li>Natural terrain variation</li>
                    <li>Sunlight exposure during training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Sprint Protocol</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>6-8 × 10-15 sec all-out efforts</li>
                    <li>90 sec rest between sprints</li>
                    <li>2-3 sessions per week</li>
                    <li>Boosts testosterone and BDNF</li>
                    <li>More efficient than steady-state cardio</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Training Techniques</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">High-Intensity Training</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Heavy-bag workouts</li>
                      <li>Hill sprints</li>
                      <li>Resistance band circuits</li>
                      <li>Bodyweight complexes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Recovery Integration</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cold water immersion post-workout</li>
                      <li>Red light therapy for recovery</li>
                      <li>Nature walks for active recovery</li>
                      <li>Grounding exercises</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Training Environment Optimization</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Train outdoors when possible for natural light</li>
                  <li>Use varied terrain for proprioception</li>
                  <li>Incorporate natural elements (water, hills)</li>
                  <li>Time training with circadian rhythm</li>
                  <li>Combine movement with nature exposure</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Performance Enhancement</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Strategic fasting for metabolic flexibility</li>
                  <li>Cold exposure for dopamine optimization</li>
                  <li>Heat therapy for growth hormone</li>
                  <li>Nature immersion for stress reduction</li>
                  <li>Red light therapy for ATP production</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nutrition Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Nutrition & Recovery
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Nutrition Principles</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ruminant-first approach (beef, bison, lamb)</li>
                    <li>High-quality protein sources</li>
                    <li>Healthy fats and complex carbs</li>
                    <li>Diverse plant foods (30+ types weekly)</li>
                    <li>Fermented foods for gut health</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Nutrient Synergies</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Vitamin C + Iron for better absorption</li>
                    <li>Turmeric + Black Pepper (2000% better absorption)</li>
                    <li>Healthy Fats + Fat-soluble nutrients</li>
                    <li>Allium timing (10 min before cooking)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Recovery Stack</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Creatine (5g/day) - Buffers ATP, lifts depression, sharpens memory</li>
                  <li>Collagen Ice Pops - Cherry juice + collagen powder for ligament health</li>
                  <li>Vitamin D3 - Essential for recovery and immune function</li>
                  <li>Raw Honey (1-2 tbsp) - Antioxidants and antimicrobial properties</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Gut Health Optimization</h4>
                <p className="text-white/90 mb-2">
                  A healthy gut is crucial for recovery and performance:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>30+ different plant foods weekly</li>
                  <li>Fiber-rich foods for microbiome diversity</li>
                  <li>Fermented foods for probiotic benefits</li>
                  <li>Prebiotic foods to feed good bacteria</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Energy & Performance</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Low glycemic, high fiber meals</li>
                  <li>Balanced meals with protein and healthy fats</li>
                  <li>Strategic caffeine timing</li>
                  <li>Proper hydration and electrolytes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mindset & Recovery Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Mindset & Recovery Optimization
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Mindset Protocol</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Focus energy on deep-work blocks</li>
                    <li>Guard time and energy boundaries</li>
                    <li>Train mind & body daily</li>
                    <li>Curate environment for success</li>
                    <li>Keep promises to self first</li>
                    <li>Stay positive and constructive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Recovery Optimization</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cold exposure for dopamine spikes</li>
                    <li>Heat therapy for growth hormone</li>
                    <li>Red light therapy for ATP production</li>
                    <li>Nature immersion for stress reduction</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Recovery Stack</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sauna: 15-20 min at 80-100°C, 2-3 rounds</li>
                  <li>Cold plunge: Post-sauna for vagus nerve activation</li>
                  <li>Red light therapy: 10 min/day for joints and brain</li>
                  <li>Nature exposure: 10-30 min unfiltered sunlight</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sleep Optimization Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Sleep Optimization
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Sleep is the most powerful lever for health, recovery, and performance. Here&apos;s a proven protocol for optimal sleep:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Environment Setup</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cold bedroom: 18–20°C (64–68°F)</li>
                    <li>Weighted blanket (9kg, adjust to bodyweight)</li>
                    <li>Separate duvet from partner</li>
                    <li>3M ear plugs and eye mask</li>
                    <li>Red LED lights before sleep</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Evening Routine</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>0.2mg melatonin 45 min before bed</li>
                    <li>Screen hacks: Smart Invert + extra dim</li>
                    <li>No eating after 10pm</li>
                    <li>Sleep around midnight–1am</li>
                    <li>No fluids 2–3 hours before bed</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Key Insights</h4>
                <p className="text-white/90">
                  Temperature is the biggest factor—too hot and you&apos;ll wake up. A cold room and proper bedding can help anyone sleep better. Prioritizing sleep improves all health markers, boosts immunity, and helps your brain clear plaque to prevent dementia. As Bryan Johnson says: sleep is the #1 health hack.
                </p>
              </div>
            </div>
          </div>

          {/* Meditation & Consciousness Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Meditation & Consciousness
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Practice</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>20-30 min morning meditation</li>
                    <li>10 min breathwork sessions</li>
                    <li>Mindful movement integration</li>
                    <li>Evening reflection practice</li>
                    <li>Conscious breathing throughout day</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Advanced Techniques</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Transcendental meditation</li>
                    <li>Vipassana retreats (annual)</li>
                    <li>Float tank sessions</li>
                    <li>Binaural beats integration</li>
                    <li>Consciousness expansion work</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Benefits & Integration</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enhanced focus and clarity</li>
                  <li>Reduced stress and anxiety</li>
                  <li>Improved decision-making</li>
                  <li>Better emotional regulation</li>
                  <li>Increased self-awareness</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Tools & Resources</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Headspace/Calm apps</li>
                  <li>Muse headband for feedback</li>
                  <li>Binaural beats playlists</li>
                  <li>Meditation cushions/benches</li>
                  <li>Journal for insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nicotine & Caffeine Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Nicotine & Caffeine Protocol
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Nicotine Protocol</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>2mg lozenges (morning/afternoon)</li>
                    <li>Strategic timing with tasks</li>
                    <li>No smoking/vaping</li>
                    <li>Cycle on/off monthly</li>
                    <li>Track cognitive benefits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Caffeine Strategy</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Morning coffee (6-8am)</li>
                    <li>Green tea afternoon</li>
                    <li>Matcha for sustained energy</li>
                    <li>No caffeine after 2pm</li>
                    <li>Track tolerance levels</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Optimization Tips</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pair with L-theanine</li>
                  <li>Stay hydrated</li>
                  <li>Monitor heart rate</li>
                  <li>Track sleep quality</li>
                  <li>Regular tolerance breaks</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Safety & Monitoring</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Track blood pressure</li>
                  <li>Monitor heart rate variability</li>
                  <li>Watch for dependency signs</li>
                  <li>Regular health check-ups</li>
                  <li>Listen to body signals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Biohacking Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Advanced Biohacking Protocols
            </h3>
            <div className="space-y-6 text-gray-300">
              {/* Temperature Manipulation */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Temperature Manipulation</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cold exposure (2-3 min, 10-15°C)</li>
                    <li>Heat therapy (15-20 min, 80-100°C)</li>
                    <li>Temperature cycling protocols</li>
                    <li>Contrast therapy timing</li>
                    <li>Circadian alignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Light Therapy</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Red light therapy (660nm/850nm)</li>
                    <li>Non-thermal cellular intervention</li>
                    <li>Targeted mitochondrial support</li>
                    <li>Enhanced cellular repair</li>
                    <li>Improved skin health</li>
                  </ul>
                </div>
              </div>

              {/* Light Therapy Details */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Red Light Therapy Protocol</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Benefits</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cellular repair & optimization</li>
                      <li>Collagen production</li>
                      <li>Improved blood flow</li>
                      <li>Reduced oxidative stress</li>
                      <li>Pain relief & recovery</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Usage Guidelines</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>10-15 min daily sessions</li>
                      <li>Use after sauna (not during)</li>
                      <li>Focus on target areas</li>
                      <li>Maintain proper distance</li>
                      <li>Track progress & results</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Light vs Heat Therapy */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Light vs Heat Therapy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Red Light Therapy</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Non-thermal intervention</li>
                      <li>Precise wavelength delivery</li>
                      <li>Mitochondrial optimization</li>
                      <li>Cellular-level benefits</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Infrared Sauna</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Whole-body thermal stress</li>
                      <li>Systemic heat adaptation</li>
                      <li>Enhanced detoxification</li>
                      <li>Heat shock protein activation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Advanced Supplementation */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Supplementation Stack</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Cognitive Enhancement</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Alpha-GPC (300-600mg)</li>
                      <li>Lions Mane (1000-2000mg)</li>
                      <li>Bacopa Monnieri (300mg)</li>
                      <li>Rhodiola Rosea (500mg)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Performance Stack</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Creatine (5g daily)</li>
                      <li>Beta-Alanine (3-5g)</li>
                      <li>Citrulline Malate (6-8g)</li>
                      <li>Electrolyte complex</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Breathwork & Oxygen */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Breathwork & Oxygen Optimization</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Daily Protocol</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Wim Hof breathing (3 rounds)</li>
                      <li>Box breathing (4-4-4-4)</li>
                      <li>CO2 tolerance training</li>
                      <li>Breath-hold progression</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Advanced Techniques</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Oxygen saturation training</li>
                      <li>Hypoxic training</li>
                      <li>Breath stacking</li>
                      <li>Vagus nerve activation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Advanced Recovery */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Recovery Techniques</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Therapy Tools</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>PEMF therapy (10-20 min)</li>
                      <li>Infrared sauna (15-20 min)</li>
                      <li>Compression therapy</li>
                      <li>Vibration therapy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-500/90 mb-2">Natural Methods</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Grounding/earthing (30 min)</li>
                      <li>Forest bathing</li>
                      <li>Cold water immersion</li>
                      <li>Sun gazing (dawn/dusk)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monitoring & Optimization */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Monitoring & Optimization</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Track HRV daily (morning)</li>
                  <li>Monitor sleep quality (Oura Ring)</li>
                  <li>Blood work every 3 months</li>
                  <li>Track subjective metrics</li>
                  <li>Adjust protocols based on data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery Protocols Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Advanced Recovery Protocols
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Heat Therapy</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Sauna / Hammam / Hot-Tub</li>
                    <li>15–20 min at 80–100°C</li>
                    <li>2–3 rounds with cold contrast</li>
                    <li>Increases growth hormone ~16×</li>
                    <li>Reduces cardiovascular risk by 40%</li>
                    <li>Heat-shock proteins for recovery</li>
                    <li>Contrast with cold plunge for vagus-nerve activation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Cold Therapy</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cold rivers, lakes, or surf</li>
                    <li>Spikes dopamine post-dip</li>
                    <li>Activates vagus nerve</li>
                    <li>Reduces inflammation</li>
                    <li>Improves recovery</li>
                    <li>Even ankle-deep exposure helps</li>
                    <li>Best after heat therapy</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Recovery Stack</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Creatine (5g/day) - Buffers ATP, lifts depression, sharpens memory</li>
                  <li>Collagen - Supports joint and ligament health</li>
                  <li>Vitamin D3 - Essential for recovery and immune function</li>
                  <li>Raw Honey - Antioxidants and antimicrobial properties</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Red Light Therapy</h4>
                <p className="text-white/90 mb-2">
                  NASA-tested panels can increase mitochondrial ATP up to 200%. Target joints, brain, and thyroid for 10 min/day to enhance:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recovery and muscle repair</li>
                  <li>Cognitive function</li>
                  <li>Hormonal balance</li>
                  <li>Joint health</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-500 mb-2">Nature Immersion</h4>
                <p className="text-white/90 mb-2">
                  Combine recovery with natural elements for enhanced benefits:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>10-30 min of unfiltered sunlight exposure</li>
                  <li>Cold water immersion in natural settings</li>
                  <li>Grounding exercises outdoors</li>
                  <li>Fresh air and natural environments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💪</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Strength
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Low-Impact Training
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
                Balanced Diet
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌙</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Recovery
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Quality Sleep
              </p>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Getting Started Guide
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Follow these steps to implement the training protocol:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Action Plan:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Start with 10-minute morning movement</li>
                  <li>Take active breaks every hour</li>
                  <li>Include 2-3 structured workouts weekly</li>
                  <li>Plan outdoor activities for weekends</li>
                  <li>Prioritize sleep and recovery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Featured Training Protocol
            </h3>
            <div className="space-y-6">
              <div className="relative w-full aspect-video overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <iframe
                  src="https://www.youtube.com/embed/nucZAUmYeQw"
                  title="Training Protocol Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="text-lg">
                  Watch this comprehensive overview of the training protocol, demonstrating proper form and technique for key exercises.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-3">Key Points</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Low-impact exercise techniques</li>
                      <li>Proper form demonstration</li>
                      <li>Movement integration tips</li>
                      <li>Recovery strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-3">Video Highlights</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Exercise demonstrations</li>
                      <li>Form corrections</li>
                      <li>Progression examples</li>
                      <li>Safety guidelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Tracking Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Performance Tracking & KPIs
            </h3>
            <div className="space-y-8">
              {/* Device Integration */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">⌚️</span>
                    <h4 className="text-xl font-bold text-yellow-500">Apple Watch Ultra 2</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Daily movement tracking</li>
                    <li>• Heart rate & VO₂ Max</li>
                    <li>• Sleep stages & HRV</li>
                    <li>• GPS for outdoor activities</li>
                    <li>• Workout zones & intensity</li>
                  </ul>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">💍</span>
                    <h4 className="text-xl font-bold text-yellow-500">Oura Ring 4</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Advanced sleep tracking</li>
                    <li>• Recovery metrics</li>
                    <li>• Body temperature</li>
                    <li>• Readiness score</li>
                    <li>• HRV & RHR trends</li>
                  </ul>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Movement KPIs</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Steps: 8,000-10,000 daily</li>
                    <li>Active calories: Track via Apple Watch</li>
                    <li>Stand hours: 12+ hours daily</li>
                    <li>Exercise minutes: 30-60 min</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Recovery Metrics</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Sleep score: 85+ (Oura)</li>
                    <li>HRV: Track trends</li>
                    <li>Resting heart rate</li>
                    <li>Body battery/readiness</li>
                  </ul>
                </div>
              </div>

              {/* Integration Tips */}
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Integration Tips</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-yellow-500 mb-2">Device Syncing</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Sync all devices with Apple Health</li>
                      <li>Review weekly trends</li>
                      <li>Track 3-5 key metrics</li>
                      <li>Regular progress checks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-yellow-500 mb-2">Battery Management</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Charge Apple Watch post-workout</li>
                      <li>Oura Ring: 8-day battery</li>
                      <li>Maintain continuous tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Section */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 text-center">
              Weekly Training Schedule
            </h3>

            {/* General Guidelines */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h4 className="text-2xl font-bold text-yellow-500 mb-6">General Guidelines</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Exercise Focus</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Low-impact, high-resistance exercises</li>
                    <li>Daily movement integration</li>
                    <li>Outdoor activities when possible</li>
                    <li>Progressive overload</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Lifestyle</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>7-9 hours of quality sleep</li>
                    <li>High-protein, high-fat nutrition</li>
                    <li>Consistent daily movement</li>
                    <li>Proper hydration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Monday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🌅</span>
                <h4 className="text-2xl font-bold text-yellow-500">Monday - Strength & Daily Movement</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min dynamic stretches</li>
                      <li>Rowing: 5 min warm-up (Zone 2)</li>
                      <li>Bodyweight Circuit (3 rounds):</li>
                      <li>• Squats: 12-15 reps</li>
                      <li>• Push-ups: 10-12 reps</li>
                      <li>• Plank: 20-30 sec</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Walk/cycle to work (15-20 min)</li>
                      <li>Take stairs instead of elevator</li>
                      <li>1 min standing stretches during breaks</li>
                      <li>Evening: Optional 20-30 min workout</li>
                      <li>Rowing: 10 min steady state (optional)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: Heart rate Zone 2 (60-70% max)</li>
                        <li>Oura Ring: Readiness score & sleep stages</li>
                        <li>Rowing: Split time & stroke rate</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Steps: 8,000-10,000</li>
                        <li>Sleep: 7-9 hours (85+ score)</li>
                        <li>Deep sleep: 20-25%</li>
                        <li>Rowing: 2,000m benchmark</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tuesday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🚶</span>
                <h4 className="text-2xl font-bold text-yellow-500">Tuesday - Outdoor Activity & Mobility</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Evening (30-45 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Choose one activity:</li>
                      <li>• Brisk walk (20-30 min)</li>
                      <li>• Hill walking (15-20 min)</li>
                      <li>• Cycling (20-30 min)</li>
                      <li>Mobility work (5-10 min)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Park farther from destinations</li>
                      <li>Stand and stretch every hour</li>
                      <li>Shoulder rolls and side bends</li>
                      <li>Active breaks during work</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: GPS tracking & Zone 2-3</li>
                        <li>Oura Ring: HRV (30-50ms) & RHR</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Distance: 5-7km</li>
                        <li>HRV: Above baseline</li>
                        <li>RHR: 50-70 bpm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">💪</span>
                <h4 className="text-2xl font-bold text-yellow-500">Wednesday - Strength & Core</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min jumping jacks/high knees</li>
                      <li>Rowing: 5 min warm-up</li>
                      <li>Strength Circuit (3 rounds):</li>
                      <li>• Lunges: 10-12 reps/leg</li>
                      <li>• Push-ups: 10-12 reps</li>
                      <li>• Russian twists: 20 reps</li>
                      <li>• Plank taps: 20-30 sec</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Evening (Optional)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Rowing: 10 min intervals</li>
                      <li>Kettlebell swings: 3x10-12</li>
                      <li>Core workout: 3x12-15</li>
                      <li>15 min cool-down stretch</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: Workout zones 2-3</li>
                        <li>Oura Ring: Recovery metrics</li>
                        <li>Rowing: Power output & efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Exercise: 20-30 min</li>
                        <li>HRV: Stable/rising</li>
                        <li>Muscle gain: 0.5-1 lb/month</li>
                        <li>Rowing: 500m split time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thursday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🧘</span>
                <h4 className="text-2xl font-bold text-yellow-500">Thursday - Active Recovery & Outdoor Fun</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Evening (30-45 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Choose one activity:</li>
                      <li>• Yoga/stretching (15-20 min)</li>
                      <li>• Paddleboarding/kayaking</li>
                      <li>• Leisurely walk/bike ride</li>
                      <li>Focus: Hips, back, shoulders</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Stand and move every 30-60 min</li>
                      <li>Walk to nearby errands</li>
                      <li>Light stretching breaks</li>
                      <li>Active recovery focus</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Oura Ring: Sleep quality focus</li>
                        <li>Apple Watch: HRV</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Steps: 6,000-8,000</li>
                        <li>Sleep score: 90+</li>
                        <li>Body temp: ±0.5°C</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏋️</span>
                <h4 className="text-2xl font-bold text-yellow-500">Friday - Full-Body Strength</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (20-25 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min dynamic stretches</li>
                      <li>Rowing: 5 min warm-up</li>
                      <li>Full-Body Circuit (3 rounds):</li>
                      <li>• Squats: 12-15 reps</li>
                      <li>• Push-ups: 10-12 reps</li>
                      <li>• Rows: 10-12 reps</li>
                      <li>• Plank: 30-45 sec</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Evening (Optional)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Rowing: 15 min steady state</li>
                      <li>Compound lifts: 3x10-12</li>
                      <li>Resistance band circuit</li>
                      <li>15 min cool-down</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: Heart rate</li>
                        <li>Oura Ring: Training impact</li>
                        <li>Rowing: 2,000m time & pace</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Heart rate: Zone 2-4</li>
                        <li>Body fat: Track trend</li>
                        <li>Recovery: 24h</li>
                        <li>Rowing: Weekly distance goal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏃</span>
                <h4 className="text-2xl font-bold text-yellow-500">Saturday - Outdoor Adventure</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning/Afternoon (45-60 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Choose one activity:</li>
                      <li>• Hiking (45-60 min)</li>
                      <li>• Kayaking (45 min)</li>
                      <li>• Cycling (30-45 min)</li>
                      <li>Post-activity stretch (5-10 min)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Throughout Day</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Stay active with light tasks</li>
                      <li>Stand or move every hour</li>
                      <li>Light stretching as needed</li>
                      <li>Focus on recovery</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: GPS & Zone 3</li>
                        <li>Oura Ring: Recovery status</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Distance: 5-10km</li>
                        <li>Calories: 500+</li>
                        <li>Body temp: Monitor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🌙</span>
                <h4 className="text-2xl font-bold text-yellow-500">Sunday - Recovery & Preparation</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (15-20 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Light yoga/stretching</li>
                      <li>Focus on full-body mobility</li>
                      <li>Optional short walk</li>
                      <li>Deep breathing exercises</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Day Focus</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Minimal but consistent movement</li>
                      <li>Foam rolling (10-15 min)</li>
                      <li>Meal prep for week</li>
                      <li>Early bedtime routine</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                  <h5 className="text-lg font-bold text-yellow-500 mb-2">KPI Tracking</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Devices & Metrics</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Apple Watch: Weekly review</li>
                        <li>Oura Ring: Sleep analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Weekly exercise: 150-300 min</li>
                        <li>Sleep: 7-9 hours</li>
                        <li>Body comp: Weekly trend</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h4 className="text-2xl font-bold text-yellow-500 mb-6">Additional Notes</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Progression</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Start with 2-3 rounds of circuits</li>
                    <li>Increase reps/weight gradually</li>
                    <li>Add sets as strength improves</li>
                    <li>Track progress in journal</li>
                    <li>Build rowing duration gradually</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Rowing Integration</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Use as warm-up before strength work</li>
                    <li>Add intervals for cardio variety</li>
                    <li>Focus on form and technique</li>
                    <li>Track split times and stroke rate</li>
                    <li>Set weekly distance goals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Outro Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Implementing Wesley Okerson&apos;s training protocol offers a balanced, sustainable path to fitness, blending daily movement, low-impact strength training, outdoor adventures, and mindful nutrition and sleep practices. By integrating cutting-edge tools like the Apple Watch for real-time exercise tracking and the Oura Ring for sleep and recovery insights, you can monitor progress with precision, ensuring alignment with Okerson&apos;s holistic philosophy.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a beginner or a seasoned fitness enthusiast, this structured weekly plan and tech-driven approach provide the roadmap to achieve lasting results. Start small, stay consistent, and let data guide your journey to a healthier, stronger you.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
