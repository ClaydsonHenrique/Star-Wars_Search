import React, { useEffect, useContext } from 'react';
import { RequiApi } from '../contexts/RequiApi';
import FilterInputs from './FilterIputs';
import GetApi from '../contexts/ContextApi';
import FilterForNumber from './FilterForNumber';
import '../Css/Table.css';

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
          { result && result.map((planet, index) => (
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
