import { format, addDays } from "date-fns";
import type {
  WeatherData,
  HourlyForecast,
  DailyForecast,
  WeatherCondition,
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

const todayDate = new Date();
const todayDateString = format(todayDate, "yyyy-MM-dd");

function formatDateToString(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

function getDayLabelByIndex(date: Date, dayIndex: number): string {
  if (dayIndex === 0) return "Today";
  return format(date, "EEE d");
}

type DailyWeatherSimulation = {
  temperature: number;
  icon: string;
  condition: WeatherCondition;
};

const fiveDayWeatherSimulations: DailyWeatherSimulation[] = [
  { temperature: 31, icon: "⛅", condition: WEATHER_CONDITION.CLOUDS },
  { temperature: 32, icon: "☀️", condition: WEATHER_CONDITION.CLEAR },
  { temperature: 29, icon: "🌧️", condition: WEATHER_CONDITION.RAIN },
  { temperature: 28, icon: "🌧️", condition: WEATHER_CONDITION.RAIN },
  { temperature: 30, icon: "⛅", condition: WEATHER_CONDITION.CLOUDS },
];

export const dailyForecast: DailyForecast[] = fiveDayWeatherSimulations.map(
  (simulation, dayIndex) => {
    const forecastDate = addDays(todayDate, dayIndex);
    return {
      date: formatDateToString(forecastDate),
      day: getDayLabelByIndex(forecastDate, dayIndex),
      temperature: simulation.temperature,
      icon: simulation.icon,
      condition: simulation.condition,
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

const todayHourlyWeatherSimulations: HourlyWeatherSimulation[] = [
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
];

export const hourlyForecast: HourlyForecast[] =
  todayHourlyWeatherSimulations.map((simulation, index) => ({
    datetime: `${todayDateString} ${hourlyTimeSlots[index]}`,
    time: hourlyTimeSlots[index],
    temperature: simulation.temperature,
    rainChance: simulation.rainChance,
    icon: simulation.icon,
    condition: simulation.condition,
  }));
