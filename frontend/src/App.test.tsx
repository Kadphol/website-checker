import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Uploader from './components/uploader/uploader.component';

describe('<App />', () => {
  test('should renders Title Website Checkers', () => {
    render(<App />);
  
    expect(screen.getByText("Website Checker")).toBeInTheDocument();
  });
  
  test('should render Uploader Components', () => {
    const wrapper = mount(<App />);
  
    expect(wrapper.containsMatchingElement(<Uploader />)).toEqual(true);
  });
});
