import type { Task, WeatherCondition } from "../types";
import { sortTasks } from "../utils";
import TaskCard from "./task-card";

interface TaskListProps {
  tasks: Task[];
  condition: WeatherCondition;
}

function TaskList({ tasks, condition }: TaskListProps) {
  const sortedTasks = sortTasks(tasks, condition);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Task List</h2>
      {sortedTasks.map((task) => (
        <TaskCard key={task.id} task={task} condition={condition} />
      ))}
    </div>
  );
}

export default TaskList;
