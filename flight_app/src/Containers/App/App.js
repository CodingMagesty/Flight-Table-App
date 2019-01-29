import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import Filters from '../Filters/Filters';
import FlightsTable from '../FlightsTable/FlightsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput />
        <Filters />
        <FlightsTable />
      </div>
    );
  }
}

export default App;
