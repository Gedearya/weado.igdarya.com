import type { Task } from "../task.type";
import type { WeatherCondition } from "../../weather/weather.type";
import { isRecommended } from "../../task-list/task-list.data";
import { TaskCategoryBadge, TaskRecommendedBadge } from "./task-badge";

function TaskCard({
  task,
  condition,
}: {
  task: Task;
  condition: WeatherCondition;
}) {
  const recommended = isRecommended(task, condition);

  return (
    <section
      className={`flex items-center gap-3 border rounded-xl p-4 mb-3 ${
        recommended
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
          task.completed
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-300"
        }`}
      >
        {task.completed && <span className="text-xs">✓</span>}
      </div>

      <div className="flex-1">
        <p
          className={
            task.completed ? "line-through text-gray-400" : "font-medium"
          }
        >
          {task.title}
        </p>
        <p className="text-xs text-gray-400">{task.description}</p>
      </div>

      <div className="flex gap-2 items-center">
        <TaskCategoryBadge category={task.category} />

        {recommended && <TaskRecommendedBadge />}
      </div>
    </section>
  );
}

export default TaskCard;
