import { Plus } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { DailyForecast } from "@/modules/weather/weather.type";

type TaskFormProps = {
  dailyForecasts: DailyForecast[];
};

export function TaskForm({ dailyForecasts: daily }: TaskFormProps) {
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add New Task</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter task title..."
              readOnly
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter task description..."
              readOnly
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <RadioGroup defaultValue="indoor" className="flex gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="indoor" id="indoor" />
                <Label
                  htmlFor="indoor"
                  className="text-sm font-normal cursor-pointer"
                >
                  Indoor
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="outdoor" id="outdoor" />
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
              <Label htmlFor="dueDate">Due Date</Label>
              {/* TODO: Date Picker */}
              <select
                id="dueDate"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue=""
                disabled
              >
                <option value="">No date</option>
                {daily.map((forecast) => (
                  <option key={forecast.date} value={forecast.date}>
                    {forecast.day} {forecast.icon}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueTime">Time</Label>
              <Input id="dueTime" type="time" className="w-full" readOnly />
            </div>
          </div>

          <Button className="w-full" type="submit">
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
