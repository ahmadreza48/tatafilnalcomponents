import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userRegistration state domain
 */

const selectUserRegistrationDomain = state =>
  state.userRegistration || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserRegistration
 */

const makeSelectUserRegistration = () =>
  createSelector(
    selectUserRegistrationDomain,
    substate => substate,
  );

export default makeSelectUserRegistration;
export { selectUserRegistrationDomain };
