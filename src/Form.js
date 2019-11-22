import React, { Component } from "react";
import Sessions from "./Sessions";
import { store } from './redux';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myFirstName: "",
      myLastName: ""
    };
  }

  submitForm = e => {
    e.preventDefault();

    this.props.handleData(this.state);
        console.log(store.getState());
  
  };
  
   clearCache = e => {
    e.preventDefault();
    //CLEAR local storage (cache) - uncomment line below.
    localStorage.clear();
  };


  handleNameChange = e => {
    //console.log(e.target.value);
    this.setState({
      myFirstName: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      myLastName: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p className="blue enztest">This is in Form.js and uses Enzyme - See Form.spec</p>
        <form>
          First Name:{" "}
          <input
            type="text"
            name="myFirstName"
            onChange={this.handleNameChange}
          />
          <br />
          Last Name:{" "}
          <input
            type="text"
            name="myLastName"
            onChange={this.handleEmailChange}
          />
          <br />
          <br />
          <input type="button" value="Submit" onClick={this.submitForm} />
          
          <Sessions />
          <input type="button" value="Clear Cache" onClick={this.clearCache} />
          
        </form>
      </div>
    );
  }
}
