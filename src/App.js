import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './components/product/product'
import Login from './components/auth/login'
import { store, persistor } from './components/redux/store'
import Home from './components/home/home'
import Category from './components/category/category'
import Cart from './components/order/cart'
import Register from './components/auth/register'
import User from './components/user/user'
import History from './components/history/history'
require('dotenv').config()

function App () {
  console.log(process.env)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route path='/product' component={Product} />
          <Route path='/register' component={Register} />
          <Route path='/category' component={Category} />
          <Route path='/user' component={User} />
          <Route path='/cart' component={Cart} />
          <Route path='/history' component={History} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
