import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import store from "./components/redux/store";
import Home from "./components/home/home";
import Category from "./components/category/category";
import Cart from "./components/order/cart";
import Register from "./components/auth/register";
import User from "./components/user/user"
// import History from "./components/history/history"
require('dotenv').config()

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/category" component={Category} />
        <Route path="/user" component={User} />
        <Route path="/cart" component={Cart} />
        <Route path="/history" component={History} />
      </Router>
    </Provider>
  );
}

export default App;
