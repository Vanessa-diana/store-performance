import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './index';

const renderComponent = () =>{
    render(
      <Footer/>
    );
};

describe('Footer',() => {
  it('Render Footer',() => {
    renderComponent();
    expect(renderComponent).toBeTruthy();

  });
  it('Test atribute image',()=>{
    renderComponent();
    expect(screen.getByTestId('image')).toHaveAttribute('src','./images/facebook.svg');
  });

  it('Test atribute image Alt',()=>{
    renderComponent();
    expect(screen.getByTestId('image')).toHaveAttribute('alt','facebook');
  });

  it('Test text alt',()=>{
    renderComponent();
    expect(screen.getByTestId('image')).not.toHaveAttribute('alt','linkedin');
  });

});