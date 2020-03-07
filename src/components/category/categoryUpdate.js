import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { updateCategory} from "../redux/actions/category";

class CategoryUpdate extends Component {
  state = {
    name: ""
  };

onSetValue = (category) => {
    this.setState({
        name: category.name
    })
}

onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

componentWillReceiveProps({ category }) {
    this.onSetValue(category);
}

  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (e) => {
        e.preventDefault();
        const id = this.props.category.id;
        const data = {
          name: this.state.name
      }
            await this.props.dispatch(updateCategory(id, data));
            await this.props.handleCloseUpdate();
    }
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title> Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                placeholder="Enter name"
                name="name"
                onChange={this.onChangeValue}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect()(CategoryUpdate);
