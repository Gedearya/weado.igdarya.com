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
  datetime: string;
  time: string;
  temperature: number;
  rainChance: number;
  icon: string;
  condition: WeatherCondition;
};

export type DailyForecast = {
  date: string;
  day: string;
  temperature: number;
  icon: string;
  condition: WeatherCondition;
};
