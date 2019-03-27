import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const loginAction = (data) => ({
    type: actionTypes.LOGIN,
    data: fromJS(data)
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            const data = res.data.data;
            if (data) {
                dispatch(loginAction(res.data.data));
            } else {
                alert('登录失败');
            }
        })
    }
}

export const logout = () => ({
    type: actionTypes.LOGOUT
})