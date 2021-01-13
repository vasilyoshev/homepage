import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.password} ${this.state.email}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            minlength="8"
            onChange={this.handlePasswordChange}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleEmailChange}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
