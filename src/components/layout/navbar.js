import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {

  logout = () => {
    localStorage.removeItem('user-id')
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('status')
}

  render() {
    return (
      <nav className="navbar navbar-light" style={{ background: "#eef0eb" }}>
        <a className="navbar-brand">
          Coffeeshop
        </a>
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
              <a className="nav-link" href="/category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <Link className="nav-link a" to="/login" onClick={this.logout}>
                Logout
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// const searchStateToProps = state => {
//   //console.log(state)
//   return {
//     products: state.products.products
//   };
// };

export default connect()(Navbar);
