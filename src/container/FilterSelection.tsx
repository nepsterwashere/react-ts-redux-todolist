import { AppState, VisibilityState } from "../store";
import { Dispatch } from 'redux';
import { setVisibilityFilter } from "../actions";
import { connect } from 'react-redux';
import { FilterButton } from "../components/FilterButton";
import { VisibilityFilter } from "../constants";

interface StateFromProps {
    active: boolean;
}

const mapStateToProps = (state: AppState, ownProps: VisibilityState) : StateFromProps => ({
    active: state.visibilityState.filter === ownProps.filter
});

interface DispatchFromProps {
    onClick: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: VisibilityState) : DispatchFromProps => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect<StateFromProps, DispatchFromProps, {filter: VisibilityFilter}, AppState>(
    mapStateToProps, 
    mapDispatchToProps
)(FilterButton);