import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='number' placeholder='Введите номер рейса' />
          <input type='submit' value='Поиск' />
        </form>
      </div>
    );
  }
}

export default SearchInput;
