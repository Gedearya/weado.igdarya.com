import { dataTasks } from "./data/tasks";
import "./App.css";

function App() {
  return (
    <div className="card">
      <h1>📋 Task List</h1>
      <p className="subtitle">Practice TypeScript — Type & Data</p>
      <ul className="task-list">
        {dataTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.isCompleted ? "completed" : ""}`}
          >
            <span className="task-check">{task.isCompleted ? "✅" : "⬜"}</span>
            <span className="task-title">{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
