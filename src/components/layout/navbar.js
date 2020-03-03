import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterProduct } from "../redux/action/product";

class Navbar extends Component {
  state = {
    category: "",
    search: ""
  };

  sortProduct = event => {
    this.setState({
      category: event.target.value
    });
    this.props.dispatch(filterProduct(event.target.value, this.state.search));
  };

  searchProduct = event => {
    this.setState({
      search: event.target.value
    });
    this.props.dispatch(filterProduct(this.state.category, event.target.value));
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "white" }}
      >
        <div className="container">

          <select
            className="navbar-nav ml-auto mt-2 mt-lg-0"
            id="inputGroupSelect01"
            defaultValue={"DEFAULT"}
            name="category"
            onChange={this.sortProduct}
            as="select"
          >
            <option value="" disabled>
              Choose..
            </option>
            <option value="">ALL</option>
            <option value="food">FOOD</option>
            <option value="drink">DRINK</option>
          </select>

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
              Food Items
            </a>

            <form className="form-inline my-3 my-lg-0">
              <input
                className="form-control mr-sm-40"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.searchProduct}
              />
            </form>
            <div className="navbar-nav ml-auto mt-2 mt-lg-0">
              <h6>
                Cart <span className="badge badge-info badge-pill">0</span>
              </h6>
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

export default connect()(Navbar);
