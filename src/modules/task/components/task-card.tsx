import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";
import { isRecommended } from "@/modules/task-list/task-list.data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, CheckCircle, Circle } from "lucide-react";

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
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-3">
          {task.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground" />
          )}
          <div>
            <CardTitle
              className={`text-base ${task.completed ? "line-through text-muted-foreground" : ""}`}
            >
              {task.title}
            </CardTitle>
            <CardDescription className="text-xs">
              {task.description}
            </CardDescription>
          </div>
        </div>

        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex items-center gap-2 p-4 pt-2">
        <CategoryBadge category={task.category} />
        {recommended && <RecommendedBadge />}
        {task.dueDate && (
          <Badge
            variant="outline"
            className="bg-purple-100 text-purple-700 border-purple-300 text-xs"
          >
            {task.dueDate}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
