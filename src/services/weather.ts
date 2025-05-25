import { WeatherData } from '../types/weather';

const CITIES = {
  biarritz: { lat: 43.4833, lon: -1.5586 },
  bordeaux: { lat: 44.8378, lon: -0.5792 },
  monaco: { lat: 43.7384, lon: 7.4246 },
};

export interface MarineData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly: {
    time: string[];
    wave_height: number[];
    wave_direction: number[];
    wave_period: number[];
    sea_surface_temperature: number[];
  };
  hourly_units: {
    wave_height: string;
    wave_direction: string;
    wave_period: string;
    sea_surface_temperature: string;
  };
}

export interface SurfInfo {
  time: string;
  wave_height: number;
  wave_period: number;
  wave_direction: number;
  sea_surface_temperature: number;
}

export interface AirQualityData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    pm10: string;
    pm2_5: string;
    uv_index_clear_sky: string;
    uv_index: string;
    dust: string;
    aerosol_optical_depth: string;
    ozone: string;
    nitrogen_dioxide: string;
    sulphur_dioxide: string;
    carbon_dioxide: string;
    carbon_monoxide: string;
  };
  hourly: {
    time: string[];
    pm10: number[];
    pm2_5: number[];
    uv_index_clear_sky: number[];
    uv_index: number[];
    dust: number[];
    aerosol_optical_depth: number[];
    ozone: number[];
    nitrogen_dioxide: number[];
    sulphur_dioxide: number[];
    carbon_dioxide: number[];
    carbon_monoxide: number[];
  };
}

export async function getWeatherData(city: keyof typeof CITIES): Promise<WeatherData> {
  const { lat, lon } = CITIES[city];
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&models=meteofrance_seamless`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data for ${city}`);
  }

  return response.json();
}

export async function getMarineData(city: keyof typeof CITIES): Promise<MarineData | null> {
  const { lat, lon } = CITIES[city];
  const response = await fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=wave_height,wave_direction,wave_period,sea_surface_temperature`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getSurfInfo(city: keyof typeof CITIES): Promise<SurfInfo | null> {
  const { lat, lon } = CITIES[city];
  const response = await fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height,sea_surface_temperature,wave_period,wave_direction`
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  if (!data.current) return null;
  return {
    time: data.current.time,
    wave_height: data.current.wave_height,
    wave_period: data.current.wave_period,
    wave_direction: data.current.wave_direction,
    sea_surface_temperature: data.current.sea_surface_temperature,
  };
}

export async function getAirQualityData(city: keyof typeof CITIES): Promise<AirQualityData | null> {
  const { lat, lon } = CITIES[city];
  const response = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,uv_index_clear_sky,uv_index,dust,aerosol_optical_depth,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_dioxide,carbon_monoxide`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getAllCitiesWeather(): Promise<Record<string, WeatherData>> {
  const cities = Object.keys(CITIES) as Array<keyof typeof CITIES>;
  const weatherData = await Promise.all(
    cities.map(async (city) => {
      const data = await getWeatherData(city);
      return [city, data];
    })
  );

  return Object.fromEntries(weatherData);
} 