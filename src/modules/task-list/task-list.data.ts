import type { Task } from "../task/task.type";
import { WEATHER_CONDITION } from "../weather/weather.constant";
import type { WeatherCondition } from "../weather/weather.type";

export function getRecommendedCategory(
  condition: WeatherCondition,
): "indoor" | "outdoor" {
  return condition === WEATHER_CONDITION.RAIN ? "indoor" : "outdoor";
}

export function isMatchWeather(
  task: Task,
  condition: WeatherCondition,
): boolean {
  return task.category === getRecommendedCategory(condition);
}

export function isRecommended(
  task: Task,
  condition: WeatherCondition,
): boolean {
  return !task.completed && isMatchWeather(task, condition);
}

export function sortTasks(tasks: Task[], condition: WeatherCondition): Task[] {
  const recommended = tasks.filter(
    (t) => !t.completed && isMatchWeather(t, condition),
  );
  const notRecommended = tasks.filter(
    (t) => !t.completed && !isMatchWeather(t, condition),
  );
  const doneMatch = tasks.filter(
    (t) => t.completed && isMatchWeather(t, condition),
  );
  const doneNotMatch = tasks.filter(
    (t) => t.completed && !isMatchWeather(t, condition),
  );
  return [...recommended, ...notRecommended, ...doneMatch, ...doneNotMatch];
}
