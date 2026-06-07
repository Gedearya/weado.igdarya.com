import { TASK_CATEGORY } from "./task.constant";
import type { Task } from "./task.type";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Jogging",
    description: "Morning jog around the park for 30 minutes",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
  },
  {
    id: 2,
    title: "Reading",
    description: "Read a chapter of a programming book",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
  },
  {
    id: 3,
    title: "Gardening",
    description: "Water the plants and trim the bushes",
    category: TASK_CATEGORY.OUTDOOR,
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    description: "Prepare lunch for the family",
    category: TASK_CATEGORY.INDOOR,
    completed: true,
  },
  {
    id: 5,
    title: "Cycling",
    description: "Ride a bike to the nearby lake",
    category: TASK_CATEGORY.OUTDOOR,
    completed: false,
  },
];
