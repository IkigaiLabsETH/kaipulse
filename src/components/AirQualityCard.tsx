import { AirQualityData } from '../services/weather';
import { HelpCircle } from 'lucide-react';

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

  const getAqiInfo = (pollutant: string, value: number) => {
    let level = 'Unknown';
    let color = 'text-gray-400';

    const thresholds: { [key: string]: { levels: number[]; labels: string[]; colors: string[] } } = {
      pm2_5: {
        levels: [12, 35.4, 55.4, 150.4, 250.4],
        labels: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'],
        colors: ['text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500', 'text-purple-500', 'text-red-700'],
      },
      pm10: {
        levels: [54, 154, 254, 354, 424],
        labels: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'],
        colors: ['text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500', 'text-purple-500', 'text-red-700'],
      },
      ozone: {
        levels: [100, 160, 210, 260, 785],
        labels: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'],
        colors: ['text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500', 'text-purple-500', 'text-red-700'],
      },
      uv_index: {
        levels: [2, 5, 7, 10],
        labels: ['Low', 'Moderate', 'High', 'Very High', 'Extreme'],
        colors: ['text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500', 'text-purple-500'],
      },
      nitrogen_dioxide: {
        levels: [100, 200],
        labels: ['Good', 'Moderate', 'Unhealthy'],
        colors: ['text-green-500', 'text-yellow-500', 'text-red-500'],
      },
      carbon_monoxide: {
        levels: [5000, 10000],
        labels: ['Good', 'Moderate', 'Unhealthy'],
        colors: ['text-green-500', 'text-yellow-500', 'text-red-500'],
      },
    };

    const pollutant_thresholds = thresholds[pollutant];
    if (pollutant_thresholds) {
      const { levels, labels, colors } = pollutant_thresholds;
      let i = 0;
      while (i < levels.length && value > levels[i]) {
        i++;
      }
      level = labels[i];
      color = colors[i];
    }
    return { level, color };
  };

  const renderMetric = (label: string, value: number, unit: string, pollutantKey: string) => {
    const { level, color } = getAqiInfo(pollutantKey, value);
    return (
      <div className="flex justify-between items-center">
        <span className="text-gray-400">{label}</span>
        <div className="flex items-center gap-2">
          <span className={`${color} font-bold`}>{level}</span>
          <span className="text-yellow-500 font-bold">{value} {unit}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative bg-black rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px] min-w-[260px] transition-transform duration-200 hover:-translate-y-1 group">
      {/* Yellow frame */}
      <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-200" />
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Air Quality</h2>
            <div className="relative group">
              <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="font-bold mb-1">AQI Levels:</p>
                <p><span className="text-green-500">Good (0-50):</span> Little to no risk.</p>
                <p><span className="text-yellow-500">Moderate (51-100):</span> Acceptable, but may be a risk for some.</p>
                <p><span className="text-orange-500">Unhealthy for Sensitive Groups (101-150):</span> Members of sensitive groups may experience health effects.</p>
                <p><span className="text-red-500">Unhealthy (151-200):</span> Some members of the general public may experience health effects.</p>
                <p><span className="text-purple-500">Very Unhealthy (201-300):</span> Health alert: risk of health effects is increased for everyone.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {renderMetric('PM10', current.pm10, 'μg/m³', 'pm10')}
            {renderMetric('PM2.5', current.pm2_5, 'μg/m³', 'pm2_5')}
            {renderMetric('Ozone', current.ozone, 'μg/m³', 'ozone')}
            {renderMetric('UV Index', current.uv_index, '', 'uv_index')}
            {renderMetric('NO₂', current.nitrogen_dioxide, 'μg/m³', 'nitrogen_dioxide')}
            {renderMetric('CO', current.carbon_monoxide, 'μg/m³', 'carbon_monoxide')}
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-4">Last updated: {currentTime}</div>
      </div>
    </div>
  );
} 