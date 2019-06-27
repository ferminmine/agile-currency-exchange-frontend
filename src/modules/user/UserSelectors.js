import { createSelector } from 'reselect';

const getRootSelector = state => state.user;

export const getUserSelector = createSelector(
  getRootSelector,
  userReducerData => userReducerData.user
);