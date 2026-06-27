import { useState } from "react";
import { Header } from "@/components/header";
import { WeatherCard } from "@/modules/weather/components/weather-card";
import { TaskForm } from "@/modules/task/components/task-form";
import { TaskList } from "@/modules/task-list/components/task-list";
import {
  weatherData,
  hourlyForecast,
  dailyForecast,
} from "@/modules/weather/weather.data";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import { tasks as initialTasks } from "@/modules/task/task.data";
import type { Task } from "@/modules/task/task.type";

export function App() {
  const [selectedDay, setSelectedDay] = useState<string>(DAY_FILTER.ALL);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const selectedCondition =
    selectedDay === DAY_FILTER.ALL
      ? weatherData.condition
      : (dailyForecast.find((d) => d.date === selectedDay)?.condition ??
        weatherData.condition);

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAddTask = (newTask: Omit<Task, "id">) => {
    setTasks((prev) => [
      ...prev,
      { ...newTask, id: Math.max(0, ...prev.map((t) => t.id)) + 1 },
    ]);
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/30 backdrop-blur-[1px] py-8 px-4">
        <div className="max-w-5xl w-full mx-auto space-y-5">
          <Header condition={weatherData.condition} />
          <WeatherCard
            weather={weatherData}
            hourly={hourlyForecast}
            daily={dailyForecast}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2">
              <TaskForm
                daily={dailyForecast}
                hourly={hourlyForecast}
                onAddTask={handleAddTask}
              />
            </div>
            <div className="md:col-span-3">
              <TaskList
                tasks={tasks}
                condition={selectedCondition}
                selectedDay={selectedDay}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
