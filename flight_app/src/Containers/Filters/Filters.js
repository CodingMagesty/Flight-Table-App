import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return(
      <div>
        <form>
          <button>Все</button>
          <button>Вылетевшие</button>
          <button>Прилетающие</button>
          <button>Задержанные</button>
        </form>
      </div>
    );
  }
}

export default Filters;
