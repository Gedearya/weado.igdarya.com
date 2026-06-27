import { useState, useEffect } from "react";
import type { Task } from "./task.type";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./task.storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromLocalStorage());

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
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

  const updateTask = (
    taskId: number,
    fieldsToUpdate: Partial<Omit<Task, "id">>,
  ) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, ...fieldsToUpdate } : task,
      ),
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  };

  const toggleTaskComplete = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, updateTask, deleteTask, toggleTaskComplete };
}
