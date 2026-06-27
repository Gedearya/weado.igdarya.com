import type { Task } from "./task.type";
import { tasks as defaultTasks } from "./task.data";

const STORAGE_KEY = "weado-tasks";

export function loadTasks(): Task[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultTasks;

  try {
    return JSON.parse(stored) as Task[];
  } catch {
    return defaultTasks;
  }
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
