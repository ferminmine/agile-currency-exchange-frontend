import expect from 'expect';
import userReducer from '../../modules/user/UserReducer';
import { USER_ACTION_TYPES } from '../../modules/user/UserActions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      user: null,
      error: null,
      isFetching: false
    });
  });

  it('should handle FETCH USER INFO SUCCESS', () => {
    expect(
      userReducer(undefined, {
        type: USER_ACTION_TYPES.FETCH_USER_INFO_SUCCESS,
        payload: { id: 3, username: 'ferminmine' }
      })
    ).toEqual({
      user: {
        id: 3,
        username: 'ferminmine'
      },
      error: null,
      isFetching: false
    });
  });

  it('should handle FETCH USER INFO FAILURE', () => {
    expect(
      userReducer(undefined, {
        type: USER_ACTION_TYPES.FETCH_USER_INFO_FAILURE,
        payload: { status: 404, data: 'Field X error' }
      })
    ).toEqual({
      user: null,
      error: {
        status: 404,
        data: 'Field X error'
      },
      isFetching: false
    });
  });

  it('should handle FETCH USER INFO PENDING', () => {
    expect(
      userReducer(undefined, {
        type: USER_ACTION_TYPES.FETCH_USER_INFO_PENDING
      })
    ).toEqual({
      user: null,
      error: null,
      isFetching: true
    });
  });

});
