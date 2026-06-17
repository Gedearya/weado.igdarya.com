import { Header } from "@/components/header";
import { WeatherCard } from "@/modules/weather/components/weather-card";
import { TaskForm } from "@/modules/task/components/task-form";
import { TaskList } from "@/modules/task-list/components/task-list";
import {
  weatherData,
  hourlyForecast,
  dailyForecast,
} from "@/modules/weather/weather.data";
import { tasks } from "@/modules/task/task.data";

// Static: "Today" is the default selected day
const selectedDay = "Today";
const selectedCondition =
  dailyForecast.find((d) => d.day === selectedDay)?.condition ??
  weatherData.condition;

export function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/30 backdrop-blur-[1px] py-8 px-4">
        <div className="max-w-5xl w-full mx-auto space-y-5">
          <Header condition={weatherData.condition} />
          <WeatherCard
            weather={weatherData}
            hourly={hourlyForecast}
            daily={dailyForecast}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2">
              <TaskForm daily={dailyForecast} />
            </div>
            <div className="md:col-span-3">
              <TaskList
                tasks={tasks}
                condition={selectedCondition}
                selectedDay={selectedDay}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
