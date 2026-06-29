import { format } from "date-fns";
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
import { HourlyForecastItem } from "@/modules/weather/components/hourly-forecast-item";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import { MapPin, Search, Droplets, Wind, Eye, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

type WeatherCardProps = {
  weather: WeatherData;
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
  selectedDay: string;
  onSelectDay: (day: string) => void;
};

function WeatherDetailItem({
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
  hourlyForecast,
  dailyForecast,
  selectedDay,
  onSelectDay,
}: WeatherCardProps) {
  const selectedDayForecast = dailyForecast.find(
    (forecast) => forecast.date === selectedDay,
  );

  const displayTemperature =
    selectedDayForecast?.temperature ?? weather.temperature;
  const displayFeelsLike = selectedDayForecast?.feelsLike ?? weather.feelsLike;
  const displayDescription =
    selectedDayForecast?.description ?? weather.description;
  const displayCondition = selectedDayForecast?.condition ?? weather.condition;
  const displayHumidity = selectedDayForecast?.humidity ?? weather.humidity;
  const displayWindSpeed = selectedDayForecast?.windSpeed ?? weather.windSpeed;
  const displayWindDirection =
    selectedDayForecast?.windDirection ?? weather.windDirection;
  const displayPressure = selectedDayForecast?.pressure ?? weather.pressure;
  const displayVisibility =
    selectedDayForecast?.visibility ?? weather.visibility;

  const backgroundImage =
    WEATHER_BACKGROUND[displayCondition] || WEATHER_BACKGROUND.CLEAR;
  const currentTimeFormatted = format(new Date(), "h:mm a");
  const temperatureChartData = hourlyForecast.map((hour) => ({
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
          className={cn(
            "shrink-0 px-3 py-1 cursor-pointer text-xs",
            selectedDay === DAY_FILTER.ALL
              ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
              : "bg-white/20 text-white border-white/30",
          )}
          onClick={() => onSelectDay(DAY_FILTER.ALL)}
        >
          {DAY_FILTER.ALL}
        </Badge>
        {dailyForecast.map((forecast) => (
          <Badge
            key={forecast.date}
            variant={selectedDay === forecast.date ? "default" : "outline"}
            className={cn(
              "shrink-0 px-3 py-1 cursor-pointer text-xs",
              selectedDay === forecast.date
                ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
                : "bg-white/20 text-white border-white/30",
            )}
            onClick={() => onSelectDay(forecast.date)}
          >
            {forecast.day} · {forecast.temperature}° {forecast.icon}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <Card className="md:col-span-2 border-none overflow-hidden bg-white/95 backdrop-blur-sm">
          <CardContent className="p-0">
            <div
              className="relative h-70 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="text-xs text-white/70">
                    {currentTimeFormatted}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-6xl font-bold text-white drop-shadow-lg">
                    {displayTemperature}°
                  </p>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white drop-shadow-md">
                      {displayDescription}
                    </p>
                    <p className="text-sm text-white/70 drop-shadow-sm">
                      Feels like {displayFeelsLike}°
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {[
                {
                  icon: <Wind className="w-3.5 h-3.5" />,
                  label: "Wind",
                  value: `${displayWindSpeed} m/s ${displayWindDirection}`,
                },
                {
                  icon: <Droplets className="w-3.5 h-3.5" />,
                  label: "Humidity",
                  value: `${displayHumidity}%`,
                },
                {
                  icon: <Eye className="w-3.5 h-3.5" />,
                  label: "Visibility",
                  value: `${displayVisibility} km`,
                },
                {
                  icon: <Gauge className="w-3.5 h-3.5" />,
                  label: "Pressure",
                  value: `${displayPressure} hPa`,
                },
              ].map((detail) => (
                <WeatherDetailItem key={detail.label} {...detail} />
              ))}
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
            <SimpleLineChart
              data={temperatureChartData}
              color="#f97316"
              height={150}
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
              {hourlyForecast.map((hour) => (
                <HourlyForecastItem key={hour.datetime} hour={hour} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
