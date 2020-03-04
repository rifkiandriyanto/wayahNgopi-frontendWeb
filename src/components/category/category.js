import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../redux/action/category";

import { Container, Row, Col, Button, Table } from "react-bootstrap";
import AddCategory from "./addCategory";
import EditCategory from "./editCategory";
import DeleteCategory from "./deleteCategory";
import Navbar from "../layout/navbar";

class Category extends Component {
  state = {
    idCategory: ""
  };

  getCategory() {
    this.props.dispatch(getCategory());
  }

  componentDidMount() {
    this.getCategory();
  }

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      idCategory: e.target.value
    });
  };

  render() {
    const { categorys } = this.props;
    return (
      <Container>
        <Navbar />
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <AddCategory />
          <EditCategory idCategory={this.state.idCategory} />
          <DeleteCategory idCategory={this.state.idCategory} />
          <Col sm={10}>
            <h5>Category</h5>
          </Col>
          <Col sm={2}>
            <Button
              variant="outline-info"
              size="sm"
              data-toggle="modal"
              data-target="#addCategory"
            >
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
            {categorys.map((category, index) => (
              <tr key={index}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <Button
                    onClick={this.onClickHandler}
                    data-toggle="modal"
                    data-target="#editCategory"
                    variant="outline-warning"
                    value={category.id}
                  >
                    Edit
                  </Button>
                  {'      '}
                  <Button
                    onClick={this.onClickHandler}
                    data-toggle="modal"
                    data-target="#deleteCategory"
                    variant="outline-danger"
                    value={category.id}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorys: state.categorys.categorys
  };
};

export default connect(mapStateToProps)(Category);
