import axios from 'axios';
import * as canstants from './canstants';
import { fromJS } from 'immutable';

export const getHomeList = (result) => ({
    type: canstants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

export const getMoreList = (result, page) => ({
    type: canstants.CHANGE_HOME_LIST,
    list: fromJS(result),
    page: page
})

export const toggleTopShow = (show) => ({
    type: canstants.CHANGE_TOP_SHOW,
    show
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            if(res.data.success){
                const result = res.data.data;
                dispatch(getHomeList(result));
            }
        })
    }
}

export const getMoreInfo = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            if(res.data.success){
                const result = res.data.data;
                dispatch(getMoreList(result, page+1));
            }
        })
    }
}