import { TASK_CATEGORY } from "../task.constant";
import type { TaskCategory } from "../task.type";

export function TaskCategoryBadge({ category }: { category: TaskCategory }) {
  console.log({ category });

  const categoryText = category === TASK_CATEGORY.INDOOR ? "Indoor" : "Outdoor";

  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full border ${
        category === TASK_CATEGORY.INDOOR
          ? "bg-blue-100 text-blue-700 border-blue-300"
          : "bg-green-100 text-green-700 border-green-300"
      }`}
    >
      {categoryText}
    </span>
  );
}

export function TaskRecommendedBadge() {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 border border-orange-300">
      ⭐ Recommended
    </span>
  );
}
