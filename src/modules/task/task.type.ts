import { TASK_CATEGORY } from "./task.constant";

export type TaskCategory = (typeof TASK_CATEGORY)[keyof typeof TASK_CATEGORY];

export type Task = {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
  dueDate?: string; // ISO date "2026-06-17"
  dueTime?: string; // time slot "15:00" (from 3-hour interval)
};
