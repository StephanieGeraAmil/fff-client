import {combineReducers} from 'redux';
import eventsReducer  from './eventsReducer.js'
import usersReducer  from './usersReducer.js'
import globalStateReducer  from './globalStateReducer.js'
export default combineReducers({ events:eventsReducer , current: globalStateReducer, users:usersReducer });