import { SET_VISIBILITY_FILTER, SHOW_ALL, VisibilityFilter } from "../constants/index";
import { VisibilityState } from '../store/index'
import { TodoAction } from '../actions/index';

const initialState: VisibilityState = {
    filter: SHOW_ALL as VisibilityFilter
}

export const visibilityReducer = (state: VisibilityState = initialState, action: TodoAction) : VisibilityState => {
   switch (action.type) {
       case SET_VISIBILITY_FILTER:
           return {
               filter: action.filter
           };
       default:
           return state;
   }
}