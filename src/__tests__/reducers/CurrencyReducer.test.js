import expect from 'expect';
import currenciesReducer from '../../modules/currencies/CurrenciesReducer';
import { CURRENCIES_ACTION_TYPES } from '../../modules/currencies/CurrenciesActions';

describe('currencies reducer', () => {
  it('should return the initial state', () => {
    expect(currenciesReducer(undefined, {})).toEqual({
      currencies: null,
      error: null,
      isFetching: false
    });
  });

  it('should handle FETCH CURRENCIES SUCCESS', () => {
    expect(
      currenciesReducer(undefined, {
        type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_SUCCESS,
        payload: { id: 3, code: 'ARS' }
      })
    ).toEqual({
      currencies: {
        id: 3,
        code: 'ARS'
      },
      error: null,
      isFetching: false
    });
  });

  it('should handle FETCH CURRENCIES FAILURE', () => {
    expect(
      currenciesReducer(undefined, {
        type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_FAILURE,
        payload: { status: 404, data: 'Field X error' }
      })
    ).toEqual({
      currencies: null,
      error: {
        status: 404,
        data: 'Field X error'
      },
      isFetching: false
    });
  });

  it('should handle FETCH CURRENCIES PENDING', () => {
    expect(
      currenciesReducer(undefined, {
        type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_PENDING
      })
    ).toEqual({
      currencies: null,
      error: null,
      isFetching: true
    });
  });
});
