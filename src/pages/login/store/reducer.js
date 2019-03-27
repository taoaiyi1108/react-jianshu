import { fromJS } from 'immutable';
import * as actionTypes from './constants';
const deafultState = fromJS({
    login: false
});

export default (state = deafultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return state.set('login', action.data);
        case actionTypes.LOGOUT:
            return state.set('login', false)
        default:
            return state;
    }
}