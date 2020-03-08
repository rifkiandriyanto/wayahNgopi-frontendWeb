import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import store from "./components/redux/store";
import Home from "./components/product/home";
import Category from "./components/category/category";
import Cart from "./components/order/cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/category" component={Category} />
        <Route path="/cart" component={Cart} />
      </Router>
    </Provider>
  );
}

export default App;
