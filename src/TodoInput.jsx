import React, { useState } from 'react';

const TodoInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddTask(inputValue);
    setInputValue('');  
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={handleChange}
        className="todo-input"
        autoFocus
      />
      <button type="submit" className="btn-add">Add Task</button>
    </form>
  );
};

export default TodoInput;