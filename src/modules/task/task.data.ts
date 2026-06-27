import { format, addDays } from "date-fns";
import type { Task } from "./task.type";
import { TASK_CATEGORY } from "./task.constant";

function getDateStringFromToday(daysFromToday: number): string {
  return format(addDays(new Date(), daysFromToday), "yyyy-MM-dd");
}

export const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Jogging",
    description: "Morning jog around the park for 30 minutes",
    category: TASK_CATEGORY.OUTDOOR,
    completed: false,
    dueDate: getDateStringFromToday(0),
    dueTime: "06:00",
  },
  {
    id: 2,
    title: "Reading",
    description: "Read a chapter of a programming book",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
    dueDate: getDateStringFromToday(0),
    dueTime: "21:00",
  },
  {
    id: 3,
    title: "Gardening",
    description: "Water the plants and trim the bushes",
    category: TASK_CATEGORY.OUTDOOR,
    completed: true,
    dueDate: getDateStringFromToday(0),
    dueTime: "15:00",
  },
  {
    id: 4,
    title: "Cooking",
    description: "Prepare lunch for the family",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
    dueDate: getDateStringFromToday(1),
    dueTime: "12:00",
  },
  {
    id: 5,
    title: "Cycling",
    description: "Ride a bike to the nearby lake",
    category: TASK_CATEGORY.OUTDOOR,
    completed: false,
    dueDate: getDateStringFromToday(1),
    dueTime: "06:00",
  },
  {
    id: 6,
    title: "Yoga",
    description: "Indoor yoga session for flexibility",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
    dueDate: getDateStringFromToday(2),
    dueTime: "18:00",
  },
  {
    id: 7,
    title: "Photography",
    description: "Take photos at the botanical garden",
    category: TASK_CATEGORY.OUTDOOR,
    completed: false,
    dueDate: getDateStringFromToday(4),
    dueTime: "09:00",
  },
  {
    id: 8,
    title: "Clean Garage",
    description: "Organize and sweep the garage",
    category: TASK_CATEGORY.INDOOR,
    completed: false,
    dueDate: getDateStringFromToday(3),
    dueTime: "09:00",
  },
];
