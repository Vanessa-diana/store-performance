import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Map } from './index';

const mockData = [
  {
    name: 'Alameda Santos',
    revenue: 18000,
    latitude: -23.57,
    longitude:-46.67
  },
  {
    name: 'Vila Olimpia',
    revenue: 48000,
    latitude: -22.57,
    longitude:-56.67
  },
  {
    name: 'Itaim Bibi',
    revenue: 13000,
    latitude: -21.57,
    longitude:-45.67
  },
  {
    name: 'Ipiranga',
    revenue: 16000,
    latitude: -63.57,
    longitude:-36.67
  },

]

const renderComponent = () =>{
    render(
     <Map data={mockData}/>
    );
};

describe('Map',() => {
  it('Render Map',() => {
    renderComponent();
    expect(renderComponent).toBeTruthy();
  });

});