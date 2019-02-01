import React, { Component } from 'react';
import './App.css';
import SearchInput from '../SearchInput/SearchInput';
import Filters from '../Filters/Filters';
import FlightsTable from '../FlightsTable/FlightsTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'departured',
      search: ''
    }
  }

  updateSearch = (newSearch) => {
    this.setState({search: newSearch});
  }

  updateFilter = (newFilter) => {
    this.setState({currentFilter: newFilter});
  }

  render() {
    return (
      <div className="container">
        <Filters updateFilter={this.updateFilter} currentFilter={this.state.currentFilter}/>
        <SearchInput updateSearch={this.updateSearch} search={this.state.search}/>
        <FlightsTable search={this.state.search} currentFilter={this.state.currentFilter}/>
      </div>
    );
  }
}

export default App;
