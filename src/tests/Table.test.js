import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../componentes/Table';

afterEach(() => jest.clearAllMocks());

describe('Verificando página Table', () => {
  it('deve fazer a requisição à API e renderizar os componentes corretamente', async () => {
    

const mockApiResponse = {
  results: [
    {
      climate: 'arid',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      created: '2014-12-09T13:50:49.641000Z',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/6/',
      ],
    },
  ],
};

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockApiResponse),
  });

    render(<Table />);

expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
