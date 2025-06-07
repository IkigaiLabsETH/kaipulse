"use client";

export default function ExerciseSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Exercise & Movement Strategy
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Nature-Based Training</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Hill runs and beach dashes</li>
              <li>Barefoot training for stronger arches</li>
              <li>Outdoor sprint protocols</li>
              <li>Natural terrain variation</li>
              <li>Sunlight exposure during training</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Sprint Protocol</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>6-8 × 10-15 sec all-out efforts</li>
              <li>90 sec rest between sprints</li>
              <li>2-3 sessions per week</li>
              <li>Boosts testosterone and BDNF</li>
              <li>More efficient than steady-state cardio</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Training Techniques</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">High-Intensity Training</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Heavy-bag workouts</li>
                <li>Hill sprints</li>
                <li>Resistance band circuits</li>
                <li>Bodyweight complexes</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Recovery Integration</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Cold water immersion post-workout</li>
                <li>Red light therapy for recovery</li>
                <li>Nature walks for active recovery</li>
                <li>Grounding exercises</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Training Environment Optimization</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Train outdoors when possible for natural light</li>
            <li>Use varied terrain for proprioception</li>
            <li>Incorporate natural elements (water, hills)</li>
            <li>Time training with circadian rhythm</li>
            <li>Combine movement with nature exposure</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Performance Enhancement</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Strategic fasting for metabolic flexibility</li>
            <li>Cold exposure for dopamine optimization</li>
            <li>Heat therapy for growth hormone</li>
            <li>Nature immersion for stress reduction</li>
            <li>Red light therapy for ATP production</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 