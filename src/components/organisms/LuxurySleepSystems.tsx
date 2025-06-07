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
    materials: "GOTS-certified organic cotton and wool, GOLS-certified organic latex",
    construction: "Hybrid (latex foam and coils) or all-latex",
    feel: "Natural, organic, and supportive with plush yet responsive feel",
    priceRange: "$1,299 (queen)",
    closestToHastens: true,
    keyFeatures: [
      "Handmade in California with needle-tufting",
      "PETA-approved vegan option available",
      "Upcycled steel coils",
      "Avoids chemical adhesives"
    ],
    certifications: [
      "GOTS",
      "GOLS",
      "GREENGUARD Gold",
      "MADE SAFE",
      "EWG Verified",
      "OEKO-TEX Standard 100",
      "Climate Neutral",
      "B Corp",
      "1% for the Planet"
    ],
    trialPeriod: "1 year",
    warranty: "25 years",
    specialFocus: "Most natural alternative to Hästens"
  },
  {
    name: "Naturepedic",
    materials: "GOTS-certified organic cotton and wool, GOLS-certified organic latex",
    construction: "Organic hybrid or all-latex",
    feel: "Customizable firmness, hypoallergenic, supportive",
    priceRange: "$1,999 (queen)",
    closestToHastens: true,
    keyFeatures: [
      "Adjustable firmness",
      "PETA-approved vegan options",
      "Formaldehyde-free",
      "Handcrafted in USA"
    ],
    certifications: [
      "GOTS",
      "GOLS",
      "MADE SAFE",
      "GREENGUARD Gold",
      "EWG Verified",
      "UL formaldehyde-free",
      "OEKO-TEX"
    ],
    trialPeriod: "100 nights",
    warranty: "25 years",
    specialFocus: "Best for allergy-sensitive sleepers"
  },
  {
    name: "Saatva",
    materials: "GOLS-certified organic latex, natural New Zealand wool, organic cotton cover",
    construction: "Organic innerspring or hybrid with dual-coil design",
    feel: "Luxury-firm, highly supportive",
    priceRange: "$2,099 (queen)",
    closestToHastens: false,
    keyFeatures: [
      "Lumbar Zone® Technology",
      "Eco-friendly production",
      "Charity donations",
      "White glove delivery"
    ],
    certifications: [
      "GOLS",
      "GREENGUARD Gold",
      "CertiPUR-US (for foam models)"
    ],
    trialPeriod: "180 days",
    warranty: "Lifetime",
    specialFocus: "Modern luxury with strong support"
  },
  {
    name: "Brentwood Home",
    materials: "GOTS-certified organic cotton and wool, GOLS-certified organic latex",
    construction: "Organic hybrid or all-latex",
    feel: "Medium-soft to medium-firm, cozy with strong edge support",
    priceRange: "$764 (queen)",
    closestToHastens: false,
    keyFeatures: [
      "Handcrafted in Los Angeles since 1987",
      "Fair Trade-certified materials",
      "In-home delivery",
      "Carbonfund offset"
    ],
    certifications: [
      "GOTS",
      "GOLS",
      "GREENGUARD Gold",
      "OEKO-TEX",
      "Fair Trade"
    ],
    trialPeriod: "1 year",
    warranty: "25 years",
    specialFocus: "Best value for organic luxury"
  },
  {
    name: "Awara",
    materials: "GOLS-certified organic latex, GOTS-certified wool",
    construction: "Organic hybrid with latex and coils",
    feel: "Medium-firm, firm yet plush",
    priceRange: "$849 (queen)",
    closestToHastens: false,
    keyFeatures: [
      "Designed for breathability",
      "Repreve-certified recycled materials",
      "Excellent for hot sleepers",
      "Temperature regulation"
    ],
    certifications: [
      "GOLS",
      "GOTS",
      "OEKO-TEX",
      "GREENGUARD Gold",
      "Repreve"
    ],
    trialPeriod: "365 nights",
    warranty: "Lifetime",
    specialFocus: "Best for hot sleepers"
  },
  {
    name: "My Green Mattress",
    materials: "GOTS-certified organic cotton and wool, GOLS-certified organic latex and coconut coir",
    construction: "Organic hybrid with 7-zone innerspring",
    feel: "Medium-firm, plush yet supportive",
    priceRange: "$1,124 (queen)",
    closestToHastens: false,
    keyFeatures: [
      "1,140 pocketed coils",
      "Hand-tufted construction",
      "Supports up to 400 lbs",
      "Kid-focused designs"
    ],
    certifications: [
      "GOTS",
      "GOLS",
      "GREENGUARD Gold",
      "MADE SAFE",
      "OEKO-TEX"
    ],
    trialPeriod: "365 nights",
    warranty: "20 years",
    specialFocus: "Best for kids and cribs"
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
                <div>
                  <h5 className="text-yellow-500 font-semibold">{alt.name}</h5>
                  <p className="text-gray-400 text-sm">{alt.priceRange}</p>
                </div>
                {alt.closestToHastens && (
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm">
                    Closest Natural Alternative
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h6 className="text-yellow-500/80 font-medium mb-2">Materials & Construction</h6>
                  <p className="text-gray-300 text-sm mb-2">{alt.materials}</p>
                  <p className="text-gray-300 text-sm">{alt.construction}</p>
                </div>
                <div>
                  <h6 className="text-yellow-500/80 font-medium mb-2">Feel & Focus</h6>
                  <p className="text-gray-300 text-sm mb-2">{alt.feel}</p>
                  {alt.specialFocus && (
                    <p className="text-gray-300 text-sm italic">{alt.specialFocus}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h6 className="text-yellow-500/80 font-medium mb-2">Key Features</h6>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {alt.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-yellow-500/80 font-medium mb-2">Certifications</h6>
                  <div className="flex flex-wrap gap-2">
                    {alt.certifications.map((cert, i) => (
                      <span key={i} className="bg-yellow-500/10 text-yellow-500/80 px-2 py-1 rounded text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-400 border-t border-yellow-500/10 pt-4">
                <span>Trial: {alt.trialPeriod}</span>
                <span>Warranty: {alt.warranty}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h5 className="text-yellow-500 font-semibold mb-2">🔥 Quick Recommendations</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Best Natural Alternative: Avocado Green ($1,299) - Most similar to Hästens in materials and craftsmanship</li>
            <li>Best for Allergies: Naturepedic ($1,999) - Premium organic materials with customizable firmness</li>
            <li>Best Value: Brentwood Home ($764) - Excellent organic luxury at an accessible price point</li>
            <li>Best for Hot Sleepers: Awara ($849) - Superior temperature regulation with organic materials</li>
            <li>Best for Kids: My Green Mattress ($1,124) - Certified organic materials with kid-focused designs</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 