import expect from 'expect';
import { getUserSelector } from '../../modules/user/UserSelectors';

describe('user selectors', () => {
  it('should return the user', () => {
    const stateToTest = {
      user: {
        user: {
          id: 3,
          username: 'ferminmine'
        },
        error: null,
        isFetching: false
      },
      account: {}
    };

    expect(getUserSelector(stateToTest)).toEqual({ id: 3, username: 'ferminmine' });
  });
});
