import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
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
        {tasks.map((task) => (
  <TodoItem
    key={task.id}
    task={task}
    onToggle={toggleTask}
    onDelete={deleteTask}
  />
))}
      </ul>
    </section>
  );
}

export default TodoList;