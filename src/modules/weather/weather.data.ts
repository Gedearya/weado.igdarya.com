import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
} from "./weather.type";
import { WEATHER_CONDITION } from "./weather.constant";

export const weatherData: WeatherData = {
  condition: WEATHER_CONDITION.CLOUDS,
  temperature: 31,
  feelsLike: 35,
  description: "Partly Cloudy",
  city: "Pekalongan, ID",
  humidity: 82,
  windSpeed: 3,
  windDirection: "E",
  pressure: 1012,
  visibility: 10,
};

export const hourlyForecast: HourlyForecast[] = [
  {
    datetime: "2026-06-27 00:00",
    time: "00:00",
    temperature: 26,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-27 03:00",
    time: "03:00",
    temperature: 25,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    datetime: "2026-06-27 06:00",
    time: "06:00",
    temperature: 27,
    rainChance: 0,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-27 09:00",
    time: "09:00",
    temperature: 30,
    rainChance: 0,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-27 12:00",
    time: "12:00",
    temperature: 31,
    rainChance: 10,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-27 15:00",
    time: "15:00",
    temperature: 30,
    rainChance: 20,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-27 18:00",
    time: "18:00",
    temperature: 28,
    rainChance: 10,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    datetime: "2026-06-27 21:00",
    time: "21:00",
    temperature: 27,
    rainChance: 0,
    icon: "🌙",
    condition: WEATHER_CONDITION.CLEAR,
  },
];

export const dailyForecast: DailyForecast[] = [
  {
    date: "2026-06-27",
    day: "Today",
    temperature: 31,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
  {
    date: "2026-06-28",
    day: "Sun 28",
    temperature: 32,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
  },
  {
    date: "2026-06-29",
    day: "Mon 29",
    temperature: 29,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    date: "2026-06-30",
    day: "Tue 30",
    temperature: 28,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
  },
  {
    date: "2026-07-01",
    day: "Wed 1",
    temperature: 30,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
  },
];
