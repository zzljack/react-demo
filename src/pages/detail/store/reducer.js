import { fromJS } from 'immutable';
import * as constants from './constants';

const defalutState = fromJS({
    title: "",
    content: ""
})

export default (state = defalutState, action) => {
    switch(action.type){
        case constants.CHANGE_DETAIL_LIST:
            return state.merge({
                'title': action.list.title,
                'content': action.list.content
            })
        default:
            return state
    }
}