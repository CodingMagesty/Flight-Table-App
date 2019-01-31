import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Filters extends Component {
  clickHandler = (e, filter) => {
    e.preventDefault();
    this.props.updateFilter(filter)
  }

  render() {
    console.log(this.props.currentFilter)
    return(
      <div>
        <form>
          <Button
            size="large" color={this.props.currentFilter === 'departured' ? 'primary' : 'default'}
            onClick={(e) => this.clickHandler(e, 'departured')}>
              Вылетевшие
          </Button>
          <Button
            size="large" color={this.props.currentFilter === 'arrived' ? 'primary' : 'default'}
            onClick={(e) => this.clickHandler(e, 'arrived')}>
              Прибывшие
          </Button>
          <Button
            size="large" color={this.props.currentFilter === 'delayed' ? 'primary' : 'default'}
            onClick={(e) => this.clickHandler(e, 'delayed')}>
              Задержанные
          </Button>
        </form>
      </div>
    );
  }
}

export default Filters;
