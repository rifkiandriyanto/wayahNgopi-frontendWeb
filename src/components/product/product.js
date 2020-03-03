import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getProducts } from "../redux/action/product";

import ProductAdd from "./productAdd";
import ProductDelete from "./productDelete";

class Product extends Component {
  state = {
    show: false,
    showDelete: false,

    selectProductDelete: null,

    totalPages: [],
    activePage: 1,
    limit: 6,
    activeCategory: ""
  };

  getProducts = () => {
    this.props.dispatch(getProducts(this.state.limit, this.state.activePage));
  };

  // getProducts = () => {
  //   this.props.dispatch(getProducts(this.state.limit, this.state.activePage))
  // };

  handleShow = id => {
    console.log(id);
    this.setState({
      id: id,
      show: true
    });
  };

  onSelectProductDelete = (product) => {
    this.setState({
        selectProductDelete: product,
        showDelete: true
    })
}
  
  handleCloseDelete = () => {
    this.setState({
      showDelete: false
    });
  };

  handleShowDelete = (product) => {
    console.log(product)
    this.setState({
      showDelete: true,
      selectProductDelete: product
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  onShow = e => {
    this.setState({
      show: true
    });
  };

  onHandleClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Row style={{ marginTop: "20px", marginButtom: "20px" }}>
          <Col sm={10}>
            <h4>Product</h4>
          </Col>
          <Col sm={2}>
            <Button variant="primary" size="sm" onClick={this.onShow}>
              Add Product
            </Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category_name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <td>
                    <Button variant="warning">Edit</Button>||
                    <Button
                      variant="danger"
                      onClick={() => this.handleShowDelete(product)}
                    >
                      Delete
                    </Button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ProductAdd show={this.state.show} onHandleClose={this.onHandleClose} />
        <ProductDelete show={this.state.showDelete} onHide={this.handleCloseDelete} onSelectProductDelete={this.onSelectProductDelete}  product={this.state.selectProductDelete} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps)(Product);
