import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1>Todo</h1>
      <TodoList todos={todos} />
      <AddTodoForm />
    </div>
  );
}

export default App;
