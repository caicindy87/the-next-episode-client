import React from "react";
import api from "../services/api";

import "../style/form.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = this.state.fields;

    api.auth.createNewUser(username, password, confirmPassword).then((user) => {
      if (user.error) {
        this.setState({ error: true });
        alert(user.error);
      } else {
        this.props.handleSignup(user);
        this.props.history.push("/shows");
      }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        <h1>Create an Account</h1>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="Username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={fields.confirmPassword}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button type="submit" className="ui green button fluid">
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
