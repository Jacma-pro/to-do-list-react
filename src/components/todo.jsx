// Make a todo list in react

import { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div className="todo-container">
        <h1>Todo List</h1>
    </div>
  );
}
export default Todo;