import React, { Component } from 'react';
import './App.css';
import SearchInput from '../SearchInput/SearchInput';
import Filters from '../Filters/Filters';
import FlightsTable from '../FlightsTable/FlightsTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentFilter: 'arrived',
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
        <Filters updateFilter={this.updateFilter}/>
        <SearchInput updateSearch={this.updateSearch} search={this.state.search}/>
        <FlightsTable search={this.state.search}/>
      </div>
    );
  }
}

export default App;
