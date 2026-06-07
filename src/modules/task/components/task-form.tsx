import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function TaskForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add New Task</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter task title..." readOnly />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter task description..."
            readOnly
          />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="category"
                value="indoor"
                defaultChecked
                readOnly
              />
              Indoor
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="category" value="outdoor" readOnly />
              Outdoor
            </label>
          </div>
        </div>

        <Button className="w-full">
          <Plus className="w-4 h-4" />
          Add Task
        </Button>
      </CardContent>
    </Card>
  );
}
