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
  uvIndex: number;
  dewPoint: number;
  visibility: number;
};

export type HourlyForecast = {
  time: string;
  temperature: number;
  rainChance: number;
};

export type DailyForecast = {
  day: string;
  temperature: number;
  icon: string;
};
