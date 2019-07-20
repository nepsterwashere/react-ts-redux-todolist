import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer";

export const rootReducer = combineReducers({
    todos: todoReducer
});