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
  it('verificando se ao ser filtrado a tabela renderiza corretamente', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    await act(async () => {
      render(<App></App>);
    });

    const a = screen.getByTestId('column-filter')
    const b = screen.getByTestId('comparison-filter')
    const d = screen.getByTestId('value-filter')
    expect(a).toBeInTheDocument()
    fireEvent.change(a, { target: { value: 'rotation_period' } });
    fireEvent.change(b, { target: { value: 'igual a' } });
    fireEvent.change(d, { target: { value: '18' } });
    expect(a.value).toBe('rotation_period');
    expect(b.value).toBe('igual a');
    expect(d.value).toBe('18');
    const c = screen.getByTestId('button-filter')
    fireEvent.click(c)
    const container = screen.getAllByTestId("filter")

    await waitFor(() => {
      const name = screen.getByRole('cell', {
        name: /endor/i
      })
      expect(name).toBeInTheDocument()
      const linhas = screen.getAllByRole('row');
      expect(linhas.length).toBe(2);

      console.log(container)
      expect(container.length).toBe(1)
    })
    const btn = screen.getByTestId('btn-excluir')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn);
    const linhas = screen.getAllByRole('row');
    expect(linhas.length).toBe(11);

  })

  it('verificande se btn de remover todos os filtros funciona corretamente', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    await act(async () => {
      render(<App></App>);
    });

    const a = screen.getByTestId('column-filter')
    const b = screen.getByTestId('comparison-filter')
    const d = screen.getByTestId('value-filter')
    expect(a).toBeInTheDocument()
    fireEvent.change(a, { target: { value: 'rotation_period' } });
    fireEvent.change(b, { target: { value: 'igual a' } });
    fireEvent.change(d, { target: { value: '23' } });
    const c = screen.getByTestId('button-filter')
    fireEvent.click(c)

    fireEvent.change(a, { target: { value: 'population' } });
    fireEvent.change(b, { target: { value: 'maior que' } });
    fireEvent.change(d, { target: { value: '210' } });
    fireEvent.click(c)

    const linhas = screen.getAllByRole('row');
    expect(linhas.length).toBe(2);

    const deleteAll = screen.getByTestId('button-remove-filters')

    fireEvent.click(deleteAll)


    await waitFor(() => {
      const linhasAtualizadas = screen.getAllByRole('row');
      expect(linhasAtualizadas.length).toBe(11);
    });
  })
  it('verificando se filtrar mais de uma vez o filtro ocorre corretamente , e ao apagar retorna pro filtro anterior', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    await act(async () => {
      render(<App></App>);
    });


    const a = screen.getByTestId('column-filter')
    const b = screen.getByTestId('comparison-filter')
    const d = screen.getByTestId('value-filter')
    expect(a).toBeInTheDocument()
    fireEvent.change(a, { target: { value: 'rotation_period' } });
    fireEvent.change(b, { target: { value: 'igual a' } });
    fireEvent.change(d, { target: { value: '23' } });
    const c = screen.getByTestId('button-filter')
    fireEvent.click(c)

    fireEvent.change(a, { target: { value: 'population' } });
    fireEvent.change(b, { target: { value: 'maior que' } });
    fireEvent.change(d, { target: { value: '210' } });
    fireEvent.click(c)

    await waitFor(() => {
      const linhas = screen.getAllByRole('row');
      expect(linhas.length).toBe(2);
    });
    const allbtnDelete = screen.getAllByTestId('btn-excluir')
    expect(allbtnDelete.length).toBe(2)

    fireEvent.click(allbtnDelete[0])
    const btn = screen.getAllByTestId('btn-excluir')
    expect(btn.length).toBe(1)

    await waitFor(() => {
      const linhas = screen.getAllByRole('row');
      expect(linhas.length).toBe(9);
    });
  })
});
