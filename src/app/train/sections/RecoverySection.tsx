export default function RecoverySection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Recovery Protocols
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Active Recovery</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Light walking (10-15 min)</li>
              <li>Stretching routines</li>
              <li>Foam rolling</li>
              <li>Mobility work</li>
              <li>Yoga flows</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Passive Recovery</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Cold water immersion</li>
              <li>Compression therapy</li>
              <li>Red light therapy</li>
              <li>Massage therapy</li>
              <li>Float tank sessions</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Recovery Stack</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Creatine (5g daily)</li>
            <li>Collagen peptides (20g)</li>
            <li>Vitamin D3 (5000 IU)</li>
            <li>Magnesium (400mg)</li>
            <li>Zinc (15mg)</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Recovery Timing</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Post-workout: 30 min window</li>
            <li>Evening: 2-3 hours before bed</li>
            <li>Morning: Pre-workout</li>
            <li>Weekly: Full recovery day</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Recovery Techniques</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">Modern Therapy Tools</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>PEMF therapy (15-20 min)</li>
                <li>Infrared sauna (15-20 min)</li>
                <li>Cryotherapy (3-5 min)</li>
                <li>Float tank sessions</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Natural Methods</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Grounding exercises (10 min)</li>
                <li>Forest bathing (2-3 hours)</li>
                <li>Epsom salt baths</li>
                <li>Nature immersion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 