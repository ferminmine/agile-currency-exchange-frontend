import { fetchAccountInfoService, fetchAccountLogsInfoService } from '../../utils/ApiClient';

export const ACCOUNT_ACTION_TYPES = {
  FETCH_ACCOUNT_INFO_PENDING: 'FETCH_ACCOUNT_INFO_PENDING',
  FETCH_ACCOUNT_INFO_FAILURE: 'FETCH_ACCOUNT_INFO_FAILURE',
  FETCH_ACCOUNT_INFO_SUCCESS: 'FETCH_ACCOUNT_INFO_SUCCESS',
  FETCH_ACCOUNT_LOGS_INFO_PENDING: 'FETCH_ACCOUNT_LOGS_INFO_PENDING',
  FETCH_ACCOUNT_LOGS_INFO_FAILURE: 'FETCH_ACCOUNT_LOGS_INFO_FAILURE',
  FETCH_ACCOUNT_LOGS_INFO_SUCCESS: 'FETCH_ACCOUNT_LOGS_INFO_SUCCESS',
};

export const setFetchAccountInfoPending = () => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_PENDING
});

const setFetchAccountInfoFailure = error => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_FAILURE,
  payload: error
});

const setFetchAccountInfoSuccess = data => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_INFO_SUCCESS,
  payload: data
});

export const fetchAccountInfo = userId => async dispatch => {
  dispatch(setFetchAccountInfoPending());
  try {
    const accountInfo = await fetchAccountInfoService(userId);
    dispatch(setFetchAccountInfoSuccess(accountInfo));
  } catch (error) {
    dispatch(setFetchAccountInfoFailure(error));
  }
};

export const setFetchAccountLogsInfoPending = () => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_PENDING
});

const setFetchAccountLogsInfoFailure = error => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_FAILURE,
  payload: error
});

const setFetchAccountLogsInfoSuccess = data => ({
  type: ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_LOGS_INFO_SUCCESS,
  payload: data
});

export const fetchAccountLogsInfo = userId => async dispatch => {
  dispatch(setFetchAccountLogsInfoPending());
  try {
    const accountInfo = await fetchAccountLogsInfoService(userId);
    dispatch(setFetchAccountLogsInfoSuccess(accountInfo));
  } catch (error) {
    dispatch(setFetchAccountLogsInfoFailure(error));
  }
};
