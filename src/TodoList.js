import React from 'react';

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo, index) => {return <li key={index}>{todo}</li>})}
		</ul>
	);
}

export default TodoList;
