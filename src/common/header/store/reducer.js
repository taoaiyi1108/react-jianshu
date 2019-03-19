import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            // return state.set('list', action.data).set("totalPage", action.totalPage);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}