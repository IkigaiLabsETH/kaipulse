"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { useRef, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const happinessData = {
  labels: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
  datasets: [
    {
      label: 'Happiness Level (Scale of 1-10)',
      data: [7.0, 6.8, 6.5, 6.2, 5.9, 5.5, 5.2, 5.3, 5.6, 6.0, 6.5],
      fill: false,
      borderColor: '#F7B500',
      backgroundColor: '#F7B500',
      pointBackgroundColor: '#F7B500',
      pointBorderColor: '#F7B500',
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.3,
      borderWidth: 3,
    },
  ],
};

const happinessOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      labels: {
        color: '#fff',
        font: {
          family: 'Satoshi',
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: 'Happiness Levels by Age',
      color: '#fff',
      font: {
        size: 20,
        family: 'Satoshi',
        weight: 700,
      },
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: function(context: TooltipItem<'line'>) {
          return `Age: ${context.label}, Happiness: ${context.parsed.y}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Age',
        color: '#fff',
        font: {
          family: 'Satoshi',
          size: 14,
        },
      },
      ticks: {
        color: '#fff',
        font: {
          family: 'Satoshi',
          size: 12,
        },
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Happiness Level (Scale of 1-10)',
        color: '#fff',
        font: {
          family: 'Satoshi',
          size: 14,
        },
      },
      min: 5,
      max: 7.2,
      ticks: {
        color: '#fff',
        font: {
          family: 'Satoshi',
          size: 12,
        },
        stepSize: 0.5,
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
  },
};

export default function MidlifePage() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fix chart resize on theme/font load
    if (chartContainerRef.current) {
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Life Journey • Happiness • Personal Growth</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                The Happiness U-Curve
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Why Your 50s Might Be a Plot Twist, Not a Crisis</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Chart Section */}
          <div ref={chartContainerRef} className="w-full mx-auto bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="w-full h-72 md:h-96">
              <Line data={happinessData} options={happinessOptions} />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm border border-yellow-500"></div>
              <span className="text-xs text-yellow-400">Lowest Happiness (age 50)</span>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                Why Your 50s Might Just Be the Beginning of Your Best Chapter Yet
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
                At livethelife.tv, we&apos;re no strangers to plotting escape routes — from the cubicle to the coastline, from burnout to bliss, from status to soul. But sometimes, the journey isn&apos;t about external change. Sometimes, the most profound shift happens within. And it turns out, science agrees.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
                Take a closer look at the graph above. It&apos;s not just data. It&apos;s a quiet revolution. It&apos;s the story of your life — told by your own levels of joy, mapped across decades.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
                And what it reveals might surprise you.
              </p>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                📉 The Descent: When Life Gets Real (and Weirdly Less Fun)
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                From your 20s to your late 40s, happiness declines in a subtle but steady drift. It&apos;s not dramatic. No train wrecks. Just a slow erosion — like waves smoothing stone.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                In your 20s, everything hums with potential. You believe you can be anything. You experiment. You move fast, dream loud, and bounce back quickly. You&apos;re clocking in at 7/10 on the happiness scale — not bad for someone still figuring out how taxes work.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                By your 30s, you&apos;re &quot;adulting&quot; hard. Building careers. Growing families. Chasing validation in titles and square footage. But the graph tells the truth most won&apos;t admit at dinner parties: happiness dips. At 35, you&apos;re a 6.2.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                By 50? It bottoms out at 5.2.
              </p>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                🧠 What&apos;s Really Happening: It&apos;s Not a Crisis, It&apos;s a Reckoning
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                This isn&apos;t about midlife crisis clichés — convertibles and questionable hair decisions. What the data shows is deeper, more human.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Researchers have found that this U-curve of happiness exists across cultures, across continents, even in primates. Yes, chimps get sad in middle age too.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                So what gives?
              </p>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <p className="italic text-yellow-400 md:text-3xl lg:text-4xl font-serif mb-10">&quot;In our 40s and 50s, we start confronting the gap between expectation and reality,&quot; says Dr. Jonathan Rauch, author of The Happiness Curve. &quot;We&apos;ve built the life we were told to want, and yet something feels...off.&quot;</p>
                <p className="text-white/80">You might be successful on paper — but paper doesn&apos;t hug you back. You might be secure — but security isn&apos;t the same as freedom.</p>
                <p className="text-white/80">So the dip? It&apos;s not failure. It&apos;s feedback. It&apos;s your soul whispering: what now?</p>
              </div>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                🌅 The Rise: Joy, Reimagined
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Here&apos;s the plot twist.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                After 50, the curve rises. Like, really rises.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                At 60, happiness scores bounce back to early 30s levels. By 70, they rival your twenties — and you&apos;re wiser, calmer, and way less likely to stay up late just to prove a point.
              </p>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <ul className="space-y-2 text-white/80 mb-8 max-w-4xl list-disc list-inside text-lg md:text-2xl leading-relaxed">
                  <li>• <span className="font-semibold text-yellow-400">Perspective.</span> You&apos;ve stopped chasing shiny things that don&apos;t shine inside.</li>
                  <li>• <span className="font-semibold text-yellow-400">Acceptance.</span> You embrace imperfections — in yourself, in others, in the world.</li>
                  <li>• <span className="font-semibold text-yellow-400">Freedom.</span> Your time, your rules. You finally get to live the life you choose.</li>
                </ul>
              </div>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                People start traveling again — not to escape, but to connect. They pick up old paintbrushes, new surfboards, and rediscover the joy of play.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                At livethelife.tv, we see it daily: Artists launching their boldest work in their 60s. Surfers learning their best technique in their 50s. Travelers falling in love with slowness. Iconic humans becoming their true selves after the &quot;career chapter.&quot;
              </p>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                🌀 The Bigger Picture: Your U-Curve as a Sacred Arc
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Here&apos;s the radical reframe: That dip at midlife? That&apos;s not a valley of despair — that&apos;s the tunnel into truth.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                It&apos;s the moment you wake up to your own script. Not the one written by culture, capitalism, or your LinkedIn bio — but your story. With all its chaos, color, and cosmic weirdness.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                This curve isn&apos;t a glitch. It&apos;s a rite of passage.
              </p>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                🌍 Live the Life, Curve and All
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                At livethelife.tv, we believe happiness is nonlinear. It&apos;s a remix, a spiral, a tide.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                That&apos;s why we create artist residencies on volcanic islands. Why we curate luxury hideaways for cultural nomads. Why we build Web3 tools that help people invest not just in assets, but in meaning.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Because when you zoom out — the curve tells you this:
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                The second half of life isn&apos;t a decline. It&apos;s a crescendo.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                So if you&apos;re 45 and restless — good. That&apos;s your intuition kicking in.<br/>
                If you&apos;re 55 and reinventing — we salute you.<br/>
                If you&apos;re 65 and more alive than ever — we see you.
              </p>

              <div className="h-px w-full bg-yellow-500/30 my-8"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                Your Happiness Isn&apos;t Behind You — It&apos;s Just Getting Started.
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Now tell us: What curve are you riding? And how can we help you bend it toward joy?
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
                Let&apos;s talk Web3, midlife magic, or booking that artist residency — which adventure are you leaning into next?
              </p>
            </div>
          </div>

          {/* Dalio Leverage/U-Curve Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] max-w-7xl mx-auto my-12">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">Why Your 40s Feel Like Collapse — And How to Leverage the U-Curve Instead</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Your 40s will wreck you.<br/>
              You&apos;re working 60-hour weeks.<br/>
              Your kids need money.<br/>
              Your parents need care.<br/>
              Your energy is down, but the expectations are up.<br/>
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Economists call it the &quot;midlife squeeze.&quot;<br/>
              Psychologists call it the happiness U-curve.<br/>
              Ray Dalio calls it the turning point that made him.<br/>
              And most people? They never see it coming.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">📉 The U-Curve Is Real. So Is the Squeeze.</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Across 132 countries, the data tells the same story: Happiness hits rock bottom between ages 45 and 50.<br/>
              It&apos;s not about mood. It&apos;s math.<br/>
              You&apos;re part of the &quot;sandwich generation&quot; — financially supporting children while caring for aging parents.<br/>
              47% of adults in their 40s and 50s are living this double-load reality.
            </p>
            <ul className="text-white/80 mb-8 max-w-4xl list-disc list-inside text-lg md:text-2xl leading-relaxed">
              <li>Raising a child: $233,610</li>
              <li>Eldercare: $75,000/year</li>
              <li>Career: Peak earning years with zero margin for error</li>
            </ul>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Meanwhile, your brain is in full-blown survival mode:<br/>
              Your amygdala — the fight-or-flight control center — actually grows by 20%.<br/>
              Your decision-making capacity? It drops by 13 IQ points under chronic stress.<br/>
              This isn&apos;t burnout. It&apos;s biology.<br/>
              And this moment — this dip — breaks most people.<br/>
              But it doesn&apos;t have to.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🧭 Ray Dalio&apos;s Midlife Collapse Was the Beginning of His Empire</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              In 1982, Ray Dalio got it all wrong.<br/>
              His firm, Bridgewater Associates, was on the brink.<br/>
              He lost clients, money, reputation.<br/>
              But instead of hiding, he built a framework.<br/>
              <span className="italic text-yellow-400 md:text-3xl lg:text-4xl font-serif mb-10">&quot;The key to thriving in complexity is leverage.&quot;<br/>— Dalio</span>
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              He called it the Leverage Principle:<br/>
              More output, less input.<br/>
              50:1 efficiency, clarity, and trust.<br/>
              The kind of operating system midlife demands.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Here&apos;s how it works:
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">📈 The 3 Pillars of the U-Curve Rebound</h3>
            <ol className="list-decimal list-inside text-white/80 mb-8 space-y-2 text-lg md:text-2xl leading-relaxed max-w-4xl">
              <li>
                <span className="font-semibold text-yellow-400">Mental Clarity → Amplify Focus</span><br/>
                Dalio starts every morning with Transcendental Meditation.<br/>
                Science backs him up: cortisol (your stress hormone) drops by 30%.<br/>
                Your 40s aren&apos;t the time to grind harder. They&apos;re the time to think sharper.<br/>
                Midlife leverage begins with protecting your mind.<br/>
                Build rituals. Own your mornings. Block your best hours for your deepest moves.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Relationship Optimization → Audit Your Circle</span><br/>
                The longest-running Harvard study on happiness landed on one conclusion:<br/>
                &quot;The quality of your relationships determines the quality of your life.&quot;<br/>
                Dalio runs relationship audits — regularly.<br/>
                He identifies:<br/>
                <ul className="list-disc list-inside ml-6 text-lg md:text-2xl leading-relaxed">
                  <li>Energy creators vs. energy drainers</li>
                  <li>Who helps him grow</li>
                  <li>Who distracts from the mission</li>
                </ul>
                He doesn&apos;t ghost. He recalibrates.<br/>
                Midlife isn&apos;t about cutting people off. It&apos;s about realigning expectations.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Strategic Leverage → Multiply Your Impact</span><br/>
                This is where the curve flips.<br/>
                Dalio gets 50x return on time by using:<br/>
                <ul className="list-disc list-inside ml-6 text-lg md:text-2xl leading-relaxed">
                  <li>Technology to codify once, deploy forever</li>
                  <li>Principles to automate decision-making</li>
                  <li>People who are better at the work than him</li>
                </ul>
                He starts each day with 2–3 high-leverage actions — tasks that create disproportionate returns.<br/>
                Then he aligns those actions with his peak mental state.<br/>
                Most people waste their best energy on emails.<br/>
                Dalio spends his on building empires.
              </li>
            </ol>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🌀 Reframing the U-Curve: It&apos;s Not Decline — It&apos;s the Setup</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              At livethelife.tv, we don&apos;t see your 40s as a crisis.<br/>
              We see them as a system upgrade.<br/>
              The dip isn&apos;t dysfunction. It&apos;s data.<br/>
              It&apos;s the part of the story where the hero stops trying to win the wrong game…<br/>
              and starts designing a life worth scaling.<br/>
              Just like startups hit founder fatigue after product-market fit,<br/>
              life hits complexity once you&apos;ve built something worth protecting.<br/>
              But that&apos;s when you stop sprinting and start scaling with strategy.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">✨ The U-Curve Is Your Invitation to Reinvent</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              When you feel like it&apos;s all collapsing, you&apos;re actually standing at the base of the next arc.<br/>
              It&apos;s not about doing more. It&apos;s about doing differently.
            </p>
            <ul className="text-white/80 mb-8 max-w-4xl list-disc list-inside text-lg md:text-2xl leading-relaxed">
              <li>Meditate.</li>
              <li>Audit.</li>
              <li>Leverage.</li>
              <li>Protect your attention like capital.</li>
              <li>Build your compound time engine.</li>
            </ul>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              The U-curve is real.<br/>
              But so is the rebound.<br/>
              And it&apos;s even stronger when you build it on your own terms — not society&apos;s playbook.
            </p>
          </div>

          {/* Final Note Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] max-w-7xl mx-auto my-12">
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">The U-Curve, Privilege, and the Power to Reimagine</h3>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              <span className="font-bold text-yellow-400">The U-Curve Is Real — But Context Is Everything</span><br/>
              The happiness U-curve is a well-documented phenomenon, surfacing in data from dozens of countries, income brackets, and even among our primate cousins. But it&apos;s not a one-size-fits-all destiny. For Boomers and Gen X, the curve was cushioned by affordable homes, stable jobs, and strong safety nets. Millennials and Gen Z, meanwhile, are navigating a world of soaring costs, gig work, debt, and relentless uncertainty.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              <span className="font-bold text-yellow-400">The Shape Remains — But the Valley Feels Deeper</span><br/>
              Today&apos;s younger generations still trace a U-shaped arc, but the starting line is lower, the dip is steeper, and the climb out is less assured—unless we actively rewrite the script. At LiveTheLife.tv, we don&apos;t pine for the past. We&apos;re here to help you build a future rooted in autonomy, creativity, and community—leveraging Web3 and new models of meaning.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              <span className="font-bold text-yellow-400">If Your Curve Looks Like a W, You&apos;re Not Broken</span><br/>
              If your happiness feels more like a rollercoaster or a flatline, it&apos;s not a personal failing—it&apos;s a reflection of the times. Thriving now means redefining success: choosing autonomy over algorithms, ownership over extraction, and meaning over mindless consumption.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              <span className="font-bold text-yellow-400">Let&apos;s Bend the Curve — On Our Terms</span><br/>
              We may not inherit the privileges of previous generations, but we can choose to bend our own arc—toward art, joy, and collective liberation. The boomer curve was easier; ours can be more intentional, more communal, and more deeply aligned with what matters.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 font-semibold mb-8">
              Ready to co-author that future? Let&apos;s build it—curve by curve.
            </p>
          </div>

          {/* Fork in the Wave Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] max-w-7xl mx-auto my-12">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">The Fork in the Wave: Where the U-Curve Breaks After 2030</h2>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              We&apos;ve shown how your 40s can flip from crushing squeeze to creative springboard, but the larger arc of society is about to split in two—like a perfect wave that closes out for some and opens into a clean barrel for others. Therefore it&apos;s time to read the swell before it hits.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🌊 2025-2030 · The Set-Up</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              AGI jumps from labs to laptops. Mid-skill ladders vanish; equity flows to the top 10%. Municipal skies fill with drone swarms, sold as &quot;situational awareness,&quot; but really fencing crowds into data corrals. Governments plug the gaps with UBI stipends—just enough dopamine to dull revolt.
            </p>
            <p className="italic text-yellow-400 md:text-3xl lg:text-4xl font-serif mb-10 max-w-4xl">
              LiveTheLife.tv takeaway: Skill up on ownership, not just output. Collect equity in open-source AI or culture DAOs the way we collect secret surf spots—because access beats possession when the tide shifts.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🌴 2030-2035 · The Split</h3>
            <ul className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl list-disc list-inside">
              <li>AGI⁺ Nouveau Rich retreat to lidar-ringed cul-de-sacs: private reefs, biometric gates, on-demand everything.</li>
              <li>UBI⁺ Underbelly scrolls hyper-personal feeds, praying to GPT-prophets that whisper why the status quo is &quot;just the way.&quot;</li>
            </ul>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Birth licenses replace baby showers, issued only to those who pass a &quot;resource viability score.&quot; Revolts ignite on socials, fizzle under drone spotlights.
            </p>
            <p className="italic text-yellow-400 md:text-3xl lg:text-4xl font-serif mb-10 max-w-4xl">
              LiveTheLife.tv takeaway: Culture still slips through cracks. A single meme, a song, a piece of generative art can cross every firewall—use it.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🧭 2035-2045 · Two Futures, One Choice</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Path A · The Great Silencing</h4>
                <ul className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl list-disc list-inside">
                  <li>Enclaves hoard water, land, algorithmic alpha.</li>
                  <li>AI gospels justify hierarchy.</li>
                  <li>Protest equals instant geofence.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Path B · The Quiet Rebellion</h4>
                <ul className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl list-disc list-inside">
                  <li>Mesh economies trade energy, art, micro-manufacturing peer-to-peer.</li>
                  <li>Open-source agents leak, fork, iterate in the wild.</li>
                  <li>Network states form around values, not ZIP codes.</li>
                </ul>
              </div>
            </div>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Which breaks first—walls or waves? History says walls crack wherever creativity seeps in.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🛠️ How to Bend Your Personal Curve</h3>
            <ol className="list-decimal list-inside text-white/80 mb-8 space-y-2 text-lg md:text-2xl leading-relaxed max-w-4xl">
              <li><span className="font-semibold text-yellow-400">Own a Slice of the Toolchain</span><br/>Equity in data DAOs or open agents &gt; salary in legacy firms.</li>
              <li><span className="font-semibold text-yellow-400">Compound Relationships, Not Credentials</span><br/>Trust networks move faster than diplomas once AI grades the tests.</li>
              <li><span className="font-semibold text-yellow-400">Curate Low-Entropy Zones</span><br/>Morning surf, nightly meditation—protect headspace like capital.</li>
              <li><span className="font-semibold text-yellow-400">Meme With Intent</span><br/>Narratives travel lighter than drones and slip past every checkpoint.</li>
            </ol>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🏄‍♂️ The LiveTheLife.tv Stance</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              We don&apos;t accept a future of gated cul-de-sacs and drone-policed sunsets. We&apos;re carving a third line: luxury that remains porous, art that stays open-source, and travel that rewires perspective rather than escapes it.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              The wave is forming. But waves are invitations, not verdicts. Therefore the only question left is:
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed text-yellow-400 font-extrabold mb-8 max-w-3xl">
              Will you duck-dive beneath the coming set—or paddle into the barrel and shape the next horizon with us?
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 font-semibold mb-8 max-w-4xl">
              Drop in, or drift. What&apos;s your move?
            </p>
          </div>

          {/* Bitcoin: The Rip-Current Beneath the Fork Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] max-w-7xl mx-auto my-12">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 mb-12 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">Bitcoin: The Rip-Current Beneath the Fork</h2>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10 max-w-3xl">
              We&apos;ve mapped how society may split between AGI-powered enclaves and UBI-padded underbellies, but there&apos;s a third force rolling beneath both shorelines: Bitcoin. Therefore any future forecast that ignores this orange undertow is reading the set without spotting the rip current.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🪙 1.  The AGI⁺ Class Will Hoard Satoshis, Not Cash</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Spot-Bitcoin ETFs now pull in billions of dollars a week, giving institutions a compliance-wrapped gateway to hard-capped digital gold. BlackRock alone steered more than $400 million in a single day, pushing total ETF inflows past $46 billion in under six months.<br/>
              Corporate treasuries are already rebalancing. When AGI starts printing alpha at 50 : 1 leverage, the nouveau rich will hedge that fiat overflow in 21 million scarce coins.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🌐 2.  Mesh-Economy Lifeline for the UBI⁺ Majority</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              Lightning Network fees have crashed to fractions of a cent, making sub-penny payments viable for content, energy swaps, even IoT machine-to-machine rentals.<br/>
              Add BRC-20 and Ordinals, and suddenly Bitcoin isn&apos;t just a vault—it&apos;s a creator rail projected to unlock a $4.5 billion NFT market by 2025.<br/>
              In Path B (&quot;Quiet Rebellion&quot;), peer-to-peer sats fund local micro-factories, surf-hostel DAOs, and off-grid art residencies—beyond any central choke point.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🛡️ 3.  Birth-Right Money in a Permissioned-Procreation World</h3>
            <p className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl">
              When population &quot;stewardship scores&quot; decide who may reproduce, parents can time-lock Bitcoin for future heirs—seed phrases memorized, etched on art, or embedded in generative glyphs. No gatekeeper, no veto.
            </p>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🚨 4.  Why The Great Silencing Still Fears Orange</h3>
            <ul className="text-lg md:text-2xl leading-relaxed text-white/80 mb-8 max-w-4xl list-disc list-inside">
              <li>Drone swarms can geofence bodies, not keys.</li>
              <li>KYC walls shove more liquidity into non-custodial dark pools.</li>
              <li>AI gospels may preach post-scarcity serenity, but Bitcoin&apos;s fixed supply is the ultimate counter-narrative to infinite-money PR.</li>
            </ul>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">🏄‍♂️ LiveTheLife.tv Playbook — Riding, Not Fighting, the Rip</h3>
            <ol className="list-decimal list-inside text-white/80 mb-8 space-y-2 text-lg md:text-2xl leading-relaxed max-w-4xl">
              <li><span className="font-semibold text-yellow-400">Stack Sovereign Liquidity</span><br/>Allocate a slice of treasury or personal net worth to cold-storage BTC or low-fee ETFs—your hedge against AGI-inflated assets and UBI-flatlined wages.</li>
              <li><span className="font-semibold text-yellow-400">Leverage Layer-2 Flow</span><br/>Launch Lightning-native revenue: sat-streamed surf cams, micro-paywalled editorials, Bitcoin-secured art drops.</li>
              <li><span className="font-semibold text-yellow-400">Seed Mesh Nodes Early</span><br/>Partner with Lightning hubs in surf towns and artist residencies—proof-of-work meets proof-of-place.</li>
              <li><span className="font-semibold text-yellow-400">Meme With Intent</span><br/>Weave Bitcoin lore into every story: sovereignty, scarcity, renaissance. Memes travel lighter than drones and slip past every checkpoint.</li>
            </ol>
            <div className="h-px w-full bg-yellow-500/30 my-8"></div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-yellow-500 mb-6">Bottom Line</h3>
            <p className="text-2xl md:text-3xl leading-relaxed text-yellow-400 font-extrabold mb-8 max-w-3xl">
              The coming bifurcation may wall off lidar-ringed cul-de-sacs, but Bitcoin seeps through every crack, therefore acting both as the castle vault and the rebel&apos;s lifeline. Ignore it, and you&apos;ll surf the future on someone else&apos;s board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
