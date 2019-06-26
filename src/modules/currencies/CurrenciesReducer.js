import { CURRENCIES_ACTION_TYPES } from './CurrenciesActions';

const defaultState = {
  currencies: null,
  error: null,
  isFetching: false
};

const currenciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        isFetching: true,
        currencies: action.payload
      };
    case CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_FAILURE:
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

export default currenciesReducer;
