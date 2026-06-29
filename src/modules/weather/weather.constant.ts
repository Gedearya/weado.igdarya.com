export const WEATHER_CONDITION = {
  THUNDERSTORM: "THUNDERSTORM",
  DRIZZLE: "DRIZZLE",
  RAIN: "RAIN",
  HAZE: "HAZE",
  FOG: "FOG",
  CLEAR: "CLEAR",
  CLOUDS: "CLOUDS",
} as const;

export const WEATHER_BACKGROUND: Record<string, string> = {
  THUNDERSTORM: "/images/weather/thunderstorm.jpg",
  DRIZZLE: "/images/weather/drizzle.jpg",
  RAIN: "/images/weather/rain.jpg",
  HAZE: "/images/weather/haze.jpg",
  FOG: "/images/weather/haze.jpg",
  CLEAR: "/images/weather/clear.jpg",
  CLOUDS: "/images/weather/clouds.jpg",
};

export const WEATHER_ICON: Record<string, string> = {
  THUNDERSTORM: "⛈️",
  DRIZZLE: "🌦️",
  RAIN: "🌧️",
  HAZE: "🌫️",
  FOG: "🌫️",
  CLEAR: "☀️",
  CLOUDS: "⛅",
};
