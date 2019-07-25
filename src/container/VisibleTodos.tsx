import { Todo, AppState } from '../store/index';
import { Dispatch } from 'redux';
import { deleteTodo, toggleTodo } from '../actions/index';
import { TodoList } from '../components/TodoList';
import { connect } from 'react-redux';
import { VisibilityFilter, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';

const getVisibleTodos = (todos: Array<Todo>, filter: VisibilityFilter) : Array<Todo> => {
    switch(filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter((todo: Todo) => !todo.completed);
        case SHOW_COMPLETED:
            return todos.filter((todo: Todo) => todo.completed);
        default:
            console.error("Unknown filter: " + filter);
            return todos;
    }
}

interface StateFromProps {
    todos: Array<Todo>;
}

const mapStateToProps = (state: AppState) : StateFromProps => ({
    todos: getVisibleTodos(state.todoState.todos, state.visibilityState.filter)
});

interface DispatchFromProps {
    deleteTodo: (id: number) => void;
    toggleVisibility: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) : DispatchFromProps => ({
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    toggleVisibility: (id: number) => dispatch(toggleTodo(id))
});

export default connect<StateFromProps, DispatchFromProps, {}, AppState>(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);