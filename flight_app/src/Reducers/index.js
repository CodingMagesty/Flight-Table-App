import { combineReducers } from 'redux';
import Filters from './Filters.js';
import Search from './Search.js';
import App from './App.js';

export default combineReducers({
  Filters,
  Search,
  App
});
