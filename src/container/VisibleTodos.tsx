import { TodoState, Todo } from '../store/index';
import { Dispatch } from 'redux';
import { deleteTodo } from '../actions/index';
import { TodoList } from '../components/TodoList';
import { connect } from 'react-redux';

interface StateFromProps {
    todos: Array<Todo>;
}

const mapStateToProps = (state: TodoState) : StateFromProps => ({
    todos: state.todos
});

interface DispatchFromProps {
    deleteTodo: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) : DispatchFromProps => ({
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);