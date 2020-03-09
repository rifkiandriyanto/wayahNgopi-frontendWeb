import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarCategory from "../layout/navbarCategory";
import uniqid from "uniqid";
import {
  checkout,
  manipulateItem,
  deleteCart
} from "../redux/actions/cart";

class Cart extends Component {
  state = {
    cashier: localStorage.getItem("user-id"),
    tPrice: 0,
    changeDue: 0,
    payment: "-",
    disable: true
  };

  paymentAmount = e => {
    this.setState
    ({ pay: e.target.pay});
    if (e.target.value >= this.state.tPrice){
      this.setState({
        disable: false,
        changeDue: e.target.value - this.state.tPrice
      });
    } else {
      this.setState({ disable: true, changeDue: 0});
    }
  };

  addQuantity = data => {
    if (data.quantity < data.stock) {
      data.quantity += 1;
      this.props.dispatch(manipulateItem(data));
    }
  };
  removeQuantity = data => {
    if (data.quantity > 1) {
      data.quantity -= 1;
      this.props.dispatch(manipulateItem(data));
    }
  };

  deleteCart = id => {
    this.props.dispatch(deleteCart(id));
  };

  totalPayment = () => {
    var tPrice = 0;
    this.props.productsInCart.map(e => {
      tPrice += e.price * e.quantity;
    });
    this.setState({
      tPrice: tPrice
    });
  };

  componentDidMount() {
    this.totalPayment();
  }

  purchaseHandler = () => {
    const data = {
      id_transaction: `${uniqid()}`,
      products: this.props.productsInCart
    };
    this.props.dispatch(checkout(data));
  };

  render() {
    const ViewCart = () => {
      if (this.props.productsInCart.length < 1) {
        return (
          <h3 style={{ marginTop: "20px" }}>
           Your cart is empety...
          </h3>
        );
      } else {
        return (
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
                        onClick={() => this.removeQuantity(purchase)}
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
                        onClick={() => this.deleteCart(purchase.productId)}
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
                     Coffeeshop
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
        <NavbarCategory />
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