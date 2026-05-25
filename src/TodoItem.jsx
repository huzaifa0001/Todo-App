import React from 'react';

const TodoItem = ({ task, onDeleteTask, onToggleComplete }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </div>
      
      <button
        className="btn-delete"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;