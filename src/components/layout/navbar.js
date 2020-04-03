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
        <span className="navbar-brand">WayahNgopi</span>
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
              <i class="fas fa-coffee">Home</i>
                 
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/product">
              <i class="fas fa-file-invoice"> Product</i>
               
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category">
              <i class="fa fa-list-alt">Category</i>
                
              </a>
            </li>
            <li className="nav-item">
           
              <a className="nav-link" href="/history">
              <i class="fas fa-chart-line">History</i>
              </a>
            </li>
            <li className="nav-item">
              
              <a className="nav-link" href="/user">
              <i className="fas fa-user-cog">User</i>
              </a>
            </li>
            <li className="nav-item">
             
              <a className="nav-link" href="/login" onClick={this.logout}>
              <i class="fas fa-sign-out-alt">Logout</i>
               
              </a>
            </li>
            <li className="nav-item">
          
            
            <Link className="nav-link a" to="/cart">
            <i className="fas fa-cart-plus">Cart<span className="badge badge-info">{this.props.number}</span></i>
                  
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
