import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailHistory } from "../redux/actions/history";

class Purchasedetail extends Component {
  state = {
    id: 0
  };

  componentWillReceiveProps({ id }) {
    this.getDetail(id);
    this.setState({ id: id });
  }

  getDetail = id => {
    this.props.dispatch(getDetailHistory(id));
  };

  render() {
    return (
        <div className="modal fade" id="purchase-detail" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalScrollableTitle">WayahNgopi</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>#ID Purchase: {this.state.id}</p>
                    {this.props.detailHistory.map((e, index) =>
                        <div className="row" key={index}>
                            <div className="col-md-4">{e.name}</div>
                            <div className="col-md-4">{e.Qty}</div>
                            <div className="col-md-4">Rp. {e.price}</div>
                        </div>
                    )}
                    <button className="btn btn-info mt-3" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

const mapDetailHistory = (state) => {
    return {
        detailHistory: state.histories.detailHistory
    }

}

export default connect (mapDetailHistory)(Purchasedetail)
