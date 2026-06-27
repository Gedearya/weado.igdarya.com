import type { Task } from "./task.type";
import { defaultTasks } from "./task.data";

const TASKS_STORAGE_KEY = "weado-tasks";

export function loadTasksFromStorage(): Task[] {
  const stored = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!stored) return defaultTasks;

  try {
    return JSON.parse(stored) as Task[];
  } catch {
    return defaultTasks;
  }
}

export function saveTasksToStorage(tasks: Task[]): void {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}
