import { attemptLogin, fetchUserInfoService } from '../../utils/ApiClient';

export const USER_ACTION_TYPES = {
  FETCH_USER_INFO_PENDING: 'FETCH_USER_INFO_PENDING',
  FETCH_USER_INFO_FAILURE: 'FETCH_USER_INFO_FAILURE',
  FETCH_USER_INFO_SUCCESS: 'FETCH_USER_INFO_SUCCESS'
};

export const setFetchUserInfoPending = () => ({
  type: USER_ACTION_TYPES.FETCH_USER_INFO_PENDING
});

const setFetchUserInfoFailure = error => ({
  type: USER_ACTION_TYPES.FETCH_USER_INFO_FAILURE,
  payload: error
});

const setFetchUserInfoSuccess = data => ({
  type: USER_ACTION_TYPES.FETCH_USER_INFO_SUCCESS,
  payload: data
});

export const fetchUserInfo = userId => async dispatch => {
  dispatch(setFetchUserInfoPending());
  try {
    const userInfo = await fetchUserInfoService(userId);
    dispatch(setFetchUserInfoSuccess(userInfo));
  } catch (error) {
    dispatch(setFetchUserInfoFailure(error));
  }
};
