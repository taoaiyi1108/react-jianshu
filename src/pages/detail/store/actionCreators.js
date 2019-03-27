import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const getdetail = (data) => ({
    type: actionTypes.GET_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
})


export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            const data = res.data.data;
            dispatch(getdetail(data));
        }).catch(error => {
            console.log(error)
        })
    }
}