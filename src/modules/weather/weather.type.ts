import { WEATHER_CONDITION } from "./weather.constant";

export type WeatherCondition =
  (typeof WEATHER_CONDITION)[keyof typeof WEATHER_CONDITION];

export type WeatherData = {
  condition: WeatherCondition;
  temperature: number;
  feelsLike: number;
  description: string;
  city: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
};

export type HourlyForecast = {
  datetime: string; // ISO format "2026-06-17 15:00"
  time: string; // display format "15:00"
  temperature: number;
  rainChance: number;
  icon: string;
  condition: WeatherCondition;
};

export type DailyForecast = {
  date: string; // ISO format "2026-06-17"
  day: string; // display format "Today", "Wed 18"
  temperature: number;
  icon: string;
  condition: WeatherCondition;
};
