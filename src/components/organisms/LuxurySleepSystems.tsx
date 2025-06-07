import React from 'react';

interface SleepSystem {
  name: string;
  features: string[];
  investment?: string;
  showroom?: string;
}

interface ModernAlternative {
  name: string;
  materials: string;
  construction: string;
  feel: string;
  priceRange: string;
  closestToHastens: boolean;
  keyFeatures: string[];
  certifications: string[];
  trialPeriod: string;
  warranty: string;
  specialFocus?: string;
}

const sleepSystems: SleepSystem[] = [
  {
    name: "Hästens Vividus",
    features: [
      "Handcrafted in Sweden since 1852",
      "Natural materials: horsehair, cotton, wool, flax",
      "No synthetic materials or memory foam",
      "Layered construction for optimal support",
      "Superior temperature regulation",
      "Customizable firmness levels"
    ],
    investment: "$10,000–$50,000+ (most models; special editions higher)",
    showroom: "Available at select Hästens showrooms"
  },
  {
    name: "Hästens Grand Vividus",
    features: [
      "Flagship model with enhanced comfort layers",
      "Extra-deep construction for maximum support",
      "Premium natural materials throughout",
      "Hand-tufted for durability",
      "Customizable size and firmness",
      "Lifetime warranty"
    ],
    investment: "$400,000+ (special edition)",
    showroom: "Available at select Hästens showrooms"
  },
  {
    name: "Hästens 2000T",
    features: [
      "Classic Hästens construction",
      "Natural materials and horsehair",
      "Excellent value in the Hästens range",
      "Proven comfort and durability",
      "Available in multiple sizes",
      "25-year warranty"
    ],
    investment: "$10,000–$30,000 (depending on size)",
    showroom: "Available at select Hästens showrooms"
  }
];

const eightSleep: ModernAlternative = {
  name: "Eight Sleep",
  materials: "Smart technology, premium foam, cooling system",
  construction: "Smart mattress with Pod Pro cover",
  feel: "Temperature-regulated, adaptive support",
  priceRange: "$2,495 (queen)",
  closestToHastens: false,
  keyFeatures: [
    "Dual-zone temperature control",
    "Sleep tracking and analytics",
    "Automatic temperature adjustment",
    "Smart home integration",
    "Biometric monitoring",
    "Recovery metrics"
  ],
  certifications: [
    "CertiPUR-US",
    "GREENGUARD Gold",
    "OEKO-TEX"
  ],
  trialPeriod: "100 nights",
  warranty: "10 years",
  specialFocus: "Best for tech-forward sleep optimization"
};

export default function LuxurySleepSystems() {
  return (
    <div>
      <div className="w-full my-12 p-10 relative z-10 flex justify-center bg-transparent border-3 border-yellow-500 rounded-3xl shadow-[5px_5px_0px_0px_rgba(234,179,8,1),0_4px_20px_rgba(234,179,8,0.15)] overflow-hidden items-center">
        <iframe
          src="https://www.youtube.com/embed/kqGpjTdbrBo"
          title="Luxury Sleep Systems Showcase"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[56vw] max-h-[600px] min-h-[300px] border-none rounded-none bg-[#181818] block lg:h-[600px]"
        />
      </div>

      <div className="text-left space-y-12 pt-40 pb-24 px-4 relative z-10">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-6 font-light text-left w-full">
          Premium Sleep Technology
        </p>
        <h1 className="text-left">
          <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
            🛏️ Luxury Sleep Systems
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row items-start justify-start mt-8 gap-4 sm:gap-0">
          <div className="h-px w-32 bg-yellow-500/30"></div>
          <p className="mx-8 text-base sm:text-lg text-white/70 font-light italic text-left">Curated selection of premium sleep systems for your dream home</p>
          <div className="h-px w-32 bg-yellow-500/30"></div>
        </div>
      </div>

      <p className="mb-4">
        The master suite features a curated selection of the worlds finest sleep systems, each offering unparalleled comfort through natural materials and expert craftsmanship. Our recommendations focus on mattresses that deliver the signature Hästens-like experience of floating on a cloud, while maintaining exceptional breathability and support.
      </p>
      
      <div className="space-y-6">
        {sleepSystems.map((system, index) => (
          <div key={system.name} className="bg-black/40 p-6 rounded-lg border border-yellow-500/30">
            <h4 className="text-yellow-500 font-semibold mb-2">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : ""} {system.name}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {system.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
              {system.investment && <li>Investment: {system.investment}</li>}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-yellow-500 font-semibold mb-4">Understanding True Hästens-Level Quality</h4>
        <p className="mb-4 text-gray-300">
          While all listed options offer premium comfort, it is important to understand what makes Hästens truly unique: artisanal, horsehair-filled construction built layer-by-layer by hand, delivering unmatched breathability and that signature floating sensation.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-yellow-500/30">
                <th className="text-left py-2">Brand</th>
                <th className="text-left py-2">Core Fill</th>
                <th className="text-left py-2">Spring Feel</th>
                <th className="text-left py-2">Breathability</th>
                <th className="text-left py-2">Country</th>
                <th className="text-left py-2">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-yellow-500/10">
                <td>Hästens</td>
                <td>Horsehair</td>
                <td>Floating-soft</td>
                <td>🌬️🌬️🌬️</td>
                <td>Sweden</td>
                <td>Gold standard</td>
              </tr>
              <tr className="border-b border-yellow-500/10">
                <td>Vispring</td>
                <td>Horsehair/Wool</td>
                <td>Firmer-buoyant</td>
                <td>🌬️🌬️</td>
                <td>UK</td>
                <td>Best true alternative</td>
              </tr>
              <tr className="border-b border-yellow-500/10">
                <td>Savoir Beds</td>
                <td>Cashmere/Hair</td>
                <td>Tailored bounce</td>
                <td>🌬️🌬️🌬️</td>
                <td>UK</td>
                <td>Ultra-custom but pricey</td>
              </tr>
              <tr className="border-b border-yellow-500/10">
                <td>Winstons Beds</td>
                <td>Horsehair/Wool</td>
                <td>Plush + rebound</td>
                <td>🌬️🌬️</td>
                <td>UK (ships FR)</td>
                <td>Hidden gem – real Hästens rival</td>
              </tr>
              <tr className="border-b border-yellow-500/10">
                <td>André Renault</td>
                <td>Latex/Memory Foam</td>
                <td>Soft-supportive</td>
                <td>🌬️🌬️</td>
                <td>France</td>
                <td>French luxury, less breathability</td>
              </tr>
              <tr>
                <td>Simmons (France)</td>
                <td>Pocket springs/Foam</td>
                <td>Plush/Structured</td>
                <td>🌬️🌬️</td>
                <td>France</td>
                <td>Widely available, firmer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-black/40 p-6 rounded-lg border border-yellow-500/30">
        <h4 className="text-yellow-500 font-semibold mb-4">Modern Luxury: Smart Sleep Technology</h4>
        <p className="mb-4 text-gray-300">
          While traditional luxury brands like Hästens set the standard for natural materials and craftsmanship, modern technology offers a different kind of luxury through personalized sleep optimization. Here&apos;s our featured smart sleep system:
        </p>

        <div className="bg-black/40 p-6 rounded-lg border border-yellow-500/30">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h5 className="text-yellow-500 font-semibold">{eightSleep.name}</h5>
              <p className="text-gray-400 text-sm">{eightSleep.priceRange}</p>
            </div>
            <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm">
              Smart Sleep Technology
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h6 className="text-yellow-500/80 font-medium mb-2">Materials & Construction</h6>
              <p className="text-gray-300 text-sm mb-2">{eightSleep.materials}</p>
              <p className="text-gray-300 text-sm">{eightSleep.construction}</p>
            </div>
            <div>
              <h6 className="text-yellow-500/80 font-medium mb-2">Feel & Focus</h6>
              <p className="text-gray-300 text-sm mb-2">{eightSleep.feel}</p>
              {eightSleep.specialFocus && (
                <p className="text-gray-300 text-sm italic">{eightSleep.specialFocus}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h6 className="text-yellow-500/80 font-medium mb-2">Key Features</h6>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {eightSleep.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-yellow-500/80 font-medium mb-2">Certifications</h6>
              <div className="flex flex-wrap gap-2">
                {eightSleep.certifications.map((cert, i) => (
                  <span key={i} className="bg-yellow-500/10 text-yellow-500/80 px-2 py-1 rounded text-xs">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400 border-t border-yellow-500/10 pt-4">
            <span>Trial: {eightSleep.trialPeriod}</span>
            <span>Warranty: {eightSleep.warranty}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h5 className="text-yellow-500 font-semibold mb-2">🔥 Why Choose Eight Sleep?</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Advanced temperature control with dual-zone technology</li>
            <li>Comprehensive sleep tracking and analytics</li>
            <li>Smart home integration for automated comfort</li>
            <li>Premium materials with multiple certifications</li>
            <li>100-night trial period for risk-free testing</li>
            <li>10-year warranty for long-term peace of mind</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 mb-8 text-yellow-500/80 text-sm italic">
        *Hästens prices vary by region, size, and customization. Most models range from $10,000–$50,000+, with special editions like Grand Vividus exceeding $400,000. Contact Hästens for a precise quote.*
      </div>

      <div className="mt-8 bg-black/40 p-6 rounded-lg border border-yellow-500/30">
        <h4 className="text-yellow-500 font-semibold mb-4">Top Hästens Alternatives: European Luxury Sleep Systems</h4>
        <div className="space-y-6">
          <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
            <h5 className="text-yellow-500 font-semibold mb-2">🥇 Vispring Regal Superb</h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Exceptionally soft top layer with floating sensation</li>
              <li>Premium materials: Horsehair, Shetland wool, cotton</li>
              <li>Hand-nested calico pocket springs for optimal support</li>
              <li>Investment: €6,000–€9,000 (size-dependent)</li>
            </ul>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
            <h5 className="text-yellow-500 font-semibold mb-2">🥈 Savoir Beds No. 2/4</h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Pillow-soft comfort with subtle rebound</li>
              <li>Luxury materials: Horsehair, cashmere, cotton, wool</li>
              <li>Fully customizable construction</li>
              <li>Showroom: Rue du Bac, Paris</li>
              <li>Investment: €10,000+ (customizable)</li>
            </ul>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
            <h5 className="text-yellow-500 font-semibold mb-2">🥉 Winstons Beds Heritage Collection</h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Deep softness with natural body contouring</li>
              <li>100% organic fillings including horsetail and cashmere</li>
              <li>Handcrafted construction with horsehair core</li>
              <li>Available through WinstonsBeds.com</li>
              <li>Investment: €4,000–€6,500 (king-size)</li>
            </ul>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
            <h5 className="text-yellow-500 font-semibold mb-2">André Renault</h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Hybrid or latex-core with memory foam construction</li>
              <li>Premium &quot;Millésime&quot; and &quot;Héritage&quot; collections</li>
              <li>French-made luxury craftsmanship</li>
              <li>Excellent softness, slightly less breathability than Hästens</li>
              <li>Available through authorized French retailers</li>
            </ul>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/20">
            <h5 className="text-yellow-500 font-semibold mb-2">Simmons (France)</h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Pocket-spring base with foam/latex top</li>
              <li>Beautyrest Elite / Black series for premium softness</li>
              <li>Plush comfort with structured support</li>
              <li>Ideal for those preferring slightly firmer base than Hästens</li>
              <li>Widely available through French retailers</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-yellow-500 font-semibold mb-4">Comparison Table</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead>
                <tr className="border-b border-yellow-500/30">
                  <th className="text-left py-2">Brand</th>
                  <th className="text-left py-2">Core Fill</th>
                  <th className="text-left py-2">Spring Feel</th>
                  <th className="text-left py-2">Breathability</th>
                  <th className="text-left py-2">Country</th>
                  <th className="text-left py-2">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-yellow-500/10">
                  <td>Hästens</td>
                  <td>Horsehair</td>
                  <td>Floating-soft</td>
                  <td>🌬️🌬️🌬️</td>
                  <td>Sweden</td>
                  <td>Gold standard</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td>Vispring</td>
                  <td>Horsehair/Wool</td>
                  <td>Firmer-buoyant</td>
                  <td>🌬️🌬️</td>
                  <td>UK</td>
                  <td>Best true alternative</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td>Savoir Beds</td>
                  <td>Cashmere/Hair</td>
                  <td>Tailored bounce</td>
                  <td>🌬️🌬️🌬️</td>
                  <td>UK</td>
                  <td>Ultra-custom but pricey</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td>Winstons Beds</td>
                  <td>Horsehair/Wool</td>
                  <td>Plush + rebound</td>
                  <td>🌬️🌬️</td>
                  <td>UK (ships FR)</td>
                  <td>Hidden gem – real Hästens rival</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td>André Renault</td>
                  <td>Latex/Memory Foam</td>
                  <td>Soft-supportive</td>
                  <td>🌬️🌬️</td>
                  <td>France</td>
                  <td>French luxury, less breathability</td>
                </tr>
                <tr>
                  <td>Simmons (France)</td>
                  <td>Pocket springs/Foam</td>
                  <td>Plush/Structured</td>
                  <td>🌬️🌬️</td>
                  <td>France</td>
                  <td>Widely available, firmer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 text-yellow-500/80 text-xs italic">
          *All prices and features as of 2024. These brands represent the best European alternatives for those seeking Hästens-level comfort and craftsmanship.*
        </div>
      </div>
    </div>
  );
} 