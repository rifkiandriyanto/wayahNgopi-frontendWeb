import { combineReducers } from 'redux';

import cart from './cart';
import products from './product';
import categories from './category';
export default combineReducers({
    products,
    categories,
    cart
});
