import type { TaskListProps } from "../task-list.type";
import { sortTasks } from "../task-list.data";
import TaskCard from "../../task/components/task-card";

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
