import { ACCOUNT_ACTION_TYPES } from './AccountActions';

const defaultState = {
  accountLogs: null,
  error: null,
  isFetching: false
};

const accountLogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accountLogs: action.payload
      };
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default accountLogsReducer;
