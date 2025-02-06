
import React, {useState} from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
        {/* Do not remove the main div */}

        <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add Todo</button>
      </div>
      <Todo tasks={tasks} removeTask={removeTask} />
    </div>
  )
}

export default App
