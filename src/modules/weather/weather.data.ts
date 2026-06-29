import { format, addDays } from "date-fns";
import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
  WeatherCondition,
} from "./weather.type";
import { WEATHER_CONDITION } from "./weather.constant";

const todayDate = new Date();

function formatDateToString(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

function getDayLabelByIndex(date: Date, dayIndex: number): string {
  if (dayIndex === 0) return "Today";
  return format(date, "EEE d");
}

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

type DailyWeatherSimulation = {
  temperature: number;
  feelsLike: number;
  icon: string;
  condition: WeatherCondition;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
};

const fiveDayWeatherSimulations: DailyWeatherSimulation[] = [
  {
    temperature: 31,
    feelsLike: 35,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
    description: "Partly Cloudy",
    humidity: 82,
    windSpeed: 3,
    windDirection: "E",
    pressure: 1012,
    visibility: 10,
  },
  {
    temperature: 32,
    feelsLike: 36,
    icon: "☀️",
    condition: WEATHER_CONDITION.CLEAR,
    description: "Clear Sky",
    humidity: 65,
    windSpeed: 2,
    windDirection: "SE",
    pressure: 1014,
    visibility: 12,
  },
  {
    temperature: 26,
    feelsLike: 28,
    icon: "⛈️",
    condition: WEATHER_CONDITION.THUNDERSTORM,
    description: "Thunderstorm",
    humidity: 95,
    windSpeed: 8,
    windDirection: "NW",
    pressure: 1002,
    visibility: 3,
  },
  {
    temperature: 27,
    feelsLike: 30,
    icon: "🌦️",
    condition: WEATHER_CONDITION.DRIZZLE,
    description: "Light Drizzle",
    humidity: 88,
    windSpeed: 4,
    windDirection: "N",
    pressure: 1008,
    visibility: 7,
  },
  {
    temperature: 29,
    feelsLike: 32,
    icon: "🌫️",
    condition: WEATHER_CONDITION.HAZE,
    description: "Hazy",
    humidity: 85,
    windSpeed: 2,
    windDirection: "W",
    pressure: 1010,
    visibility: 4,
  },
];

export const dailyForecast: DailyForecast[] = fiveDayWeatherSimulations.map(
  (simulation, dayIndex) => {
    const forecastDate = addDays(todayDate, dayIndex);
    return {
      date: formatDateToString(forecastDate),
      day: getDayLabelByIndex(forecastDate, dayIndex),
      ...simulation,
    };
  },
);

type HourlyWeatherSimulation = {
  temperature: number;
  rainChance: number;
  icon: string;
  condition: WeatherCondition;
};

const hourlyTimeSlots = [
  "00:00",
  "03:00",
  "06:00",
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
];

const fiveDayHourlySimulations: HourlyWeatherSimulation[][] = [
  // Day 0: Clouds
  [
    {
      temperature: 26,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 25,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 27,
      rainChance: 5,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 30,
      rainChance: 5,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 31,
      rainChance: 10,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 30,
      rainChance: 20,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 28,
      rainChance: 10,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 27,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
  ],

  // Day 1: Clear
  [
    {
      temperature: 25,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 24,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 27,
      rainChance: 0,
      icon: "☀️",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 30,
      rainChance: 0,
      icon: "☀️",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 32,
      rainChance: 0,
      icon: "☀️",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 31,
      rainChance: 5,
      icon: "☀️",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 29,
      rainChance: 0,
      icon: "☀️",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 27,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
  ],

  // Day 2: Thunderstorm
  [
    {
      temperature: 24,
      rainChance: 60,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 23,
      rainChance: 70,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 24,
      rainChance: 80,
      icon: "⛈️",
      condition: WEATHER_CONDITION.THUNDERSTORM,
    },
    {
      temperature: 25,
      rainChance: 90,
      icon: "⛈️",
      condition: WEATHER_CONDITION.THUNDERSTORM,
    },
    {
      temperature: 26,
      rainChance: 85,
      icon: "⛈️",
      condition: WEATHER_CONDITION.THUNDERSTORM,
    },
    {
      temperature: 25,
      rainChance: 75,
      icon: "⛈️",
      condition: WEATHER_CONDITION.THUNDERSTORM,
    },
    {
      temperature: 24,
      rainChance: 60,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 23,
      rainChance: 40,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
  ],

  // Day 3: Drizzle
  [
    {
      temperature: 24,
      rainChance: 20,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 23,
      rainChance: 25,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 25,
      rainChance: 35,
      icon: "🌦️",
      condition: WEATHER_CONDITION.DRIZZLE,
    },
    {
      temperature: 26,
      rainChance: 40,
      icon: "🌦️",
      condition: WEATHER_CONDITION.DRIZZLE,
    },
    {
      temperature: 27,
      rainChance: 45,
      icon: "🌦️",
      condition: WEATHER_CONDITION.DRIZZLE,
    },
    {
      temperature: 26,
      rainChance: 35,
      icon: "🌦️",
      condition: WEATHER_CONDITION.DRIZZLE,
    },
    {
      temperature: 25,
      rainChance: 25,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 24,
      rainChance: 15,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
  ],

  // Day 4: Haze
  [
    {
      temperature: 25,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 24,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
    {
      temperature: 26,
      rainChance: 0,
      icon: "🌫️",
      condition: WEATHER_CONDITION.HAZE,
    },
    {
      temperature: 28,
      rainChance: 0,
      icon: "🌫️",
      condition: WEATHER_CONDITION.HAZE,
    },
    {
      temperature: 29,
      rainChance: 5,
      icon: "🌫️",
      condition: WEATHER_CONDITION.HAZE,
    },
    {
      temperature: 28,
      rainChance: 5,
      icon: "🌫️",
      condition: WEATHER_CONDITION.HAZE,
    },
    {
      temperature: 27,
      rainChance: 0,
      icon: "🌫️",
      condition: WEATHER_CONDITION.HAZE,
    },
    {
      temperature: 25,
      rainChance: 0,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLEAR,
    },
  ],
];

export const allHourlyForecasts: Record<string, HourlyForecast[]> =
  Object.fromEntries(
    fiveDayHourlySimulations.map((daySimulations, dayIndex) => {
      const dateString = formatDateToString(addDays(todayDate, dayIndex));
      const hourlyData: HourlyForecast[] = daySimulations.map(
        (simulation, hourIndex) => ({
          datetime: `${dateString} ${hourlyTimeSlots[hourIndex]}`,
          time: hourlyTimeSlots[hourIndex],
          ...simulation,
        }),
      );
      return [dateString, hourlyData];
    }),
  );

export const hourlyForecast: HourlyForecast[] =
  allHourlyForecasts[formatDateToString(todayDate)] ?? [];
