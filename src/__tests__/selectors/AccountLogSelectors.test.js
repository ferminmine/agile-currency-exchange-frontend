import expect from 'expect';
import { getAccountLogsSelector } from '../../modules/account/AccountSelectors';

describe('account logs selectors', () => {
  it('should return the account logs', () => {
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
        accountLogs: {
          accountLogs: [{ id: 5, value: 200 }],
          error: null,
          isFetching: false
        }
      }
    };

    expect(getAccountLogsSelector(stateToTest)).toEqual([{ id: 5, value: 200 }]);
  });
});
