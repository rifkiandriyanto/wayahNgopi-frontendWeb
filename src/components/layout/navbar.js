import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "white" }}
      >
        <div className="container">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="{this.state.all_class}"
                id=""
                name="all_class"
                onClick="{this.onClickMenu}"
                href="/"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="{this.state.food_class}"
                id="food"
                name="food_class"
                onClick="{this.onClickMenu}"
                href="?category=food"
              >
                Food
              </a>
            </li>
            <li className="nav-item">
              <a
                className="{this.state.drink_class}"
                id="drink"
                name="drink_class"
                onClick="{this.onClickMenu}"
                href="?category=drink"
              >
                Drink
              </a>
            </li>
          </ul>

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
              id=""
              name="all_class"
              onClick={this.onClickMenu}
              href="/"
            >
              Food Items
            </a>

            <form className="form-inline my-3 my-lg-0">
              <input
                className="form-control mr-sm-40"
                type="search"
                placeholder="Search"
                onChange="{this.onChangeSearch}"
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

export default Navbar;
