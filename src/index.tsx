import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './container/AddTodo';
import VisibleTodos from './container/VisibleTodos';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { Footer } from './components/Footer';
import './index.css';

const App: React.FC = () => {
    return (
        <div className='content'>
            <h2>Todo List:</h2>
            <AddTodo />
            <VisibleTodos />
            <Footer />
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);