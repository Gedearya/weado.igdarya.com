export const WEATHER_CONDITION = {
  THUNDERSTORM: "THUNDERSTORM",
  DRIZZLE: "DRIZZLE",
  RAIN: "RAIN",
  HAZE: "HAZE",
  FOG: "FOG",
  CLEAR: "CLEAR",
  CLOUDS: "CLOUDS",
} as const;

/**
 * TODO: Move into index.css
 */
export const WEATHER_BACKGROUND: Record<string, string> = {
  THUNDERSTORM:
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80",
  DRIZZLE:
    "https://images.unsplash.com/photo-1556485689-33e55ab56127?w=800&q=80",
  RAIN: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
  HAZE: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  FOG: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  CLEAR:
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80",
  CLOUDS:
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
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

/**
 * TODO: Refactor into component with variant
 */
export const WEATHER_GRADIENT: Record<string, string> = {
  THUNDERSTORM: "from-gray-900/60 via-purple-900/40 to-gray-800/60",
  DRIZZLE: "from-slate-700/50 via-blue-800/40 to-gray-700/50",
  RAIN: "from-slate-800/60 via-blue-900/40 to-gray-800/60",
  HAZE: "from-yellow-200/40 via-orange-100/30 to-yellow-200/40",
  FOG: "from-gray-300/50 via-slate-200/40 to-gray-300/50",
  CLEAR: "from-sky-400/30 via-blue-300/20 to-cyan-200/30",
  CLOUDS: "from-gray-400/40 via-slate-300/30 to-blue-300/40",
};
