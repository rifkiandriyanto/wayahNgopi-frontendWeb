import React, { Component } from "react";
// import { Link } from "react-router-dom";

class NavbarCategory extends Component {


  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "white" }}
      >
        <div className="container">

          <div className="collapse navbar-collapse">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-brand"
              style={{ marginRight: "30px" }}
            >
              React Coffeeshop
            </a>

            {/* <form className="form-inline my-3 my-lg-0">
              <input
                className="form-control mr-sm-40"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.searchProduct}
              />
            </form> */}
            <div className="navbar-nav ml-auto mt-2 mt-lg-0">
            </div>
          </div>
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

export default NavbarCategory
