/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../../App.css";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      food_class: "nav-link",
      drink_class: "nav-link",
      all_class: "nav-link active",
      name: "",
      description: "",
      image: "",
      category: 0,
      price: 0,
      stock: 0,
      formStatus: "Add",
      productIdSelected: null,
      idProduct: "",

      searchName: "",
      totalPages: [],
      activePage: 1,
      limit: 6,
      activeCategory: ""
      // sort: "ASC",
      // SortBy: "id"
    };
  }

  onChangePage = event => {
    event.preventDefault();

    let allPage = document.querySelectorAll(".pagination button.page-link");
    allPage.forEach(e => {
      e.parentElement.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");
    this.setState({ activePage: event.target.value });
    axios
      .get(
        `http://localhost:8006/product/?limit=${this.state.limit}&page=${event.target.value}&category=${this.state.activeCategory}&name=${this.state.searchName}`
      )
      .then(res => {
        this.setState({
          products: res.data.result,
          totalPages: res.data.totalPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onClickHandler = product => {
    console.log(product.id);
    this.setState({
      idProduct: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      productIdSelected: product.id,
      formStatus: "Update"
    });
  };

  onClickMenu = event => {
    event.preventDefault();
    this.setState({
      all_class: "nav-link",
      food_class: "nav-link",
      drink_class: "nav-link",
      [event.target.name]: "nav-link active"
    });
    axios
      .get(
        `http://localhost:8006/product/?category=${event.target.id}&limit=${this.state.limit}`
      )
      .then(res => {
        this.setState({
          products: res.data.result,
          totalPages: res.data.totalPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeSearch = event => {
    this.setState({
      all_class: "nav-link active",
      food_class: "nav-link",
      drink_class: "nav-link",
      searchName: event.target.value
    });
    axios
      .get(
        `http://localhost:8006/product/?name=${event.target.value}&limit=${this.state.limit}`
      )
      .then(res => {
        this.setState({
          products: res.data.result,
          totalPages: res.data.totalPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // on input of form changed
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // when user input image file
  handleFileChange = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  // Form submit
  onSubmitHandler = event => {
    event.preventDefault();
    let formData = new FormData();

    formData.append("image", this.state.image);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("category", this.state.category);
    formData.append("price", this.state.price);
    formData.append("stock", this.state.stock);
    if (this.state.formStatus === "Add") {
      this.postData(formData);
    } else if (this.state.formStatus === "Update") {
      if (this.state.image === "") {
        formData.delete("image");
        this.patchData(formData);
      } else {
        this.patchData(formData);
      }
    }
  };

  // Edit data
  patchData = formData => {
    const options = {
      method: "PATCH",
      body: formData
    };
    fetch(
      `http://localhost:8006/product/${this.state.idProduct}`,
      options
    ).then(res => {
      console.log(res, "Item has been updated");
      alert("Updated");
      this.componentDidMount();
    });
  };

  // Add Data
  postData = formData => {
    const options = {
      method: "POST",
      body: formData
    };
    fetch(`http://localhost:8006/product/`, options).then(res => {
      console.log(res, "Data has been added");
      alert("Added");
      this.componentDidMount();
    });
  };

  // delete button
  deleteButtonHandler = productId => {
    axios
      .delete(`http://localhost:8006/product/${productId}`)
      .then(res => {
        console.log(res);
        alert("Deleted");
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    if (!localStorage.getItem("isAuth")) {
      this.props.history.push("/login");
    }
    axios
      .get(
        `http://localhost:8006/product/?name=${this.state.searchName}&limit=${this.state.limit}&page=${this.state.activePage}&category=${this.state.activeCategory}`
      )
      .then(res => {
        this.setState({
          products: res.data.result,
          totalPages: res.data.totalPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onLogout = () => {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ background: "white" }}
        >
          <div className="container">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a
                  className={this.state.all_class}
                  id=""
                  name="all_class"
                  onClick={this.onClickMenu}
                  href="/"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={this.state.food_class}
                  id="food"
                  name="food_class"
                  onClick={this.onClickMenu}
                  href="?category=food"
                >
                  Food
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={this.state.drink_class}
                  id="drink"
                  name="drink_class"
                  onClick={this.onClickMenu}
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
                  onChange={this.onChangeSearch}
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

        {/* Products */}
        <div className="row">
          <div className="products">
            <div className="row">
              <h3 className="add" data-toggle="modal" data-target="#add">
                <button className="add btn btn-outline-info">
                  <i className="material-icons">add</i>
                </button>
              </h3>
              <h3 className="#">
                <button
                  className="logout btn btn-outline-danger"
                  onClick={this.onLogout.bind(this)}
                >
                  <span className="#">Logout</span>
                </button>
              </h3>
              {this.state.products.map(product => (
                <div className="col-md-6 col-lg-4" key={product.id}>
                  <div
                    className="card"
                    style={{ width: "20rem", height: "23rem" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="card image cap"
                    />
                    <div className="card-body">
                      <div style={{ float: "left", marginLeft: "-10px" }}>
                        <p
                          className="card-title"
                          style={{ marginTop: "-15px" }}
                        >
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
                      <div style={{ float: "right", marginTop: "-10px" }}>
                        <button
                          onClick={() => this.onClickHandler(product)}
                          className="btn btn-small btn-outline-primary"
                          data-toggle="modal"
                          data-target="#edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => this.deleteButtonHandler(product.id)}
                          className="btn btn-small btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Pagination */}
              <div className="col-md-12">
                <ul className="pagination justify-content-center">
                  {this.state.totalPages.map(page => (
                    <li className="page-item" key={page}>
                      <button
                        className="page-link"
                        value={page}
                        onClick={this.onChangePage}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cart and Form */}
          <div className="col-md-30">
            <div className="row" style={{ margin: "10px" }}>
              <div
                className="col-md-12"
                style={{ textAlign: "center", position: "relative" }}
              >
                {/* Modal add */}
                <div
                  className="modal fade"
                  id="add"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="addModal"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          {this.state.formStatus} Item
                        </h5>
                      </div>
                      <div className="modal-body">
                        <form
                          encType="multipart/form-data"
                          onSubmit={this.onSubmitHandler}
                        >
                          <div className="form-group">
                            <label>Product Name:</label>
                            <input
                              placeholder="Product Name..."
                              value={this.state.name}
                              required
                              className="form-control"
                              type="text"
                              name="name"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Description Item:</label>
                            <input
                              placeholder="Description..."
                              value={this.state.description}
                              required
                              className="form-control"
                              type="text"
                              name="description"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Image:</label>
                            <input
                              className="form-control-file"
                              type="file"
                              name="image"
                              onChange={this.handleFileChange}
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Category:</label>
                            <select
                              className="form-control"
                              required
                              name="category"
                              onChange={this.onChangeHandler}
                            >
                              <option selected disabled>
                                Choose...
                              </option>
                              <option value={1}>Food</option>
                              <option value={2}>Drink</option>
                            </select>
                          </div>
                          <label>Price:</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                Rp.
                              </span>
                            </div>
                            <input
                              required
                              placeholder="Price..."
                              value={this.state.price}
                              className="form-control"
                              type="number"
                              name="price"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <br />
                          <div className="form-group">
                            <label>Stock:</label>
                            <input
                              placeholder="Stock..."
                              value={this.state.stock}
                              required
                              className="form-control"
                              type="number"
                              name="stock"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                              Send
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit Modal */}
                <div
                  className="modal fade"
                  id="edit"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="editModal"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          {this.state.formStatus} Item
                        </h5>
                      </div>
                      <div className="modal-body">
                        <form
                          encType="multipart/form-data"
                          onSubmit={this.onSubmitHandler}
                        >
                          <div className="form-group">
                            <label>Product Name:</label>
                            <input
                              placeholder="Product Name..."
                              value={this.state.name}
                              onChange={this.onChangeHandler}
                              required
                              className="form-control"
                              type="text"
                              name="name"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Description Item:</label>
                            <input
                              placeholder="Description...."
                              value={this.state.description}
                              onChange={this.onChangeHandler}
                              required
                              className="form-control"
                              type="text"
                              name="description"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Image:</label>
                            <input
                              className="form-control-file"
                              type="file"
                              name="image"
                              onChange={this.handleFileChange}
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Category:</label>
                            <select
                              className="form-control"
                              required
                              name="category"
                              onChange={this.onChangeHandler}
                            >
                              <option selected disabled>
                                Choose...
                              </option>
                              <option value={1}>Food</option>
                              <option value={2}>Drink</option>
                            </select>
                          </div>
                          <label>Price:</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                Rp.
                              </span>
                            </div>
                            <input
                              required
                              placeholder="Price..."
                              value={this.state.price}
                              className="form-control"
                              type="number"
                              name="price"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <br />
                          <div className="form-group">
                            <label>Stock:</label>
                            <input
                              placeholder="Stock..."
                              value={this.state.stock}
                              required
                              className="form-control"
                              type="number"
                              name="stock"
                              onChange={this.onChangeHandler}
                            ></input>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                              Send
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
