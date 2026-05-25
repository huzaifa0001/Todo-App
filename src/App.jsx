import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const tasksRemaining = tasks.filter(task => !task.completed).length;

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="header-title">MY TODO LIST</h1>
        
        <TodoInput onAddTask={addTask} />
        
        
        <TodoList 
          tasks={tasks} 
          onDeleteTask={deleteTask} 
          onToggleComplete={toggleComplete} 
        />

        {tasks.length > 0 && (
          <div className="todo-footer">
            <span className="task-counter">
              {tasksRemaining} {tasksRemaining === 1 ? 'task' : 'tasks'} remaining
            </span>
            <button className="btn-clear" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;