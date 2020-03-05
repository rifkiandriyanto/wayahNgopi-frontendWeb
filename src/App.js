import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import store from './components/redux/store';
import Cashier from './components/product/Cashier';
import Category from './components/category/category'


function App() {
  return (
  <Provider store={store}>
    <Router>
    <Route exact path="/" component={Cashier} />
      <Route  path="/product" component={Product} />
      <Route path="/login" component={Login} />
      <Route path="/category" component={Category} />
    </Router>
  </Provider>
    
  );
}

export default App;
