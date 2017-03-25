import { createSelector } from 'reselect';
import _ from 'lodash';

const authData = () => (state) => state.get('home').loggedIn;
const isLoggedIn = () => createSelector(
  authData(),
  (state) => state.loggedIn,
);
const userRole = () => createSelector(
  authData(),
  (state) => state.userType
)
export {
  authData,
  isLoggedIn,
  userRole,
};
