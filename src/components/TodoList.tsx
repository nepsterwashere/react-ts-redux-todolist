import * as React from 'react';
import { Todo } from '../store/index'
import { TodoItem } from './TodoItem';
import '../resources/css/TodoList.css';

interface Props {
    todos: Array<Todo>;
    deleteTodo: (id: number) => void;
    toggleVisibility: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, deleteTodo, toggleVisibility }) => { 
    return (
    <ul>
        {(todos || []).map((todo: Todo) => 
            <TodoItem 
                key={todo.id}
                deleteTodo={() => deleteTodo(todo.id)}
                toggleVisibility={() => toggleVisibility(todo.id)}
                {...todo}
            />
        )}
    </ul>
)};
