import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../layout/navbar";
import uniqid from "uniqid";
import {
  checkout,
  manipulateItem,
  deleteCart
} from "../redux/actions/cart";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashier: localStorage.getItem("user-id"),
      tPrice: 0,
      changeDue: 0,
      pay: "-",
      isDisabled: true
    };
  }
  payment = e => {
    this.setState({
      pay: e.target.value
    });
    if (e.target.value >= this.state.tPrice) {
      this.setState({
        isDisabled: false,
        changeDue: e.target.value - this.state.tPrice
      });
    } else {
      this.setState({ isDisabled: true, changeDue: 0 });
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

  countTotal = () => {
    var total = 0;
    this.props.productsInCart.map(e => {
      total += e.price * e.quantity;
    });
    this.setState({
      tPrice: total
    });
  };

  purchaseHandler = () => {
    const data = {
      idTransaction: `${uniqid()}`,
      products: this.props.productsInCart
    };
    this.props.dispatch(checkout(data));
    
  };
  
  render() {
    const CheckoutButton = () => {
      if (this.state.isDisabled === true) {
        return (
          <button
            disabled={this.state.isDisabled}
            className="btn btn-info mt-3"
            style={{ cursor: "not-allowed" }}
          >
            Checkout
          </button>
        );
      } else {
        return (
          <button
            onClick={this.purchaseHandler}
            className="btn btn-info mt-3"
            data-dismiss="modal"
          >
            Checkout
          </button>
        );
      }
    };

    const PriceParsed = data => {
      return (
        <span>
          {data.data
            .toString()
            .split("")
            .reverse()
            .join("")
            .match(/\d{1,3}/g)
            .join(".")
            .split("")
            .reverse()
            .join("")}
        </span>
            
      );
    };

    const ViewCart = () => {
      if (this.props.productsInCart.length < 1) {
        return (
          <div className="col-6 mt-2">
            <h3 className="mt-3">Your Cart is Empety</h3>
          </div>
        );
      } else {
        return (
          <div
            className="col-6"
            style={{paddingBottom: "40px" }}
          >
            {this.props.productsInCart.map(cartItem => (
              <li
                className="list-group-item"
                style={{ padding: "0", border: "none" }}
                key={cartItem.productId}
              >
                <div className="media" style={{ textAlign: "left" }}>
                  <img
                    style={{
                      width: "64px",
                      height: "60px",
                      borderRadius: "8px"
                    }}
                    src={cartItem.image}
                    className="mr-3"
                    alt="..."
                  />

                  <div className="media-body">
                    <h6 className="mt-0 cartName">{cartItem.name}</h6>
                    <span style={{ position: "relative", top: "-6px" }}>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.removeQuantity(cartItem)}
                      >
                        -
                      </button>

                      <button className="btn cartStock">
                        {cartItem.quantity}
                      </button>

                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.addQuantity(cartItem)}
                      >
                        +
                      </button>
                      <span
                        id={cartItem.price}
                        style={{ float: "right" }}
                        className="cartPrice"
                      >
                        Rp.{" "}
                        <PriceParsed
                          data={cartItem.price * cartItem.quantity}
                        />
                      </span>
                      <i
                        className="material-icons medium"
                        style={{
                          position: "relative",
                          left: "90px",
                          cursor: "pointer",
                          color: "grey"
                        }}
                        onClick={() => this.deleteCart(cartItem.productId)}
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
              onClick={this.countTotal}
            >
              Payment
            </button>
          </div>
        );
      }
    };
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row justify-content-md-center mt-4">
            <ViewCart />
            <div className="col-3"></div>
          </div>
          <div className="col-4 cool"></div>
        </div>
        <div
          className="modal fade"
          id="purchase-detail"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Receipt
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
                  <p>Cashier ID: {this.state.cashier}</p>
                  {this.props.productsInCart.map((product, index) => (
                    <div className="row" key={index}>
                      <div className="col-md-4">{product.name}</div>
                      <div className="col-md-4">
                        Rp. <PriceParsed data={product.price} />
                      </div>
                      <div className="col-md-2">x{product.quantity}</div>
                    </div>
                  ))}
                  <p className="mt-4">
                    Total : Rp. <PriceParsed data={this.state.tPrice} />
                  </p>
                  <div className="mt-1">
                    Payment: Rp.{" "}
                    <input
                      type="number"
                      style={{
                        border: "none",
                        borderBottom: "1px solid #5bc0de"
                      }}
                      onChange={this.payment}
                      value={this.state.pay}
                    ></input>
                  </div>
                  <div className="mt-2">
                    Change Due: Rp. <PriceParsed data={this.state.changeDue} />
                  </div>
                  <CheckoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          title="receipt"
          id="printing-frame"
          name="print_frame"
          src="about:blank"
          style={{ display: "none" }}
        ></iframe>
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
