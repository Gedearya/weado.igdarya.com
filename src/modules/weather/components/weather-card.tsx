import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "@/modules/weather/weather.type";
import {
  WEATHER_CONDITION,
  WEATHER_BACKGROUND,
  WEATHER_GRADIENT,
} from "@/modules/weather/weather.constant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SimpleLineChart } from "@/components/ui/chart";
import {
  MapPin,
  Search,
  Droplets,
  Wind,
  Gauge,
  Sun,
  Eye,
  Thermometer,
} from "lucide-react";

type WeatherCardProps = {
  weather: WeatherData;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
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
    <div className="flex flex-col items-center gap-1 bg-amber-50 rounded-lg p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

export function WeatherCard({ weather, hourly, daily }: WeatherCardProps) {
  const condition = weather.condition;
  const bgImage = WEATHER_BACKGROUND[condition] || WEATHER_BACKGROUND.CLEAR;
  const gradient = WEATHER_GRADIENT[condition] || WEATHER_GRADIENT.CLEAR;

  const isSnow = condition === WEATHER_CONDITION.SNOW;
  const textColor = isSnow ? "text-gray-800" : "text-white";
  const textMuted = isSnow ? "text-gray-600" : "text-white/70";

  const chartData = hourly.map((hour) => ({
    label: hour.time,
    value: hour.temperature,
  }));

  return (
    <div className="space-y-3">
      {/* Search + Location */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm text-white/80 drop-shadow-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{weather.city}</span>
        </div>
        <div className="relative flex-1 max-w-[200px]">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search City"
            className="pl-8 h-8 text-sm bg-white/90"
            readOnly
          />
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 bg-white/90">
          <MapPin className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Daily Tabs */}
      <div className="flex gap-1.5 overflow-x-auto">
        {daily.map((day, index) => (
          <Badge
            key={day.day}
            variant={index === 0 ? "default" : "outline"}
            className={`shrink-0 px-3 py-1 cursor-pointer text-xs ${
              index === 0
                ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
                : "bg-white/80 text-foreground"
            }`}
          >
            {day.day} {day.temperature}° {day.icon}
          </Badge>
        ))}
      </div>

      {/* Main Weather Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {/* Current Weather Card with background image */}
        <Card className="md:col-span-2 border-none overflow-hidden">
          <CardContent className="p-0">
            {/* Sky image with weather info overlay */}
            <div
              className="relative h-[200px] bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t ${gradient}`}
              />
              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className={`text-xs ${textMuted}`}>11:57 AM</span>
                </div>
                <div className="flex items-end justify-between">
                  <p
                    className={`text-6xl font-bold ${textColor} drop-shadow-lg`}
                  >
                    {weather.temperature}°
                  </p>
                  <div className="text-right">
                    <p
                      className={`text-lg font-medium ${textColor} drop-shadow-md`}
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

            {/* Weather details grid */}
            <div className="grid grid-cols-3 gap-2 p-3">
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
              <WeatherDetail
                icon={<Sun className="w-3.5 h-3.5" />}
                label="UV Index"
                value={`${weather.uvIndex} UV`}
              />
              <WeatherDetail
                icon={<Thermometer className="w-3.5 h-3.5" />}
                label="Dew Point"
                value={`${weather.dewPoint}°C`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Hourly Forecast with Chart */}
        <Card className="md:col-span-3 flex flex-col">
          <CardHeader className="pb-0 px-4 pt-4">
            <CardTitle className="text-sm">Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 px-4 pb-4 pt-2">
            <SimpleLineChart data={chartData} color="#f97316" height={130} />
            <div className="grid grid-cols-9 gap-1 mt-3 border-t pt-3">
              {hourly.map((hour) => (
                <div key={hour.time} className="text-center">
                  <p className="text-[10px] text-muted-foreground">
                    {hour.time}
                  </p>
                  <p className="text-[10px] text-blue-500">
                    {hour.rainChance}%
                  </p>
                  <p className="text-xs font-bold">{hour.temperature}°</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
