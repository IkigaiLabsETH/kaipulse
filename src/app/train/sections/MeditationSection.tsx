"use client";

export default function MeditationSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Meditation & Consciousness
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Practice</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>20-30 min morning meditation</li>
              <li>10 min breathwork sessions</li>
              <li>Mindful movement integration</li>
              <li>Evening reflection practice</li>
              <li>Conscious breathing throughout day</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Advanced Techniques</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Transcendental meditation</li>
              <li>Vipassana retreats (annual)</li>
              <li>Float tank sessions</li>
              <li>Binaural beats integration</li>
              <li>Consciousness expansion work</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Benefits & Integration</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced focus and clarity</li>
            <li>Reduced stress and anxiety</li>
            <li>Improved decision-making</li>
            <li>Better emotional regulation</li>
            <li>Increased self-awareness</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Tools & Resources</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Headspace/Calm apps</li>
            <li>Muse headband for feedback</li>
            <li>Binaural beats playlists</li>
            <li>Meditation cushions/benches</li>
            <li>Journal for insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 