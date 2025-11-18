// Make a todo list in react

import { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  return (
    <>
      <h1>Todo List</h1>
      <div className="todo-container">
        <div className="input-section">
          <input className='task-input'
            type="text"
          >
          </input>
          <button className='add-task-button'>Add Task</button>
        </div>
        <div className="task-section">
            <ul className='task-list'>
                
            </ul>
        </div>
      </div>
    </>
  );
}
export default Todo;