import expect from 'expect';
import { getAccountSelector } from '../../modules/account/AccountSelectors';

describe('account selectors', () => {
  it('should return the account', () => {
    const stateToTest = {
      user: {
        user: {},
        error: null,
        isFetching: false
      },
      account: {
        account: {
          account: {
            id: 5,
            balance: 5000
          },
          error: null,
          isFetching: false
        },
        accountLogs: {}
      }
    };

    expect(getAccountSelector(stateToTest)).toEqual({ id: 5, balance: 5000 });
  });
});
