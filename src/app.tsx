import { useState } from "react";
import { Header } from "@/components/header";
import { WeatherCard } from "@/modules/weather/components/weather-card";
import { TaskForm } from "@/modules/task/components/task-form";
import { TaskList } from "@/modules/task-list/components/task-list";
import {
  weatherData,
  hourlyForecast,
  dailyForecast,
  allHourlyForecasts,
} from "@/modules/weather/weather.data";
import { DAY_FILTER } from "@/modules/task-list/task-list.constant";
import { useTasks } from "@/modules/task/task.hooks";
import type { Task } from "@/modules/task/task.type";

export function App() {
  const [selectedDay, setSelectedDay] = useState<string>(DAY_FILTER.ALL);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const { tasks, addTask, updateTask, toggleTaskComplete, deleteTask } =
    useTasks();

  const currentWeatherCondition =
    selectedDay === DAY_FILTER.ALL
      ? weatherData.condition
      : (dailyForecast.find((forecast) => forecast.date === selectedDay)
          ?.condition ?? weatherData.condition);

  const activeHourlyForecast =
    selectedDay === DAY_FILTER.ALL
      ? hourlyForecast
      : (allHourlyForecasts[selectedDay] ?? hourlyForecast);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/30 backdrop-blur-[1px] py-8 px-4">
        <div className="max-w-5xl w-full mx-auto space-y-5">
          <Header weatherCondition={weatherData.condition} />
          <WeatherCard
            weather={weatherData}
            hourlyForecast={activeHourlyForecast}
            dailyForecast={dailyForecast}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2">
              <TaskForm
                dailyForecast={dailyForecast}
                hourlyForecast={hourlyForecast}
                taskToEdit={taskToEdit}
                onAddTask={addTask}
                onUpdateTask={updateTask}
                onCancelEdit={() => setTaskToEdit(null)}
              />
            </div>
            <div className="md:col-span-3">
              <TaskList
                tasks={tasks}
                weatherCondition={currentWeatherCondition}
                selectedDay={selectedDay}
                onToggleTask={toggleTaskComplete}
                onEditTask={setTaskToEdit}
                onDeleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
