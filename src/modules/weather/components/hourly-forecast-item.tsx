import type { HourlyForecast } from "@/modules/weather/weather.type";

type HourlyForecastItemProps = {
  hour: HourlyForecast;
};

export function HourlyForecastItem({ hour }: HourlyForecastItemProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 bg-amber-50 rounded-lg py-2 px-1">
      <p className="text-[10px] text-muted-foreground">{hour.time}</p>
      <span className="text-sm">{hour.icon}</span>
      <p className="text-[10px] text-blue-500">{hour.rainChance}%</p>
      <p className="text-sm font-bold">{hour.temperature}°</p>
    </div>
  );
}
