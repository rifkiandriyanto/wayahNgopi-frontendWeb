import React, { Component } from "react";
import axios from "axios";

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
      <div className="container">
        <h4 style={{ marginTop: "10px" }}>Login</h4>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
