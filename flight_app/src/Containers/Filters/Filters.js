import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Filters extends Component {
  clickHandler = (e, filter) => {
    e.preventDefault();
    this.props.updateFilter(filter)
  }

  render() {
    return(
      <div>
        <form>
          <Button size="large" color='primary' onClick={(e) => this.clickHandler(e, 'departured')}>Вылетевшие</Button>
          <Button size="large" onClick={(e) => this.clickHandler(e, 'arrived')}>Прибывшие</Button>
          <Button size="large" onClick={(e) => this.clickHandler(e, 'delayed')}>Задержанные</Button>
        </form>
      </div>
    );
  }
}

export default Filters;
