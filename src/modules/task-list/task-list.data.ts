import { TASK_CATEGORY } from "../task/task.constant";
import type { Task, TaskCategory } from "../task/task.type";
import { WEATHER_CONDITION } from "../weather/weather.constant";
import type { WeatherCondition } from "../weather/weather.type";

export function getRecommendedCategory(
  condition: WeatherCondition,
): TaskCategory {
  return condition === WEATHER_CONDITION.RAIN
    ? TASK_CATEGORY.INDOOR
    : TASK_CATEGORY.OUTDOOR;
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
  const recommendedTasks = tasks.filter(
    (t) => !t.completed && isMatchWeather(t, condition),
  );
  const notRecommendedTasks = tasks.filter(
    (t) => !t.completed && !isMatchWeather(t, condition),
  );
  const doneMatchTasks = tasks.filter(
    (t) => t.completed && isMatchWeather(t, condition),
  );
  const doneNotMatchTasks = tasks.filter(
    (t) => t.completed && !isMatchWeather(t, condition),
  );

  return [
    ...recommendedTasks,
    ...notRecommendedTasks,
    ...doneMatchTasks,
    ...doneNotMatchTasks,
  ];
}
