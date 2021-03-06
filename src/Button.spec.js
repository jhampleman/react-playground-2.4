import React from 'react';
import { shallow } from 'enzyme';
import ButtonUI from './Button';

describe('ButtonUI', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ButtonUI />));
it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render 1 RadioGroup', () => {
    expect(wrapper.find('RadioGroup').length).toEqual(1);
  });
  it('should render an H3 headline', () => {
  expect(wrapper.containsAllMatchingElements([
    <p id="myp" className="green2">(This is in Button.js)</p>,
    <h3>Material UI - Test Elements Below</h3>
  ])).toEqual(true);
});
  

});