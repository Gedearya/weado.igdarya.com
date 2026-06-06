export type WeatherCondition = "rain" | "clear";

export interface WeatherData {
  condition: WeatherCondition;
  temperature: number;
  description: string;
}
