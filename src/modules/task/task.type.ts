export type TaskCategory = "INDOOR" | "OUTDOOR";

export type Task = {
  id: number;
  title: string;
  category: TaskCategory;
  description: string;
  completed: boolean;
};
