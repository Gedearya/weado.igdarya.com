import type { WeatherData } from "./weather.type";
import { WEATHER_CONDITION } from "./weather.constant";

export const weatherData: WeatherData = {
  condition: WEATHER_CONDITION.CLEAR,
  temperature: 30,
  description: "Scattered Clouds",
};
