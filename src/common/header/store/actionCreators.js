import * as contants from './canstants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: contants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: contants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: contants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: contants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: contants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: contants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}