import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoApp = () => {
    const [text, setText] = useState("");
    const [todo, setTodos] = useState([]);  // Ensure todo is initialized as an array
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                setText(response.data.message);
                // Assuming response.data.todo is an array
                setTodos(response.data.todo || []); // Ensure it's an array
            } catch (error) {
                console.log("Error in the response", error);
            }
        };
        fetchData();
    }, []);

    const handleInput = (e) => {
        setNewTodo(e.target.value);  // This should update newTodo, not the entire todos array
    };

    const handleToAdd = async () => {
        try {
            await axios.post('http://localhost:8000/todo', { todo: newTodo });
            // Update todo state by adding newTodo to the previous todos array
            setTodos([...todo, newTodo]);  
            setNewTodo("");  // Clear the input after adding
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <div>
            <h1>TodoApp</h1>
            <input 
                type='text' 
                placeholder='Please enter your Todo' 
                value={newTodo}  // Bind input value to newTodo state
                onChange={handleInput} 
            />
            <button onClick={handleToAdd}>Add Todo</button>
            <p>Tasks are:</p>
            <ul>
                {todo.map((todos, index) => (
                    <li key={index}>{todos}</li>
                ))}
            </ul>
            <p>{text}</p>
        </div>
    );
};

export default TodoApp;
