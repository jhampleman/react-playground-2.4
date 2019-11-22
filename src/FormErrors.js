import React, { Component } from "react";

export default class FormErrors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myUser: "",
      email: ""
    };
  }

  submitForm = e => {
    e.preventDefault();

    this.props.handleData(this.state);
  };

  handleNameChange = e => {
    console.log(e.target.value);
    this.setState({
      myUser: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  validateEntry = (email, myUser) => {
    // true means invalid, so our conditions got reversed
    return {
      email: email.length === 0,
      myUser: myUser.length === 0
    };
  };

  render() {
    const { email } = this.state;
    const isEnabled = email.length > 0;
    return (
      <div>
        <p className="orange">This is in FormErrors.js</p>
        <form>
          User:{" "}
          <input type="text" name="myUser" onChange={this.handleNameChange} />
          <br />
          Email*:{" "}
          <input type="text" name="myEmail" onChange={this.handleEmailChange} />
          <br />
          <br />
          <input
            type="button"
            disabled={!isEnabled}
            value="Submit"
            onClick={this.submitForm}
          />
        </form>
      </div>
    );
  }
}
