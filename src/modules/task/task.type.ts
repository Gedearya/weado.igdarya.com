export type TaskCategory = "indoor" | "outdoor";

export type Task = {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
};
