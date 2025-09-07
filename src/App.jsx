
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const clearAll = () => setTasks([]);

  return (
    <div>
      <h1>Todo List Lite</h1>
      <input

        style={{  padding: "8px", color: "blue", borderColor: "black" }}
        type="text"
        value={task}

        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
         onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button onClick={addTask} style={{ marginLeft: "5px", padding: "8px", color: "blue", borderColor: "black" }}>Add</button>
      <button
        onClick={clearAll}
        style={{ marginLeft: "5px", padding: "8px", color: "blue", borderColor: "black" }}
        disabled={!tasks.length}
      >
        Clear All
      </button>


      <ul style={{ padding: 0, marginTop: "10px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            onClick={() => removeTask(index)}
            style={{ border: "1px solid black", padding: "5px", margin: "5px 0" }}
          >
            {t}
          </li>
        ))}
      </ul>

    </div>

  );
}

export default App;
