"use client";

import Image from "next/image";

export default function GenArtPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Generative Art • Digital Painting • Web3</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Materialistic
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">When Code Paints Like a Human</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/materialistic.png"
                alt="Materialistic Generative Art Piece"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A Painter&apos;s System, Not a Systematic Painter
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In an era where generative art often leans toward chaos, maximalism, or glitch aesthetics, &quot;Materialistic&quot; emerges as a quiet rebellion. Created by LTL ART GEN, this project doesn&apos;t shout; it whispers. Its compositions are serene, spare, and painterly — less algorithmic fever dream, more Rothko room at dusk.
              </p>
              <p className="text-lg">
                But don&apos;t let the soft pastels and linen textures fool you. Behind each tranquil field lies a computational ballet, choreographed by a highly technical, seed-driven system coded in Three.js. This is where modernism meets the modern machine.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎨</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Painterly System
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Computational Artistry
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🧬</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Materiality
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Digital Texture
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Print Ready
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Archival Quality
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Materiality Without the Material
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                What makes Materialistic so resonant is its attention to material presence in a medium that is fundamentally immaterial. Every field is layered with pigment-like overlays. Light noise simulates impasto buildup. Subtle brushing reveals painterly gestures that feel familiar — almost human.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Edge perturbation algorithms</li>
                  <li>Custom fragment shaders</li>
                  <li>Linen canvas textures</li>
                  <li>Pigment-like overlays</li>
                  <li>Light noise simulation</li>
                  <li>Seed-driven system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Print & Chain Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Designed for Print. Minted for Chain.
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Unlike many Web3-native art projects that prioritize animation, token gating, or marketplace flex, Materialistic was built for permanence. Every piece is output at 11x14 inches, 300 DPI. Print resolution. Archival-ready.
              </p>
              <p className="text-lg">
                And yet it&apos;s also mintable. The engine exports trait JSON and embeds the seed in the URL. Editions can be frozen, minted, and collected — without ever compromising the original resolution or fidelity.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Signature Is in the Silence
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                There is no central motif. No branding. No loud claim to innovation. Just fields. Shapes. Textures. Light. Materialistic doesn&apos;t scream &quot;generative art.&quot; It meditates on it.
              </p>
              <p className="text-lg">
                This is the rare system where restraint is radical. Where the goal isn&apos;t to impress you with code — it&apos;s to make you forget code entirely. And in a space increasingly dominated by spectacle, that feels like the most subversive act of all.
              </p>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Inside the Code of Materialistic
            </h3>
            <div className="space-y-8">
              {/* Stack Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🎛️ The Generative Stack</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    At its core, Materialistic is a real-time rendering engine built with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Three.js for scene composition</li>
                    <li>WebGL fragment + vertex shaders for texture simulation</li>
                    <li>EffectComposer for postprocessing</li>
                    <li>Pure JS logic for trait seeding and exportable metadata</li>
                  </ul>
                  <p className="text-white/80 font-satoshi mt-4">
                    Each output is rendered at 3300x4200 pixels (11x14&quot; @ 300 DPI), with preserved drawing buffers for print-quality export.
                  </p>
                </div>
              </div>

              {/* Palette Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🎨 Soft Power: Palette Engineering</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Unlike many systems that randomly pick from preset swatches, Materialistic uses a weighted soft palette inspired by Diebenkorn&apos;s Ocean Park series:
                  </p>
                  <pre className="bg-black/30 p-4 rounded-none border border-yellow-500/20 overflow-x-auto">
                    <code className="text-yellow-500/90">
{`const SOFT_PALETTE = [
  '#F5E6D3','#E6D5C7','#F2F0EB', // creams
  '#B7D7B9','#A3B8D9','#F7C873', // sage, sky, ochre
  '#E8C4B8','#F2C1D1','#7A9E7E'  // blush, green accents
];`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Fields Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧬 Fields, Not Shapes</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The canvas is divided into fields, not shapes. Think Marden, not Mondrian. Each field is generated from seeded mood logic:
                  </p>
                  <pre className="bg-black/30 p-4 rounded-none border border-yellow-500/20 overflow-x-auto">
                    <code className="text-yellow-500/90">
{`const mood = getMoodFromSeed(seed); // 'open', 'dense', 'balanced'

// open → 2–3 large fields, subtle gradients
// dense → 4–9 tightly packed shapes, rich in contrast
// balanced → mid-range complexity`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Shaders Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🖌️ Shaders That Think Like Brushes</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The heart of Materialistic lives in the fragment shaders. Each field applies multiple layers of texture and color:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>A base color</li>
                    <li>An overlay color (slightly tinted variation)</li>
                    <li>A wash color (soft layer)</li>
                    <li>A gradient (vertical, horizontal, or striped)</li>
                    <li>Impasto buildup via FBM</li>
                    <li>Dry brush simulation near edges</li>
                    <li>Canvas grain and linen texture</li>
                    <li>Optional ghost overlays</li>
                  </ul>
                </div>
              </div>

              {/* Metadata Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧬 Traits for NFTs & Metadata</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Every piece exports a complete set of traits that can be used for minting and re-rendering:
                  </p>
                  <pre className="bg-black/30 p-4 rounded-none border border-yellow-500/20 overflow-x-auto">
                    <code className="text-yellow-500/90">
{`{
  seed,
  paletteIndex,
  huePerm: [0, 2, 1],
  foilCorner: 3,
  jitterOffsets: [...],
  timestamp: ...
}`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧠 Final Thought: Code That Curates</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi">
                    Materialistic isn&apos;t about generative art. It&apos;s about generative curation. This is not a sandbox for randomness — it&apos;s a carefully balanced, deeply tuned system where every variable has a purpose, every texture is layered with care, and every frame tells a quiet story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}