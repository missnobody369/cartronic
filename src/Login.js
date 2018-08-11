import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onEnter = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(
        res => {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem(
            "usertype",
            JSON.stringify(res.data.user.usertype)
          );
          this.props.history.push("");
        },
        err => console.log("Error", err)
      );
  };

  render() {
    return (
      <form
        onSubmit={this.onEnter}
        style={{ margin: "100px 200px" }}
        className="text-center"
      >
        <div className="container text-white">
          <label>USERNAME:</label>
          <input
            type="username"
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            id="username"
          />
        </div>
        <div className="container text-white">
          <label>PASSWORD:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            id="password"
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />Remember Me
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
