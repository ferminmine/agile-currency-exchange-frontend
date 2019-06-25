import { USER_ACTION_TYPES } from './UserActions';

const defaultState = {
  user: null,
  error: null,
  isFetching: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: true,
        user: action.payload
      };
    case USER_ACTION_TYPES.FETCH_USER_INFO_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case USER_ACTION_TYPES.FETCH_USER_INFO_FAILURE:
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

export default userReducer;
