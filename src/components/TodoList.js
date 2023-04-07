import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    //Get the todos from the Redux store
    const todos = useSelector((state) => state.todos.data);

    //Render the list of TodoListItem components
    return (
        <ul className='list-group'>
            {/* Map over the todos and render a TodoListItem component for each one */}
            {Object.keys(todos).map((id) => (
            <TodoItem key={id} id={id} />
        ))}
        </ul>
    );  
};

export default TodoList;