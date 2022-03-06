import React from 'react';
import { screen, render } from '@testing-library/react';
import UploadCard from './uploadCard.component';
import { mount, shallow } from 'enzyme';

let wrapper: { contains: (arg0: JSX.Element) => any; };

describe('<UploadCard />', () => {
  beforeEach(() => {
    wrapper = mount(<UploadCard progress={10} fileName={"somefile.csv"}/>);
  })
  it('should render uploader without error', () => {

    expect(wrapper.contains(<UploadCard progress={10} fileName={"somefile.csv"}/>)).toEqual(true);
  });

  it('should render upload filename', () => {
    render(<UploadCard progress={10} fileName={"somefile.csv"}/>);

    expect(screen.getByText(/somefile.csv/)).toBeInTheDocument();
  });

  it('should render upload percentage', () => {
    render(<UploadCard progress={10} fileName={"somefile.csv"}/>);

    expect(screen.getByText(/10%/)).toBeInTheDocument();
  })
});