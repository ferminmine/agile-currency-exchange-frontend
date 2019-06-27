import { createSelector } from 'reselect';

const getRootSelector = state => state.account;

export const getAccountSelector = createSelector(
  getRootSelector,
  accountReducer => accountReducer.account.account
);

export const getAccountLogsSelector = createSelector(
  getRootSelector,
  accountReducer => accountReducer.accountLogs.accountLogs
);
