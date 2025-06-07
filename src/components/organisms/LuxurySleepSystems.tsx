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
}

const sleepSystems: SleepSystem[] = [
  {
    name: "Vispring Regal Superb",
    features: [
      "Exceptionally soft top layer with floating sensation",
      "Premium materials: Horsehair, Shetland wool, cotton",
      "Hand-nested calico pocket springs for optimal support",
    ],
    investment: "€6,000–€9,000 (size-dependent)"
  },
  {
    name: "Savoir Beds No. 2/4",
    features: [
      "Pillow-soft comfort with subtle rebound",
      "Luxury materials: Horsehair, cashmere, cotton, wool",
      "Fully customizable construction",
      "Showroom: Rue du Bac, Paris",
    ],
    investment: "€10,000+ (customizable)"
  },
  {
    name: "Winstons Beds Heritage Collection",
    features: [
      "Deep softness with natural body contouring",
      "100% organic fillings including horsetail and cashmere",
      "Handcrafted construction with horsehair core",
      "Available through WinstonsBeds.com",
    ],
    investment: "€4,000–€6,500 (king-size)"
  },
  {
    name: "André Renault",
    features: [
      "Hybrid or latex-core with memory foam construction",
      "Premium \"Millésime\" and \"Héritage\" collections",
      "French-made luxury craftsmanship",
      "Excellent softness with slightly less breathability than Hästens",
      "Available through authorized French retailers",
    ]
  },
  {
    name: "Simmons (France)",
    features: [
      "Pocket-spring base with foam/latex top",
      "Beautyrest Elite / Black series for premium softness",
      "Plush comfort with structured support",
      "Ideal for those preferring slightly firmer base than Hästens",
      "Widely available through French retailers",
    ]
  }
];

const modernAlternatives: ModernAlternative[] = [
  {
    name: "Avocado Green",
    materials: "Organic (latex, wool, cotton)",
    construction: "Hybrid (latex, coils)",
    feel: "Natural, organic",
    priceRange: "$1,500–$2,000",
    closestToHastens: true,
    keyFeatures: [
      "GOLS-certified latex",
      "GOTS-certified wool and cotton",
      "Upcycled steel coils",
      "Most natural alternative to Hästens"
    ]
  },
  {
    name: "Saatva",
    materials: "Synthetic + natural cover",
    construction: "Hybrid (coils, foam)",
    feel: "Luxury, supportive",
    priceRange: "$1,000–$2,500",
    closestToHastens: false,
    keyFeatures: [
      "Dual-coil system",
      "Organic cotton cover",
      "White glove delivery",
      "Modern luxury option"
    ]
  },
  {
    name: "Stearns & Foster",
    materials: "Synthetic + natural elements",
    construction: "Hybrid (coils, foam)",
    feel: "Luxury, crafted",
    priceRange: "$2,000–$5,000",
    closestToHastens: false,
    keyFeatures: [
      "Advanced coil systems",
      "Memory foam layers",
      "Premium craftsmanship",
      "High-end department store quality"
    ]
  },
  {
    name: "EightSleep",
    materials: "Synthetic, smart technology",
    construction: "Smart cover system",
    feel: "High-tech, smart",
    priceRange: "$2,000–$3,000+",
    closestToHastens: false,
    keyFeatures: [
      "Temperature control",
      "Sleep tracking",
      "Biometric monitoring",
      "Smart technology integration"
    ]
  }
];

const comparisonData = [
  {
    brand: "Hästens",
    coreFill: "Horsehair",
    springFeel: "Floating-soft",
    breathability: "🌬️🌬️🌬️",
    country: "Sweden",
    verdict: "Gold standard"
  },
  {
    brand: "Vispring",
    coreFill: "Horsehair/Wool",
    springFeel: "Firmer-buoyant",
    breathability: "🌬️🌬️",
    country: "UK",
    verdict: "Best true alternative"
  },
  {
    brand: "Savoir Beds",
    coreFill: "Cashmere/Hair",
    springFeel: "Tailored bounce",
    breathability: "🌬️🌬️🌬️",
    country: "UK",
    verdict: "Ultra-custom but pricey"
  },
  {
    brand: "Winstons Beds",
    coreFill: "Horsehair/Wool",
    springFeel: "Plush + rebound",
    breathability: "🌬️🌬️",
    country: "UK (ships FR)",
    verdict: "Hidden gem – real Hästens rival"
  }
];

export default function LuxurySleepSystems() {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🛏️ Luxury Sleep Systems</h3>
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

      <p className="mt-6 text-gray-300">
        Each of these sleep systems represents the pinnacle of mattress craftsmanship, offering a perfect balance of cloud-like softness and supportive structure. The selection process prioritized natural materials, breathability, and the signature floating sensation that defines luxury sleep experiences. All options are available in France through authorized dealers or direct shipping.
      </p>

      <div className="mt-8 bg-black/40 p-6 rounded-lg border border-yellow-500/30">
        <h4 className="text-yellow-500 font-semibold mb-4">Understanding True Hästens-Level Quality</h4>
        <p className="mb-4 text-gray-300">
          While all listed options offer premium comfort, it&apos;s important to understand what makes Hästens truly unique: artisanal, horsehair-filled construction built layer-by-layer by hand, delivering unmatched breathability and that signature floating sensation.
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
              {comparisonData.map((row) => (
                <tr key={row.brand} className="border-b border-yellow-500/10">
                  <td className="py-2">{row.brand}</td>
                  <td>{row.coreFill}</td>
                  <td>{row.springFeel}</td>
                  <td>{row.breathability}</td>
                  <td>{row.country}</td>
                  <td>{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h5 className="text-yellow-500 font-semibold mb-2">🔥 TL;DR</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>André Renault / Simmons = decent, accessible comfort</li>
            <li>None in your list = true artisan builds with horsehair core</li>
            <li>Want Hästens softness? → Go for Vispring, Winstons, or Savoir. Accept no substitutes</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-black/40 p-6 rounded-lg border border-yellow-500/30">
        <h4 className="text-yellow-500 font-semibold mb-4">Modern Luxury Alternatives</h4>
        <p className="mb-4 text-gray-300">
          While traditional luxury brands like Hästens set the standard for natural materials and craftsmanship, several modern alternatives offer compelling features at more accessible price points. Here is a detailed comparison of the top contenders:
        </p>

        <div className="space-y-6">
          {modernAlternatives.map((alt) => (
            <div key={alt.name} className="bg-black/40 p-6 rounded-lg border border-yellow-500/30">
              <div className="flex justify-between items-start mb-4">
                <h5 className="text-yellow-500 font-semibold">{alt.name}</h5>
                {alt.closestToHastens && (
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm">
                    Closest Natural Alternative
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Materials</p>
                  <p className="text-gray-300">{alt.materials}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Construction</p>
                  <p className="text-gray-300">{alt.construction}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Feel</p>
                  <p className="text-gray-300">{alt.feel}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Price Range</p>
                  <p className="text-gray-300">{alt.priceRange}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Key Features</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {alt.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h5 className="text-yellow-500 font-semibold mb-2">Key Takeaways</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Avocado Green is the closest match to Hästens&apos; natural materials approach</li>
            <li>Modern alternatives offer significant price advantages ($1,000–$5,000 vs. $10,000–$50,000+)</li>
            <li>Consider your priorities: natural materials (Avocado Green) vs. modern luxury (Saatva/Stearns & Foster) vs. smart features (EightSleep)</li>
            <li>All alternatives offer white-glove delivery and premium customer service</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-gray-300">
        Each of these sleep systems represents the pinnacle of mattress craftsmanship, offering a perfect balance of cloud-like softness and supportive structure. The selection process prioritized natural materials, breathability, and the signature floating sensation that defines luxury sleep experiences. All options are available in France through authorized dealers or direct shipping.
      </p>
    </div>
  );
} 