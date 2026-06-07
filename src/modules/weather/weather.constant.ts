// Based on OpenWeatherMap API condition main groups
// https://openweathermap.org/weather-conditions
export const WEATHER_CONDITION = {
  THUNDERSTORM: "THUNDERSTORM",
  DRIZZLE: "DRIZZLE",
  RAIN: "RAIN",
  SNOW: "SNOW",
  MIST: "MIST",
  SMOKE: "SMOKE",
  HAZE: "HAZE",
  DUST: "DUST",
  FOG: "FOG",
  SAND: "SAND",
  ASH: "ASH",
  SQUALL: "SQUALL",
  TORNADO: "TORNADO",
  CLEAR: "CLEAR",
  CLOUDS: "CLOUDS",
} as const;

// Background images per condition (sky/weather photos)
export const WEATHER_BACKGROUND: Record<string, string> = {
  THUNDERSTORM:
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80",
  DRIZZLE:
    "https://images.unsplash.com/photo-1556485689-33e55ab56127?w=800&q=80",
  RAIN: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
  SNOW: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
  MIST: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  SMOKE:
    "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  HAZE: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  DUST: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  FOG: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
  SAND: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  ASH: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  SQUALL:
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80",
  TORNADO:
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80",
  CLEAR:
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80",
  CLOUDS:
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
};

// Icon per condition
export const WEATHER_ICON: Record<string, string> = {
  THUNDERSTORM: "⛈️",
  DRIZZLE: "🌦️",
  RAIN: "🌧️",
  SNOW: "🌨️",
  MIST: "🌫️",
  SMOKE: "🌫️",
  HAZE: "🌫️",
  DUST: "🌪️",
  FOG: "🌫️",
  SAND: "🌪️",
  ASH: "🌋",
  SQUALL: "💨",
  TORNADO: "🌪️",
  CLEAR: "☀️",
  CLOUDS: "⛅",
};

// Gradient overlay per condition (for card backgrounds)
export const WEATHER_GRADIENT: Record<string, string> = {
  THUNDERSTORM: "from-gray-900/60 via-purple-900/40 to-gray-800/60",
  DRIZZLE: "from-slate-700/50 via-blue-800/40 to-gray-700/50",
  RAIN: "from-slate-800/60 via-blue-900/40 to-gray-800/60",
  SNOW: "from-blue-100/60 via-white/40 to-slate-200/60",
  MIST: "from-gray-400/50 via-slate-300/40 to-gray-400/50",
  SMOKE: "from-gray-500/50 via-slate-400/40 to-gray-500/50",
  HAZE: "from-yellow-200/40 via-orange-100/30 to-yellow-200/40",
  DUST: "from-amber-400/50 via-orange-300/40 to-amber-400/50",
  FOG: "from-gray-300/50 via-slate-200/40 to-gray-300/50",
  SAND: "from-amber-500/50 via-yellow-400/40 to-amber-500/50",
  ASH: "from-gray-600/50 via-slate-500/40 to-gray-600/50",
  SQUALL: "from-gray-800/60 via-slate-700/40 to-gray-800/60",
  TORNADO: "from-gray-900/60 via-slate-800/40 to-gray-900/60",
  CLEAR: "from-sky-400/30 via-blue-300/20 to-cyan-200/30",
  CLOUDS: "from-gray-400/40 via-slate-300/30 to-blue-300/40",
};
