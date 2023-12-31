import React, { useEffect, useContext } from 'react';
import { RequiApi } from '../contexts/RequiApi';
import FilterInputs from './FilterIputs';
import GetApi from '../contexts/ContextApi';
import FilterForNumber from './FilterForNumber';
import '../Css/Table.css';

function Table() {
  const { api, setApi, filterText, namefiltered, setNamefiltered } = useContext(GetApi);
  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await RequiApi();
      setApi(data);
    };
    fetchPlanets();
  }, [setApi]);

  const applyFilters = (planets) => {
    if (planets) {
      const filtros = namefiltered.map((filter) => (planet) => {
        const operador = filter[1];
        const planetValue = parseFloat(planet[filter[0]]);
        const inputValue = parseFloat(filter[2]);
        if (operador === 'maior que') {
          return planetValue > inputValue;
        } if (operador === 'menor que') {
          return planetValue < inputValue;
        }
        return planetValue === inputValue;
      });
      for (let i = 0; i < filtros.length; i += 1) {
        planets = planets.filter(filtros[i]);
      }
    }

    return planets;
  };

  function b() {
    let result = api;
    if (api && api.length > 0 && filterText !== '') {
      result = api.filter((planet) => planet.name.includes(filterText));
    }
    return applyFilters(result);
  }

  const result = b();

  const handleDelete = (param) => {
    const filtered = [];
    for (let index = 0; index < namefiltered.length; index += 1) {
      if (index !== param) {
        filtered.push(namefiltered[index]);
      }
    }
    setNamefiltered(filtered);
  };

  const handerDeleteAllFilters = () => {
    setNamefiltered([]);
  };

  return (
    <section>
      <div>
        <FilterInputs />
        <FilterForNumber />
        <button
          onClick={ handerDeleteAllFilters }
          data-testid="button-remove-filters"
        >
          remover tudo

        </button>
      </div>
      {namefiltered && namefiltered.length > 0
        ? namefiltered.map((name, index) => (
          <div key={ index } data-testid="filter">
            <p>{`${name[0]} ${name[1]} ${name[2]}`}</p>
            <button
              onClick={ () => handleDelete(index) }
              data-testid="btn-excluir"
            >
              exclui

            </button>
          </div>
        ))

        : ''}
      <table className="flex">
        <tbody>
          <tr className="coluna">
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
          {result && result.map((planet, index) => (
            <tr key={ index } className="coluna">
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
