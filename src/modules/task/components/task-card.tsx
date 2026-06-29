import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";
import {
  isTaskRecommendedForWeather,
  isTaskOverdue,
} from "@/modules/task-list/task-list.data";
import { formatDueDate } from "@/lib/format";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Trash2,
  CheckCircle,
  Circle,
  Calendar,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TaskCardProps = {
  task: Task;
  weatherCondition: WeatherCondition;
  onToggleComplete: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

function CategoryBadge({
  category,
  isCompleted,
}: {
  category: TaskCategory;
  isCompleted: boolean;
}) {
  if (isCompleted) {
    return (
      <Badge
        variant="outline"
        className="bg-gray-100 text-gray-500 border-gray-300"
      >
        {category === TASK_CATEGORY.INDOOR ? "Indoor" : "Outdoor"}
      </Badge>
    );
  }

  const badgeClassName =
    category === TASK_CATEGORY.INDOOR
      ? "bg-blue-100 text-blue-700 border-blue-300"
      : "bg-green-100 text-green-700 border-green-300";

  return (
    <Badge variant="outline" className={badgeClassName}>
      {category === TASK_CATEGORY.INDOOR ? "Indoor" : "Outdoor"}
    </Badge>
  );
}

function WeatherRecommendedBadge() {
  return (
    <Badge
      variant="outline"
      className="bg-orange-100 text-orange-600 border-orange-300"
    >
      <Star className="w-3 h-3 inline" /> Recommended
    </Badge>
  );
}

export function TaskCard({
  task,
  weatherCondition,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const isRecommended = isTaskRecommendedForWeather(task, weatherCondition);
  const isOverdue = isTaskOverdue(task);

  const cardClassName = task.completed
    ? "bg-gray-50 border-gray-200 opacity-75"
    : isOverdue
      ? "bg-red-50/50 border-red-200"
      : isRecommended
        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
        : "bg-white border-border";

  const dueDateBadgeClassName = task.completed
    ? "bg-gray-100 text-gray-500 border-gray-300 text-[10px] px-1.5 py-0"
    : isOverdue
      ? "bg-red-100 text-red-700 border-red-300 text-[10px] px-1.5 py-0"
      : "bg-purple-100 text-purple-700 border-purple-300 text-[10px] px-1.5 py-0";

  return (
    <Card
      className={cn(
        "shadow-sm transition-shadow duration-200 hover:shadow-md",
        cardClassName,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleComplete}
            className="shrink-0 transition-transform duration-150 hover:scale-110"
          >
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground hover:text-green-400 transition-colors" />
            )}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle
                className={`text-base ${task.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {task.title}
              </CardTitle>
              {task.dueDate && (
                <Badge variant="outline" className={dueDateBadgeClassName}>
                  <Calendar className="w-3 h-3 inline mr-0.5" />
                  {formatDueDate(task.dueDate, task.dueTime)}
                </Badge>
              )}
            </div>
            <CardDescription className="text-xs mt-0.5">
              {task.description}
            </CardDescription>
          </div>
        </div>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-full hover:bg-blue-100 transition-colors duration-150"
            onClick={onEdit}
          >
            <Pencil className="w-3.5 h-3.5 text-blue-500" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-red-100 transition-colors duration-150"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete &quot;{task.title}&quot;?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This task will be permanently
                  removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>

      <CardContent className="flex items-center gap-2 p-4 pt-2">
        <CategoryBadge category={task.category} isCompleted={task.completed} />
        {isOverdue && (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-600 border-red-300"
          >
            Overdue
          </Badge>
        )}
        {isRecommended && <WeatherRecommendedBadge />}
      </CardContent>
    </Card>
  );
}
