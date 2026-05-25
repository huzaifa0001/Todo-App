import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks pending. You're all caught up!</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;