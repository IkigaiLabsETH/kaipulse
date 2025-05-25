import { MarineData, SurfInfo } from '../services/weather';

interface MarineSurfCardProps {
  marine: MarineData;
  surf: SurfInfo;
}

function getCardinalDirection(degrees: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

function MarineSurfFrame({ label, data, timeLabel, timeValue }: { label: string; data: any; timeLabel: string; timeValue: string }) {
  return (
    <div className="relative bg-black rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px] min-w-[260px] transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-yellow-500 font-bold mb-1 text-lg">{label}</div>
          <div className="space-y-2">
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
        </div>
        <div className="text-xs text-gray-400 mt-4">{timeLabel}: {timeValue}</div>
      </div>
    </div>
  );
}

export function MarineSurfCard({ marine, surf }: MarineSurfCardProps) {
  // Next hour forecast (first entry in hourly arrays)
  const forecast = {
    wave_height: marine.hourly.wave_height[0],
    wave_period: marine.hourly.wave_period[0],
    wave_direction: marine.hourly.wave_direction[0],
    sea_surface_temperature: marine.hourly.sea_surface_temperature[0],
    time: marine.hourly.time[0],
  };
  // Next day forecast (25th entry, i.e., 24 hours ahead)
  const nextDay = {
    wave_height: marine.hourly.wave_height[24],
    wave_period: marine.hourly.wave_period[24],
    wave_direction: marine.hourly.wave_direction[24],
    sea_surface_temperature: marine.hourly.sea_surface_temperature[24],
    time: marine.hourly.time[24],
  };
  const currentTime = new Date(surf.time).toLocaleTimeString();
  const forecastTime = new Date(forecast.time).toLocaleTimeString();
  const nextDayTime = new Date(nextDay.time).toLocaleTimeString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      <MarineSurfFrame label="Current" data={surf} timeLabel="Last updated" timeValue={currentTime} />
      <MarineSurfFrame label="Next Hour" data={forecast} timeLabel="Forecast" timeValue={forecastTime} />
      <MarineSurfFrame label="Next Day" data={nextDay} timeLabel="Forecast" timeValue={nextDayTime} />
    </div>
  );
} 