import type { TaskListProps } from "@/modules/task-list/task-list.type";
import { sortTasks } from "@/modules/task-list/task-list.data";
import { TaskCard } from "@/modules/task/components/task-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TaskList({ tasks, condition }: TaskListProps) {
  const sortedTasks = sortTasks(tasks, condition);

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Task List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} condition={condition} />
        ))}
      </CardContent>
    </Card>
  );
}
