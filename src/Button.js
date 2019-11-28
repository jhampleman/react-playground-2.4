import React, { Component } from "react";
import Results from "./Results";
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
        <div className="materialUI">
        <h3>Material UI - Test Elements Below</h3>
        <FormControl component="fieldset" className="tbd">
        <FormLabel component="legend">Radio Buttons Material-UI Default</FormLabel>
        <RadioGroup aria-label="approve" name="approval1" value="choice" onChange="">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio checked="no" />} label="No (Selected)" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
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
