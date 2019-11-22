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
    <p id="myp" className="green">(This is in Button.js)</p>,
    <h3>Material UI - Test Elements Below</h3>
  ])).toEqual(true);
});
  it('should have aria label', () => {
    const ariatest = wrapper.find('#showme');
    expect(ariatest.props()).toHaveProperty('aria-label','Show and Hide the Forms');
    
  });

});