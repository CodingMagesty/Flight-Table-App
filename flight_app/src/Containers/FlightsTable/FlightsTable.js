import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

import DB from '../../DataBase/database.js';

class FlightsTable extends Component {
  adjustDB = () => {
    return DB.filter(flight => flight.status === this.props.currentFilter);
  }

  filterDBbySubStr = () => {
    const filterdDB = this.adjustDB();

    if(isNaN(this.props.search)) {
      return filterdDB.filter(flight => flight.from.toLowerCase().includes(this.props.search.toLowerCase()));
    } else {
      return filterdDB.filter(flight => flight.number.includes(this.props.search))
    }
  }

  render() {
    const filteredDB = (!this.props.search) ? this.adjustDB() : this.filterDBbySubStr();
    if (filteredDB.length > 0) {
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

export default FlightsTable;
