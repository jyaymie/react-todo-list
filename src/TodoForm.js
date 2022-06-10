import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoForm({ todos, setTodos }) {
	const [newTodo, setNewTodo] = useState('');

	function handleChange(e) {
		setNewTodo(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		// Add newTodo to our array of todos that is stored in the App.js state
		// Create a brand new todos
		setTodos([...todos, newTodo]);
		setNewTodo('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='todo'>Todo:</label>
			<input onChange={handleChange} value={newTodo} id='todo' type='text' />
			<button type='submit'>Add todo</button>
		</form>
	);
}

export default TodoForm;
