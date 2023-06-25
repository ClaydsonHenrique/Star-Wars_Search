import React, { useContext } from 'react';
import GetApi from '../contexts/ContextApi';

function FilterInputs() {
  const { filterText, setFilter } = useContext(GetApi);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="inputText"
        value={ filterText }
        onChange={ ({ target }) => setFilter(target.value) }
      />
    </div>

  );
}
export default FilterInputs;
