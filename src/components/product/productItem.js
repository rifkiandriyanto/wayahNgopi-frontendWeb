import React, { Component } from "react";
import { connect } from "react-redux";
import { postCart } from "../redux/actions/cart";

class productItem extends Component {
  addToCart = e => {
    var a;
    this.props.productsInCart.map(product => {
      if (parseInt(product.productId) === parseInt(e.id)) {
        a = 0;
        return alert("Alredy in cart");
      }
      return product;
    });

    if (a !== 0) {
      const data = {
        name: e.name,
        image: e.image,
        productId: e.id,
        price: e.price,
        stock: e.stock,
        quantity: 1
      };
      this.props.dispatch(postCart(data));
    }
  };
  render() {
    const PriceParsed = (data)=>{
      return(
      <span>{data.data.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')}</span>
      )
    }
     
        return (
          <div className="col-md-6 col-lg-4">
            <div
              className="card"
              style={{
                width: "22rem",
                border: "none",
                background: "transparent"
              }}
            >
              <img
                alt="card img cap"
                height="200"
                width="200"
                style={{
                  borderRadius: "10px 10px",
                  boxShadow: "-3px 3px 6px 3px rgba(247, 166, 166)"
                }}
                className="card-img-top"
                alt=""
                src={this.props.product.image}
              />
              <div className="card-body">
                <div style={{ float: "left", marginLeft: "-10px" }}>
                  <p style={{ marginTop: "-15px" }} className="card-text">{this.props.product.name}</p>
                  <h6  style={{ marginTop: "-15px", fontWeight: "bolder" }} className="card-title">Rp. {this.props.product.price}</h6>
                </div>

                <button
                style={{ float: "right", marginRight: "12px"  }}
                  onClick={() => this.addToCart(this.props.product)}
                  className="btn btn-outline-info btn-sm"
                > Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
       
      
    };
   
}

const mapStateToProps = state => {
  return {
    productsInCart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(productItem);
