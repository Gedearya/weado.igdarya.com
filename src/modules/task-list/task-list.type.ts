import type { Task } from "@/modules/task/task.type";
import type { WeatherCondition } from "@/modules/weather/weather.type";

export type TaskListProps = {
  tasks: Task[];
  weatherCondition: WeatherCondition;
  selectedDay: string;
  onToggleTask: (id: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
};
