import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../layout/navbar";
import { getProducts } from "../redux/action/product";

class Cashier extends Component {
  state = {
    show: false,
    showDelete: false,
    showUpdate: false,

    selectProductUpdate: null,
    selectProductDelete: null,

    totalPages: [],
    activePage: 1,
    limit: 6,
    activeCategory: ""
  };

  getProducts = () => {
    this.props.dispatch(getProducts(this.state.limit, this.state.activePage));
  };


  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
        <div className="products">
          <Navbar />
            <div className="row">
                
            {products.map((product) => (
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps)(Cashier);
