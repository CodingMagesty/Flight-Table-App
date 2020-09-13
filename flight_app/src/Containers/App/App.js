import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../Actions/Filters';
import { updateSearch } from '../../Actions/Search';
import {setData} from '../../Actions/App';

import SearchInput from '../SearchInput/SearchInput';
import FlightsTable from '../MainTable/MainTable';
import {fetchData} from '../../Utils/utils';

import './App.css';

class App extends Component {
  async componentDidMount(){
    const DB = await fetchData();
    this.props.setData(DB);
  }
  render() {
    return (
      <div className="container">
        <SearchInput updateSearch={this.props.updateSearch} search={this.props.search}/>
        <FlightsTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.Filters,
    search: state.Search,
    data: state.App,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter)),
    updateSearch: (search) => dispatch(updateSearch(search)),
    setData: (data) => dispatch(setData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
