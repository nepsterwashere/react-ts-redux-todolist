import * as React from 'react';
import { SHOW_ALL, VisibilityFilter, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';
import FilterSelection from '../container/FilterSelection';

export const Footer: React.FC = () => (
    <div>
        <FilterSelection filter={SHOW_ALL as VisibilityFilter}>
            All
        </FilterSelection>
        <FilterSelection filter={SHOW_ACTIVE as VisibilityFilter}>
            Active
        </FilterSelection>
        <FilterSelection filter={SHOW_COMPLETED as VisibilityFilter}>
            Completed
        </FilterSelection>
    </div>
);