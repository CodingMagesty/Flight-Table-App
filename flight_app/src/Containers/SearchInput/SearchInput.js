import React, { Component } from 'react';
import { TextField }  from '@material-ui/core';

class SearchInput extends Component {
  handleChange = (e) => {
    e.preventDefault();
    this.props.updateSearch((e.currentTarget.value));
  }

  render() {
    const { search } = this.props;
    return (
      <div>
        <TextField label="Номер Рейса" value={search} onChange={this.handleChange} style={{margin: '2%'}}/>
      </div>
    );
  }
}

export default SearchInput;
