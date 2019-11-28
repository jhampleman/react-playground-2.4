import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
const Adapter = require ('enzyme-adapter-react-16') ;
enzyme.configure({ adapter: new Adapter() });
import ButtonUI from './Button';

describe('ButtonUI', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ButtonUI />));
it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render a Green class', () => {
  expect(wrapper.containsAllMatchingElements([
    <p id="myp" className="green">(This is in Button.js)</p>,

  ])).toEqual(true);
});


});
