import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './container/AddTodo';
import VisibleTodos from './container/VisibleTodos';
import { store } from './store/index';
import { Provider } from 'react-redux';
import './index.css';

const App: React.FC = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodos />
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);