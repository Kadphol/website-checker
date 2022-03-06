import React from 'react';
import Uploader from './uploader.component';
import { mount } from 'enzyme';

describe('<Uploader />', () => {
  it('should render uploader without error', () => {
    const wrapper = mount(<Uploader />);
  
    expect(wrapper.contains(<Uploader />)).toEqual(true);
  });
});