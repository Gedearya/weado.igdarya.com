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

export function isRecommended(
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

function sortByTime(a: Task, b: Task): number {
  const timeA = a.dueTime ?? "99:99";
  const timeB = b.dueTime ?? "99:99";
  return timeA.localeCompare(timeB);
}

export function sortTasks(tasks: Task[], condition: WeatherCondition): Task[] {
  const recommended = tasks
    .filter((task) => !task.completed && isMatchWeather(task, condition))
    .sort(sortByTime);
  const notRecommended = tasks
    .filter((task) => !task.completed && !isMatchWeather(task, condition))
    .sort(sortByTime);
  const completedMatch = tasks
    .filter((task) => task.completed && isMatchWeather(task, condition))
    .sort(sortByTime);
  const completedNoMatch = tasks
    .filter((task) => task.completed && !isMatchWeather(task, condition))
    .sort(sortByTime);
  return [
    ...recommended,
    ...notRecommended,
    ...completedMatch,
    ...completedNoMatch,
  ];
}
