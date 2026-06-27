import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY, INDOOR_CONDITIONS } from "@/modules/task/task.constant";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";

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

export function checkIsRecommended(
  task: Task,
  condition: WeatherCondition,
): boolean {
  return !task.completed && isMatchWeather(task, condition);
}

export function filterTasksByDay(tasks: Task[], day: string): Task[] {
  if (day === DAY_FILTER.ALL) {
    return tasks;
  }
  return tasks.filter((task) => task.dueDate === day || !task.dueDate);
}

export function sortTasks(tasks: Task[], condition: WeatherCondition): Task[] {
  const recommended = tasks.filter(
    (task) => !task.completed && isMatchWeather(task, condition),
  );
  const notRecommended = tasks.filter(
    (task) => !task.completed && !isMatchWeather(task, condition),
  );
  const completedMatch = tasks.filter(
    (task) => task.completed && isMatchWeather(task, condition),
  );
  const completedNoMatch = tasks.filter(
    (task) => task.completed && !isMatchWeather(task, condition),
  );
  return [
    ...recommended,
    ...notRecommended,
    ...completedMatch,
    ...completedNoMatch,
  ];
}
