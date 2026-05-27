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

console.log(dataTasks);
