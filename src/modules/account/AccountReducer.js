import { ACCOUNT_ACTION_TYPES } from './AccountActions';

const defaultState = {
  account: null,
  error: null,
  isFetching: false
};

const accountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_SUCCESS:
      return {
        ...state,
        isFetching: true,
        account: action.payload
      };
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_FAILURE:
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

export default accountReducer;
