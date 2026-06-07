import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";
import { isRecommended } from "@/modules/task-list/task-list.data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TaskCardProps = {
  task: Task;
  condition: WeatherCondition;
};

function CategoryBadge({ category }: { category: TaskCategory }) {
  const className =
    category === TASK_CATEGORY.INDOOR
      ? "bg-blue-100 text-blue-700 border-blue-300"
      : "bg-green-100 text-green-700 border-green-300";

  return (
    <Badge variant="outline" className={className}>
      {category === TASK_CATEGORY.INDOOR ? "Indoor" : "Outdoor"}
    </Badge>
  );
}

function RecommendedBadge() {
  return (
    <Badge
      variant="outline"
      className="bg-orange-100 text-orange-600 border-orange-300"
    >
      ⭐ Recommended
    </Badge>
  );
}

export function TaskCard({ task, condition }: TaskCardProps) {
  const recommended = isRecommended(task, condition);
  const cardClassName = recommended ? "bg-green-50 border-green-200" : "";

  return (
    <Card className={cardClassName}>
      <CardContent className="flex items-center gap-3 p-4">
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
              task.completed
                ? "line-through text-muted-foreground"
                : "font-medium"
            }
          >
            {task.title}
          </p>
          <p className="text-xs text-muted-foreground">{task.description}</p>
        </div>

        <div className="flex gap-2 items-center">
          <CategoryBadge category={task.category} />
          {recommended && <RecommendedBadge />}
        </div>
      </CardContent>
    </Card>
  );
}
