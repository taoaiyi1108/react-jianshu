import { fromJS } from 'immutable';
import * as actionTypes from './constants';
const deafultState = fromJS({
    title: "",
    content: ''
});

export default (state = deafultState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}