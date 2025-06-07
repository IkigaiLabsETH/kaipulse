"use client";

export default function NutritionSection() {
  return (
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
  );
} 