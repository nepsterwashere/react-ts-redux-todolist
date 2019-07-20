import * as React from 'react';
import { Todo } from '../store/index'
import { TodoItem } from './TodoItem';

interface Props {
    todos: any;
    deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => { 
    return (
    <ul>
        {(todos.todos || []).map((todo: Todo) => 
            <TodoItem 
                key={todo.id}
                deleteTodo={() => deleteTodo(todo.id)}
                {...todo}
            />
        )}
    </ul>
)};
