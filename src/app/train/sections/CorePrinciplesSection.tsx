"use client";

export default function CorePrinciplesSection() {
  return (
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
  );
} 