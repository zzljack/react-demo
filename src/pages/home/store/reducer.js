import { fromJS } from 'immutable';
import * as canstants from './canstants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    switch(action.type) {
        case canstants.CHANGE_HOME_DATA:
            return  state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)                                        
            });
        case canstants.CHANGE_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.page
            });
        case canstants.CHANGE_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}   