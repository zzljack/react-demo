import axios from 'axios';
import * as constants from './constants';

export const changeDetail = (data) =>({
    type: constants.CHANGE_DETAIL_LIST,
    list: data
})

export const detailList = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+ id).then((res) => {
            const data = res.data.data;
            dispatch(changeDetail(data));
        })
    }
}