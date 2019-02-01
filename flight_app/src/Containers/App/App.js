import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchInput from '../SearchInput/SearchInput';
import Filters from '../Filters/Filters';
import FlightsTable from '../FlightsTable/FlightsTable';
import { updateFilter } from '../../Actions/Filters';
import { updateSearch } from '../../Actions/Search';

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

const mapStateToProps = (state) => {
  return {
    currentFilter: state.Filter,
    search: state.Search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter)),
    updateSearch: (search) => dispatch(updateSearch(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
