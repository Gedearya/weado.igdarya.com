import type { TaskCategory } from "../../types";

interface CategoryBadgeProps {
  category: TaskCategory;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const style =
    category === "indoor"
      ? "bg-blue-100 text-blue-700 border-blue-300"
      : "bg-green-100 text-green-700 border-green-300";

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${style}`}>
      {category === "indoor" ? "Indoor" : "Outdoor"}
    </span>
  );
}

export default CategoryBadge;
