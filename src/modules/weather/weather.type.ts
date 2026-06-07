export type WeatherCondition = "rain" | "clear";

export type WeatherData = {
  condition: WeatherCondition;
  temperature: number;
  description: string;
};
