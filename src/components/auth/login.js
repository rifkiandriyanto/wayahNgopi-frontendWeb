import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import logo from './gayain.png';
import login from './3255317.png';
require('dotenv').config();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // alert('ok')

    axios
      .post("http://localhost:8006/user/login", this.state)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user-id', res.data.id)
        localStorage.setItem('status', res.data.status)
        localStorage.setItem('isAuth', true)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='row'>
        <div className='col-lg-6' style={{ textAlign: 'left' }}>
          <img
            style={{
              width: 1000,
              height: '100vh',
            }}
            src={login}
            alt='login'
          />
        </div>

        <div className='col-lg-6'>
          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
              boxShadow: '-3px 3px 6px 3px #ff4f5a8c',
              backgroundColor: '#a5a6a8',
              width: 500,
              marginLeft: '30%',
            }}
          >
            <img
              style={{
                width: 290,
                height: 290,
              }}
              src={logo}
              alt='Logo'
            />

            <div className='col-md-8 my-4'>
              <form>
                <div className='form-group' style={{ marginRight: '-50%' }}>
                  <label>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    name='email'
                    onChange={this.onChange}
                    required
                  />

                  <div className='form-group'>
                    <label>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Enter password'
                      name='password'
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    onClick={this.onSubmit}
                    type='submit'
                    className='btn login btn-primary'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
