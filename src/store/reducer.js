// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as hederReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

const reducer = combineReducers({
    header: hederReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer;