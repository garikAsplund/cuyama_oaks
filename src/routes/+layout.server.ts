import type { PageServerLoad } from "./$types";

const CACHE_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds
let cachedWeatherData: any = null;
let lastFetched = 0;

export const load: PageServerLoad = async () => {
	const now = Date.now();
  
  if (cachedWeatherData && (now - lastFetched) < CACHE_TIME) {
    return { weather: cachedWeatherData };
  }

  const LATITUDE = '34.94';
  const LONGITUDE = '-119.80';
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=imperial`
    );
	  const data = await response.json();

    cachedWeatherData = {
      temp: Math.round(data.main.temp),
      icon: data.weather[0].icon
    };
    lastFetched = now;

    return { weather: cachedWeatherData };
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    return { weather: null };
  }
};