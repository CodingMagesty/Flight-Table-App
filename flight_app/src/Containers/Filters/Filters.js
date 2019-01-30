import React, { Component } from 'react';

class Filters extends Component {
  clickHandler = (e, filter) => {
    e.preventDefault();
    this.props.updateFilter(filter)
  }

  render() {
    return(
      <div>
        <form>
          <button onClick={(e) => this.clickHandler(e, 'departured')}>Вылетевшие</button>
          <button onClick={(e) => this.clickHandler(e, 'arrived')}>Прибывшие</button>
          <button onClick={(e) => this.clickHandler(e, 'delayed')}>Задержанные</button>
        </form>
      </div>
    );
  }
}

export default Filters;
