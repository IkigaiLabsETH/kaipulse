"use client";

export default function SleepSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Sleep Optimization
      </h3>
      <div className="space-y-6 text-gray-300">
        <p className="text-lg">
          Sleep is the most powerful lever for health, recovery, and performance. Here&apos;s a proven protocol for optimal sleep:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Environment Setup</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Cold bedroom: 18–20°C (64–68°F)</li>
              <li>Weighted blanket (9kg, adjust to bodyweight)</li>
              <li>Separate duvet from partner</li>
              <li>3M ear plugs and eye mask</li>
              <li>Red LED lights before sleep</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Evening Routine</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>0.2mg melatonin 45 min before bed</li>
              <li>Screen hacks: Smart Invert + extra dim</li>
              <li>No eating after 10pm</li>
              <li>Sleep around midnight–1am</li>
              <li>No fluids 2–3 hours before bed</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Key Insights</h4>
          <p className="text-white/90">
            Temperature is the biggest factor—too hot and you&apos;ll wake up. A cold room and proper bedding can help anyone sleep better. Prioritizing sleep improves all health markers, boosts immunity, and helps your brain clear plaque to prevent dementia. As Bryan Johnson says: sleep is the #1 health hack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Morning Routine</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Get outdoor light within 30 min of waking (5 min minimum)</li>
              <li>Delay coffee by ~90 min after waking</li>
              <li>Trigger cortisol timer early with light + movement</li>
              <li>Set your 14-hour melatonin countdown</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Note: Morning light through windows is 50x less effective than direct exposure. This routine helps set your circadian rhythm for optimal sleep later.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Night-Light Laws</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Minimize light exposure after 8pm</li>
              <li>Avoid screens between 11pm–4am</li>
              <li>Even dim light can suppress melatonin and dopamine</li>
              <li>Put phone away early to prevent &quot;disappointment circuit&quot;</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Remember: Falling asleep starts with how you wake up. Proper morning light exposure and evening light management are crucial for quality sleep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 