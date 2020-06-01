import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the usersList state domain
 */

const usersListSelector = state => state.usersTable || initialState;

const filterUser = ({ users, filter }) => {
  if (users && users.length > 0 && filter !== 'all')
    return users.filter(
      user => parseInt(user.userId, 10) === parseInt(filter, 10),
    );
  return users;
};
const makeSelectorUsersList = createSelector(
  usersListSelector,
  userState => userState.users,
);
const makeFilterSelectorUsersList = createSelector(
  usersListSelector,
  filterUser,
);

export { makeSelectorUsersList, makeFilterSelectorUsersList };
