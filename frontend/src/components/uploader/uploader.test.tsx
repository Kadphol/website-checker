import React from 'react';
import Uploader from './uploader.component';
import { mount } from 'enzyme';

let wrapper: { contains: (arg0: JSX.Element) => any; };
describe('<Uploader />', () => {
  beforeEach(() => {
    wrapper = mount(<Uploader />);
  });

  it('should render uploader without error', () => {
    expect(wrapper.contains(<Uploader />)).toEqual(true);
  });
});