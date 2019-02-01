import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

class Filters extends Component {
  clickHandler = (e, filter) => {
    e.preventDefault(); // Не перезагружать страницу
    this.props.updateFilter(filter)
  }

  render() {
    return(
      <div style={{marginLeft: '-3.25%'}}>
          <Button // Цвет кнопки меняется в зависимости от того, какой фильтр передается в props
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
      </div>
    );
  }
}

Filters.propTypes = {
  updateFilter: PropTypes.func,
  currentFilter: PropTypes.string
}

export default Filters;
