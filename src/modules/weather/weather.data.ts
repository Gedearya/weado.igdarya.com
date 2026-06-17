import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "./weather.type";
import { WEATHER_CONDITION } from "./weather.constant";

export const weatherData: WeatherData = {
  condition: WEATHER_CONDITION.CLEAR,
  temperature: 30,
  feelsLike: 36,
  description: "Few Clouds",
  city: "Pekalongan, ID",
  humidity: 89,
  windSpeed: 2,
  windDirection: "ESE",
  pressure: 1014,
  visibility: 10,
};

export const hourlyForecast: HourlyForecast[] = [
  { time: "12 p.m", temperature: 34, rainChance: 0, icon: "☀️" },
  { time: "1 p.m", temperature: 34, rainChance: 0, icon: "☀️" },
  { time: "2 p.m", temperature: 34, rainChance: 0, icon: "☀️" },
  { time: "3 p.m", temperature: 34, rainChance: 0, icon: "☀️" },
  { time: "4 p.m", temperature: 33, rainChance: 0, icon: "☀️" },
  { time: "5 p.m", temperature: 32, rainChance: 0, icon: "⛅" },
  { time: "6 p.m", temperature: 31, rainChance: 0, icon: "⛅" },
  { time: "7 p.m", temperature: 31, rainChance: 0, icon: "⛅" },
  { time: "8 p.m", temperature: 30, rainChance: 0, icon: "🌙" },
];

export const dailyForecast: DailyForecast[] = [
  {
    day: "Today",
    temperature: 34,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    day: "Mon",
    temperature: 33,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    day: "Tue",
    temperature: 32,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    day: "Wed",
    temperature: 32,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    day: "Thu",
    temperature: 30,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    day: "Fri",
    temperature: 31,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    day: "Sat",
    temperature: 31,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    day: "Sun",
    temperature: 31,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
];
