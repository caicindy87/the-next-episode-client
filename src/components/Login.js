import React from "react";
import api from "../services/api";

import "../style/form.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: "",
      },
    };
  }
  // Adds new key value to the end of fields of target.name:target.value

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    api.auth
      .login(this.state.fields.username, this.state.fields.password)
      .then((currentUser) => {
        if (currentUser.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(currentUser);
          this.props.history.push("/shows");
        }
      });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        <h1>Log In</h1>
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
            <br />
            <button type="submit" className="ui  green button fluid">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
