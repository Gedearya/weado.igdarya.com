import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus, Calendar as CalendarIcon, Clock, Save, X } from "lucide-react";
import { TASK_CATEGORY } from "@/modules/task/task.constant";
import type {
  DailyForecast,
  HourlyForecast,
} from "@/modules/weather/weather.type";
import type { Task, TaskCategory } from "@/modules/task/task.type";
import { cn } from "@/lib/utils";

type TaskFormProps = {
  dailyForecast: DailyForecast[];
  hourlyForecast: HourlyForecast[];
  taskToEdit: Task | null;
  onAddTask: (task: Omit<Task, "id">) => void;
  onUpdateTask: (taskId: number, fields: Partial<Omit<Task, "id">>) => void;
  onCancelEdit: () => void;
};

export function TaskForm({
  dailyForecast,
  hourlyForecast,
  taskToEdit,
  onAddTask,
  onUpdateTask,
  onCancelEdit,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>(TASK_CATEGORY.INDOOR);
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const isEditMode = taskToEdit !== null;

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setCategory(taskToEdit.category);
      setDueDate(taskToEdit.dueDate ?? "");
      setDueTime(taskToEdit.dueTime ?? "");
    }
  }, [taskToEdit]);

  const DEFAULT_TIME_SLOTS = [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
  ];

  const forecastTimeSlots = dueDate
    ? hourlyForecast
        .filter((hour) => hour.datetime.startsWith(dueDate))
        .map((hour) => hour.time)
    : [];

  const availableTimeSlots =
    forecastTimeSlots.length > 0 ? forecastTimeSlots : DEFAULT_TIME_SLOTS;

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory(TASK_CATEGORY.INDOOR);
    setDueDate("");
    setDueTime("");
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (isEditMode) {
      onUpdateTask(taskToEdit.id, {
        title: title.trim(),
        description: description.trim(),
        category,
        ...(dueDate ? { dueDate } : { dueDate: undefined }),
        ...(dueTime ? { dueTime } : { dueTime: undefined }),
      });
    } else {
      onAddTask({
        title: title.trim(),
        description: description.trim(),
        category,
        completed: false,
        ...(dueDate && { dueDate }),
        ...(dueTime && { dueTime }),
      });
    }

    resetForm();
  };

  const handleCancelEdit = () => {
    resetForm();
    onCancelEdit();
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            {isEditMode ? "Edit Task" : "Add New Task"}
          </CardTitle>
          {isEditMode && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={handleCancelEdit}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
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

        <div className="space-y-2">
          <Label>Due Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!dueDate}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dueDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="w-4 h-4" />
                {dueDate
                  ? format(parseISO(dueDate), "EEE, MMM d")
                  : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dueDate ? parseISO(dueDate) : undefined}
                onSelect={(date) => {
                  setDueDate(date ? format(date, "yyyy-MM-dd") : "");
                }}
                disabled={(date) => {
                  const dateStr = format(date, "yyyy-MM-dd");
                  return !dailyForecast.some(
                    (forecast) => forecast.date === dateStr,
                  );
                }}
                defaultMonth={
                  dailyForecast[0] ? parseISO(dailyForecast[0].date) : undefined
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Time
          </Label>
          <div className="grid grid-cols-4 gap-1.5">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setDueTime(dueTime === slot ? "" : slot)}
                className={cn(
                  "rounded-md border px-2 py-1.5 text-xs font-medium transition-colors",
                  dueTime === slot
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-input hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          {isEditMode ? (
            <>
              <Save className="w-4 h-4" />
              Save Changes
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add Task
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
