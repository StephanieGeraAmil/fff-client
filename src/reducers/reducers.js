import {combineReducers} from 'redux';
import eventsReducer  from './eventsReducer.js'
export default combineReducers({ events:eventsReducer });