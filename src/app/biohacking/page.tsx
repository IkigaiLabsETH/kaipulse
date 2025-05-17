'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ChevronDown, Sun, Droplet, Utensils, Flame, Pill, Brain, Zap, Bed } from 'lucide-react';
import Image from 'next/image';

const AccordionItem = ({
  title,
  icon,
  children,
  index,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  index: number
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-yellow-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <button
        className="flex w-full items-center justify-between py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
          <span className="text-xl font-medium text-white group-hover:text-yellow-500 transition-colors">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-yellow-500"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/80 pr-6 pl-10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PillarCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="bg-gray-800/40 p-5 rounded-lg border border-yellow-500/30 mb-6 backdrop-blur-sm"
    whileHover={{ 
      boxShadow: "0 0 15px rgba(247, 181, 0, 0.2)",
      borderColor: "rgba(247, 181, 0, 0.5)" 
    }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const Protocol = ({ title, description }: { title: string, description: React.ReactNode }) => (
  <div className="mb-4 last:mb-0">
    <h4 className="text-yellow-500 font-semibold mb-1">{title}</h4>
    <p className="text-white/80">{description}</p>
  </div>
);

const SupplementItem = ({ name, benefit, cost }: { name: string, benefit: string, cost: string }) => (
  <motion.div 
    className="grid grid-cols-12 gap-2 py-2 border-b border-yellow-500/10 last:border-0"
    whileHover={{ backgroundColor: "rgba(247, 181, 0, 0.05)" }}
    transition={{ duration: 0.2 }}
  >
    <div className="col-span-3 font-medium text-white">{name}</div>
    <div className="col-span-7 text-white/70">{benefit}</div>
    <div className="col-span-2 text-right text-yellow-500">{cost}</div>
  </motion.div>
);

const ChecklistItem = ({ text }: { text: string }) => (
  <motion.div 
    className="flex items-start mb-2 last:mb-0"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="bg-yellow-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
    <p className="text-white/90">{text}</p>
  </motion.div>
);

// Floating particle effect
const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute z-0 bg-yellow-500/20 rounded-full backdrop-blur-md"
      initial={{ 
        x: Math.random() * 100 - 50, 
        y: Math.random() * 100 - 50, 
        opacity: 0,
        scale: 0 
      }}
      animate={{ 
        x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
        y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
        opacity: [0, 0.3, 0],
        scale: [0, Math.random() * 0.5 + 0.5, 0]
      }}
      transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        delay: delay,
      }}
      style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        filter: 'blur(40px)',
      }}
    />
  );
};

export default function BiohackingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 z-0 opacity-70">
        <div className="relative w-full h-full">
          {[...Array(6)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 2} />
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        {/* Hero Title Section - Tesla Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-24 pb-8 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-500">Biohacking</span> Methods
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Live Sovereign, Live Well — The best store of value is the one beating in your chest.
          </p>
        </motion.div>

        {/* Feature Image Section - Tesla Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-4xl mb-16 overflow-hidden"
        >
          <div className="relative w-full h-[65vh] border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <Image
              src="/background_helo.jpeg"
              alt="Biohacking Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8">
              <div className="bg-black/90 p-6">
                <h2 className="text-4xl font-bold text-yellow-500">
                  Nature Immersion
                </h2>
                <p className="text-white/90 text-lg">
                  Re-price Yourself in Sunlight
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="border-l-4 border-yellow-500 pl-6 py-2">
              <p className="text-xl text-white/90 leading-relaxed">
                Bitcoin taught us to opt out of broken systems—but we still outsource our health to centralized gyms, fluorescent offices, and factory farms. But bodies, like blockchains, thrive on decentralization, therefore we take our biology off-grid.
              </p>
            </div>
          </motion.div>

          {/* Pillars Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#1c1f26]/80 border-2 border-yellow-500 mb-12 backdrop-blur-md">
              <div className="p-8">
                <div className="space-y-6">
                  <AccordionItem 
                    title="Nature Immersion — Re-price Yourself in Sunlight" 
                    icon={<Sun className="h-6 w-6" />}
                    index={0}
                  >
                    <PillarCard>
                      <Protocol 
                        title="Embrace the Sun"
                        description="Modern media treats sunlight like volatility: scary in the short term. But UVA/UVB photons mint vitamin D, raise nitric oxide, and stabilize hormones, therefore we treat dawn and dusk like daily airdrops—10-30 min of unfiltered exposure."
                      />
                      <Protocol 
                        title="Wild-Water Proof-of-Work"
                        description="Cold rivers, lakes, or even ankle-deep surf tax the nervous system just enough to spike dopamine two-hours post-dip. Submerge fully when possible; at worst, park your feet in the stream while you code."
                      />
                    </PillarCard>
                  </AccordionItem>

                  <AccordionItem 
                    title="Train in Nature—Sprinting > Inflationary Cardio" 
                    icon={<Droplet className="h-6 w-6" />}
                    index={1}
                  >
                    <PillarCard>
                      <Protocol 
                        title="Sprint Protocol"
                        description="Gyms lock you into subscription fiat; sprint sets (hill runs, beach dashes, heavy-bag barrage) mint testosterone and BDNF in half the time."
                      />
                      <div className="ml-6 mt-3 mb-4">
                        <ul className="list-disc space-y-1 text-white/80">
                          <li>6–8 × 10-15 sec all-out, 90 sec rest</li>
                          <li>2–3 days/week</li>
                          <li>Finish barefoot for stronger arches</li>
                        </ul>
                      </div>
                      <Protocol 
                        title="Deep Fasting (3–5 days/quarter)"
                        description="Autophagy deletes metabolic debt. But few hustle past 16 hours, therefore quarterly 72-hour fasts strip senescent cells, re-set insulin, and grant psychedelic-level mental clarity—no blockchain fork required."
                      />
                    </PillarCard>
                  </AccordionItem>

                  <AccordionItem 
                    title="Ruminant-First Nutrition—Beef Is Best" 
                    icon={<Utensils className="h-6 w-6" />}
                    index={2}
                  >
                    <PillarCard>
                      <p className="mb-4 text-white/90">
                        Chickens eat grain you wouldn&apos;t feed yourself; their omega-6 payload inflames like a memecoin rug. Therefore we front-load ruminant meat—beef, bison, lamb, elk—for stable CLA, carnitine, and B12 returns.
                      </p>
                      <div className="ml-6 mt-3 mb-4">
                        <div className="mb-3">
                          <span className="text-yellow-500 font-medium">Creatine</span> (5 g/day, $20–30/mo)
                          <p className="text-white/70">Buffers ATP, lifts depression, sharpens memory.</p>
                        </div>
                        <div className="mb-3">
                          <span className="text-yellow-500 font-medium">Collagen Ice Pops</span> (5 g/piece)
                          <p className="text-white/70">Cherry juice + collagen powder frozen into daily pops—ligament insurance that tastes like summer.</p>
                        </div>
                        <div>
                          <span className="text-yellow-500 font-medium">Raw Honey</span> (1–2 tbsp)
                          <p className="text-white/70">Antioxidants, antimicrobial, and yes, it pairs with steak.</p>
                        </div>
                      </div>
                    </PillarCard>
                  </AccordionItem>

                  <AccordionItem 
                    title="Light • Heat • Cold—Stack Photons & Sauna Sats" 
                    icon={<Flame className="h-6 w-6" />}
                    index={3}
                  >
                    <PillarCard>
                      <Protocol 
                        title="Red-Light Therapy (660 + 850 nm)"
                        description={
                          <span>
                            NASA-tested panels crank mitochondrial ATP up to 200%. But most people stop at skin-deep benefits, therefore we target joints, brain, and thyroid 10 min/day for recovery, cognition, and hormonal balance.{' '}
                            <a 
                              href="/rlt" 
                              className="text-yellow-500 hover:text-yellow-400 underline transition-colors"
                            >
                              Learn more about Red Light Therapy →
                            </a>
                          </span>
                        }
                      />
                      <Protocol 
                        title="Sauna / Hammam / Hot-Tub"
                        description="Heat-shock proteins increase growth hormone ~16×; cardiovascular risk drops 40%. Contrast with cold plunge to lock in vagus-nerve calm."
                      />
                      <div className="ml-6 mt-3">
                        <ul className="list-disc space-y-1 text-white/80">
                          <li>15–20 min at 80–100°C, 2–3 rounds</li>
                        </ul>
                      </div>
                    </PillarCard>
                  </AccordionItem>

                  <AccordionItem 
                    title="Smart Supplementation—Cap Your Downside, 10× Upside" 
                    icon={<Pill className="h-6 w-6" />}
                    index={4}
                  >
                    <PillarCard>
                      <div className="bg-gray-900/70 rounded-lg p-4 mb-4 backdrop-blur-sm">
                        <div className="grid grid-cols-12 gap-2 pb-2 mb-2 border-b border-yellow-500/20">
                          <div className="col-span-3 font-medium text-yellow-500">Compound</div>
                          <div className="col-span-7 text-yellow-500">Why It&apos;s in the Stack</div>
                          <div className="col-span-2 text-right text-yellow-500">Cost</div>
                        </div>
                        <SupplementItem 
                          name="Adamax" 
                          benefit="Nootropic blend for neurogenesis" 
                          cost="$150/mo" 
                        />
                        <SupplementItem 
                          name="Psilocybin Microdose" 
                          benefit="0.1 g, 2 days on / 3 off, 6-week cycles" 
                          cost="~$50/yr" 
                        />
                        <SupplementItem 
                          name="Vitamin D3" 
                          benefit="Insurance for cloudy latitudes" 
                          cost="$10/mo" 
                        />
                        <SupplementItem 
                          name="Fluoride-Free Toothpaste" 
                          benefit="Endocrine-safe oral care" 
                          cost="$5–8/mo" 
                        />
                      </div>
                    </PillarCard>
                  </AccordionItem>

                  <AccordionItem 
                    title="Mindset Protocol—Proof-of-Self-Custody" 
                    icon={<Brain className="h-6 w-6" />}
                    index={5}
                  >
                    <PillarCard>
                      <div className="space-y-1 mb-4">
                        <ChecklistItem text="Focus your energy—deep-work blocks > open notification mempool" />
                        <ChecklistItem text="Guard your time—say no like your private keys depend on it" />
                        <ChecklistItem text="Train mind & body daily" />
                        <ChecklistItem text="Curate friends & environment—low-tox crew, high-signal spaces" />
                        <ChecklistItem text="Keep promises to self first, then others" />
                        <ChecklistItem text="Stay cheerful & constructive—energy ≈ currency" />
                        <ChecklistItem text="Upgrade the world—every rep, line of code, and sat spent should compound freedom" />
                      </div>
                    </PillarCard>
                  </AccordionItem>
                  <AccordionItem
                    title="Sleep Optimization—The Ultimate Biohack"
                    icon={<Bed className="h-6 w-6" />}
                    index={6}
                  >
                    <PillarCard>
                      <div className="mb-4">
                        <p className="text-white/90 mb-2">
                          Sleep is the most powerful lever for health, recovery, and performance. Here&apos;s a proven protocol for 100% perfect sleep:
                        </p>
                        <div className="space-y-1">
                          <ChecklistItem text="Very cold bedroom: 18–20°C (64–68°F), colder is better" />
                          <ChecklistItem text="9kg weighted blanket (adjust to your bodyweight)" />
                          <ChecklistItem text="Separate duvet from your partner" />
                          <ChecklistItem text="3M ear plugs and eye mask for sensory blackout" />
                          <ChecklistItem text="Red LED lights before sleep" />
                          <ChecklistItem text="0.2mg melatonin 45 min before bed (avoid high doses)" />
                          <ChecklistItem text="4x/week cardio + strength training; low resting heart rate" />
                          <ChecklistItem text="Clean diet: meat, veggies, fruit, black coffee, sparkling water with lemon; minimal carbs and sweets late" />
                          <ChecklistItem text="Maintain healthy weight and biomarkers" />
                          <ChecklistItem text="Screen hacks: Smart Invert + extra dim on phone, then Kindle to wind down" />
                          <ChecklistItem text="Avoid eating after 10pm; sleep around midnight–1am" />
                          <ChecklistItem text="No fluids 2–3 hours before bed to avoid waking up" />
                        </div>
                        <p className="text-white/70 mt-4">
                          <span className="text-yellow-500 font-medium">Key Insight:</span> Temperature is the biggest factor—too hot and you&apos;ll wake up. A cold room and proper bedding (thicker for women) can help anyone sleep better, regardless of what you&apos;re used to. Prioritizing sleep improves all health markers, boosts immunity, and even helps your brain clear plaque to prevent dementia. As Bryan Johnson says: sleep is the #1 health hack.
                        </p>
                      </div>
                    </PillarCard>
                  </AccordionItem>
                </div>
              </div>
            </Card>

            {/* Closing Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#1c1f26]/80 border-2 border-yellow-500/70 overflow-hidden backdrop-blur-md">
                  <div className="relative p-6">
                    <motion.div 
                      className="absolute top-2 right-2 text-yellow-500"
                      animate={{ 
                        y: [0, -5, 0], 
                        opacity: [1, 0.8, 1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    >
                      <Zap className="h-7 w-7" />
                    </motion.div>
                    <h2 className="text-xl font-bold text-yellow-500 mb-4">⚡ The Sovereign Health Loop</h2>
                    <p className="text-white/90 mb-0">
                      Reject the processed feedlot lifestyle for sovereign biology. Stack daily exposure to sunlight, high-intensity movement, and nutrient-dense foods like you stack sats. Watch as your mitochondria compound returns, generating energy that you strategically deploy into building the future you want. This is the perpetual loop of the physically sovereign: upgrade inputs → harvest energy → reinvest in what matters → repeat. Above all, go Live The The Life You Love —fiercely, and on your own terms.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
            
            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative mt-16 mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-yellow-500/10 rounded-lg opacity-75 blur-sm"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 rounded-full p-2">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-yellow-500 font-bold text-lg mb-2">Not Medical Advice</h3>
                      <p className="text-white/70">
                        The content above is for educational purposes only. Consult a qualified health professional before modifying diet, training, or supplementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 