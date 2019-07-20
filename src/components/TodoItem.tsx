import * as React from 'react';

interface Props {
    text: string;
    deleteTodo: () => void;
}

export const TodoItem: React.FC<Props> = ({text, deleteTodo}) => (
    <li>
        {text}
        <button onClick={deleteTodo}>X</button>
    </li>
);