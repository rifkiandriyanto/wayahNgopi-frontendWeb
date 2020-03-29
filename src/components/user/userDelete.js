import React from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteUser } from "../redux/actions/user";
const UserDelete = props => {
  const { user, show, onHide, dispatch } = props;

  const onCancelHandle = e => {
    e.preventDefault();
    onHide();
  };

  const onDeleteHandle = async e => {
    e.preventDefault();

    await dispatch(deleteUser(user.id));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} variant="lg">
      <Modal.Header>
        <p>Do you really want to delete User {user ? user.name : ""} ?</p>
      </Modal.Header>
      <Modal.Body>
        <Button
          variant="primary"
          size="sm"
          onClick={onCancelHandle}
          style={{ marginRight: "10px" }}
          style={{backgroundColor:'#f1a98c', border: 'transparent'}}
        >
          Cancel
        </Button>
        <Button variant="danger" size="sm" onClick={onDeleteHandle} style={{backgroundColor:'#a5a6a8', border: 'transparent', marginLeft: '5px'}}>
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default connect()(UserDelete);
