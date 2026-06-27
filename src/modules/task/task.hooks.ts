import { useState, useEffect } from "react";
import type { Task } from "./task.type";
import { loadTasks, saveTasks } from "./task.storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask: Omit<Task, "id">) => {
    setTasks((prev) => [
      ...prev,
      { ...newTask, id: Math.max(0, ...prev.map((t) => t.id)) + 1 },
    ]);
  };

  const updateTask = (id: number, updates: Partial<Omit<Task, "id">>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, updateTask, deleteTask, toggleTask };
}
