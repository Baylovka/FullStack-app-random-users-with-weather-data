import { getWeatherIconPath } from 'src/common/utils/weather-icon.util';

export async function getWeatherForCoordinates(lat: string, lon: string) {
    try {
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=auto`
        );
        const weatherData = await weatherRes.json();
        return {
            temp: weatherData.current_weather?.temperature ?? null,
            min: weatherData.daily?.temperature_2m_min?.[0] ?? null,
            max: weatherData.daily?.temperature_2m_max?.[0] ?? null,
            icon: getWeatherIconPath(weatherData.current_weather?.weathercode ?? null),
        };
    } catch {
        return null;
    }
}