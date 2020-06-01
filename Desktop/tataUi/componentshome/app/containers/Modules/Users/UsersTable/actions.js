/*
 *
 * UsersTable actions
 *
 */

import { SET_USERS, LOAD_USERS_ERROR } from './constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function loadUsersError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}
