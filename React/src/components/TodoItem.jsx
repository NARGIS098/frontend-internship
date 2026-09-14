function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "completed-task" : ""}>
      
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span>{task.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;