// eslint-disable-next-line
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavbarCategory extends Component {
  logout = () => {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("status");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "##d1e3e3" }}>
        <span className="navbar-brand">Coffeeshop</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={this.logout}>
                Logout
              </a>
            </li>
            <li className="nav-item">
            <Link className="nav-link a" to="/cart">
                  Cart {"   "}
                  <span className="badge badge-info">{this.props.number}</span>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

  const getNumber = state => {
    return {
      number: state.cart.totalPurchase
    }
  }

export default connect(getNumber)(NavbarCategory);
