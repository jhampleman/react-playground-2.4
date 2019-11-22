import React, { Component } from "react";
import Form from "./Form";
import FormErrors from "./FormErrors";

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myFirstName: "",
      myLasttName: "",
      email: "",
      myUser: ""
    };
  }

  handleParentData = formModel => {
    console.log(formModel);

    this.setState({ ...formModel });
  };

  render() {
    return (
      <div className="formstuff">
        <Form handleData={this.handleParentData} />

        <FormErrors handleData={this.handleParentData} />
        <p>
          <span>{this.state.myFirstName}</span>{" "}
          <span>{this.state.myLastName}</span>
        </p>
        <p>{this.state.myUser}</p>
        <p>{this.state.email}</p>
      </div>
    );
  }
}
