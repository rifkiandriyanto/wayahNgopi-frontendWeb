import { combineReducers } from 'redux';

import products from './product';
import categories from './category';
export default combineReducers({
    products,
    categories
});
