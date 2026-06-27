import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY, INDOOR_CONDITIONS } from "@/modules/task/task.constant";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";

/**
 * Menentukan kategori task yang cocok berdasarkan kondisi cuaca.
 * Cuaca buruk (hujan, badai, kabut) → Indoor, cuaca baik → Outdoor.
 */
export function getCategoryForWeatherCondition(
  weatherCondition: WeatherCondition,
): TaskCategory {
  return INDOOR_CONDITIONS.includes(weatherCondition)
    ? TASK_CATEGORY.INDOOR
    : TASK_CATEGORY.OUTDOOR;
}

/**
 * Mengecek apakah kategori task cocok dengan kondisi cuaca saat ini.
 */
export function isTaskSuitableForWeather(
  task: Task,
  weatherCondition: WeatherCondition,
): boolean {
  return task.category === getCategoryForWeatherCondition(weatherCondition);
}

/**
 * Mengecek apakah task layak direkomendasikan:
 * belum selesai DAN kategorinya cocok dengan cuaca.
 */
export function isTaskRecommendedForWeather(
  task: Task,
  weatherCondition: WeatherCondition,
): boolean {
  return !task.completed && isTaskSuitableForWeather(task, weatherCondition);
}

/**
 * Filter task berdasarkan hari yang dipilih.
 * "All" menampilkan semua, selainnya filter by dueDate.
 */
export function filterTasksByDay(tasks: Task[], selectedDay: string): Task[] {
  if (selectedDay === DAY_FILTER.ALL) {
    return tasks;
  }
  return tasks.filter((task) => task.dueDate === selectedDay || !task.dueDate);
}

/**
 * Membandingkan dua task berdasarkan dueTime untuk sorting.
 */
function compareTasksByDueTime(taskA: Task, taskB: Task): number {
  const timeA = taskA.dueTime ?? "99:99";
  const timeB = taskB.dueTime ?? "99:99";
  return timeA.localeCompare(timeB);
}

/**
 * Mengurutkan task berdasarkan prioritas rekomendasi cuaca:
 * 1. Aktif + cocok cuaca (recommended)
 * 2. Aktif + tidak cocok cuaca
 * 3. Selesai + cocok cuaca
 * 4. Selesai + tidak cocok cuaca
 * Dalam setiap grup, diurutkan berdasarkan dueTime.
 */
export function sortTasksByWeatherRecommendation(
  tasks: Task[],
  weatherCondition: WeatherCondition,
): Task[] {
  const recommendedTasks = tasks
    .filter(
      (task) =>
        !task.completed && isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const activeTasks = tasks
    .filter(
      (task) =>
        !task.completed && !isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const completedSuitableTasks = tasks
    .filter(
      (task) =>
        task.completed && isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  const completedOtherTasks = tasks
    .filter(
      (task) =>
        task.completed && !isTaskSuitableForWeather(task, weatherCondition),
    )
    .sort(compareTasksByDueTime);

  return [
    ...recommendedTasks,
    ...activeTasks,
    ...completedSuitableTasks,
    ...completedOtherTasks,
  ];
}
