"use client";

export default function MindsetSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Mindset & Recovery Optimization
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Mindset Protocol</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Focus energy on deep-work blocks</li>
              <li>Guard time and energy boundaries</li>
              <li>Train mind & body daily</li>
              <li>Curate environment for success</li>
              <li>Keep promises to self first</li>
              <li>Stay positive and constructive</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Recovery Optimization</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Cold exposure for dopamine spikes</li>
              <li>Heat therapy for growth hormone</li>
              <li>Red light therapy for ATP production</li>
              <li>Nature immersion for stress reduction</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Recovery Stack</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Sauna: 15-20 min at 80-100°C, 2-3 rounds</li>
            <li>Cold plunge: Post-sauna for vagus nerve activation</li>
            <li>Red light therapy: 10 min/day for joints and brain</li>
            <li>Nature exposure: 10-30 min unfiltered sunlight</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 