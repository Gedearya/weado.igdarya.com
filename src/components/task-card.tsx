import type { Task, WeatherCondition } from "../types";
import { isRecommended } from "../utils";
import CategoryBadge from "./shared/category-badge";
import RecommendedBadge from "./shared/recommended-badge";

interface TaskCardProps {
  task: Task;
  condition: WeatherCondition;
}

function TaskCard({ task, condition }: TaskCardProps) {
  const recommended = isRecommended(task, condition);
  const cardBg = recommended
    ? "bg-green-50 border-green-200"
    : "bg-white border-gray-200";

  return (
    <div
      className={`flex items-center gap-3 border rounded-xl p-4 mb-3 ${cardBg}`}
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
        <CategoryBadge category={task.category} />
        {recommended && <RecommendedBadge />}
      </div>
    </div>
  );
}

export default TaskCard;
