import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "./weather.type";
import { WEATHER_CONDITION } from "./weather.constant";

export const weatherData: WeatherData = {
  condition: WEATHER_CONDITION.SNOW,
  temperature: 30,
  feelsLike: 36,
  description: "Few Clouds",
  city: "Pekalongan, ID",
  humidity: 89,
  windSpeed: 2,
  windDirection: "ESE",
  pressure: 1014,
  uvIndex: 0,
  dewPoint: 24,
  visibility: 10,
};

export const hourlyForecast: HourlyForecast[] = [
  { time: "9 am", temperature: 30, rainChance: 0 },
  { time: "10 am", temperature: 31, rainChance: 0 },
  { time: "11 am", temperature: 31, rainChance: 8 },
  { time: "12 pm", temperature: 32, rainChance: 8 },
  { time: "1 pm", temperature: 33, rainChance: 0 },
  { time: "2 pm", temperature: 33, rainChance: 0 },
  { time: "3 pm", temperature: 34, rainChance: 0 },
  { time: "4 pm", temperature: 33, rainChance: 0 },
  { time: "5 pm", temperature: 32, rainChance: 0 },
];

export const dailyForecast: DailyForecast[] = [
  { day: "Today", temperature: 34, icon: "☀️" },
  { day: "Mon", temperature: 33, icon: "⛅" },
  { day: "Tue", temperature: 32, icon: "⛅" },
  { day: "Wed", temperature: 32, icon: "⛅" },
  { day: "Thu", temperature: 30, icon: "⛅" },
  { day: "Fri", temperature: 31, icon: "⛅" },
  { day: "Sat", temperature: 31, icon: "⛅" },
  { day: "Sun", temperature: 31, icon: "☀️" },
];
