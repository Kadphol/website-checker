import React from 'react';
import UploadCard from './uploadCard.component';
import { mount } from 'enzyme';

describe('<UploadCard />', () => {
  it('should render uploader without error', () => {
    const wrapper = mount(<UploadCard progress={10} fileName={"somefile.csv"}/>);
  
    expect(wrapper.contains(<UploadCard progress={10} fileName={"somefile.csv"}/>)).toEqual(true);
  });
});