import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

import DB from '../../DataBase/database.js';

class FlightsTable extends Component {
  // Отфильтруем БД по текущему фильтру,
  // а затем будем проверять на наличие в оставшихся полях search.
  filterDBbySubStr = () => {
    const filterdDB = DB.filter(flight => flight.status === this.props.currentFilter);

    if(isNaN(this.props.search)) { // Проверка на то, ищем ли мы по номеру рейса (int) или по городу (string)
      // Обязательно переводим поисковой запрос и город в нижний регистр, чтобы
      // случайно не отфильтровать лишние города
      return filterdDB.filter(flight => flight.from.toLowerCase().includes(this.props.search.toLowerCase()));
    } else {
      return filterdDB.filter(flight => flight.number.includes(this.props.search))
    }
  }

  render() {
    const filteredDB = this.filterDBbySubStr();
    // Проверяем, остались ли после сортировки какие-то элементы. Если нет,
    // сообщаем об этом пользователю.
    if (filteredDB.length) {
      return(
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Номер Рейса</TableCell>
                  <TableCell>Город Отправления</TableCell>
                  <TableCell>Отправление</TableCell>
                  <TableCell>Прибытие</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                filteredDB.map(flight => (
                  <TableRow key={flight.id}>
                    <TableCell>{flight.number}</TableCell>
                    <TableCell>{flight.from}</TableCell>
                    <TableCell>{flight.arrived}</TableCell>
                    <TableCell>{flight.departured}</TableCell>
                  </TableRow>
                ))
              }
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    } else {
      return <p>По вашему запросу ничего не найдено</p>
    }
  }
}

FlightsTable.propTypes = {
  search: PropTypes.string,
  currentFilter: PropTypes.string
}

export default FlightsTable;
