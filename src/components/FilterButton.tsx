import * as React from 'react';

interface Props {
    active: boolean;
    onClick: () => void;
    children: string;
}

export const FilterButton: React.FC<Props> = ({active, onClick, children}) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
);