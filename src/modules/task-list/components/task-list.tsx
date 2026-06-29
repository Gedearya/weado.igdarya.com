import type { TaskListProps } from "@/modules/task-list/task-list.type";
import {
  sortTasksByWeatherRecommendation,
  filterTasksBySelectedDay,
} from "@/modules/task-list/task-list.data";
import { TaskCard } from "@/modules/task/components/task-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TaskList({
  tasks,
  weatherCondition,
  selectedDay,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}: TaskListProps) {
  const filteredTasks = filterTasksBySelectedDay(tasks, selectedDay);
  const sortedTasks = sortTasksByWeatherRecommendation(
    filteredTasks,
    weatherCondition,
  );

  return (
    <Card className="flex flex-col bg-white/95 backdrop-blur-sm max-h-[550px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-800">
          Task List
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 overflow-y-auto flex-1 px-4 pb-4">
        {sortedTasks.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No tasks scheduled for this day
          </p>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              weatherCondition={weatherCondition}
              onToggleComplete={() => onToggleTask(task.id)}
              onEdit={() => onEditTask(task)}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}
