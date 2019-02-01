import React, { Component } from 'react';
import { TextField }  from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  // Поскольку хендлер вызывается на onChange, любое изменение вызовет
  // динамическое обновление таблицы. 
  handleChange = (e) => {
    e.preventDefault(); // Не перезагружать страницу
    this.props.updateSearch((e.currentTarget.value));
  }

  render() {
    const { search } = this.props;
    return (
      <div>
        <TextField label="Номер Рейса или Город" value={search} onChange={this.handleChange} style={{marginBottom: '2%'}}/>
      </div>
    );
  }
}

SearchInput.propTypes = {
  updateSearch: PropTypes.func,
  search: PropTypes.string
}

export default SearchInput;
