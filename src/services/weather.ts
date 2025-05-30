import { WeatherData } from '../types/weather';
import { cache } from 'react';
import { logger } from '@/lib/logger';

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

const TIMEOUT_MS = 5000; // 5 second timeout
const CACHE_DURATION = 60 * 5; // 5 minutes

async function fetchWithTimeout(url: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: { revalidate: CACHE_DURATION }, // Enable Next.js cache
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      }
      throw error;
    }
    throw new Error('An unknown error occurred');
  }
}

export const getWeatherData = cache(async (city: keyof typeof CITIES): Promise<WeatherData> => {
  try {
    const { lat, lon } = CITIES[city];
    const response = await fetchWithTimeout(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&models=meteofrance_seamless`
    );
    return response.json();
  } catch (error) {
    logger.error(`Error fetching weather data for ${city}:`, error);
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
});

export const getMarineData = cache(async (city: keyof typeof CITIES): Promise<MarineData | null> => {
  try {
    const { lat, lon } = CITIES[city];
    const response = await fetchWithTimeout(
      `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=wave_height,wave_direction,wave_period,sea_surface_temperature`
    );
    return response.json();
  } catch (error) {
    logger.error(`Error fetching marine data for ${city}:`, error);
    return null;
  }
});

export const getSurfInfo = cache(async (city: keyof typeof CITIES): Promise<SurfInfo | null> => {
  try {
    const { lat, lon } = CITIES[city];
    const response = await fetchWithTimeout(
      `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height,sea_surface_temperature,wave_period,wave_direction`
    );
    
    const data = await response.json();
    if (!data.current) return null;
    
    return {
      time: data.current.time,
      wave_height: data.current.wave_height,
      wave_period: data.current.wave_period,
      wave_direction: data.current.wave_direction,
      sea_surface_temperature: data.current.sea_surface_temperature,
    };
  } catch (error) {
    logger.error(`Error fetching surf info for ${city}:`, error);
    return null;
  }
});

export const getAirQualityData = cache(async (city: keyof typeof CITIES): Promise<AirQualityData | null> => {
  try {
    const { lat, lon } = CITIES[city];
    const response = await fetchWithTimeout(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,uv_index_clear_sky,uv_index,dust,aerosol_optical_depth,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_dioxide,carbon_monoxide`
    );
    return response.json();
  } catch (error) {
    logger.error(`Error fetching air quality data for ${city}:`, error);
    return null;
  }
});

export const getAllCitiesWeather = cache(async (): Promise<Record<string, WeatherData>> => {
  try {
    const cities = Object.keys(CITIES) as Array<keyof typeof CITIES>;
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const data = await getWeatherData(city);
        return [city, data];
      })
    );
    return Object.fromEntries(weatherData);
  } catch (error) {
    logger.error('Error fetching all cities weather:', error);
    throw new Error('Failed to fetch weather data for all cities');
  }
}); 