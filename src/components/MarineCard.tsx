import { MarineData } from '@/services/weather';

interface MarineCardProps {
  data: MarineData;
}

export function MarineCard({ data }: MarineCardProps) {
  // Get current marine conditions (first entry in the hourly data)
  const currentWaveHeight = data.hourly.wave_height[0];
  const currentWaveDirection = data.hourly.wave_direction[0];
  const currentWavePeriod = data.hourly.wave_period[0];
  const currentSST = data.hourly.sea_surface_temperature[0];
  const currentTime = new Date(data.hourly.time[0]).toLocaleTimeString();

  // Convert wave direction to cardinal direction
  const getCardinalDirection = (degrees: number): string => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  return (
    <div className="relative bg-black rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          Marine Conditions
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Height</span>
            <span className="text-yellow-500 font-bold">{currentWaveHeight}m</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Direction</span>
            <span className="text-yellow-500 font-bold">{getCardinalDirection(currentWaveDirection)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Period</span>
            <span className="text-yellow-500 font-bold">{currentWavePeriod}s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Sea Temperature</span>
            <span className="text-yellow-500 font-bold">{currentSST}°C</span>
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-4">
          Last updated: {currentTime}
        </div>
      </div>
    </div>
  );
} 