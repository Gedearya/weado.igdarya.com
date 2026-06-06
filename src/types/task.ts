export type TaskCategory = "indoor" | "outdoor";

export interface Task {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
}
