import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type {
  DailyForecast,
  HourlyForecast,
} from "@/modules/weather/weather.type";
import type { Task, TaskCategory } from "@/modules/task/task.type";

type TaskFormProps = {
  daily: DailyForecast[];
  hourly: HourlyForecast[];
  onAddTask: (task: Omit<Task, "id">) => void;
};

export function TaskForm({ daily, hourly, onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>(TASK_CATEGORY.INDOOR);
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const DEFAULT_SLOTS = [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
  ];

  const forecastSlots = dueDate
    ? hourly.filter((h) => h.datetime.startsWith(dueDate)).map((h) => h.time)
    : [];

  const availableSlots =
    forecastSlots.length > 0 ? forecastSlots : DEFAULT_SLOTS;

  const handleSubmit = () => {
    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      category,
      completed: false,
      ...(dueDate && { dueDate }),
      ...(dueTime && { dueTime }),
    });

    setTitle("");
    setDescription("");
    setCategory(TASK_CATEGORY.INDOOR);
    setDueDate("");
    setDueTime("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add New Task</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <RadioGroup
            value={category}
            onValueChange={(val) => setCategory(val as TaskCategory)}
            className="flex gap-4"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value={TASK_CATEGORY.INDOOR} id="indoor" />
              <Label
                htmlFor="indoor"
                className="text-sm font-normal cursor-pointer"
              >
                Indoor
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value={TASK_CATEGORY.OUTDOOR} id="outdoor" />
              <Label
                htmlFor="outdoor"
                className="text-sm font-normal cursor-pointer"
              >
                Outdoor
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Due Date</Label>
            <Select value={dueDate} onValueChange={setDueDate}>
              <SelectTrigger>
                <SelectValue placeholder="No date" />
              </SelectTrigger>
              <SelectContent>
                {daily.map((forecast) => (
                  <SelectItem key={forecast.date} value={forecast.date}>
                    {forecast.day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Time</Label>
            <Select value={dueTime} onValueChange={setDueTime}>
              <SelectTrigger>
                <SelectValue placeholder="Any time" />
              </SelectTrigger>
              <SelectContent>
                {availableSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          <Plus className="w-4 h-4" />
          Add Task
        </Button>
      </CardContent>
    </Card>
  );
}
