
// eslint-disable-next-line
import React, { Component } from "react";
// import { Link } from "react-router-dom";

class NavbarCategory extends Component {
  logout = () => {
    localStorage.removeItem('user-id')
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('status')
}


  render() {
    return (
      <nav className="navbar navbar-light"style={{ background: "#eef0eb" }}>
        
        <span className="navbar-brand">
          Coffeeshop
        </span>
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
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={this.logout}>
             
                Logout
       
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavbarCategory
