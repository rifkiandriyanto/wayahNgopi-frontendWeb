import { combineReducers } from 'redux'

import cart from './cart'
import products from './product'
import categories from './category'
import user from './user'
import histories from './history'
import auth from './auth'
export default combineReducers({
  products,
  categories,
  cart,
  histories,
  user,
  auth
})
