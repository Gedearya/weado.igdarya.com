import { WEATHER_CONDITION } from "./weather.constant";

export type WeatherCondition =
  (typeof WEATHER_CONDITION)[keyof typeof WEATHER_CONDITION];

export type WeatherData = {
  condition: WeatherCondition;
  temperature: number;
  description: string;
};
