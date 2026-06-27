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
import { tasks } from "@/modules/task/task.data";

export function App() {
  const selectedDay = DAY_FILTER.ALL;
  const selectedCondition = weatherData.condition;

  return (
    <div className="min-h-screen bg-image-app bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/30 backdrop-blur-xs py-8 px-4">
        <div className="max-w-5xl w-full mx-auto space-y-5">
          <Header condition={weatherData.condition} />

          <WeatherCard
            weather={weatherData}
            hourly={hourlyForecast}
            daily={dailyForecast}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2">
              <TaskForm dailyForecasts={dailyForecast} />
            </div>

            <div className="md:col-span-3">
              <TaskList
                tasks={tasks}
                weatherCondition={selectedCondition}
                selectedDay={selectedDay}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
