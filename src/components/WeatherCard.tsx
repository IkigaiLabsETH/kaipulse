import { WeatherData } from '@/types/weather';

interface WeatherCardProps {
  city: string;
  data: WeatherData;
}

export function WeatherCard({ city, data }: WeatherCardProps) {
  // Get current temperature (first entry in the hourly data)
  const currentTemp = data.hourly.temperature_2m[0];
  const currentTime = new Date(data.hourly.time[0]).toLocaleTimeString();

  return (
    <div className="relative bg-black rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
          {city.charAt(0).toUpperCase() + city.slice(1)}
        </h2>
        <div className="text-5xl font-bold text-yellow-500 mb-2">
          {currentTemp}°C
        </div>
        <div className="text-sm text-gray-400">
          Last updated: {currentTime}
        </div>
      </div>
    </div>
  );
} 