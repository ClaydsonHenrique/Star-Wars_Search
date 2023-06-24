import React, { useState, useEffect } from 'react';
import { RequiApi } from './RequiApi';

function Table() {
  const [planets, setPlanets] = useState(null);
  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await RequiApi();
      setPlanets(data);
    };

    fetchPlanets();
  }, []);
  return (
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
        {planets !== null ? (
          planets.map((planet, index) => (
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
          ))
        ) : (
          <tr>
            <td>Carregando</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
