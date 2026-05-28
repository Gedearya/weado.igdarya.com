export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Tasks = Task[];

export const dataTasks: Tasks = [
  {
    id: 1,
    title: "Breakfast",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Lunch",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Dinner",
    isCompleted: false,
  },
];

// 1. All tasks
console.log("All tasks:", dataTasks);

// 2. Completed tasks
console.log(
  "Completed:",
  dataTasks.filter((t) => t.isCompleted),
);

// 3. Incomplete tasks
console.log(
  "Incomplete:",
  dataTasks.filter((t) => !t.isCompleted),
);

// 4. Titles only
console.log(
  "Titles:",
  dataTasks.map((t) => t.title),
);

// 5. Total count
console.log("Total:", dataTasks.length);

// 6. Find by id
console.log(
  "Find id 2:",
  dataTasks.find((t) => t.id === 2),
);

// 7. Add new task
const added = [...dataTasks, { id: 4, title: "Snack", isCompleted: false }];
console.log("Added:", added);

// 8. Toggle completed (id 2)
const toggled = dataTasks.map((t) =>
  t.id === 2 ? { ...t, isCompleted: !t.isCompleted } : t,
);
console.log("Toggled id 2:", toggled);

// 9. Delete task (id 1)
const deleted = dataTasks.filter((t) => t.id !== 1);
console.log("Deleted id 1:", deleted);

// 10. Sort by completed (incomplete first)
const sorted = [...dataTasks].sort(
  (a, b) => Number(a.isCompleted) - Number(b.isCompleted),
);
console.log("Sorted:", sorted);
