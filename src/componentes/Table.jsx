import React, { useEffect, useContext } from 'react';
import { RequiApi } from '../contexts/RequiApi';
import FilterInputs from './FilterIputs';
import GetApi from '../contexts/ContextApi';
import FilterForNumber from './FilterForNumber';

function Table() {
  const { api, setApi, filterText, filterNumber, namefiltered } = useContext(GetApi);
  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await RequiApi();
      setApi(data);
    };
    fetchPlanets();
  }, [setApi]);

  const b = () => {
    if (api !== null && filterText !== '' && filterNumber === '') {
      return api.filter((planet) => planet.name.includes(filterText));
    } if (api !== null && filterText === '' && filterNumber !== '') {
      return filterNumber;
    }
    return api;
  };

  const result = b();
  return (
    <section>
      <div>
        <FilterInputs />
        <FilterForNumber />
      </div>
      {namefiltered.length > 0
        ? namefiltered.map((name, index) => (
          <div key={ index }>
            <p>{`${name[0]} ${name[1]} ${name[2]}`}</p>
            <button>excluit</button>
          </div>
        ))

        : ''}
      <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>rotation_period</td>
            <td>orbital_period</td>
            <td>diameter</td>
            <td>climate</td>
            <td>gravity</td>
            <td>terrain</td>
            <td>surface_water</td>
            <td>population</td>
            <td>films</td>
            <td>created</td>
            <td>edited</td>
            <td>url</td>
          </tr>
          { result && result.map((planet, index) => (
            <tr key={ index }>
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
