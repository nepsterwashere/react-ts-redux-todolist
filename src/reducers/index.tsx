import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer";
import { visibilityReducer } from "./VisibilityReducer";

export const rootReducer = combineReducers({
    todoState: todoReducer,
    visibilityState: visibilityReducer
});