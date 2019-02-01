import React, { Component } from 'react';
import { TextField }  from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  handleChange = (e) => {
    e.preventDefault();
    this.props.updateSearch((e.currentTarget.value));
  }

  render() {
    const { search } = this.props;
    return (
      <div>
        <TextField label="Номер Рейса или Город" value={search} onChange={this.handleChange} style={{margin: '2%'}}/>
      </div>
    );
  }
}

SearchInput.propTypes = {
  updateSearch: PropTypes.func,
  search: PropTypes.string
}

export default SearchInput;
