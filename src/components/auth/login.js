import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "./Icon.png";
import loginImage from "./3255317.png";
import { login } from "../redux/actions/auth";
require("dotenv").config();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
     this.props.dispatch(login(data));
     this.props.history.push("/");
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-6" style={{ textAlign: "left", marginTop: 0 }}>
          <img
            style={{
              marginTop: 0,
              width: 800,
              height: 700,
            }}
            src={loginImage}
            alt="loginImage"
          />
        </div>

        <div className="col-lg-6">
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              boxShadow: "-3px 3px 6px 3px #ff4f5a8c",
              backgroundColor: "#fff",
              width: 500,
              marginLeft: "30%",
            }}
          >
            <img
              style={{
                width: 250,
                height: 250,
              }}
              src={logo}
              alt="Logo"
            />

            <div className="col-md-8 my-4">
              <form>
                <div className="form-group" style={{ marginRight: "-50%" }}>
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.onChange}
                    required
                  />

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
                  <button
                    onClick={this.onSubmit}
                    type="submit"
                    className="btn login btn-primary"
                  >
                    Login
                  </button>

                  <div className="form-group">
                    <label>Sign up for WayahNgopi</label> {"\n"}
                    <Link to={"/register"}>Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);
