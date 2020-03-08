import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../redux/actions/category";

import { Container, Row, Col, Button, Table } from "react-bootstrap";
import CategoryAdd from "./categoryAdd";
import CategoryUpdate from "./categoryUpdate";
import CategoryDelete from "./categoryDelete";
import Navbar from "../layout/navbar";

class Category extends Component {
  state = {
    idCategory: "",

    selectCategoryUpdate: null,
    selectCategorytDelete: null,
    show: false,
    showDelete: false,
    showUpdate: false
  };

  getCategory() {
    this.props.dispatch(getCategory());
  }

  componentDidMount() {
    this.getCategory();
  }

  // Delete
  onSelectCategoryDelete = category => {
    this.setState({
      selectCategoryDelete: category,
      showDelete: true
    });
  };

  handleCloseDelete = () => {
    this.setState({
      showDelete: false
    });
  };

  handleShowDelete = category => {
    console.log(category);
    this.setState({
      showDelete: true,
      selectCategoryDelete: category
    });
  };

  // Update
  onSelectCategoryUpdate = category => {
    this.setState({
      selectCategoryUpdate: category,
      showUpdate: true
    });
  };

  handleCloseUpdate = () => {
    this.setState({
      showUpdate: false
    });
  };

  handleShowUpdate = category => {
    console.log(category);
    this.setState({
      showUpdate: true,
      selectCategoryUpdate: category
    });
  };

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
    const { categories } = this.props;
    return (
      <Container>
        <Navbar />
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col sm={10}>
            <h5>Category</h5>
          </Col>
          <Col sm={2}>
            <Button variant="outline-info" size="sm" onClick={this.onShow}>
              Add Category
            </Button>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    onClick={() => this.handleShowUpdate(category)}
                  >
                    Edit
                  </Button>
                  {"      "}
                  <Button
                    variant="outline-danger"
                    onClick={() => this.handleShowDelete(category)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <CategoryAdd
          show={this.state.show}
          onHandleClose={this.onHandleClose}
        />
        <CategoryDelete
          show={this.state.showDelete}
          onHide={this.handleCloseDelete}
          onSelectCategoryDelete={this.onSelectCategoryDelete}
          category={this.state.selectCategoryDelete}
        />
        <CategoryUpdate
          show={this.state.showUpdate}
          handleCloseUpdate={this.handleCloseUpdate}
          onSelectCategoryDelete={this.onSelectCategoryUpdate}
          category={this.state.selectCategoryUpdate}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};

export default connect(mapStateToProps)(Category);
