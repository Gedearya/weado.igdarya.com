import { TASK_CATEGORY } from "./task.constant";

export type TaskCategory = (typeof TASK_CATEGORY)[keyof typeof TASK_CATEGORY];

export type Task = {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
  dueDate?: string;
};
