import type { TaskListProps } from "@/modules/task-list/task-list.type";
import {
  sortTasks,
  filterTasksByDay,
} from "@/modules/task-list/task-list.data";
import { TaskCard } from "@/modules/task/components/task-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TaskList({
  tasks,
  condition,
  selectedDay,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  const filteredTasks = filterTasksByDay(tasks, selectedDay);
  const sortedTasks = sortTasks(filteredTasks, condition);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Task List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 overflow-y-auto max-h-100">
        {sortedTasks.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No tasks scheduled for this day
          </p>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              condition={condition}
              onToggle={() => onToggleTask(task.id)}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}
