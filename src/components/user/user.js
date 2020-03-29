import React, { Component } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import UserItem from './userItem';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/user';
import UserAdd from './userAdd';
import UserDelete from './userDelete';
import UserEdit from './userEdit';
import Navbar from '../layout/navbar';

class User extends Component {
  state = {
    show: false,
    showEdit: false,
    showDelete: false,
    selectUser: null,
    selectUserDelete: null,
  };
  componentDidMount() {
    this.getAllUser();
  }

  getAllUser = async () => {
    await this.props.dispatch(getUser());
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShowEdit = () => {
    this.setState({
      showEdit: true,
    });
  };

  handleCloseEdit = () => {
    this.setState({
      showEdit: false,
    });
  };
  handleShowDelete = () => {
    this.setState({
      showDelete: true,
    });
  };

  handleCloseDelete = () => {
    this.setState({
      showDelete: false,
    });
  };
  onSelectItemUserEdit = user => {
    this.setState({
      selectUser: user,
      showEdit: true,
    });
  };
  onSelectUserDelete = user => {
    this.setState({
      selectUserDelete: user,
      showDelete: true,
    });
  };
  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('name');
    this.props.history.push('/login');
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    const itemUser = user.user.map((user, index) => (
      <UserItem
        user={user}
        key={index}
        onSelectItemUserEdit={this.onSelectItemUserEdit}
        onSelectUserDelete={this.onSelectUserDelete}
      />
    ));

    return (
      <Row style={{ backgroundColor: '#ebebeb', height: '100vh' }}>
        <Navbar onClick={this.onLogout.bind(this)} />
        <Container style={{ marginTop: '5%', paddingTop: '2%' }}>
          <div
            class='card'
            style={{ padding: 10, boxShadow: '10px 5px 10px #2222228c' }}
          >
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={10}>
                <h5>Manage users</h5>
              </Col>
              <Col sm={2}>
                <Button
                  type='button'
                  className=' btn btn-primary btn-outline-light'
                  data-toggle='modal'
                  data-target='#exampleModal'
                  style={{ backgroundColor: '#f1a98c', border: 'transparent' }}
                  onClick={this.handleShow}
                >
                  Add User
                </Button>
              </Col>
            </Row>
            <Table>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Role Id</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>{itemUser}</tbody>
            </Table>
            <UserAdd show={this.state.show} onHide={this.handleClose} />
            <UserEdit
              show={this.state.showEdit}
              onHide={this.handleCloseEdit}
              user={this.state.selectUser}
            />
            <UserDelete
              show={this.state.showDelete}
              onHide={this.handleCloseDelete}
              user={this.state.selectUserDelete}
            />
          </div>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(User);
