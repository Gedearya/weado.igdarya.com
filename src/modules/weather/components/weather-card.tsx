import type { WeatherData } from "@/modules/weather/weather.type";
import { WEATHER_CONDITION } from "@/modules/weather/weather.constant";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type WeatherCardProps = {
  weather: WeatherData;
};

export function WeatherCard({ weather }: WeatherCardProps) {
  const bgColor =
    weather.condition === WEATHER_CONDITION.RAIN ? "bg-gray-500" : "bg-sky-400";
  const icon = weather.condition === WEATHER_CONDITION.RAIN ? "🌧️" : "⛅";

  return (
    <Card className={`${bgColor} border-none text-white`}>
      <CardHeader className="flex flex-row items-center gap-4 p-6 pb-0">
        <span className="text-5xl">{icon}</span>
        <div>
          <CardTitle className="text-4xl font-bold text-white">
            {weather.temperature}°C
          </CardTitle>
          <CardDescription className="text-white/80">
            {weather.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-2" />
    </Card>
  );
}
