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

export const DEFAULT_TIME_SLOTS = [
  "00:00",
  "03:00",
  "06:00",
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
] as const;
