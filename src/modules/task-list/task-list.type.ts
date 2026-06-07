import type { Task } from "../task/task.type";
import type { WeatherCondition } from "../weather/weather.type";

export type TaskListProps = {
  tasks: Task[];
  condition: WeatherCondition;
};
