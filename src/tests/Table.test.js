import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from '../App';
import data from './helpers/data';




describe('Verificando página Table', () => {

  it('deve fazer a requisição à API e renderizar os componentes corretamente', async () => {

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    await act(async () => {
      render(<App></App>);
    });


    const a = screen.getByTestId('button-remove-filters')
    const c = screen.getByTestId('name-filter')
    expect(a).toBeInTheDocument()
    expect(c).toBeInTheDocument()
    const b = screen.getByRole('columnheader', {
      name: /name/i
    })
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(13);
    const rowElements = screen.getAllByRole('row');
    expect(rowElements).toHaveLength(11);
    expect(b).toBeInTheDocument()

    fireEvent.change(c, { target: { value: 'Tatooine' } })
  });


});
