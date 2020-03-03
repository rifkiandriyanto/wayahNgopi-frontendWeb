import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/product/product";
import Login from "./components/auth/login";
import store from './components/redux/store';
import Navbar from './components/layout/navbar';

function App() {
  return (
  <Provider store={store}>
    <Router>
    <Navbar />
      <Route exact path="/" component={Product} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>
    
  );
}

export default App;
