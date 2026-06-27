import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "@/modules/weather/weather.type";
import { WEATHER_BACKGROUND } from "@/modules/weather/weather.constant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SimpleLineChart } from "@/components/ui/chart";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import { MapPin, Search, Droplets, Wind, Eye, Gauge } from "lucide-react";

type WeatherCardProps = {
  weather: WeatherData;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  selectedDay: string;
  onSelectDay: (day: string) => void;
};

function WeatherDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 bg-amber-50 rounded-lg p-2 w-full h-full">
      <div className="flex items-center gap-1 text-muted-foreground">
        {icon}
        <span className="text-[10px]">{label}</span>
      </div>
      <p className="text-xs font-semibold">{value}</p>
    </div>
  );
}

export function WeatherCard({
  weather,
  hourly,
  daily,
  selectedDay,
  onSelectDay,
}: WeatherCardProps) {
  const selectedForecast = daily.find((d) => d.date === selectedDay);
  const condition = selectedForecast?.condition ?? weather.condition;
  const displayTemp = selectedForecast?.temperature ?? weather.temperature;
  const displayDesc = selectedForecast
    ? selectedForecast.condition.charAt(0) +
      selectedForecast.condition.slice(1).toLowerCase()
    : weather.description;

  const bgImage = WEATHER_BACKGROUND[condition] || WEATHER_BACKGROUND.CLEAR;

  const chartData = hourly.map((hour) => ({
    label: hour.time,
    value: hour.temperature,
    rainChance: hour.rainChance,
  }));

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1.5 text-sm text-white font-semibold drop-shadow-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{weather.city}</span>
          <span className="bg-white text-gray-800 text-[10px] font-medium px-1.5 py-0.5 rounded-full border border-white/30 ml-1">
            °C
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="Search City"
              className="pl-8 h-8 text-sm bg-white/90 w-full md:w-45"
              readOnly
            />
          </div>
          <button className="h-8 w-8 flex items-center justify-center rounded-md border border-white/30 bg-white/90 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 overflow-x-auto">
        <Badge
          variant={selectedDay === DAY_FILTER.ALL ? "default" : "outline"}
          className={`shrink-0 px-3 py-1 cursor-pointer text-xs ${
            selectedDay === DAY_FILTER.ALL
              ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
              : "bg-white/20 text-white border-white/30"
          }`}
          onClick={() => onSelectDay(DAY_FILTER.ALL)}
        >
          {DAY_FILTER.ALL}
        </Badge>
        {daily.map((day) => (
          <Badge
            key={day.date}
            variant={selectedDay === day.date ? "default" : "outline"}
            className={`shrink-0 px-3 py-1 cursor-pointer text-xs ${
              selectedDay === day.date
                ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
                : "bg-white/20 text-white border-white/30"
            }`}
            onClick={() => onSelectDay(day.date)}
          >
            {day.day} · {day.temperature}° {day.icon}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <Card className="md:col-span-2 border-none overflow-hidden bg-white/95 backdrop-blur-sm">
          <CardContent className="p-0">
            <div
              className="relative h-70 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="text-xs text-white/70">11:57 AM</span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-6xl font-bold text-white drop-shadow-lg">
                    {displayTemp}°
                  </p>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white drop-shadow-md">
                      {displayDesc}
                    </p>
                    <p className="text-sm text-white/70 drop-shadow-sm">
                      Feels like {weather.feelsLike}°
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 p-2">
              <WeatherDetail
                icon={<Wind className="w-3.5 h-3.5" />}
                label="Wind"
                value={`${weather.windSpeed} m/s ${weather.windDirection}`}
              />
              <WeatherDetail
                icon={<Droplets className="w-3.5 h-3.5" />}
                label="Humidity"
                value={`${weather.humidity}%`}
              />
              <WeatherDetail
                icon={<Eye className="w-3.5 h-3.5" />}
                label="Visibility"
                value={`${weather.visibility} km`}
              />
              <WeatherDetail
                icon={<Gauge className="w-3.5 h-3.5" />}
                label="Pressure"
                value={`${weather.pressure} hPa`}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 flex flex-col justify-between bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-0 px-5 pt-4">
            <CardTitle className="text-base font-semibold">
              Hourly Forecast
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-end px-5 pb-4 pt-1 gap-2">
            <SimpleLineChart data={chartData} color="#f97316" height={150} />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
              {hourly.map((hour) => (
                <div
                  key={hour.datetime}
                  className="flex flex-col items-center gap-0.5 bg-amber-50 rounded-lg py-2 px-1"
                >
                  <p className="text-[10px] text-muted-foreground">
                    {hour.time}
                  </p>
                  <span className="text-sm">{hour.icon}</span>
                  <p className="text-[10px] text-blue-500">
                    {hour.rainChance}%
                  </p>
                  <p className="text-sm font-bold">{hour.temperature}°</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
