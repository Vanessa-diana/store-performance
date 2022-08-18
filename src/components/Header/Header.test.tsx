import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

const renderComponent = () =>{
    render(
      <Header/>
    );
};

describe('Footer',() => {
  it('Render Header',() => {
    renderComponent();
    expect(renderComponent).toBeTruthy();

  });
  it('Test atribute image',()=>{
    renderComponent();
    expect(screen.getByTestId('logo')).toHaveAttribute('src','./images/logo.svg');
  });

  it('Test atribute image Alt',()=>{
    renderComponent();
    expect(screen.getByTestId('logo')).toHaveAttribute('alt','logo');
  });

  it('Test text in Header',()=>{
    renderComponent();
    expect(screen.getByText('Desempenho das Lojas')).toBeInTheDocument();
  });

});