import type { Task } from "@/modules/task/task.type";
import type { WeatherCondition } from "@/modules/weather/weather.type";

export type TaskListProps = {
  tasks: Task[];
  condition: WeatherCondition;
  selectedDay: string;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};
