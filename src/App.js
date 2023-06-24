import React, { useState } from 'react';
import './App.css';
import Table from './componentes/Table';
import GetApi from './contexts/ContextApi';

function App() {
  const [api, setApi] = useState(null);
  const [filterText, setFilter] = useState('');
  const [filterNumber, setFilterNumber] = useState('');
  return (
    <GetApi.Provider
      value={
        { api, setApi, filterText, setFilter, filterNumber, setFilterNumber }
      }
    >
      <Table />
    </GetApi.Provider>
  );
}

export default App;
