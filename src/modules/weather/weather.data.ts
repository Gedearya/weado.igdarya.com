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
    temperature: 29,
    feelsLike: 33,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
    description: "Light Rain",
    humidity: 90,
    windSpeed: 5,
    windDirection: "NW",
    pressure: 1008,
    visibility: 6,
  },
  {
    temperature: 28,
    feelsLike: 32,
    icon: "🌧️",
    condition: WEATHER_CONDITION.RAIN,
    description: "Moderate Rain",
    humidity: 92,
    windSpeed: 6,
    windDirection: "N",
    pressure: 1006,
    visibility: 5,
  },
  {
    temperature: 30,
    feelsLike: 34,
    icon: "⛅",
    condition: WEATHER_CONDITION.CLOUDS,
    description: "Mostly Cloudy",
    humidity: 78,
    windSpeed: 4,
    windDirection: "W",
    pressure: 1010,
    visibility: 9,
  },
];

export const dailyForecast: DailyForecast[] = fiveDayWeatherSimulations.map(
  (simulation, dayIndex) => {
    const forecastDate = addDays(todayDate, dayIndex);
    return {
      date: formatDateToString(forecastDate),
      day: getDayLabelByIndex(forecastDate, dayIndex),
      temperature: simulation.temperature,
      feelsLike: simulation.feelsLike,
      icon: simulation.icon,
      condition: simulation.condition,
      description: simulation.description,
      humidity: simulation.humidity,
      windSpeed: simulation.windSpeed,
      windDirection: simulation.windDirection,
      pressure: simulation.pressure,
      visibility: simulation.visibility,
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
      rainChance: 0,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 30,
      rainChance: 0,
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
  [
    {
      temperature: 25,
      rainChance: 30,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 24,
      rainChance: 40,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 25,
      rainChance: 60,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 27,
      rainChance: 70,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 29,
      rainChance: 50,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 28,
      rainChance: 40,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 26,
      rainChance: 30,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 25,
      rainChance: 20,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
  ],
  [
    {
      temperature: 24,
      rainChance: 50,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 23,
      rainChance: 60,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 24,
      rainChance: 70,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 26,
      rainChance: 80,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 28,
      rainChance: 60,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 27,
      rainChance: 50,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 25,
      rainChance: 40,
      icon: "🌧️",
      condition: WEATHER_CONDITION.RAIN,
    },
    {
      temperature: 24,
      rainChance: 30,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
  ],
  [
    {
      temperature: 25,
      rainChance: 10,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 24,
      rainChance: 5,
      icon: "🌙",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 26,
      rainChance: 10,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 29,
      rainChance: 10,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 30,
      rainChance: 15,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 29,
      rainChance: 20,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 27,
      rainChance: 10,
      icon: "⛅",
      condition: WEATHER_CONDITION.CLOUDS,
    },
    {
      temperature: 26,
      rainChance: 5,
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
          temperature: simulation.temperature,
          rainChance: simulation.rainChance,
          icon: simulation.icon,
          condition: simulation.condition,
        }),
      );
      return [dateString, hourlyData];
    }),
  );

export const hourlyForecast: HourlyForecast[] =
  allHourlyForecasts[formatDateToString(todayDate)] ?? [];
