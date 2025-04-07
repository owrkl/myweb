import { useState } from 'react';
import './ToDo.css';

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };
    
    return (
        <div className="todo-container">
            <h2 className="todo-title">To-Do List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
                className="todo-input"
            />
            <button onClick={handleAddTodo} className="todo-button">Add</button>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;