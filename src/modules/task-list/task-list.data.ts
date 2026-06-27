import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY, INDOOR_CONDITIONS } from "@/modules/task/task.constant";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";

export function getCategoryForWeatherCondition(
  weatherCondition: WeatherCondition,
): TaskCategory {
  return INDOOR_CONDITIONS.includes(weatherCondition)
    ? TASK_CATEGORY.INDOOR
    : TASK_CATEGORY.OUTDOOR;
}

export function isTaskSuitableForWeather(
  task: Task,
  weatherCondition: WeatherCondition,
): boolean {
  return task.category === getCategoryForWeatherCondition(weatherCondition);
}

export function isTaskRecommendedForWeather(
  task: Task,
  weatherCondition: WeatherCondition,
): boolean {
  return !task.completed && isTaskSuitableForWeather(task, weatherCondition);
}

export function filterTasksBySelectedDay(
  tasks: Task[],
  selectedDay: string,
): Task[] {
  if (selectedDay === DAY_FILTER.ALL) return tasks;
  return tasks.filter((task) => task.dueDate === selectedDay || !task.dueDate);
}

function compareTasksByDueTime(taskA: Task, taskB: Task): number {
  const timeA = taskA.dueTime ?? "99:99";
  const timeB = taskB.dueTime ?? "99:99";
  return timeA.localeCompare(timeB);
}

export function sortTasksByWeatherRecommendation(
  tasks: Task[],
  weatherCondition: WeatherCondition,
): Task[] {
  const activeRecommendedTasks = tasks
    .filter(
      (task) =>
        !task.completed && isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const activeNonRecommendedTasks = tasks
    .filter(
      (task) =>
        !task.completed && !isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const completedRecommendedTasks = tasks
    .filter(
      (task) =>
        task.completed && isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const completedNonRecommendedTasks = tasks
    .filter(
      (task) =>
        task.completed && !isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  return [
    ...activeRecommendedTasks,
    ...activeNonRecommendedTasks,
    ...completedRecommendedTasks,
    ...completedNonRecommendedTasks,
  ];
}
