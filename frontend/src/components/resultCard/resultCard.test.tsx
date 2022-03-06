import React from 'react';
import ResultCard from './resultCard.component';
import { mount } from 'enzyme';

describe('<ResultCard />', () => {
  it('should render uploader without error', () => {
    const wrapper = mount(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000}/>);
  
    expect(wrapper.contains(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000}/>)).toEqual(true);
  });
});