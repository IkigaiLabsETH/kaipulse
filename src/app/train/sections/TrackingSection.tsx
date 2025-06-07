export default function TrackingSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Performance Tracking & Metrics
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Performance Indicators</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Strength progression</li>
              <li>Endurance metrics</li>
              <li>Recovery markers</li>
              <li>Sleep quality scores</li>
              <li>Nutrition adherence</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Biometric Tracking</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Heart rate variability</li>
              <li>Resting heart rate</li>
              <li>Body composition</li>
              <li>Sleep stages</li>
              <li>Stress levels</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Progress Documentation</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Training logs</li>
            <li>Nutrition diaries</li>
            <li>Recovery notes</li>
            <li>Sleep journals</li>
            <li>Performance reviews</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Technology Integration</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">Wearables</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Smart watches</li>
                <li>Fitness trackers</li>
                <li>Sleep monitors</li>
                <li>Recovery devices</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Apps & Software</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Training apps</li>
                <li>Nutrition trackers</li>
                <li>Sleep analysis</li>
                <li>Recovery monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Data Analysis</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">Performance Trends</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Progress tracking</li>
                <li>Pattern recognition</li>
                <li>Correlation analysis</li>
                <li>Goal alignment</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Recovery Insights</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Recovery patterns</li>
                <li>Stress indicators</li>
                <li>Sleep quality trends</li>
                <li>Adaptation markers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Goal Setting & Review</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Short-term objectives</li>
            <li>Long-term goals</li>
            <li>Progress milestones</li>
            <li>Adjustment triggers</li>
            <li>Success metrics</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 