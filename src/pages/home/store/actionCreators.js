import axios from 'axios';
import { CHANGE_HOME_DATA } from './constants';

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
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