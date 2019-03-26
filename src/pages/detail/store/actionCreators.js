import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const getdetail = (data) => ({
    type: actionTypes.GET_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
})


export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(res => {
            const data = res.data.data;
            dispatch(getdetail(data));
        }).catch(error => {
            console.log(error)
        })
    }
}