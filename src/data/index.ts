import type { WeatherData, Task } from "../types";

export const weatherData: WeatherData = {
  condition: "clear",
  temperature: 30,
  description: "Scattered Clouds",
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Jogging",
    description: "Morning jog around the park for 30 minutes",
    category: "outdoor",
    completed: false,
  },
  {
    id: 2,
    title: "Reading",
    description: "Read a chapter of a programming book",
    category: "indoor",
    completed: false,
  },
  {
    id: 3,
    title: "Gardening",
    description: "Water the plants and trim the bushes",
    category: "outdoor",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    description: "Prepare lunch for the family",
    category: "indoor",
    completed: true,
  },
  {
    id: 5,
    title: "Cycling",
    description: "Ride a bike to the nearby lake",
    category: "outdoor",
    completed: false,
  },
];
