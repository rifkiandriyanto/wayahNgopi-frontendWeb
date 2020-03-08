import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarCategory from "../layout/navbarCategory";
import ProductItem from "../product/productItem"
import { getProducts } from "../redux/actions/product";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    activePage: 1,
    sort: "id",
    by: "ASC",
    serachName: "",
    activeCategory: ""
  };

  getProducts = () => {
    const data = {};
    this.props.dispatch(getProducts(data));
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
    this.props.dispatch(getProducts(data));
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
    this.props.dispatch(getProducts(data));
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
    this.props.dispatch(getProducts(data));
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
    this.props.dispatch(getProducts(data));
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
    this.props.dispatch(getProducts(data));
  };

  componentDidMount() {
    if (!localStorage.getItem("isAuth")) {
      this.props.history.push("/login");
    }
    this.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container">
        <NavbarCategory />
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "##d1e3e3" }}>
        <ul class="navbar-nav">
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
            <ProductItem product={product} key={product.id} />
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
                <Link className="page-link">{page}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapHome = state => {
  return {
    products: state.products.products,
    pages: state.products.pages
  };
};

export default connect(mapHome)(Home);
