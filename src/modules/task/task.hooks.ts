import { useState, useEffect } from "react";
import type { Task } from "./task.type";
import { loadTasksFromStorage, saveTasksToStorage } from "./task.storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (newTask: Omit<Task, "id">) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        ...newTask,
        id: Math.max(0, ...currentTasks.map((task) => task.id)) + 1,
      },
    ]);
  };

  const updateTask = (id: number, updates: Partial<Omit<Task, "id">>) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const toggleTaskComplete = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, updateTask, deleteTask, toggleTaskComplete };
}
