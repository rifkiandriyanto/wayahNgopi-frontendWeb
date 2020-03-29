import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postUser } from '../redux/actions/user';

class UserAdd extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    alamat: '',
    provinsi: '',
    kota: '',
    status: '',
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(postUser(this.state));
    await this.props.onHide();
  };
  render() {
    const { show, onHide } = this.props;
    return (
      <Modal show={show} onHide={onHide} variant='lg'>
        <Modal.Header>
          <p>Add User</p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Nama</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Name'
                name='name'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter Email'
                name='email'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Username</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Username'
                name='username'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter Password'
                name='password'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Alamat</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Address'
                name='alamat'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Provinsi</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Province'
                name='provinsi'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Kota</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter City'
                name='kota'
                onChange={this.onChange}
                required
              />
            </div>
            <div className='form-group'>
            <label>Status</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Status'
                name='status'
                onChange={this.onChange}
                required
              />
            </div>

            <button
              onClick={this.onSubmit}
              type='submit'
              className='btn btn-primary'
              style={{backgroundColor:'#f1a98c', border: 'transparent'}}
            >
              ADD
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect()(UserAdd);
