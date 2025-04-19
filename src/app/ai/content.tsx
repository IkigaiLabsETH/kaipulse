'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
}

export default function AIContent() {
  return (
    <motion.main 
      className="min-h-screen bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div variants={sectionVariants} className="space-y-8">
          <h1 className="text-6xl font-bold font-boska text-yellow-400 leading-tight mb-12">
            The Startup Playbook Has Been Rewritten—Forever
          </h1>

          <p className="text-2xl font-epilogue text-white/80">
            Let&apos;s not sugarcoat it. The old startup playbook is dead. Long live the weird, modular, agent-powered, meme-led, micro-app-driven new world. The rules have changed—not just slightly, but at a cellular level. And the founders who understand this aren&apos;t just adapting. They&apos;re building from first principles in a new reality, one where small teams wield infinite leverage and identity is the product.
          </p>

          <p className="text-2xl font-epilogue text-white/80">
            This isn&apos;t a &quot;pivot.&quot; This is a paradigm shift.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Card className="mt-16 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <CardContent className="p-8">
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🧠 Your Team Is Not a Team. It&apos;s a Network.</h2>
                  <p className="text-lg text-white/80 mb-4">
                    You no longer need an office full of full-time employees. Your real team looks like:
                  </p>
                  <ul className="list-none space-y-2 text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> 1 founder
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> 3 part-time contractors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> 7 creators
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> 12 agents running 24/7 in the background
                    </li>
                  </ul>
                  <p className="text-lg text-white/80 mt-4">
                    Your brand designer is on five other projects. Your customer support is a single human backed by five Lindy-trained AI agents. Your blog? It writes itself from transcripts, support tickets, and user reviews. Welcome to the modular startup, where flexibility isn&apos;t a perk—it&apos;s the point.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">💸 Niches Print Millions. Culture Prints Billions.</h2>
                  <div className="space-y-4 text-lg text-white/80">
                    <p>
                      The first million comes from going deep—serving a niche so hard it hurts. But the next ten? That comes from scaling tastefully. Not more features. Not broader appeal. Just better storytelling and sharper aesthetics.
                    </p>
                    <p>
                      Your product doesn&apos;t go viral because it solves a problem. It goes viral because it looks good in a meme. It gets shared because it feels like belonging.
                    </p>
                    <p>
                      The best products are portals into subcultures. They don&apos;t just solve pain—they offer transformation. Identity upgrade included.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">📺 Startups Are the New QVC</h2>
                  <p className="text-lg text-white/80">
                    But this time, you own the channel. And the product. And the voiceover.
                  </p>
                  <p className="text-lg text-white/80">
                    Founders are becoming creators. Creators are becoming founders. Your product demo is a TikTok. Your sales funnel is a Twitter thread. Your landing page rewrites itself depending on who&apos;s watching—powered by Claude or GPT-4o and real-time session data.
                  </p>
                  <p className="text-lg text-white/80">
                    Launch day? Dead. It&apos;s about the leak. Let the community speculate, remix, and pre-order the hoodie before the beta even drops.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">✨ Growth Isn&apos;t a Department. It&apos;s a Loop.</h2>
                  <p className="text-lg text-white/80">
                    Your onboarding isn&apos;t a form. It&apos;s a text conversation with a friendly agent.
                  </p>
                  <p className="text-lg text-white/80">
                    Your growth isn&apos;t an afterthought. It&apos;s baked into every interaction:
                  </p>
                  <ul className="list-none space-y-2 text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Invite loops driven by AI agents
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Personalized outbound intros crafted in your sleep
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Referral engines built on curiosity and culture
                    </li>
                  </ul>
                  <p className="text-lg text-white/80">
                    You don&apos;t chase virality. You build something so weirdly specific it spreads organically. If it doesn&apos;t spark curiosity in two seconds, it&apos;s invisible.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🧩 Micro Over Mega. Specific Over General.</h2>
                  <p className="text-lg text-white/80">
                    The most overbuilt SaaS tools will collapse under their own bloat. The winners? They&apos;ll do one weird thing stupidly well. They&apos;ll be micro-apps that solve hyper-specific problems with taste and soul.
                  </p>
                  <p className="text-lg text-white/80">
                    Think &quot;tiny empires&quot;—one founder, one audience, a constellation of AI-powered tools orbiting their insight.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🎨 Taste Is Distribution</h2>
                  <p className="text-lg text-white/80">
                    If your homepage looks like a generic ShadCN template, you&apos;ve already lost.
                  </p>
                  <p className="text-lg text-white/80">
                    Your homepage should feel like walking into a scene. Your brand? A vibe people want to wear. Your creative director isn&apos;t a luxury—they&apos;re your growth engine. Taste is the moat.
                  </p>
                  <p className="text-lg text-white/80">
                    And distribution? It&apos;s not something you find. It&apos;s something you own.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🛠 Agents Are the New Stack</h2>
                  <p className="text-lg text-white/80">
                    Product feedback loops are now instant:
                  </p>
                  <ul className="list-none space-y-2 text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Users speak &rarr; Agents summarize, prioritize, and mock UI changes.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Support tickets &rarr; Tagged, triaged, and visualized before a dev touches them.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Churned users &rarr; Winback campaigns tailored to their exit story.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Your CRM &rarr; Updated and summarized before the call ends.
                    </li>
                  </ul>
                  <p className="text-lg text-white/80">
                    This is not automation. This is orchestration.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">👟 Your Product Isn&apos;t Finished Until They Wear the Hoodie</h2>
                  <p className="text-lg text-white/80">
                    The new pricing model: $0 to play, $X to unlock identity.
                  </p>
                  <p className="text-lg text-white/80">
                    You don&apos;t sell software anymore. You sell outcomes. Transformations. Belonging.
                  </p>
                  <p className="text-lg text-white/80">
                    The product is what they buy. But the hoodie? That&apos;s what they believe in.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section>
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🪩 IRL Is the Final Unlock</h2>
                  <p className="text-lg text-white/80">
                    Founders are becoming event planners. Meetups, not webinars. Scene energy, not sales decks.
                  </p>
                  <p className="text-lg text-white/80">
                    The future isn&apos;t just digital. It&apos;s deeply human. Presence is leverage.
                  </p>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold font-epilogue mb-6">🧬 The New Playbook, Summarized</h2>
                  <ul className="list-none space-y-3 text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Default alive = low burn, small team, high-leverage systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Distribution &gt; cofounder
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Taste &gt; features
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Specific &gt; general
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Memes &gt; marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Identity &gt; utility
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">•</span> Infinite leverage &gt; infinite funding
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <section className="space-y-4 text-lg text-white/80">
                  <p>
                    You don&apos;t need permission to build like this. You don&apos;t need a seed round or a growth team or even a launch date.
                  </p>
                  <p>
                    You just need to start.
                  </p>
                  <p>
                    Most people will ignore this.
                  </p>
                  <p>
                    But this is the new reality.
                  </p>
                  <p>
                    Small teams. Infinite leverage. Culture as code.
                  </p>
                  <p>
                    If this felt like a glimpse into the future, that&apos;s because it is.
                  </p>
                  <p>
                    So don&apos;t bookmark this.
                  </p>
                  <p>
                    Send it to someone weird enough to believe it too.
                  </p>
                  <p className="font-epilogue text-yellow-400">
                    Happy building.
                  </p>
                  <p className="font-epilogue text-yellow-400">
                    I&apos;m rooting for you.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.main>
  )
} 