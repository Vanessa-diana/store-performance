import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { List } from './index';

const mockData = [
  {
    name: 'Alameda Santos',
    revenue: 18000
  },
  {
    name: 'Vila Olimpia',
    revenue: 48000
  },
  {
    name: 'Itaim Bibi',
    revenue: 13000
  },
  {
    name: 'Ipiranga',
    revenue: 16000
  },

]

const renderComponent = () =>{
    render(
      <List data={mockData}/>
    );
};

describe('List',() => {
  it('Render List',() => {
    renderComponent();
    expect(renderComponent).toBeTruthy();

  });
  it('Test format billing Value',()=>{
    renderComponent();
    expect(screen.getByText('R$ 18.000,00')).toBeInTheDocument();
  });

  it('Test color red width value < 15000',()=>{
    renderComponent();
    expect(screen.getByText('R$ 13.000,00')).toHaveStyle('color:rgb(211, 47, 47)');
  });

  it('Test standard color when value >=15000',()=>{
    renderComponent();
    expect(screen.getByText('R$ 18.000,00')).toHaveStyle('color:rgba(0, 0, 0, 0.87)');
  });

});