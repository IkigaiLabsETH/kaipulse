export default function GettingStartedSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Getting Started Guide
      </h3>
      <div className="space-y-4 text-gray-300">
        <p className="text-lg">Follow these steps to implement the training protocol:</p>
        <div className="mt-6">
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Action Plan:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with 10-minute morning movement</li>
            <li>Take active breaks every hour</li>
            <li>Include 2-3 structured workouts weekly</li>
            <li>Plan outdoor activities for weekends</li>
            <li>Prioritize sleep and recovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 