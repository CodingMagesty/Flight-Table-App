import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../Actions/Filters';
import { updateSearch } from '../../Actions/Search';

import SearchInput from '../SearchInput/SearchInput';
import Filters from '../Filters/Filters';
import FlightsTable from '../FlightsTable/FlightsTable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Filters updateFilter={this.props.updateFilter} currentFilter={this.props.currentFilter}/>
        <SearchInput updateSearch={this.props.updateSearch} search={this.props.search}/>
        <FlightsTable search={this.props.search} currentFilter={this.props.currentFilter}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.Filters,
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
