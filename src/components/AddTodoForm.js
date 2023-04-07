import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

import Form from 'react-bootstrap/Form';

const AddTodoForm = () => {
  // Initialize a local state to hold the new todo's content
  const [content, setContent] = useState('');

  // Access the store's dispatch function
  const dispatch = useDispatch();

  // Handler for submitting the new todo
  const handleSubmit = (e) => {
    e.preventDefault();

    // Don't allow an empty todo to be added
    if (content.trim() === '') {
      return;
    }

    // Dispatch the addTodo action with the new todo's content
    dispatch(addTodo(content));

    // Clear the input field after the todo is added
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </div>
    </Form>
  );
};

export default AddTodoForm;
