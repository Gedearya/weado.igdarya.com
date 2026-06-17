import type { TaskListProps } from "@/modules/task-list/task-list.type";
import {
  sortTasks,
  filterTasksByDay,
} from "@/modules/task-list/task-list.data";
import { TaskCard } from "@/modules/task/components/task-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TaskList({ tasks, condition, selectedDay }: TaskListProps) {
  const filteredTasks = filterTasksByDay(tasks, selectedDay);
  const sortedTasks = sortTasks(filteredTasks, condition);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Task List</CardTitle>
          <Badge
            variant="outline"
            className="bg-orange-100 text-orange-700 border-orange-300"
          >
            {selectedDay}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 overflow-y-auto max-h-[400px]">
        {sortedTasks.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No tasks scheduled for {selectedDay}
          </p>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard key={task.id} task={task} condition={condition} />
          ))
        )}
      </CardContent>
    </Card>
  );
}
