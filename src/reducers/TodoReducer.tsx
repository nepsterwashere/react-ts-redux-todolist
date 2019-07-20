import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../constants/index";
import { TodoAction } from '../actions/index';
import { TodoState } from "../store/index"

const initialState: TodoState = {
    todos: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) : TodoState => {
   switch (action.type) {
       case ADD_TODO:
           return {
               todos: [...state.todos, {
                   id: action.id,
                   text: action.text,
                   completed: false
               }]
           };
       case DELETE_TODO:
           return {
               todos: state.todos.filter(todo => todo.id !== action.id)
           };
       case TOGGLE_TODO:
           return {
               todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
           };
       default:
           return state;
   }
}