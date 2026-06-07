import type { WeatherData } from "../weather.type";

type WeatherCardProps = {
  weather: WeatherData;
};

function WeatherCard({ weather }: WeatherCardProps) {
  const bgColor = weather.condition === "rain" ? "bg-gray-500" : "bg-sky-400";
  const icon = weather.condition === "rain" ? "🌧️" : "⛅";

  return (
    <div
      className={`${bgColor} text-white rounded-xl p-6 flex items-center gap-4 mb-4`}
    >
      <span className="text-5xl">{icon}</span>
      <div>
        <p className="text-4xl font-bold">{weather.temperature}°C</p>
        <p className="text-sm">{weather.description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
