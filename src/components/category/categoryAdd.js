import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { postCategory } from "../redux/action/category";
class CategoryAdd extends Component {
  state = {
    name: ""
  };

  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const data = {
        name: this.state.name
    }
  
    this.props.dispatch(postCategory(data));
    this.props.onHandleClose();
    console.log(this.state)
  };

  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmitHandler}>
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


export default connect()(CategoryAdd);

