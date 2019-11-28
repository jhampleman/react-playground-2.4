import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
const Adapter = require ('enzyme-adapter-react-16') ;
enzyme.configure({ adapter: new Adapter() });
import Form from './Form';

describe('Form', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Form />));
it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render the Form component', () => {
  expect(wrapper.containsAllMatchingElements([
        <p className="blue enztest">This is in Form.js and uses Enzyme - See Form.spec</p>
  ])).toEqual(true);
});
});
