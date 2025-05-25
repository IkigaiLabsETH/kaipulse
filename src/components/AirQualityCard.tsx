import { AirQualityData } from '../services/weather';

interface AirQualityCardProps {
  data: AirQualityData;
}

export function AirQualityCard({ data }: AirQualityCardProps) {
  // Get current values (first entry in the hourly data)
  const current = {
    pm10: data.hourly.pm10[0],
    pm2_5: data.hourly.pm2_5[0],
    ozone: data.hourly.ozone[0],
    uv_index: data.hourly.uv_index[0],
    nitrogen_dioxide: data.hourly.nitrogen_dioxide[0],
    carbon_monoxide: data.hourly.carbon_monoxide[0],
  };
  const currentTime = new Date(data.hourly.time[0]).toLocaleTimeString();

  return (
    <div className="relative bg-black rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px] min-w-[260px] transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Air Quality</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">PM10</span>
              <span className="text-yellow-500 font-bold">{current.pm10} μg/m³</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">PM2.5</span>
              <span className="text-yellow-500 font-bold">{current.pm2_5} μg/m³</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Ozone</span>
              <span className="text-yellow-500 font-bold">{current.ozone} μg/m³</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">UV Index</span>
              <span className="text-yellow-500 font-bold">{current.uv_index}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">NO₂</span>
              <span className="text-yellow-500 font-bold">{current.nitrogen_dioxide} μg/m³</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">CO</span>
              <span className="text-yellow-500 font-bold">{current.carbon_monoxide} μg/m³</span>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-4">Last updated: {currentTime}</div>
      </div>
    </div>
  );
} 