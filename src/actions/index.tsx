import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../constants/index';

let nextTodoId = 0;

interface addTodoAction {
    type: typeof ADD_TODO
    id: number
    text: string
}

export const addTodo = (text: string) : TodoAction => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text: text
    }
}

interface deleteTodoAction {
    type: typeof DELETE_TODO
    id: number
}

export const deleteTodo = (id: number) : TodoAction => {
    return {
        type: DELETE_TODO,
        id: id
    }
}

interface toggleTodoAction {
    type: typeof TOGGLE_TODO
    id: number
}

export const toggleTodo = (id: number) : TodoAction => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export type TodoAction = addTodoAction | toggleTodoAction | deleteTodoAction