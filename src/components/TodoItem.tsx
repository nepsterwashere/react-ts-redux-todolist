import * as React from 'react';
import '../resources/css/TodoItem.css';

interface Props {
    text: string;
    deleteTodo: () => void;
    toggleVisibility: () => void;
}

export const TodoItem: React.FC<Props> = ({text, deleteTodo, toggleVisibility}) => (
    <li>
        {text}
        <button onClick={toggleVisibility}>Y</button>
        <button onClick={deleteTodo}>X</button>
    </li>
);