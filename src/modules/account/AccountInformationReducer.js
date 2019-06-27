import { combineReducers } from 'redux';
import accountReducer from './AccountReducer';
import accountLogsReducer from './AccountLogsReducer';

export default combineReducers({
  account: accountReducer,
  accountLogs: accountLogsReducer
});
