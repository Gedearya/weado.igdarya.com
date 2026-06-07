import Header from "./components/header";
import WeatherCard from "./modules/weather/components/weather-card";
import TaskForm from "./modules/task/components/task-form";
import TaskList from "./modules/task-list/components/task-list";
import { weatherData } from "./modules/weather/weather.data";
import { tasks } from "./modules/task/task.data";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Header />
        <WeatherCard weather={weatherData} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <TaskForm />
          </div>
          <div>
            <TaskList tasks={tasks} condition={weatherData.condition} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
