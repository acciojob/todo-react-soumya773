

import './../styles/App.css';
import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
   const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
     <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
