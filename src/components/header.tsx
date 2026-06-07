import type { WeatherCondition } from "@/modules/weather/weather.type";
import { WEATHER_ICON } from "@/modules/weather/weather.constant";

type HeaderProps = {
  condition: WeatherCondition;
};

export function Header({ condition }: HeaderProps) {
  const icon = WEATHER_ICON[condition] || "⛅";

  return (
    <header className="mb-2">
      <h1 className="text-3xl font-bold text-white drop-shadow-md">
        {icon} WeaDo
      </h1>
      <p className="text-white/80 text-sm drop-shadow-sm">
        Weather Todo App, manage tasks based on weather.
      </p>
    </header>
  );
}
