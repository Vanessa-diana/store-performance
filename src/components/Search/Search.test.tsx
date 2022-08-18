import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Search } from './index';

const mockFunction = jest.fn();

const renderComponent = (
  information:string,
  label:string,
  value:string,
  onChange: (e:string)=>void
  ) =>{
    render(
      <Search 
        onChange={onChange}
        type='text' 
        information={information}
        label={label}
        value={value}
      />
    );
};

describe('Search',() => {
  it('Render Search',() => {
    renderComponent(
      'Busque sua loja pelo faturamento',
      'Faturamento mínimo esperado',
      '19000',
      mockFunction()
    );
    expect(renderComponent).toBeTruthy();

  });
  it('Test prop information',() => {
    renderComponent(
      'Busque sua loja pelo nome',
      'nome da loja',
      'alameda',
      mockFunction()
    );
    expect(screen.getByText('Busque sua loja pelo nome')).toBeInTheDocument();
  });

  it('Test event onChange',() => {
    renderComponent(
      'Busque sua loja pelo nome',
      'nome da loja',
      'alameda',
      mockFunction()
    );
    expect(mockFunction).toHaveBeenCalled();

  });

});