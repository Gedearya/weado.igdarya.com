import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";
import { WEATHER_CONDITION } from "@/modules/weather/weather.constant";

const INDOOR_CONDITIONS: WeatherCondition[] = [
  WEATHER_CONDITION.RAIN,
  WEATHER_CONDITION.THUNDERSTORM,
  WEATHER_CONDITION.DRIZZLE,
  WEATHER_CONDITION.SNOW,
  WEATHER_CONDITION.TORNADO,
  WEATHER_CONDITION.SQUALL,
];

export function getRecommendedCategory(
  condition: WeatherCondition,
): TaskCategory {
  return INDOOR_CONDITIONS.includes(condition)
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
    (task) => !task.completed && isMatchWeather(task, condition),
  );
  const notRecommendedTasks = tasks.filter(
    (task) => !task.completed && !isMatchWeather(task, condition),
  );
  const completedMatchTasks = tasks.filter(
    (task) => task.completed && isMatchWeather(task, condition),
  );
  const completedNotMatchTasks = tasks.filter(
    (task) => task.completed && !isMatchWeather(task, condition),
  );
  return [
    ...recommendedTasks,
    ...notRecommendedTasks,
    ...completedMatchTasks,
    ...completedNotMatchTasks,
  ];
}
