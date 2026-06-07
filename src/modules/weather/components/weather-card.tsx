import type { WeatherData } from "@/modules/weather/weather.type";
import { WEATHER_CONDITION } from "@/modules/weather/weather.constant";
import { Card, CardContent } from "@/components/ui/card";

type WeatherCardProps = {
  weather: WeatherData;
};

export function WeatherCard({ weather }: WeatherCardProps) {
  const bgColor =
    weather.condition === WEATHER_CONDITION.RAIN ? "bg-gray-500" : "bg-sky-400";
  const icon = weather.condition === WEATHER_CONDITION.RAIN ? "🌧️" : "⛅";

  return (
    <Card className={`${bgColor} border-none text-white`}>
      <CardContent className="flex items-center gap-4 p-6">
        <span className="text-5xl">{icon}</span>
        <div>
          <p className="text-4xl font-bold">{weather.temperature}°C</p>
          <p className="text-sm">{weather.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
