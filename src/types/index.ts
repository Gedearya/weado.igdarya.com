export type WeatherCondition = "rain" | "clear";

export type TaskCategory = "indoor" | "outdoor";

export interface WeatherData {
  condition: WeatherCondition;
  temperature: number;
  description: string;
}

export interface Task {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
}
