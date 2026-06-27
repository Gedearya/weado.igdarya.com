import type { Task } from "./task.type";
import { defaultTasks } from "./task.data";

const TASKS_LOCAL_STORAGE_KEY = "weado-tasks";

export function loadTasksFromLocalStorage(): Task[] {
  const storedTasksJson = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);
  if (!storedTasksJson) return defaultTasks;

  try {
    return JSON.parse(storedTasksJson) as Task[];
  } catch {
    return defaultTasks;
  }
}

export function saveTasksToLocalStorage(tasks: Task[]): void {
  localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}
