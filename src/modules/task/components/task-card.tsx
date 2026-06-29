import type { Task, TaskCategory } from "@/modules/task/task.type";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type { WeatherCondition } from "@/modules/weather/weather.type";
import { isTaskRecommendedForWeather } from "@/modules/task-list/task-list.data";
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

type TaskCardProps = {
  task: Task;
  weatherCondition: WeatherCondition;
  onToggleComplete: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

function CategoryBadge({ category }: { category: TaskCategory }) {
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

  const cardClassName = isRecommended
    ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
    : "bg-white border-border";

  return (
    <Card
      className={`${cardClassName} shadow-sm transition-shadow duration-200 hover:shadow-md`}
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
                <Badge
                  variant="outline"
                  className="bg-purple-100 text-purple-700 border-purple-300 text-[10px] px-1.5 py-0"
                >
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
        <CategoryBadge category={task.category} />
        {isRecommended && <WeatherRecommendedBadge />}
      </CardContent>
    </Card>
  );
}
