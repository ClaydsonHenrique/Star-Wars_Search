import React, { useContext, useState, useEffect } from 'react';
import GetApi from '../contexts/ContextApi';

function FilterForNumber() {
  const { namefiltered, setNamefiltered } = useContext(GetApi);
  const [columFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberInput, setNumberInput] = useState(0);
  const [s, setoption] = useState([]);
  const [click, setclick] = useState(0);

  useEffect(() => {
    const filteredOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ].filter((option) => !namefiltered.some((name) => name[0] === option));

    if (filteredOptions.length > 0 && !filteredOptions.includes(columFilter)) {
      setColumnFilter(filteredOptions[0]);
      setoption(filteredOptions);
    }
  }, [namefiltered, columFilter]);
  const handleClick = () => {
    const newArray = [columFilter, comparisonFilter, numberInput];
    setNamefiltered([...namefiltered, newArray]);
    setColumnFilter('');
    setNumberInput(0);
    setclick(click + 1);
  };
  console.log(columFilter);
  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        {s.map((option) => (
          <option key={ option } value={ option }>
            {click < 5 ? option : ''}
          </option>
        ))}
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
      <button data-testid="button-filter" onClick={ handleClick }>
        filtro
      </button>
    </div>
  );
}

export default FilterForNumber;
