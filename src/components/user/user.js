import React, { Component } from "react";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import UserItem from "./userItem";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/user";
import UserAdd from "./userAdd";
import UserDelete from "./userDelete";
import UserEdit from "./userEdit";
import Navbar from "../layout/navbar";

class User extends Component {
  state = {
    show: false,
    showEdit: false,
    showDelete: false,
    selectUser: null,
    selectUserDelete: null
  };

  componentDidMount() {
    this.getAllUser();
  }

  getAllUser() {
     this.props.dispatch(getUser());
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };
  
  handleShowEdit = (user) => {
    this.setState({
      selectUser: user,
      showEdit: true
    });
  };

  handleCloseEdit = () => {
    this.setState({
      showEdit: false
    });
  };
  handleShowDelete = (user) => {
    this.setState({
      selectUserDelete: user,
      showDelete: true
    });
  };

  handleCloseDelete = () => {
    this.setState({
      showDelete: false
    });
  };
  onSelectItemUserEdit = user => {
    this.setState({
      selectUser: user,
      showEdit: true
    });
  };
  onSelectUserDelete = user => {
    this.setState({
      selectUserDelete: user,
      showDelete: true
    });
  };
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <Container>
        <Navbar />
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col sm={10}>
            <h5>User</h5>
          </Col>
          <Col sm={2}>
            <Button
              variant="outline-info"
              data-toggle="modal"
              data-target="#exampleModal"
              size="sm"
              onClick={this.handleShow}
            >
              Add User
            </Button>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    onClick={() => this.handleShowEdit(user)}
                  >
                    Edit User
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => this.handleShowDelete(user)}
                  >
                    Delete User
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        

        <UserAdd show={this.state.show} onHide={this.handleClose} />
        <UserEdit
          show={this.state.showEdit}
          onHide={this.handleCloseEdit}
          onSelectItemUserEdit={this.onSelectItemUserEdit}
          user={this.state.selectUser}
        />
        <UserDelete
          show={this.state.showDelete}
          onHide={this.handleCloseDelete}
          onSelectUserDelete={this.onSelectUserDelete}
          user={this.state.selectUserDelete}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(User);
