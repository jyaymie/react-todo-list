import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  // const initialTodos = ['Feed the cat', "Wash the dog"]
	const [todos, setTodos] = useState([]);

	return (
		<div className='app'>
			<h1>Todo List</h1>
			<TodoForm todos={todos} setTodos={setTodos}/>
			<TodoList todos={todos}/>
		</div>
	);
}

export default App;
