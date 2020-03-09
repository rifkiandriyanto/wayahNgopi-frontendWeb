          
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