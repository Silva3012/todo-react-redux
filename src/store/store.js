import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//use the configureStore function to create the Redux store with the initial state
const store = configureStore({
    reducer: {
        todos: todoReducer
    },
});

//export the store to be used in the rest of the application
export default store;