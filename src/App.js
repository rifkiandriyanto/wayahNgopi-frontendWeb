import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import { store, persistor } from "./components/redux/store";
import Home from "./components/home/home";
import Category from "./components/category/category";
import Cart from "./components/order/cart";
import Register from "./components/auth/register";
import User from "./components/user/user";
import History from "./components/history/history";
import error from "./components/assets/404.png";
import { Button } from "react-bootstrap";
require("dotenv").config();

const notFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={error} alt="notFound" height={550} width={900} />
      </div>
      <div class="col text-center">
        <Link to="/">
          <Button variant="outline-primary">Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/register" component={Register} />
            <Route path="/category" component={Category} />
            <Route path="/user" component={User} />
            <Route path="/cart" component={Cart} />
            <Route path="/history" component={History} />
            <Route component={notFound} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
