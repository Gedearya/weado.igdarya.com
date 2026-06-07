import type { WeatherData } from "@/modules/weather/weather.type";
import { WEATHER_CONDITION } from "@/modules/weather/weather.constant";

type WeatherCardProps = {
  weather: WeatherData;
};

export function WeatherCard({ weather }: WeatherCardProps) {
  const bgColor =
    weather.condition === WEATHER_CONDITION.RAIN ? "bg-gray-500" : "bg-sky-400";
  const icon = weather.condition === WEATHER_CONDITION.RAIN ? "🌧️" : "⛅";

  return (
    <div
      className={`${bgColor} text-white rounded-xl p-6 flex items-center gap-4 mb-4`}
    >
      <span className="text-5xl">{icon}</span>
      <div>
        <p className="text-4xl font-bold">{weather.temperature}°C</p>
        <p className="text-sm">{weather.description}</p>
      </div>
    </div>
  );
}
