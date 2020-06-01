/*
 *
 * UsersTable reducer
 *
 */
import produce from 'immer';
import { SET_USERS, SET_FILTERED_USERS, FILTER_USERS } from './constants';

export const initialState = {
  users: [],
  filter: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USERS:
        draft.users = action.users;
        break;
      case SET_FILTERED_USERS:
        draft.filteredUsersList = action.filteredUsersList;
        break;
      case FILTER_USERS:
        draft.filter = action.filter;
        break;
      default:
        return state;
    }
    return draft;
  });

export default reducer;
