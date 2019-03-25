import axios from 'axios';
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './constants';
import { fromJS } from 'immutable'; // List 也会把一个普通的数组转换成一个immutable数组 

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (result, page) => ({
    type: ADD_HOME_LIST,
    list: fromJS(result),
    page
})

export const getHemoInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(error => {
            console.log(error);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('./api/homeList.json?page=' + page).then(res => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        })
    }
}

export const toggleTopShow = (flag) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TOP_SHOW,
            flag
        })
    }
}