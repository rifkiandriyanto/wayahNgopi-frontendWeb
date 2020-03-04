import { combineReducers } from 'redux';

import products from './product';
import categorys from './category';
export default combineReducers({
    products,
    categorys
});
