import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteTodo, editTodo, toggleCompleted  } from '../store/todoSlice';


const TodoItem = ({ id }) => {
    const todo = useSelector((state) => state.todos.data[id]);

    //Create a state for the edited content and initialize it with the current cntent
    const [editedContent, setEditedContent] = useState(todo.content);
    //Create a state for the edit mode and initialize it to false
    const [editMode, setEditMode] = useState(false);
    //Get the dispatch function from the Redux store
    const dispatch = useDispatch();

    //Handler to delete a todo
    const handleDelete = () => {
        dispatch(deleteTodo(id));
    };

    //Handler to toggle the completed state of a todo
    const handleCompletedToggle = () => {
        dispatch(toggleCompleted({ id }))
    };

    //Handler to start editing a todo
    const handleEditStart = () => {
        setEditMode(true);
    };

    //Handler to update the edited content state
    const handleContentChange = (event) => {
        setEditedContent(event.target.value);
    };

    //Handler to sabe the edited content and exir the edit mode
    const handleEditSave = () => {
        dispatch(editTodo({ id, newContent: editedContent }));
        setEditMode(false);
    };

    //Handler to cancel editing and exit edit mode
    const handleEditCancel = () => {
        setEditedContent(todo.content);
        setEditMode(false);
    };

    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {/* Render the todo content or an input field depending on whether in edit mode */}
            {editMode ? (
            <input type='text' value={editedContent} onChange={handleContentChange} /> 
            ) : (
                <div className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through' : ''}`}>{todo.content}</div>
            )}
            {/* Render the appropriate action buttons depending on whether in edit mode */}
            {editMode ? (
                <>
                    <button className="btn btn-outline-success" onClick={handleEditSave}>Save</button>
                    <button className="btn btn-outline-danger" onClick={handleEditCancel}>Cancel</button>
                </>

            ) : (
                <>
                   <button className="btn btn-outline-primary todobtn" onClick={handleEditStart}>Edit</button>
                    <button className="btn btn-outline-danger todobtn" onClick={handleDelete}>Delete</button>
                    <button className={`btn ${todo.completed ? 'btn-outline-warning' : 'btn-outline-success'}`} onClick={handleCompletedToggle}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button> 
                </>
            )}
        </li>
    );
};

export default TodoItem;