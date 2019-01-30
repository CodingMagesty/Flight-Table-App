import React, { Component } from 'react';

class SearchInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateSearch((e.target.flightID.value));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='number' name='flightID' placeholder='Введите номер рейса' />
          <input type='submit' value='Поиск' />
        </form>
      </div>
    );
  }
}

export default SearchInput;
