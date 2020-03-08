import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../layout/navbar";
import uniqid from "uniqid";
import { checkout, manipulateItem, deleteCart } from "../redux/actions/cart";

class Cart extends Component {
  state = {
    cashier: localStorage.getItem("user-id"),
    totalPrice: 0
  };

  //add qty
  addQuantity = data => {
    if (data.quantity < data.stock) {
      data.quantity += 1;
      this.props.dispatch(manipulateItem(data));
    }
  };

  //redudance quantity if add < 1
  reduceQuantity = data => {
    if (data.quantity > 1) {
      data.quantity -= 1;
      this.props.dispatch(manipulateItem(data));
    }
  };

  //Delete Item from Order
  deleteCart = id => {
    this.props.dispatch(deleteCart(id));
  };

  //count total price
  countTotal = () => {
    var totalPrice = 0;
    this.props.productsInCart.forEach(e => {
      totalPrice += e.price * e.quantity;
    });
    this.setState({
      totalPrice: totalPrice
    });
  };

  componentDidMount() {
    this.countTotal();
  }

  orderHandler = () => {
    const data = {
      idTransaction: `${uniqid()}`,
      products: this.props.productsInCart
    };
    this.props.dispatch(checkout(data));
  };
render() {
    const ViewCart = () => {
        if (this.props.productsInCart.length < 1) {
            return(
                <h3 style={{ marginTop: "20px" }}>
                  Hey, your shophing cart is empety!
                </h3>
            );
        } else {
          return(
            <div
            className="col-8"
            style={{ marginTop: "15px", paddingBottom: "40px" }}
          >
            {this.props.productsInCart.map(purchase => (
              <li
                className="list-group-item"
                style={{ padding: "0", border: "none" }}
                key={purchase.productId}
              >
                <div className="media" style={{ textAlign: "left" }}>
                  <img
                    style={{
                      width: "64px",
                      height: "60px",
                      borderRadius: "8px"
                    }}
                    src={purchase.image}
                    className="mr-3"
                    alt="..."
                  />

                  <div className="media-body">
                    <h6 className="mt-0 cartName">{purchase.name}</h6>
                    <span style={{ position: "relative", top: "-6px" }}>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.reduceQuantity(purchase)}
                      >
                        -
                      </button>

                      <button className="btn cartStock">
                        {purchase.quantity}
                      </button>

                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.addQuantity(purchase)}
                      >
                        +
                      </button>
                      <span
                        id={purchase.price}
                        style={{ float: "right" }}
                        className="cartPrice"
                      >
                        Rp. {purchase.price * purchase.quantity}
                      </span>
                      <i
                        className="material-icons medium"
                        style={{
                          position: "relative",
                          left: "90px",
                          cursor: "pointer",
                          color: "grey"
                        }}
                        onClick={() => this.deleteFromCart(purchase.productId)}
                      >
                        delete
                      </i>
                    </span>
                  </div>
                </div>
                <hr />
              </li>
            ))}
            <button
              data-toggle="modal"
              data-target="#purchase-detail"
              className="btn btn-info"
            >
              Checkout
            </button>

            <div
              className="modal fade"
              id="purchase-detail"
              role="dialog"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                      Cofeeshop
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      <p>Cashier #{this.state.cashier}</p>
                      {this.props.productsInCart.map((product, index) => (
                        <div className="row" key={index}>
                          <div className="col-md-4">{product.name}</div>
                          <div className="col-md-4">Rp. {product.price}</div>
                          <div className="col-md-2">x{product.quantity}</div>
                        </div>
                      ))}
                      <p className="mt-4">Total : Rp. {this.state.tPrice}</p>
                      <button
                        onClick={this.purchaseHandler}
                        className="btn btn-info mt-3"
                        data-dismiss="modal"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    };
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-8" style={{ marginTop: "15px" }}>
              <ViewCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapCart = state => {
  return {
    productsInCart: state.cart.cart
  };
};

export default connect(mapCart)(Cart);
