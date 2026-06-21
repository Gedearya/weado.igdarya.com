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
    datetime: "2026-06-21 00:00",
    time: "00:00",
    temperature: 26,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-21 03:00",
    time: "03:00",
    temperature: 25,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-21 06:00",
    time: "06:00",
    temperature: 26,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-21 09:00",
    time: "09:00",
    temperature: 29,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-21 12:00",
    time: "12:00",
    temperature: 32,
    rainChance: 0,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-21 15:00",
    time: "15:00",
    temperature: 30,
    rainChance: 10,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-21 18:00",
    time: "18:00",
    temperature: 28,
    rainChance: 5,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-21 21:00",
    time: "21:00",
    temperature: 27,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
];

export const dailyForecast: DailyForecast[] = [
  {
    date: "2026-06-21",
    day: "Today",
    temperature: 32,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    date: "2026-06-22",
    day: "Mon 22",
    temperature: 31,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    date: "2026-06-23",
    day: "Tue 23",
    temperature: 29,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    date: "2026-06-24",
    day: "Wed 24",
    temperature: 28,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    date: "2026-06-25",
    day: "Thu 25",
    temperature: 30,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
];
