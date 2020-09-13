import React, { Component } from 'react';
import { Button, TextField }  from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state ={
      currentSearch: '',
    }
  }
  // Поскольку хендлер вызывается на onChange, любое изменение вызовет
  // динамическое обновление таблицы. 
  handleChange = (e) => {
    e.preventDefault(); // Не перезагружать страницу
    this.props.updateSearch(this.state.currentSearch);
  }

  onSearchChange = (e) => {
    e.preventDefault(); // Не перезагружать страницу
    this.setState({ currentSearch: e.currentTarget.value })
  }

  render() {
    const { currentSearch } = this.state;
    return (
      <div>
        <TextField label="Хули ищём?  " value={currentSearch}  onChange={this.onSearchChange} style={{marginBottom: '2%'}}/>
        <Button  onClick={this.handleChange} >ISHI</Button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  updateSearch: PropTypes.func,
  search: PropTypes.string
}

export default SearchInput;
