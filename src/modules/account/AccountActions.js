import { fetchAccountInfoService } from '../../utils/ApiClient';

export const ACCOUNT_ACTION_TYPES = {
  FETCH_ACCOUNT_INFO_PENDING: 'FETCH_ACCOUNT_INFO_PENDING',
  FETCH_ACCOUNT_INFO_FAILURE: 'FETCH_ACCOUNT_INFO_FAILURE',
  FETCH_ACCOUNT_INFO_SUCCESS: 'FETCH_ACCOUNT_INFO_SUCCESS'
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
