import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarCategory from "../layout/navbarCategory";
import { getProductsCashier } from "../redux/action/product";
import { Link } from "react-router-dom";

class Cashier extends Component {
  state = {
    activePage: 1,
    sort: "id",
    by: "ASC",
    serachName: "",
    activeCategory: ""
  };

  getProductsCashier = () => {
    const data = {};
    this.props.dispatch(getProductsCashier(data));
  };
  onClickMenu = e => {
    this.setState({ activeCategory: e.target.id });
    if (e.target.id === "") this.setState({ activeCategory: "" });
    const data = {
      activePage: 1,
      activeCategory: e.target.id,
      serachName: "",
      sort: this.state.sort,
      by: this.state.by
    };
    this.props.dispatch(getProductsCashier(data));
  };

  onSort = e => {
    this.setState({ sort: e.target.id });
    const data = {
      activePage: 1,
      activeCategory: this.state.activeCategory,
      serachName: "",
      sort: e.target.id,
      by: this.state.by
    };
    this.props.dispatch(getProductsCashier(data));
  };

  onBy = e => {
    this.setState({ by: e.target.id });
    const data = {
      activePage: 1,
      activeCategory: this.state.activeCategory,
      serachName: "",
      sortBy: this.state.sort,
      sort: e.target.id
    };
    this.props.dispatch(getProductsCashier(data));
  };

  onChangeSearch = e => {
    this.setState({ serachName: e.target.value });
    const data = {
      activePage: 1,
      activeCategory: "",
      serachName: e.target.value,
      sort: this.state.sort,
      by: this.state.by
    };
    this.props.dispatch(getProductsCashier(data));
  };

  changePage = e => {
    this.setState({ activePage: e });
    const data = {
      activePage: e,
      activeCategory: this.state.activeCategory,
      serachName: this.state.serachName,
      sort: this.state.sort,
      by: this.state.by
    };
    this.props.dispatch(getProductsCashier(data));
  };

  componentDidMount() {
    if (!localStorage.getItem('isAuth')) {
      this.props.history.push('/login');
  }
    this.getProductsCashier();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container">
        <NavbarCategory />
        <nav class="navbar navbar-light bg-light">
          <ul class="navbar nav bg-light">
            <li class="nav-item">
              <Link class="nav-link" id="" onClick={this.onClickMenu}>
                All
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" id="food" onClick={this.onClickMenu}>
                Foods
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" id="drink" onClick={this.onClickMenu}>
                Drinks
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                By
              </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" id="name" onClick={this.onBy}>
                  Name
                </Link>
                <Link class="dropdown-item" id="price" onClick={this.onBy}>
                  Price
                </Link>
              </div>
            </li>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearch}
              />
            </form>
          </ul>
          </nav>

          <div className="row">
            {products.map(product => (
              <div className="col-md-6 col-lg-4" key={product.id}>
                <div
                  className="card"
                  style={{ width: "22rem", border: 'none',
                  background: 'transparent'  }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="card image cap"
                    height="200" width="200"
                    style={{  borderRadius: '10px 10px',
                      boxShadow: '-3px 3px 6px 3px rgba(247, 166, 166)'}}
                  />
                  <div className="card-body">
                    <div style={{ float: "left", marginLeft: "-10px" }}>
                      <p className="card-title" style={{ marginTop: "-15px" }}>
                        {product.name}
                      </p>
                      <p className="card-text" style={{ marginTop: "-15px" }}>
                        {product.description}
                      </p>
                      <h6
                        className="card-text"
                        style={{ marginTop: "-15px", fontWeight: "bolder" }}
                      >
                        Rp. {product.price}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {this.props.pages.map(page => (
              <li
                className="page-item"
                key={page}
                id={page}
                onClick={() => this.changePage(page)}
              >
                <Link className="page-link">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapCashier = state => {
  return {
    products: state.products.products,
    pages: state.products.pages
  };
};

export default connect(mapCashier)(Cashier);
