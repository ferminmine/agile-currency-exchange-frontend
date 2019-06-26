import { fetchAvailableCurrenciesService } from '../../utils/ApiClient';

export const CURRENCIES_ACTION_TYPES = {
  FETCH_CURRENCIES_PENDING: 'FETCH_CURRENCIES_PENDING',
  FETCH_CURRENCIES_FAILURE: 'FETCH_CURRENCIES_FAILURE',
  FETCH_CURRENCIES_SUCCESS: 'FETCH_CURRENCIES_SUCCESS'
};

export const fetchCurrenciesPending = () => ({
  type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_PENDING
});

const fetchCurrenciesFailure = error => ({
  type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_FAILURE,
  payload: error
});

const fetchCurrenciesSuccess = data => ({
  type: CURRENCIES_ACTION_TYPES.FETCH_CURRENCIES_SUCCESS,
  payload: data
});

export const fetchCurrencies = () => async dispatch => {
  dispatch(fetchCurrenciesPending());
  try {
    const currenciesInfo = await fetchAvailableCurrenciesService();
    dispatch(fetchCurrenciesSuccess(currenciesInfo));
  } catch (error) {
    dispatch(fetchCurrenciesFailure(error));
  }
};
