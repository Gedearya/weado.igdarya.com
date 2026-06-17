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
  {
    datetime: "2026-06-17 00:00",
    time: "00:00",
    temperature: 27,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 03:00",
    time: "03:00",
    temperature: 26,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 06:00",
    time: "06:00",
    temperature: 27,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 09:00",
    time: "09:00",
    temperature: 30,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 12:00",
    time: "12:00",
    temperature: 34,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 15:00",
    time: "15:00",
    temperature: 34,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-17 18:00",
    time: "18:00",
    temperature: 32,
    rainChance: 10,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-17 21:00",
    time: "21:00",
    temperature: 30,
    rainChance: 5,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLOUDS,
  },
];

export const dailyForecast: DailyForecast[] = [
  {
    date: "2026-06-17",
    day: "Today",
    temperature: 34,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    date: "2026-06-18",
    day: "Thu 18",
    temperature: 33,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    date: "2026-06-19",
    day: "Fri 19",
    temperature: 32,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    date: "2026-06-20",
    day: "Sat 20",
    temperature: 31,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    date: "2026-06-21",
    day: "Sun 21",
    temperature: 31,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
];
