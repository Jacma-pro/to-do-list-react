// Make a todo list in react

import { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState(["test chair", "eat Pom'Potes", "Watch Nouvelle Ecole"]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (input) {
            setTasks([input, ...tasks]);
            setInput('');
        }
    };
    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }
    return (
        <>
            <h1>Todo List</h1>
            <div className="todo-container">
                <div className="input-section">
                    <input className='task-input'
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleEnterKey}
                    />
                    <button className='add-task-button'
                        onClick={handleAddTask}
                        
                    >Add Task</button>
                </div>
                <div className="task-section">
                    <ul className='task-list'>
                        {tasks.map((task, index) => (
                            <li key={index} className='task-item'>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Todo;