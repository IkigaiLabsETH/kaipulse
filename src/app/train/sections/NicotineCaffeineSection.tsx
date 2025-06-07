export default function NicotineCaffeineSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Nicotine & Caffeine Protocol
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Nicotine Protocol</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>2mg lozenges (morning/afternoon)</li>
              <li>Strategic timing with tasks</li>
              <li>No smoking/vaping</li>
              <li>Cycle on/off monthly</li>
              <li>Track cognitive benefits</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Caffeine Strategy</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Morning coffee (6-8am)</li>
              <li>Green tea afternoon</li>
              <li>Matcha for sustained energy</li>
              <li>No caffeine after 2pm</li>
              <li>Track tolerance levels</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Optimization Tips</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Pair with L-theanine</li>
            <li>Stay hydrated</li>
            <li>Monitor heart rate</li>
            <li>Track sleep quality</li>
            <li>Regular tolerance breaks</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Safety & Monitoring</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Track blood pressure</li>
            <li>Monitor heart rate variability</li>
            <li>Watch for dependency signs</li>
            <li>Regular health check-ups</li>
            <li>Listen to body signals</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 