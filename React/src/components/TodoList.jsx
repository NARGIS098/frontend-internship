import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Practice JavaScript",
    "Complete Internship Task"
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <section className="todo-list">
      <h2>My To-Do List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;