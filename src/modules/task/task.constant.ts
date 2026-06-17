import { WEATHER_CONDITION } from "@/modules/weather/weather.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";

export const TASK_CATEGORY = {
  INDOOR: "INDOOR",
  OUTDOOR: "OUTDOOR",
} as const;

export const INDOOR_CONDITIONS: WeatherCondition[] = [
  WEATHER_CONDITION.RAIN,
  WEATHER_CONDITION.THUNDERSTORM,
  WEATHER_CONDITION.DRIZZLE,
  WEATHER_CONDITION.FOG,
  WEATHER_CONDITION.HAZE,
];
