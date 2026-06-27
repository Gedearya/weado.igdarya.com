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
