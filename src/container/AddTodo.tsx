import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Dispatch } from 'redux';

interface Props {
    dispatch: Dispatch
}

const AddTodo: React.FC<Props> = ({ dispatch }) => {
    let input: any;
    return (
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (input.value.trim()) {
                dispatch(addTodo(input.value));
                input.value = ''
            }
        }}>
            <input ref={(inputElement: HTMLInputElement) => input = inputElement} />
            <button type='submit'>
                OK
            </button>
        </form>
    );
};

export default connect()(AddTodo);