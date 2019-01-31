import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

import DB from '../../DataBase/database.js';

class FlightsTable extends Component {
  adjustDB = () => {
    return DB.filter(flight => flight['status'] === this.props.currentFilter);
  }

  render() {
    const filterdDB = this.adjustDB();
    console.log();
    if (!this.props.search) {
      return(
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Номер Рейса</TableCell>
                  <TableCell>Аэропорт Отправления</TableCell>
                  <TableCell>Отправление</TableCell>
                  <TableCell>Прибытие</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                filterdDB.map(flight => (
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
      return (
        <p>{this.props.search}</p>
      );
    }
  }
}

export default FlightsTable;
