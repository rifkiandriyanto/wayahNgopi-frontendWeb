import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import store from './components/redux/store';
import Cashier from './components/product/Cashier';


function App() {
  return (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Product} />
      <Router path="/cashier" component={Cashier} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>
    
  );
}

export default App;
