import React, { Component } from 'react';
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
      <div className="App">
        <SearchInput updateSearch={this.updateSearch}/>
        <Filters updateFilter={this.updateFilter}/>
        <FlightsTable search={this.state.search}/>
      </div>
    );
  }
}

export default App;
