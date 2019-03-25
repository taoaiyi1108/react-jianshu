import { fromJS } from 'immutable'; // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const change_home_data = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    });
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return change_home_data(state, action);
        case ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.page
            })
        case TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.flag)
        default:
            return state;
    }
}