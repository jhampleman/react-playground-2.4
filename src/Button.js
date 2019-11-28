import React, { Component } from "react";
import Results from "./Results";
import Button from '@material-ui/core/Button';

import { store } from './redux';

export default class ButtonUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
    console.log(store.getState());
  };

  render() {
    const myform = <Results />;


    return (
      <div className="formstuff">
        <Userform myform={myform} isShow={this.state.isShow} />
        <p>&nbsp;</p>
        <Button id="showme" variant="contained" color="primary" onClick={this.toggleShow} type="button" aria-label="Show and Hide the Form">
          Show/Hide Form
        </Button>
        <p id="myp" className="green">(This is in Button.js)</p>
        <div>

      <div>
      <Button variant="contained" className="tbd">
        Basic Button
      </Button>
      </div>
      </div>
      </div>
    );
  }
}

const Userform = ({ myform, isShow }) => (isShow ? <div>{myform}</div> : null);

//export default ButtonUI;
