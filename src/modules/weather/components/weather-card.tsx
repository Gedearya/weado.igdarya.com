import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "@/modules/weather/weather.type";
import {
  WEATHER_BACKGROUND,
  WEATHER_GRADIENT,
} from "@/modules/weather/weather.constant";
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
};

function WeatherDetail({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 bg-amber-50 rounded-lg p-2 w-full h-full">
      <div className="flex items-center gap-1 text-muted-foreground">
        {icon}
        <span className="text-[10px]">{label}</span>
      </div>
      <p className="text-xs font-semibold">{text}</p>
    </div>
  );
}

export function WeatherCard({ weather, hourly, daily }: WeatherCardProps) {
  const condition = weather.condition;
  const bgImage = WEATHER_BACKGROUND[condition] || WEATHER_BACKGROUND.CLEAR;
  const gradient = WEATHER_GRADIENT[condition] || WEATHER_GRADIENT.CLEAR;

  const textMuted = "text-white/70";

  const weatherChartData = hourly.map((hour) => ({
    label: hour.time,
    value: hour.temperature,
    rainChance: hour.rainChance,
  }));

  const weatherCardDetails = {
    wind: {
      label: "",
      icon: "",
      text: "",
    },
  };

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
              className="pl-8 h-8 text-sm bg-white/90 w-full md:w-[180px]"
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
          variant="default"
          className="shrink-0 px-3 py-1 cursor-pointer text-xs bg-orange-500 hover:bg-orange-600 text-white border-none"
        >
          {DAY_FILTER.ALL}
        </Badge>
        {daily.map((day) => (
          <Badge
            key={day.date}
            variant="outline"
            className="shrink-0 px-3 py-1 cursor-pointer text-xs bg-white/20 text-white border-white/30"
          >
            {day.day} · {day.temperature}° {day.icon}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <Card className="md:col-span-2 border-none overflow-hidden">
          <CardContent className="p-0">
            {/* TODO: Refactor into its own component with variant */}
            <div
              // condition="thunderstorm"
              className="relative h-[280px] bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              <div className={`absolute inset-0 bg-linear-to-t ${gradient}`} />

              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className={`text-xs ${textMuted}`}>11:57 AM</span>
                </div>
                <div className="flex items-end justify-between">
                  <p className={`text-6xl font-bold text-white drop-shadow-lg`}>
                    {weather.temperature}°
                  </p>
                  <div className="text-right">
                    <p
                      className={`text-lg font-medium text-white drop-shadow-md`}
                    >
                      {weather.description}
                    </p>
                    <p className={`text-sm ${textMuted} drop-shadow-sm`}>
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
                text={`${weather.windSpeed} m/s ${weather.windDirection}`}
              />
              <WeatherDetail
                icon={<Droplets className="w-3.5 h-3.5" />}
                label="Humidity"
                text={`${weather.humidity}%`}
              />
              <WeatherDetail
                icon={<Eye className="w-3.5 h-3.5" />}
                label="Visibility"
                text={`${weather.visibility} km`}
              />
              <WeatherDetail
                icon={<Gauge className="w-3.5 h-3.5" />}
                label="Pressure"
                text={`${weather.pressure} hPa`}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 flex flex-col justify-between">
          <CardHeader className="pb-0 px-5 pt-4">
            <CardTitle className="text-base font-semibold">
              Hourly Forecast
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-end px-5 pb-4 pt-1 gap-2">
            <SimpleLineChart
              data={weatherChartData}
              color="#f97316"
              height={150}
            />
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
