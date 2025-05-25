import { SurfInfo } from '../services/weather';

interface SurfInfoCardProps {
  data: SurfInfo;
}

function getCardinalDirection(degrees: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

export function SurfInfoCard({ data }: SurfInfoCardProps) {
  const time = new Date(data.time).toLocaleTimeString();
  return (
    <div className="relative bg-black rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Surf Info</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Height</span>
            <span className="text-yellow-500 font-bold">{data.wave_height} m</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Period</span>
            <span className="text-yellow-500 font-bold">{data.wave_period} s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wave Direction</span>
            <span className="text-yellow-500 font-bold">{getCardinalDirection(data.wave_direction)} ({data.wave_direction}°)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Sea Temp</span>
            <span className="text-yellow-500 font-bold">{data.sea_surface_temperature}°C</span>
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-4">Last updated: {time}</div>
      </div>
    </div>
  );
} 