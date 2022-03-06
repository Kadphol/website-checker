import React from 'react';
import ResultCard from './resultCard.component';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';

describe('<ResultCard />', () => {
  it('should render result card without error', () => {
    const wrapper = mount(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000}/>);
  
    expect(wrapper.contains(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000}/>)).toEqual(true);
  });

  it('should render number of websites', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000}/>);

    expect(screen.getByText(/10/)).toBeInTheDocument();
  });

  it('should render time used (seconds only)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={3200}/>);

    expect(screen.getByText(/3.200 second/)).toBeInTheDocument();
  });

  it('should render time used (minutes only)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60}/>);

    expect(screen.getByText(/1 minute/)).toBeInTheDocument();
  });

  it('should render time used (hour only)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60*60}/>);

    expect(screen.getByText(/1 hour/)).toBeInTheDocument();
  });

  it('should render time used (seconds and minutes)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60*3 + 3211}/>);

    expect(screen.getByText(/3 minute and 3.211 second/)).toBeInTheDocument();
  });

  it('should render time used (hours and minutes)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60*60 + 1000*60*3}/>);

    expect(screen.getByText(/1 hour and 3 minute/)).toBeInTheDocument();
  });

  it('should render time used (hours and seconds)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60*60 + 10831}/>);

    expect(screen.getByText(/1 hour and 10.831 second/)).toBeInTheDocument();
  });

  it('should render time used (all)', () => {
    render(<ResultCard count={10} upCount={7} downCount={3} timeUsed={1000*60*60 + 1000*60 + 3200}/>);

    expect(screen.getByText(/1 hour and 1 minute and 3.200 second/)).toBeInTheDocument();
  });
});