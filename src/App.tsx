import { dataTasks } from "./data/tasks";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-white mb-1">📋 Task List</h1>
        <p className="text-slate-400 text-sm mb-6">
          Practice TypeScript — Type & Data
        </p>
        <ul className="space-y-2 text-left">
          {dataTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg border border-gray-200"
            >
              <span className="text-base">
                {task.isCompleted ? "✅" : "⬜"}
              </span>
              <span
                className={`flex-1 text-sm ${task.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}
              >
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
