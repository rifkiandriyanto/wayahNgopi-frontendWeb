import { combineReducers } from 'redux';

import cart from './cart';
import products from './product';
import categories from './category';
import user from './user';
export default combineReducers({
    products,
    categories,
    cart,
    user
});
