import { useEffect, useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          "Learn React",
          "Practice JavaScript",
          "Complete Internship Task"
        ];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks([...tasks, newTask.trim()]);
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