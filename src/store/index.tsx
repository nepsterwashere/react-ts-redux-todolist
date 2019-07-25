import { createStore} from 'redux';
import { rootReducer } from '../reducers';
import { VisibilityFilter } from '../constants';

export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: Array<Todo>;
}

export interface VisibilityState {
    filter: VisibilityFilter
}

export interface AppState {
    todoState: TodoState; 
    visibilityState: VisibilityState;
}