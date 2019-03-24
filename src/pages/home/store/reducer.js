import { fromJS } from 'immutable'; // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
import { CHANGE_HOME_DATA } from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            });
        default:
            return state;
    }
}