import React, { useContext, useState } from 'react';
import GetApi from '../contexts/ContextApi';

function FilterForNumber() {
  const { namefiltered, setNamefiltered } = useContext(GetApi);
  const [columFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberInput, setNumberInput] = useState(0);

  const handleClick = () => {
    const newArray = [columFilter, comparisonFilter, numberInput];
    setNamefiltered([...namefiltered, newArray]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ numberInput }
        data-testid="value-filter"
        onChange={ ({ target }) => setNumberInput(target.value) }
      />
      <button data-testid="button-filter" onClick={ handleClick }>filtro</button>
    </div>
  );
}
export default FilterForNumber;
