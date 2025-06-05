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
                To effectively implement and track this protocol, leveraging advanced tech tools like the Apple Watch, Oura Ring, and AURA Strap 2 is essential, providing precise metrics to monitor progress in exercise, recovery, and body composition. This guide synthesizes Okerson&apos;s principles with a detailed weekly training plan and device-specific tracking strategies, empowering you to apply his approach day-to-day with actionable steps and data-driven insights.
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
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Our approach combines structured workouts with daily movement:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Structured Workouts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Low-impact strength training</li>
                    <li>Bodyweight exercises</li>
                    <li>Resistance band workouts</li>
                    <li>Outdoor activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Movement</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Walking and stairs</li>
                    <li>Active breaks</li>
                    <li>Standing desk time</li>
                    <li>Movement snacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Nutrition & Recovery
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Proper nutrition and recovery are essential for sustainable fitness:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Components:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>High-quality protein sources</li>
                  <li>Healthy fats and complex carbs</li>
                  <li>7-9 hours of quality sleep</li>
                  <li>Proper hydration</li>
                  <li>Recovery days and active rest</li>
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
              <div className="grid md:grid-cols-3 gap-6">
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
                  </ul>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📊</span>
                    <h4 className="text-xl font-bold text-yellow-500">AURA Strap 2</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Body composition</li>
                    <li>• Muscle mass tracking</li>
                    <li>• Water level analysis</li>
                    <li>• 95%+ DEXA accuracy</li>
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
                      <li>Sync AURA during workouts</li>
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
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (10-15 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min dynamic stretches</li>
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
                        <li>AURA Strap: Muscle mass baseline scan</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Steps: 8,000-10,000</li>
                        <li>Sleep: 7-9 hours (85+ score)</li>
                        <li>Deep sleep: 20-25%</li>
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
                        <li>AURA Strap: Hydration levels</li>
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
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (15-20 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min jumping jacks/high knees</li>
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
                      <li>Rowing: 10 min</li>
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
                        <li>AURA Strap: Muscle mass</li>
                        <li>Apple Watch: Workout zones 2-3</li>
                        <li>Oura Ring: Recovery metrics</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Exercise: 20-30 min</li>
                        <li>HRV: Stable/rising</li>
                        <li>Muscle gain: 0.5-1 lb/month</li>
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
                        <li>AURA Strap: Recovery impact</li>
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
                    <h5 className="text-xl font-bold text-yellow-500 mb-3">Morning (15-20 min)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>3 min dynamic stretches</li>
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
                      <li>Rowing: 10 min</li>
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
                        <li>AURA Strap: Body comp</li>
                        <li>Oura Ring: Training impact</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold text-yellow-500/90 mb-2">Targets</h6>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Heart rate: Zone 2-4</li>
                        <li>Body fat: Track trend</li>
                        <li>Recovery: 24h</li>
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
                        <li>AURA Strap: Activity impact</li>
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
                        <li>AURA Strap: Weekly scan</li>
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
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-yellow-500 mb-3">Adaptability</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Substitute outdoor activities as needed</li>
                    <li>Listen to your body</li>
                    <li>Adjust intensity based on recovery</li>
                    <li>Maintain consistency over perfection</li>
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
                Implementing Wesley Okerson&apos;s training protocol offers a balanced, sustainable path to fitness, blending daily movement, low-impact strength training, outdoor adventures, and mindful nutrition and sleep practices. By integrating cutting-edge tools like the Apple Watch for real-time exercise tracking, the Oura Ring for sleep and recovery insights, and the AURA Strap 2 for body composition analysis, you can monitor progress with precision, ensuring alignment with Okerson&apos;s holistic philosophy.
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
