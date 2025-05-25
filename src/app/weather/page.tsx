import { AirQualityCard } from '@/components/AirQualityCard';
import { getMarineData, getAirQualityData, getSurfInfo, getWeatherData } from '@/services/weather';
import { Waves, Thermometer, Wind, Sun } from 'lucide-react';

export default async function WeatherPage() {
  const biarritzMarineData = await getMarineData('biarritz');
  const biarritzAirQualityData = await getAirQualityData('biarritz');
  const biarritzSurfInfo = await getSurfInfo('biarritz');
  const biarritzWeather = await getWeatherData('biarritz');

  // Prepare marine/surf frames for direct rendering in the grid
  let marineFrames: React.ReactNode[] = [];
  if (biarritzMarineData && biarritzSurfInfo) {
    // Next hour forecast (first entry in hourly arrays)
    const forecast = {
      wave_height: biarritzMarineData.hourly.wave_height[0],
      wave_period: biarritzMarineData.hourly.wave_period[0],
      wave_direction: biarritzMarineData.hourly.wave_direction[0],
      sea_surface_temperature: biarritzMarineData.hourly.sea_surface_temperature[0],
      time: biarritzMarineData.hourly.time[0],
    };
    // Next day forecast (25th entry, i.e., 24 hours ahead)
    const nextDay = {
      wave_height: biarritzMarineData.hourly.wave_height[24],
      wave_period: biarritzMarineData.hourly.wave_period[24],
      wave_direction: biarritzMarineData.hourly.wave_direction[24],
      sea_surface_temperature: biarritzMarineData.hourly.sea_surface_temperature[24],
      time: biarritzMarineData.hourly.time[24],
    };
    const currentTime = new Date(biarritzSurfInfo.time).toLocaleTimeString();
    const forecastTime = new Date(forecast.time).toLocaleTimeString();
    const nextDayTime = new Date(nextDay.time).toLocaleTimeString();
    const getCardinalDirection = (degrees: number) => {
      const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
      const index = Math.round(degrees / 22.5) % 16;
      return directions[index];
    };
    const MarineSurfFrame = ({ label, data, timeLabel, timeValue }: { label: string; data: { wave_height: number; wave_period: number; wave_direction: number; sea_surface_temperature: number; }; timeLabel: string; timeValue: string }) => (
      <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-7 h-full flex flex-col justify-between min-h-[320px] min-w-[260px] shadow-lg hover:shadow-2xl transition-all duration-200 group border border-yellow-500/30 hover:border-yellow-500">
        <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/30 group-hover:border-yellow-500 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.7)] transition-all duration-200 pointer-events-none" />
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Waves className="text-yellow-500 w-5 h-5" />
              <span className="text-yellow-500 font-bold text-lg">{label}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center gap-1"><Waves className="w-4 h-4 text-yellow-500" />Wave Height</span>
                <span className="text-yellow-500 font-extrabold text-xl">{data.wave_height} <span className="text-base font-bold">m</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center gap-1"><Wind className="w-4 h-4 text-yellow-500" />Wave Period</span>
                <span className="text-yellow-500 font-extrabold text-xl">{data.wave_period} <span className="text-base font-bold">s</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center gap-1"><Wind className="w-4 h-4 text-yellow-500" />Wave Dir</span>
                <span className="text-yellow-500 font-extrabold text-xl">{getCardinalDirection(data.wave_direction)} <span className="text-base font-bold">({data.wave_direction}°)</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center gap-1"><Thermometer className="w-4 h-4 text-yellow-500" />Sea Temp</span>
                <span className="text-yellow-500 font-extrabold text-xl">{data.sea_surface_temperature}°C</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-4">{timeLabel}: {timeValue}</div>
        </div>
      </div>
    );
    marineFrames = [
      <MarineSurfFrame key="current" label="Current" data={biarritzSurfInfo} timeLabel="Last updated" timeValue={currentTime} />,
      <MarineSurfFrame key="next-hour" label="Next Hour" data={forecast} timeLabel="Forecast" timeValue={forecastTime} />,
      <MarineSurfFrame key="next-day" label="Next Day" data={nextDay} timeLabel="Forecast" timeValue={nextDayTime} />,
    ];
  }

  // Prepare 5-day forecast (using hourly data for simplicity, or adapt if you have daily data)
  let forecastRows: React.ReactNode[] = [];
  if (biarritzWeather) {
    // Group by day
    const days: Record<string, { temps: number[] }> = {};
    biarritzWeather.hourly.time.forEach((t, i) => {
      const day = t.split('T')[0];
      if (!days[day]) days[day] = { temps: [] };
      if (biarritzWeather.hourly.temperature_2m[i] !== null) {
        days[day].temps.push(biarritzWeather.hourly.temperature_2m[i]);
      }
    });
    forecastRows = Object.entries(days).slice(0, 5).map(([date, { temps }]) => {
      const min = Math.min(...temps);
      const max = Math.max(...temps);
      return (
        <div key={date} className="flex flex-col items-center justify-between bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 w-full h-full border border-yellow-500/20 max-w-md mx-auto">
          <div className="text-base text-gray-400 mb-2">{new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          <Sun className="w-12 h-12 text-yellow-500 mb-2" />
          <div className="flex gap-2 text-yellow-500 font-bold text-3xl">
            <span>{Math.round(max)}°</span>
            <span className="text-gray-400 font-normal text-2xl">/</span>
            <span>{Math.round(min)}°</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Real-time Weather</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Air Quality & Surf
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Biarritz Beach</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Weather Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
            {marineFrames}
            {biarritzAirQualityData && <AirQualityCard data={biarritzAirQualityData} />}
          </div>
          <div className="mt-16 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-500 text-center">5-Day Forecast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-stretch overflow-x-auto">
              {forecastRows.map((row, idx) => (
                <div key={idx} className="w-full h-full flex">{row}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 