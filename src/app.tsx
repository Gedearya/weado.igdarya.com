import Header from "./components/header";
import WeatherCard from "./components/weather-card";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import { weatherData, tasks } from "./data";

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
